import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "@iso/components/utility/loader";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import {Button, Col, Form, Input, Row} from "antd";
import Editor from "@components/Admin/Property/Editor/Editor";
import Link from "next/link";
import blogActions from "@redux/blogs/actions";
import {SingeBlogWrapper} from "@components/Admin/Blog/Blog.styles";
import Upload from "@iso/containers/Forms/Upload/Upload";
import {BACKEND_URL} from "../../../env-config";
import {getCookie} from "@redux/authentication/auth.utils";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};
const {useForm} = Form

const HtmlEditor = ({value = {}, onChange}) => {
    const triggerChange = (changedValue) => {
        onChange(changedValue);
    };

    return (
        <Editor
            style={{width: "90%", height: "70%"}}
            toolbarClassName="home-toolbar"
            wrapperClassName="home-wrapper"
            editorClassName="home-editor"
            html={value}
            onEditorStateChange={(html) => triggerChange(html)}
        />
    );
};

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default function AddBlog() {
    const dispatch = useDispatch();

    const [form] = useForm();

    function onReset() {
        form.resetFields()
    }

    function onValuesChange(changedValues, allValues) {
        console.log("AddBlog_onValuesChange", changedValues, allValues);
    }

    const onFinish = (values) => {
        dispatch(blogActions.addBlog(values));
    };

    return (
        <Box>
            <Container>
                <Row>
                    <Col lg={{span: 20, offset: 2}} sm={24}>
                        <SingeBlogWrapper>
                            <div className="card-title-wrapper">
                                <h3>Add Blog</h3>
                                <Link href="/admin/blog">
                                    <Button type="primary">Back to List</Button>
                                </Link>
                            </div>
                            <Form
                                name="mainInfo"
                                {...formItemLayout}
                                onFinish={onFinish}
                                onValuesChange={onValuesChange}
                                initialValues={{
                                    title: '',
                                    body: '',
                                    image: {}
                                }}
                            >
                                <Form.Item
                                    label="Title"
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: "This field is required",
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Content"
                                    name="body"
                                    rules={[
                                        {
                                            required: true,
                                            message: "This field is required",
                                        },
                                    ]}
                                >
                                    <HtmlEditor/>
                                </Form.Item>
                                <Form.Item label="image">
                                    <Form.Item name="image" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                        <Upload.Dragger name="files" action="/upload.do">
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Form.Item>
                                {/*<Form.Item*/}
                                {/*    label="Upload"*/}
                                {/*>*/}
                                {/*    <Upload.Dragger name="image" valuePropName="fileList" action={`${BACKEND_URL}/api/media/create`}*/}
                                {/*                    header={{Authorization: "Bearer " + "token"}}*/}
                                {/*                    listType="picture">*/}
                                {/*        <InboxOutlined />*/}
                                {/*    </Upload.Dragger>*/}
                                {/*</Form.Item>*/}
                                <div>
                                    <Button type="primary" htmlType="submit">
                                        Save
                                    </Button>
                                    <Button type="default" onClick={onReset}>
                                        Reset
                                    </Button>
                                </div>
                            </Form>
                        </SingeBlogWrapper>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
}
