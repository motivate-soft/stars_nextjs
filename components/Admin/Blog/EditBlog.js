// import React, {useState, useEffect} from "react";
// import {Button, Form, Input, Row, Col} from "antd";
// import {useDispatch, useSelector} from "react-redux";
// import postActions from "@redux/posts/actions";
// import Container from "@iso/ui/UI/Container/Container";
// import Editor from "@components/Admin/Property/Editor/Editor";
// import Box from "@iso/ui/Box/Box";
// import {SingeCategoryWrapper} from "@components/Admin/Category/Category.styles";
// import Loader from "@iso/components/utility/loader";
// import Link from "next/link";
//
// const formItemLayout = {
//     labelCol: {
//         span: 24,
//     },
//     wrapperCol: {
//         span: 24,
//     },
// };
// const {useForm} = Form
//
// const HtmlEditor = ({value = {}, onChange}) => {
//     const triggerChange = (changedValue) => {
//         onChange(changedValue);
//     };
//
//     return (
//         <Editor
//             style={{width: "90%", height: "70%"}}
//             toolbarClassName="home-toolbar"
//             wrapperClassName="home-wrapper"
//             editorClassName="home-editor"
//             html={value}
//             onEditorStateChange={(html) => triggerChange(html)}
//         />
//     );
// };
//
// export default function EditBlog(props) {
//     const {postId} = props;
//     const {selectedItem, loading} = useSelector((state) => state.Posts);
//     const dispatch = useDispatch();
//     const [form] = useForm();
//
//     useEffect(() => {
//         dispatch(postActions.getPost(postId));
//     }, []);
//
//
//     function onReset() {
//         form.resetFields()
//     }
//
//     const onFinish = (values) => {
//         dispatch(postActions.updatePost({
//             ...selectedItem,
//             ...values
//         }));
//     };
//     if (loading) return <Loader/>
//
//     return (
//         <Box>
//             <Container>
//                 <Row>
//                     <Col lg={{span: 12, offset: 6}} sm={24}>
//                         <SingeCategoryWrapper>
//                             <div className="card-title-wrapper">
//                                 <h3>Edit Post</h3>
//                                 <Link href="/admin/post">
//                                     <Button type="primary">Back to List</Button>
//                                 </Link>
//                             </div>
//                             {selectedItem.id === parseInt(postId) && selectedItem ? (
//                                 <Box>
//                                     <Container>
//                                         <Form
//                                             name="mainInfo"
//                                             {...formItemLayout}
//                                             onFinish={onFinish}
//                                             initialValues={{
//                                                 title: selectedItem.title,
//                                                 text: selectedItem.text,
//                                             }}
//                                         >
//                                             <Form.Item
//                                                 label="Title"
//                                                 name="title"
//                                                 rules={[
//                                                     {
//                                                         required: true,
//                                                         message: "This field is required",
//                                                     },
//                                                 ]}
//                                             >
//                                                 <Input/>
//                                             </Form.Item>
//                                             <Form.Item
//                                                 label="Text"
//                                                 name="text"
//                                                 rules={[
//                                                     {
//                                                         required: true,
//                                                         message: "This field is required",
//                                                     },
//                                                 ]}
//                                             >
//                                                 <HtmlEditor/>
//                                             </Form.Item>
//                                             <div>
//                                                 <Button type="primary" htmlType="submit">
//                                                     Save
//                                                 </Button>
//                                                 <Button type="default" onClick={onReset}>
//                                                     Reset
//                                                 </Button>
//                                             </div>
//                                         </Form>
//                                     </Container>
//                                 </Box>
//                             ) : null}
//
//                         </SingeCategoryWrapper>
//                     </Col>
//                 </Row>
//             </Container>
//         </Box>
//
//     );
// }
