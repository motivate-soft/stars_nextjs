import React, { useEffect } from "react";
import Link from "next/link";
import TopNavigation from "./TopNav";
import Footer from "./Footer";
import GuestAppHolder from "./GuestLayout.styles";
import WithGATracker from "@components/HOC/WithGATracker";
import WithPixel from "@components/HOC/WithPixel";
import ChatWidget from "@components/Guest/ChatWidget/ChatWidget";
import CookieConsent from "react-cookie-consent";
import { useSelector, useDispatch } from "react-redux";
import { checkExpirity, getCookie } from "@redux/authentication/auth.utils";
import authActions from "@redux/authentication/actions";

function GuestLayout({ children }) {
  const { idToken } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (idToken === null) {
      populateAuth();
    }
  }, []);

  function populateAuth() {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    if (accessToken) {
      const res = checkExpirity(accessToken);
      if (res.expiredAt) {
        dispatch(
          authActions.syncLogin({
            accessToken,
            refreshToken,
            profile: res.profile,
          })
        );
      }
      return;
    }
  }
  return (
    <GuestAppHolder>
      <TopNavigation />
      {children}
      <Footer />
      <ChatWidget />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="acceptPolicy"
        style={{ background: "#2B373B" }}
        buttonClasses={"accept-button"}
        // enableDeclineButton
        // declineButtonText="decline"
        // declineButtonClasses={'decline-button'}
        // onAccept={handleAccept}
        expires={60}
      >
        <p>
          This website uses cookies to enhance the user experience. <br />
          Please read our full{" "}
          <Link href="/cookie-policy"> Cookie Policy here</Link>
        </p>
      </CookieConsent>
    </GuestAppHolder>
  );
}

export default WithGATracker(WithPixel(GuestLayout));
