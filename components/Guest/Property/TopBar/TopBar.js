import React from "react";
import Sticky from "react-stickynode";
// import {
//   FaceBookShare,
//   TwitterShare,
//   LinkedInShare,
//   PinterestShare,
// } from 'components/SocialShare/SocialShare';
import { Button, Dropdown } from "antd";
import { TobBarWrapper, ButtonGroup } from "../PropertyDetail.style";
import SocialShareMenu from "@components/Guest/Property/TopBar/SocialShareMenu";
import TopScrollBar from "@components/Common/ScrollBar/ScrollBar";
import { FaExternalLinkAlt } from "react-icons/fa";

const topBarMenu = [
  {
    name: "Overview",
    target: "overview",
  },
  {
    name: "Amenities",
    target: "amenities",
  },
  {
    name: "Location",
    target: "location",
  },
  {
    name: "Neighborhood",
    target: "neighborhood",
  },
  {
    name: "Transit",
    target: "transit",
  },
];

const SideButtons = (props) => {
  return (
    <ButtonGroup>
      <Dropdown
        placement="bottomRight"
        overlay={() => <SocialShareMenu {...props} />}
        overlayClassName="social_share_menu"
      >
        <Button type="secondary" size="large" className="share-btn">
          <FaExternalLinkAlt />
          Share
        </Button>
      </Dropdown>
    </ButtonGroup>
  );
};

const TopBar = (props) => {
  const { title, shareURL, author, media } = props;
  return (
    <TobBarWrapper>
      <Sticky innerZ={2000} top={108} activeClass="isSticky">
        <TopScrollBar
          menu={topBarMenu}
          other={
            <SideButtons media={media} title={title} shareURL={shareURL} />
          }
        />
      </Sticky>
    </TobBarWrapper>
  );
};

export default TopBar;
