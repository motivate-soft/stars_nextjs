import React, { useEffect, useState } from "react";
import { Form, Input, Button, Space, Select, Tooltip } from "antd";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { HelpIcon } from "@iso/config/icon.config";
import { useDispatch, useSelector } from "react-redux";
import metaActions from "./../../../redux/meta/actions";
import { useRouter } from "next/router";
import Loader from "@iso/components/utility/loader";
import MetaMediaManager from "./MetaMediaManager";

const { TextArea } = Input;

export default function EditMeta(props) {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const router = useRouter();

  const { selectedItem } = useSelector((state) => state.Meta);

  useEffect(() => {
    dispatch(metaActions.getMeta(props.slug));
  }, []);

  function onFinish(values) {
    console.log("EditMeta:onFinish", values);
    dispatch(
      metaActions.updateMeta({
        ...selectedItem,
        ...values,
      })
    );
  }

  if (!selectedItem.slug) return <Loader />;

  return (
    <Form
      form={form}
      name="meta_form"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={selectedItem}
    >
      <h2>Edit Page Meta information</h2>
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

      <Space>
        <Form.Item
          label="Page title"
          name="title"
          rules={[{ required: true, message: "Missing title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() =>
            form.getFieldsValue().title ? form.getFieldsValue().title.length : 0
          }
        </Form.Item>
      </Space>

      <Space align="start">
        <Form.Item
          label="Page Description"
          name="description"
          rules={[{ required: true, message: "Missing description" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() =>
            form.getFieldsValue().description
              ? form.getFieldsValue().description.length
              : 0
          }
        </Form.Item>
      </Space>

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
                <Form.Item shouldUpdate>
                  {() =>
                    form.getFieldsValue().og_tags &&
                    form.getFieldsValue().og_tags[field.name]
                      ? form.getFieldsValue().og_tags[field.name].content.length
                      : 0
                  }
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
                <Form.Item shouldUpdate>
                  {() =>
                    form.getFieldsValue().meta_tags &&
                    form.getFieldsValue().meta_tags[field.name]
                      ? form.getFieldsValue().meta_tags[field.name].content
                          .length
                      : 0
                  }
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
