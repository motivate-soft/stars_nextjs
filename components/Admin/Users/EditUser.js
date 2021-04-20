import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {UserCardWrapper} from './UserCard.style';
import {notification} from "@iso/components";
import Input, {Textarea} from "@iso/components/uielements/input";
import Upload from "@iso/components/uielements/upload";
import {Form, Button} from "antd";
import './upload.css';
import Select, {SelectOption} from "@iso/components/uielements/select";
import {useDispatch, useSelector} from "react-redux";
import userActions from "@redux/users/actions";
import Container from "@iso/ui/UI/Container/Container";
import Loader from '@iso/components/utility/loader';
import Box from "@iso/ui/Box/Box";
import {SingeUserWrapper} from "@components/Admin/Users/UserList.style";

const Option = SelectOption;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};


function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        notification('error', 'You can only upload JPG file!', '');
        return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        notification('error', 'Image must smaller than 2MB!', '');
        return false;
    }
    notification('success', 'Image uploaded successfully!', '');
    return true;
}

export default function EditUser(props) {
    const {userId} = props
    const {selectedItem, loading} = useSelector(state => state.Users);
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(userActions.getUser(userId))
    }, []);

    const onFinish = (values) => {
        dispatch(userActions.updateUser({
            id: userId,
            ...values,
        }))
    };

    if (loading) return <Loader/>

    return (
        <Box>
            <Container>
                <SingeUserWrapper>
                    <UserCardWrapper className="isoUserCard">
                        <div className="card-title-wrapper">
                            <h3>Edit User</h3>
                            <Link href="/admin/user">
                                <Button type="primary">Back to List</Button>
                            </Link>
                        </div>
                        <div className="isoUserCardHead">
                            {/*<div className="isoPersonImage">*/}
                            {/*    <Upload*/}
                            {/*        className="avatar-uploader"*/}
                            {/*        name="avatar"*/}
                            {/*        showUploadList={false}*/}
                            {/*        beforeUpload={beforeUpload}*/}
                            {/*        action=""*/}
                            {/*    >*/}
                            {/*        {user.avatar ? (*/}
                            {/*            <img src={user.avatar} alt="" className="avatar"/>*/}
                            {/*        ) : (*/}
                            {/*            ''*/}
                            {/*        )}*/}
                            {/*        <PlusOutlined className="avatar-uploader-trigger"/>*/}
                            {/*    </Upload>*/}
                            {/*</div>*/}
                            {/*<h1 className="isoPersonName">{user.username}</h1>*/}
                        </div>
                        <div className="isoUserInfoWrapper">
                            {
                                selectedItem
                                && selectedItem.id === parseInt(userId)
                                && <Form
                                    {...formItemLayout}
                                    form={form}
                                    name="userEdit"
                                    className="isoUserInfoWrapper"
                                    onFinish={onFinish}
                                    initialValues={{
                                        username: selectedItem.username,
                                        first_name: selectedItem.first_name,
                                        last_name: selectedItem.last_name,
                                        status: selectedItem.status,
                                        role: selectedItem.role
                                    }}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        className="isoUserCardInfos"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input username',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='Username'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="First Name"
                                        name="first_name"
                                        className="isoUserCardInfos"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input first name',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='First Name'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Last Name"
                                        name="last_name"
                                        className="isoUserCardInfos"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Last name',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='First Name'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Role"
                                        name="role"
                                        className="isoUserCardInfos"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select role',
                                            },
                                        ]}
                                    >
                                        <Select placeholder='Please select role'>
                                            <Option value="S">Super Admin</Option>
                                            <Option value="A">Admin</Option>
                                            <Option value="E">Editor</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="Status"
                                        name="status"
                                        className="isoUserCardInfos"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select status',
                                            },
                                        ]}
                                    >
                                        <Select placeholder='Please select status'>
                                            <Option value="P">Pending</Option>
                                            <Option value="A">APPROVED</Option>
                                            <Option value="B">BLOCKED</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item wrapperCol={{span: 12, offset: 6}}>
                                        <Button type="primary" htmlType="submit">
                                            Save
                                        </Button>
                                    </Form.Item>
                                </Form>
                            }
                        </div>
                    </UserCardWrapper>
                </SingeUserWrapper>
            </Container>
        </Box>
    );
}
