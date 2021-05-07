import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "@iso/components/utility/loader";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import {Button, Col, Form, Input, Select, Row, Upload, message} from "antd";
import Editor from "@components/Admin/Property/Editor/Editor";
import Link from "next/link";
import blogActions from "@redux/blogs/actions";
import {SingeBlogWrapper} from "@components/Admin/Blog/Blog.styles";
import tagApi from "./../../../service/tagApi";
import BlogMediaManager from "@components/Admin/Blog/BlogMediaManager/BlogMediaManager";

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const HtmlEditor = ({value = {}, onChange}) => {
    const triggerChange = (changedValue) => {
        onChange(changedValue);
    };

    return (
        <Editor
            style={{width: "90%", height: "70%"}}
            html={value}
            onEditorStateChange={(html) => triggerChange(html)}
        />
    );
};

export default function EditBlog(props) {
    const {blogId} = props;
    const {profile} = useSelector((state) => state.Auth);

    const {selectedItem, loading} = useSelector((state) => state.Blogs);
    const [blog, setBlog] = useState(null);
    const [tags, setTags] = useState(null);


    const dispatch = useDispatch();

    useEffect(() => {
        fetchTags();
        dispatch(blogActions.getBlog(blogId));
    }, []);

    useEffect(() => {
        if (selectedItem.id === parseInt(blogId)) {
            setBlog(selectedItem)
        }
    }, [selectedItem])

    const [form] = Form.useForm();
    const {getFieldDecorator, setFieldsValue} = form;

    async function fetchTags() {
        try {
            const res = await tagApi.getAll();
            setTags(res);
        } catch (error) {
            console.log("error", error);
        }
    }

    function onValuesChange(changedValues, allValues) {
        const key = Object.keys(changedValues)[0]
        setBlog({
            ...blog,
            key: changedValues[key]
        })
    }

    function handleSelectImage(image) {
        setBlog({
            ...blog,
            image,
        })
    }

    function onFinish(values) {
        dispatch(
            blogActions.updateBlog({
                id: blog.id,
                title: blog.title,
                content: blog.content,
                image: blog.image.id,
                tags: blog.tags
            })
        );
    }

    return (
        <Box>
            <Container>
                <Row>
                    <Col lg={{span: 20, offset: 2}} sm={24}>
                        <SingeBlogWrapper>
                            <div className="card-title-wrapper">
                                <h3>Edit Blog</h3>
                                <Link href="/admin/blog">
                                    <Button type="primary">Back to List</Button>
                                </Link>
                            </div>
                            {blog ? (
                                <Form
                                    {...formItemLayout}
                                    form={form}
                                    onValuesChange={onValuesChange}
                                    onFinish={onFinish}
                                    initialValues={{
                                        title: blog.title,
                                        content: blog.content,
                                        tags: blog.tags.map(tag => `${tag}`),
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
                                        name="content"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            },
                                        ]}
                                    >
                                        <HtmlEditor/>
                                    </Form.Item>
                                    {
                                        blog.image &&
                                        <img src={blog.image.file} alt="blog cover" style={{width: '100%'}}
                                             className="cover-image"/>
                                    }
                                    <BlogMediaManager
                                        image={blog.image}
                                        onSelectImage={handleSelectImage}
                                    />
                                    <Form.Item
                                        name="tags"
                                        label="Tags"
                                        hasFeedback
                                        rules={[{required: true, message: "Please select tags"}]}
                                    >
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            style={{width: "100%"}}
                                            placeholder="Please select tag"
                                        >
                                            {tags &&
                                            tags?.length > 0 &&
                                            tags.map((tag) => (
                                                <Option key={parseInt(tag.id)}>{tag.name}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <div className="blog-actions-wrapper">
                                        <Button type="primary" htmlType="submit">
                                            Save
                                        </Button>
                                    </div>
                                </Form>
                            ) : (
                                <Loader/>
                            )}
                        </SingeBlogWrapper>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
}
