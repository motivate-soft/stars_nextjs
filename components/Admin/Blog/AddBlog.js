import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import { Button, Col, Form, Input, Select, Row, Upload, message } from "antd";
import Editor from "@components/Admin/Property/Editor/Editor";
import Link from "next/link";
import blogActions from "@redux/blogs/actions";
import { SingeBlogWrapper } from "@components/Admin/Blog/Blog.styles";
import { BACKEND_URL } from "../../../env-config";
import cookie from "js-cookie";
import { UploadOutlined } from "@ant-design/icons";
import tagApi from "./../../../service/tagApi";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const { Option } = Select;
const { useForm } = Form;
const { Dragger } = Upload;

const uploaderProps = {
  name: "file",
  multiple: true,
  action: `${BACKEND_URL}/api/media/`,
  listType: "picture",
  maxCount: 1,
  beforeUpload: (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  },
  onChange(info) {
    const { status, response } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      // form.setFieldsValue({ image: response.id });
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const HtmlEditor = ({ value = {}, onChange }) => {
  const triggerChange = (changedValue) => {
    onChange(changedValue);
  };

  return (
    <Editor
      style={{ width: "90%", height: "70%" }}
      html={value}
      onEditorStateChange={(html) => triggerChange(html)}
    />
  );
};

export default function AddBlog() {
  const { profile } = useSelector((state) => state.Auth);
  const [tags, setTags] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTags();
  }, []);

  const [form] = useForm();

  async function fetchTags() {
    try {
      const res = await tagApi.getAll();
      setTags(res);
    } catch (error) {
      console.log("error", error);
    }
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  function onReset() {
    form.resetFields();
  }

  function onValuesChange(changedValues, allValues) {
  }

  function onFinish(values) {
    dispatch(
      blogActions.addBlog({
        ...values,
        image: values.image[0].response.id,
        author: profile.user_id,
      })
    );
  }

  return (
    <Box>
      <Container>
        <Row>
          <Col lg={{ span: 20, offset: 2 }} sm={24}>
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
                  title: "",
                  content: "",
                  image: null,
                  tags: [],
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
                  <Input />
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
                  <HtmlEditor />
                </Form.Item>
                <Form.Item
                  name="image"
                  label="Cover image"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Dragger
                    {...uploaderProps}
                    headers={{
                      Authorization: "Bearer " + cookie.get("accessToken"),
                    }}
                  >
                    <p className="ant-upload-drag-icon">
                      <UploadOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                  </Dragger>
                </Form.Item>

                <Form.Item
                  name="tags"
                  label="Tags"
                  hasFeedback
                  rules={[{ required: true, message: "Please select tags" }]}
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select tag"
                  >
                    {tags &&
                      tags?.length > 0 &&
                      tags.map((tag) => (
                        <Option key={tag.id}>{tag.name}</Option>
                      ))}
                  </Select>
                </Form.Item>
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
