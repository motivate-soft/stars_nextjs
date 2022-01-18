import React, { useEffect } from 'react'
import { Form, Input, Button, Space, Select, Divider } from 'antd';
import Loader from "@iso/components/utility/loader";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import propertyActions from "@redux/properties/actions";
import moment from "moment";

const { Option } = Select;

const monthStartDate = moment().startOf("month");
const monthOptions = Array(12).fill(null).map((value, index) => (moment(monthStartDate).add(index, "month")))

export default function MonthlyPricing(props) {
    const { propertyId } = props;

    const dispatch = useDispatch();
    const { selectedItem, loading } = useSelector((state) => state.Properties);
    const { monthly_pricing_items } = selectedItem


    useEffect(() => {
        if (selectedItem.id) {
            dispatch(propertyActions.getMonthlyPriceItems(propertyId));
        }
    }, [selectedItem.id]);

    useEffect(() => {
        if (monthly_pricing_items) {
            console.log("MonthlyPricing:useEffect", monthly_pricing_items)
            form.setFieldsValue({ pricings: monthly_pricing_items })
        }
    }, [monthly_pricing_items]);

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form:', values);
        const items = values.pricings.map(item => ({
            ...item,
            date: moment(item.date).format("YYYY-MM-DD"),
            property: propertyId,
        }))
        dispatch(propertyActions.createMonthlyPriceItems({
            property: propertyId,
            items
        }));
    };

    if (loading) return <Loader />

    return (
        <div>
            <Form form={form} name="monthly_pricing_form" onFinish={onFinish} autoComplete="off">
                <Form.List name="pricings">
                    {(fields, { add, remove }) => (
                        <Space direction="vertical" split={<Divider type="horizontal" />}>
                            {fields.map(field => (
                                <Space key={field.key} align="baseline" className='w-100'>
                                    <Form.Item
                                        noStyle
                                        shouldUpdate={(prevValues, curValues) =>
                                            prevValues.pricings !== curValues.pricings
                                        }
                                    >
                                        {() => (
                                            <Form.Item
                                                {...field}
                                                label="Month"
                                                name={[field.name, 'date']}
                                                rules={[{ required: true, message: 'Missing date' }]}
                                            >
                                                <Select style={{ width: 130 }}>
                                                    {monthOptions.map((item, index) => (
                                                        <Option value={item.format("YYYY-MM-DD")} key={index}>{item.format("MMMM YYYY")}</Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                        {...field}
                                        label="Price"
                                        name={[field.name, 'price']}
                                        rules={[{ required: true, message: 'Missing price' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}

                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add
                                </Button>
                            </Form.Item>
                        </Space>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="mr-2">
                        Save
                    </Button>
                    {/* <Button type="primary" htmlType="reset">
                        Cancel
                    </Button> */}
                </Form.Item>
            </Form>
        </div>
    )
}
