import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    RedditIcon,
    LinkedinIcon,
    TelegramIcon,
    LinkedinShareButton
} from 'react-share';
import {Menu} from "antd";

export default function SocialShareMenu(props) {
    const {title, media, shareURL} = props
    return (
        <div>
            <Menu>
                <Menu.Item>
                    <EmailShareButton subject={`Check out this page`} body={`${title}: ${shareURL}`}>
                        <EmailIcon round={true} size="2rem"/>
                    </EmailShareButton>
                </Menu.Item>
                <Menu.Item>
                    <FacebookShareButton url={shareURL} quote={title}>
                        <FacebookIcon round={true} size="2rem"/>
                    </FacebookShareButton>
                </Menu.Item>
                <Menu.Item>
                    <TwitterShareButton url={shareURL} title={title}>
                        <TwitterIcon round={true} size="2rem"/>
                    </TwitterShareButton>
                </Menu.Item>
                <Menu.Item>
                    <LinkedinShareButton url={shareURL} title={title}>
                        <LinkedinIcon round={true} size="2rem"/>
                    </LinkedinShareButton>
                </Menu.Item>
                <Menu.Item>
                    <RedditShareButton url={shareURL} title={title}>
                        <RedditIcon round={true} size="2rem"/>
                    </RedditShareButton>
                </Menu.Item>
                <Menu.Item>
                    <TelegramShareButton url={shareURL} title={title}>
                        <TelegramIcon round={true} size="2rem"/>
                    </TelegramShareButton>
                </Menu.Item>
                <Menu.Item>
                    <WhatsappShareButton url={shareURL} title={title}>
                        <WhatsappIcon round={true} size="2rem"/>
                    </WhatsappShareButton>
                </Menu.Item>
            </Menu>
        </div>
    );
}
