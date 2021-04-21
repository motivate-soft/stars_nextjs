import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "@iso/components/utility/loader";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import {Button, Col, Form, Input, Row, Upload, message} from "antd";
import Editor from "@components/Admin/Property/Editor/Editor";
import Link from "next/link";
import blogActions from "@redux/blogs/actions";
import {SingeBlogWrapper} from "@components/Admin/Blog/Blog.styles";
import {BACKEND_URL} from "../../../env-config";
import {getCookie} from "@redux/authentication/auth.utils";
import {UploadOutlined, InboxOutlined} from '@ant-design/icons';
import {isServer} from "@iso/lib/helpers/isServer";
import Auth from "@redux/authentication/reducer";


const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};
const {useForm} = Form
const {Dragger} = Upload;

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


export default function AddBlog() {
    const {profile} = useSelector(state => state.Auth)
    const dispatch = useDispatch();
    let uploaderProps

    if (!isServer) {
        uploaderProps = {
            name: 'file',
            multiple: true,
            action: `${BACKEND_URL}/api/media/create`,
            listType: "picture",
            maxCount: 1,
            headers: {Authorization: "Bearer " + getCookie("token")},
            beforeUpload: (file) => {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    message.error('You can only upload JPG/PNG file!');
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    message.error('Image must smaller than 2MB!');
                }
                return isJpgOrPng && isLt2M;
            },
            onChange(info) {
                const {status, response} = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    console.log("uploader_response", response)
                    form.setFieldsValue({image: response.id})
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
    }

    const [form] = useForm();

    function onReset() {
        form.resetFields()
    }

    function onValuesChange(changedValues, allValues) {
        console.log("AddBlog_onValuesChange", changedValues, allValues);
    }

    const onFinish = (values) => {
        console.log("values", values, profile)
        dispatch(blogActions.addBlog({
            ...values,
            author: profile.id
        }));
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
                                {...formItemLayout}
                                form={form}
                                onFinish={onFinish}
                                onValuesChange={onValuesChange}
                                initialValues={{
                                    title: '',
                                    body: '',
                                    image: null
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

                                <Form.Item name="image" hidden>
                                    <Input/>
                                </Form.Item>
                                <Dragger {...uploaderProps}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined/>
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                </Dragger>
                                <div className="blog-actions-wrapper">
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
