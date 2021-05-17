import React, { useEffect } from "react";
import { Layout } from "antd";

import Sidebar from "../Sidebar/Sidebar";
import ThemeSwitcher from "@iso/containers/ThemeSwitcher/ThemeSwitcher";
import Topbar from "../Topbar/Topbar";
import siteConfig from "@iso/config/site.config";
import AppHolder from "./DashboardLayout.styles";
import { useSelector, useDispatch } from "react-redux";
import { checkExpirity, getCookie } from "@redux/authentication/auth.utils";
import authActions from "@redux/authentication/actions";

const { Content, Footer } = Layout;

export default function DashboardLayout({ children }) {
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
      console.log("DashboardLayout:populateAuthe", res);
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
    <AppHolder>
      <Layout style={{ height: "100vh" }}>
        <Topbar />

        <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
          <Sidebar />
          <Layout
            className="isoContentMainLayout"
            style={{
              height: "100vh",
            }}
          >
            <Content
              className="isomorphicContent"
              style={{
                padding: "70px 0 0",
                flexShrink: "0",
                background: "#f1f3f6",
                width: "100%",
              }}
            >
              {children}
            </Content>
            <Footer
              style={{
                background: "#ffffff",
                textAlign: "center",
                borderTop: "1px solid #ededed",
              }}
            >
              {siteConfig.footerText}
            </Footer>
          </Layout>
        </Layout>
        <ThemeSwitcher />
      </Layout>
    </AppHolder>
  );
}
