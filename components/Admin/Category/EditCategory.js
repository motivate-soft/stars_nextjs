import React, {useState, useEffect} from "react";
import Link from "next/link";
import {Button, Form, Input, Row, Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import categoryActions from "@redux/categories/actions";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import {SingeCategoryWrapper} from "./Category.styles";
import Loader from '@iso/components/utility/loader';

const {useForm} = Form
const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

export default function EditCategory(props) {
    const {categoryId} = props;
    const {selectedItem, loading} = useSelector((state) => state.Categories);
    const dispatch = useDispatch();
    const [form] = useForm();

    useEffect(() => {
        dispatch(categoryActions.getCategory(categoryId));
    }, []);

    function onReset() {
        form.resetFields()
    }

    const onFinish = (values) => {
        dispatch(categoryActions.updateCategory({
            ...selectedItem,
            ...values
        }));
    };

    if (loading) return <Loader/>

    return (
        <Box>
            <Container>
                <Row>
                    <Col lg={{span: 12, offset: 6}} sm={24}>
                        <SingeCategoryWrapper>
                            <div className="card-title-wrapper">
                                <h3>Edit Category</h3>
                                <Link href="/admin/category">
                                    <Button type="primary">Back to List</Button>
                                </Link>
                            </div>

                            {selectedItem.id === parseInt(categoryId) && selectedItem ? (
                                <Form
                                    name="categoryForm"
                                    {...formItemLayout}
                                    onFinish={onFinish}
                                    initialValues={{name: selectedItem.name,}}
                                >
                                    <Row>
                                        <Col sm={24}>
                                            <Form.Item
                                                label="Name"
                                                name="name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "This field is required",
                                                    },
                                                ]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col sm={24}>
                                            <Button type="primary" htmlType="submit">
                                                Save
                                            </Button>
                                            <Button type="default" onClick={onReset}>
                                                Reset
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            ) : null}
                        </SingeCategoryWrapper>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
}
