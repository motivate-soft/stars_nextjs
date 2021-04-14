import React from 'react';
import {Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import {notification} from "@iso/components";

export default function ({user, deleteUser}) {
    let name = '';
    name = user.username
    // if (user.firstName) {
    //   name = `${user.firstName} `;
    // }
    // if (user.lastName) {
    //   name = `${name}${user.lastName}`;
    // }
    if (!name) {
        name = 'No Name';
    }
    return (
        <Popconfirm
            title={`Sure to delete ${name}?`}
            okText="DELETE"
            cancelText="No"
            onConfirm={() => {
                notification('error', `${name} Deleted`, '');
                deleteUser(user.id);
            }}
        >
            <Button
                icon={<CloseOutlined/>}
                type="default"
                className="isoDeleteBtn"
            />
        </Popconfirm>
    );
}
