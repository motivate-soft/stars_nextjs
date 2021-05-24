import React from "react";
import { Form, Input, Button, Space, Select, Row, Col, Tooltip } from "antd";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { HelpIcon } from "@iso/config/icon.config";
import { useDispatch } from "react-redux";
import metaActions from "./../../../redux/meta/actions";
import Loader from "@iso/components/utility/loader";
import MetaMediaManager from "./MetaMediaManager";

const { Option } = Select;
const ogTags = [
  {
    name: "type",
    content: "",
  },
  {
    name: "title",
    content: "",
  },
  {
    name: "description",
    content: "",
  },
  {
    name: "url",
    content: "",
  },
  {
    name: "image_url",
    content: "",
  },
  {
    name: "image_width",
    content: "",
  },
  {
    name: "image_height",
    content: "",
  },
  {
    name: "image_alt",
    content: "",
  },
];
export default function AddMeta(props) {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("AddMeta:onFinish", values);
    dispatch(metaActions.addMeta(values));
  };

  if (!props.slug) return <Loader />;

  return (
    <Form
      form={form}
      name="meta_form"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{
        slug: props.slug,
        title: "",
        description: "",
        og_tags: ogTags,
      }}
    >
      <h2>Add Page Meta information</h2>
      <Form.Item label="Page Name" className="page-name">
        <Space>
          <Form.Item
            name="slug"
            noStyle
            rules={[{ required: true, message: "Missing slug" }]}
          >
            <Input disabled />
          </Form.Item>
          <Tooltip title="identifier for meta objects of each page">
            <HelpIcon />
          </Tooltip>
        </Space>
      </Form.Item>

      <Form.Item
        label="Page title"
        name="title"
        rules={[{ required: true, message: "Missing title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Page Description"
        name="description"
        rules={[{ required: true, message: "Missing description" }]}
      >
        <Input />
      </Form.Item>

      <h3>Open graph</h3>
      <Form.List name="og_tags">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  {...field}
                  label="Name"
                  name={[field.name, "name"]}
                  fieldKey={[field.fieldKey, "name"]}
                  rules={[{ required: true, message: "Missing name" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...field}
                  label="Content"
                  name={[field.name, "content"]}
                  fieldKey={[field.fieldKey, "content"]}
                  rules={[{ required: true, message: "Missing content" }]}
                >
                  <Input />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Tag
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      {/* <h3>Twitter</h3>
      <Form.List name="twitter_tags">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  {...field}
                  label="Name"
                  name={[field.name, "name"]}
                  fieldKey={[field.fieldKey, "name"]}
                  rules={[{ required: true, message: "Missing name" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...field}
                  label="Content"
                  name={[field.name, "content"]}
                  fieldKey={[field.fieldKey, "content"]}
                  rules={[{ required: true, message: "Missing content" }]}
                >
                  <Input />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Tag
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List> */}

      <h3>Additional Meta tags</h3>
      <Form.List name="meta_tags">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  {...field}
                  label="Name"
                  name={[field.name, "name"]}
                  fieldKey={[field.fieldKey, "name"]}
                  rules={[{ required: true, message: "Missing name" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...field}
                  label="Content"
                  name={[field.name, "content"]}
                  fieldKey={[field.fieldKey, "content"]}
                  rules={[{ required: true, message: "Missing content" }]}
                >
                  <Input />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Tag
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
      <MetaMediaManager />
    </Form>
  );
}
