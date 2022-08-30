import React from 'react';
import Zendesk from 'react-zendesk';
import {ZENDESK_KEY} from "../../../env-config";



const setting = {
    color: {
        theme: '#0071AA'
    },
    offset: { horizontal: '0', vertical: '80px' },
    launcher: {
        label: {
            'en-US': 'Chat with us!'
        },
        chatLabel: {
            '*': 'Chat now'
        }
    },
    contactOptions: {
        enabled: true
    },
    contactForm: {
        suppress: false
    },
    chat: {
        suppress: false
    },
    helpCenter: {
        suppress: true
    }
};

const ChatWidget = () => {
    return (
        <Zendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => {}} />
    );
};

export default ChatWidget;
