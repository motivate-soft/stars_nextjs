import React from 'react';
import {
    SocialInstagramIcon,
    SocialTwitterIcon,
    SocialFacebookIcon,
} from "@iso/config/icon.config";


export default function ContactSocialLinks(props) {
    let {size, color} = props

    return (
        <div className="social-icons-group">
            <a target="_blank" href={'//www.instagram.com/starsofboston'}>
                <SocialInstagramIcon size={size}/>
            </a>
            <a target="_blank" href={'//twitter.com/starsofboston'}>
                <SocialTwitterIcon size={size}/>
            </a>
            <a target="_blank" href={'//www.facebook.com/starsboston617'}>
                <SocialFacebookIcon size={size}/>
            </a>
        </div>
    );
}

