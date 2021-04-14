import React from 'react';
import {
    SocialInstagramIcon,
    SocialTwitterIcon,
    SocialFacebookIcon,
    SocialFacebookIconF
} from "@iso/config/icon.config";
import PropTypes from 'prop-types'


export default function SocialLinks(props) {
    let {size, color} = props

    return (
        <div className="social-icons-group">
            <a target="_blank" href={'//www.instagram.com/starsofboston'}>
                <SocialInstagramIcon size={size} />
            </a>
            <a target="_blank" href={'//twitter.com/starsofboston'}>
                <SocialTwitterIcon size={size}/>
            </a>
            <a target="_blank" href={'//www.facebook.com/starsboston617'}>
                <SocialFacebookIconF size={size}/>
            </a>
        </div>
    );
}
SocialLinks.prototype={
    size: PropTypes.number,
    color: PropTypes.string,
}

SocialLinks.defaultProps={
    size: 20
}

