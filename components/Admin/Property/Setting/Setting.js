import {Form, Select, Input, Radio, Rate, Row, Col} from "antd";

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const settingKeys = [
    "price",
    "minPrice",
    "minMonthPrice",
    "bathroomCount",
    "bedroomCount",
    "sleeps",
    "minSleeps",
    "cleaningFee",
    "transactionFeeRate",
    "taxRate",
    "tour360",
    "refundableAmount",
    "furnished",
    "rentalParking",
    "petsConsidered",
];

const integerValidationRule = {
    pattern: /^[0-9\b]+$/,
    message: "Value should integer",
};

const floatValidationRule = {
    pattern: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
    message: "Value should contain just number",
};

const requiredRule = {
    required: true,
    message: "Please fill this field",
};

function Setting(props) {
    const {setting, onValuesChange} = props;
    const {
        price,
        minPrice,
        minMonthPrice,
        bathroomCount,
        bedroomCount,
        sleeps,
        minSleeps,
        cleaningFee,
        transactionFeeRate,
        taxRate,
        tour360,
        refundableAmount,
        furnished,
        rentalParking,
        petsConsidered,
    } = setting;

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    // if (
    //   settingKeys.findIndex(
    //     (key) => setting[key] === null || setting[key] === undefined
    //   ) > -1
    // ) {
    //   return null;
    // }

    return (
        <Form
            name="validate_other"
            {...formItemLayout}
            onValuesChange={onValuesChange}
            onFinish={onFinish}
            initialValues={{
                price,
                minPrice,
                minMonthPrice,
                bathroomCount,
                bedroomCount,
                sleeps,
                minSleeps,
                cleaningFee,
                transactionFeeRate,
                taxRate,
                tour360,
                refundableAmount,
                furnished,
                rentalParking,
                petsConsidered,
            }}
        >
            <Row gutter={[32, 32]}>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Starting nightly Price "
                        name="minPrice"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Starting Monthly Price"
                        name="minMonthPrice"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Bedroom"
                        name="bedroomCount"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Bathroom"
                        name="bathroomCount"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Sleeps"
                        name="sleeps"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Minimum number of nights"
                        name="minSleeps"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Cleaning fee"
                        name="cleaningFee"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Transaction fee(%)"
                        name="transactionFeeRate"
                        rules={[floatValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Tax(%)"
                        name="taxRate"
                        rules={[floatValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Refundable Security Deposit"
                        name="refundableAmount"
                        rules={[integerValidationRule, requiredRule]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item label="Tour360" name="tour360" rules={[requiredRule]}>
                        <Input/>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item name="furnished" label="Furnished" rules={[requiredRule]}>
                        <Radio.Group>
                            <Radio value="1">Yes</Radio>
                            <Radio value="0">No</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="rentalParking"
                        label="RentalParking"
                        rules={[requiredRule]}
                    >
                        <Radio.Group>
                            <Radio value="1">Yes</Radio>
                            <Radio value="0">No</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="petsConsidered"
                        label="PetsConsidered"
                        rules={[requiredRule]}
                    >
                        <Radio.Group>
                            <Radio value="1">Yes</Radio>
                            <Radio value="0">No</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default Setting;
