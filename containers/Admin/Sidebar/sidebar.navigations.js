import React from "react";
import {
  SidebarPeopleIcon,
  SidebarHomeIcon,
  SidebarEmailIcon,
  SidebarChatIcon,
  SidebarEcommerceIcon,
  SidebarMapsIcon,
  SidebarProfileIcon,
  SidebarScrumBoardIcon,
  SidebarInvoiceIcon,
  SidebarYouTubeIcon,
  SidebarCalendarIcon,
  SidebarNotesIcon,
  SidebarToDosIcon,
  SidebarFireStoreIcon,
  SidebarContactsIcon,
  SidebarShuffleIcon,
  SidebarChartsIcon,
  SidebarFormsIcon,
  SidebarUIIcon,
  SidebarAdvancedIcon,
  SidebarFeedbackIcon,
  SidebarTablesIcon,
  SidebarPagesIcon,
  SidebarGithubIcon,
  SidebarBlankIcon,
  SidebarTextIcon
} from "@iso/config/icon.config";

export default [
  {
    key: "/",
    path: "/",
    label: "sidebar.dashboard",
    leftIcon: <SidebarHomeIcon size={19} />,
  },
  {
    key: "user",
    path: "/user",
    label: "sidebar.users",
    leftIcon: <SidebarPeopleIcon size={19} />,
  },
  {
    key: "accommodation",
    label: "sidebar.accommodation",
    leftIcon: <SidebarHomeIcon size={19} />,
    children: [
      {
        key: "category",
        label: "sidebar.category",
      },
      {
        key: "amenity",
        label: "sidebar.amenity",
      },
      {
        key: "property",
        label: "sidebar.property",
      },
    ],
  },
  {
    key: "post",
    path: "/post",
    label: "sidebar.posts",
    leftIcon: <SidebarBlankIcon size={19} />,
  },
  {
    key: "blog",
    path: "/blog",
    label: "sidebar.blogs",
    leftIcon: <SidebarBlankIcon size={19} />,
  },
  {
    key: "blank_page",
    label: "sidebar.blankPage",
    leftIcon: <SidebarBlankIcon size={19} />,
  },
];
