import React, { useEffect } from "react";
import Link from "next/link";
import Input from "@iso/components/uielements/input";
import Upload from "@iso/components/uielements/upload";
import { Form, Button } from "antd";
import "../Users/upload.css";
import { useDispatch, useSelector } from "react-redux";
import userActions from "@redux/users/actions";
import Container from "@iso/ui/UI/Container/Container";
import Loader from "@iso/components/utility/loader";
import Box from "@iso/ui/Box/Box";
import { SingeUserWrapper } from "@components/Admin/Users/UserList.style";
import { UserCardWrapper } from "@components/Admin/Users/UserCard.style";
import userApi from "./../../../service/userApi";

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

export default function EditProfile(props) {
  let user;
  const {
    profile: { user_id },
  } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      user = await userApi.getOne(user_id);
    } catch (error) {
      console.log("error");
    }
  };

  const onFinish = (values) => {
    dispatch(
      userActions.updateUser({
        id: user_id,
        ...values,
      })
    );
  };


  return (
    <Box>
      <Container>
        <SingeUserWrapper>
          <UserCardWrapper className="isoUserCard">
            <div className="card-title-wrapper">
              <h3>Edit Profile</h3>
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
              {/* {loading && <Loader />} */}
              {user && (
                <Form
                  {...formItemLayout}
                  form={form}
                  name="userEdit"
                  className="isoUserInfoWrapper"
                  onFinish={onFinish}
                  initialValues={{
                    username: user.username,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    status: user.status,
                    role: user.role,
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
                        message: "Please input username",
                      },
                    ]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    label="First Name"
                    name="first_name"
                    className="isoUserCardInfos"
                    rules={[
                      {
                        required: true,
                        message: "Please input first name",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="last_name"
                    className="isoUserCardInfos"
                    rules={[
                      {
                        required: true,
                        message: "Please input Last name",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                      Save
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </div>
          </UserCardWrapper>
        </SingeUserWrapper>
      </Container>
    </Box>
  );
}
