import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clone from "clone";
import { Layout } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import Menu from "@iso/components/uielements/menu";
import IntlMessages from "@iso/components/utility/intlMessages";

import appActions from "@iso/redux/app/actions";
import SidebarWrapper from "./Sidebar.styles";
import SidebarMenu from "./SidebarMenu";
import SIDEBAR_MENU_OPTIONS from "./sidebar.navigations";
import { SidebarMenuLevelIcon } from "@iso/config/icon.config";
import Logo from "@containers/Guest/Logo/Logo";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed,
} = appActions;
export default function Sidebar(props) {
  const {
    view,
    openKeys,
    collapsed,
    openDrawer,
    height,
    current,
  } = useSelector((state) => state.App);

  const { sidebarTheme } = useSelector((state) => state.ThemeSwitcher);
  const dispatch = useDispatch();
  const [scrollheight, setScrollheight] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(null);

  useEffect(() => {
    setScrollheight(height);
  }, [height]);

  useEffect(() => {
    setIsCollapsed(collapsed && !openDrawer);
  }, [collapsed]);

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));
    if (view === "MobileView") {
      setTimeout(() => {
        dispatch(toggleCollapsed());
        // dispatch(toggleOpenDrawer());
      }, 100);
    }
  }

  function onOpenChange(newOpenKeys) {
    const latestOpenKey = newOpenKeys.find(
      (key) => !(openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = openKeys.find(
      (key) => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }
    dispatch(changeOpenKeys(nextOpenKeys));
  }

  const getAncestorKeys = (key) => {
    const map = {
      sub3: ["sub2"],
    };
    return map[key] || [];
  };

  const mode = isCollapsed === true ? "vertical" : "inline";
  const styling = {
    backgroundColor: sidebarTheme.backgroundColor,
  };
  const submenuStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    color: sidebarTheme.textColor,
  };
  const submenuColor = {
    color: sidebarTheme.textColor,
  };
  const onMouseEnter = () => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };
  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };
  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={isCollapsed}
        width={240}
        className="isomorphicSidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={styling}
      >
        <Logo collapsed={isCollapsed} className="admin-logo" />
        <Scrollbars style={{ height: scrollheight - 70 }}>
          <Menu
            onClick={handleClick}
            theme="dark"
            mode={mode}
            openKeys={isCollapsed ? [] : openKeys}
            selectedKeys={current}
            onOpenChange={onOpenChange}
            className="isoDashboardMenu"
            // inlineCollapsed={isCollapsed}
          >
            {SIDEBAR_MENU_OPTIONS.map((option) => (
              <SidebarMenu
                key={option.key}
                item={option}
                submenuColor={submenuColor}
                submenuStyle={submenuStyle}
              />
            ))}
          </Menu>
        </Scrollbars>
      </Sider>
    </SidebarWrapper>
  );
}
