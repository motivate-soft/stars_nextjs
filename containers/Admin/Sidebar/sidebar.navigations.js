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
  SidebarTextIcon,
  SidebarPostIcon,
  SidebarBusinessIcon,
  EditIcon,
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
    leftIcon: <SidebarPostIcon size={19} />,
  },
  {
    key: "blog",
    label: "sidebar.blogs",
    leftIcon: <SidebarNotesIcon size={19} />,
    children: [
      {
        key: "tag",
        label: "sidebar.tag",
      },
      {
        key: "blog",
        label: "sidebar.blog",
      },
    ],
  },
  {
    key: "meta",
    path: "/meta",
    label: "sidebar.meta",
    leftIcon: <EditIcon size={19} />,
  },
  {
    key: "company",
    path: "/company",
    label: "sidebar.company",
    leftIcon: <SidebarBusinessIcon size={19} />,
  },
  // {
  //   key: "blank_page",
  //   label: "sidebar.blankPage",
  //   leftIcon: <SidebarBlankIcon size={19} />,
  // },
];
