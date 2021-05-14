import { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import jwtDecode from "jwt-decode";

export const checkExpirity = (token) => {
  const {
    email,
    username,
    first_name,
    last_name,
    role,
    user_id,
    exp,
  } = jwtDecode(token);

  const profile = {
    email,
    username,
    first_name,
    last_name,
    role,
    user_id,
  };
  if (exp * 1000 > new Date().getTime()) {
    return {
      expiredAt: new Date(exp * 1000),
      profile,
    };
  } else {
    return { error: "Token expired" };
  }
};

export const setCookie = (key, value, expires) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: expires ? expires : 1,
      path: "/",
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key);
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};

export const auth = (ctx) => {
  const { accessToken } = nextCookie(ctx);
  console.log("auth.utils:ctx", ctx);
  console.log("auth.utils:ctx:accessToken", accessToken);

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no accessToken it means the user is not logged in.
   */
  if (ctx.req && !accessToken) {
    console.log("auth.utils:redirect:server");

    ctx.res.writeHead(302, { Location: "/admin/signin" });
    ctx.res.end();
  }

  // We already checked for server. This should only happen on client.
  if (!accessToken) {
    console.log("auth.utils:redirect:client");

    Router.push("/admin/signin");
  }

  return accessToken;
};

export const logout = () => {
  cookie.remove("accessToken");
  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now());
  Router.push("/admin/signin");
};

export const withAuthSync = (WrappedComponent) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/admin/signin");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, [null]);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx) => {
    const accessToken = auth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, accessToken };
  };

  return Wrapper;
};
