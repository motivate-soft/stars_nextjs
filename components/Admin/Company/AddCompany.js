import React, {useState, useEffect} from "react";
import {Button, Form, Input, Row, Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import companyActions from "@redux/companies/actions";
import Container from "@iso/ui/UI/Container/Container";
import CompanyMediaManager from "@components/Admin/Company/CompanyMediaManager/CompanyMediaManager";
import Box from "@iso/ui/Box/Box";
import {SingeCompanyWrapper} from "@components/Admin/Company/CompanyList.styles";
import Link from "next/link";
import Loader from '@iso/components/utility/loader';

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

export default function AddCompany(props) {
    const [company, setCompany] = useState({
        name: '',
        image: null
    });
    const dispatch = useDispatch();

    function onChangeName(e) {
        setCompany({...company, name: e.target.value});
    }

    function handleSelectImage(image) {
        setCompany({...company, image: image});
    }

    function handleSave() {
        if (company.name === '') return
        dispatch(companyActions.addCompany(company));
    }

    function handleReset() {
        setCompany({name: "", image: null});
    }


    return (
        <Box>
            <Container>
                <Row>
                    <Col lg={{span: 12, offset: 6}} sm={24}>
                        <SingeCompanyWrapper>
                            <div className="card-title-wrapper">
                                <h3>Add Company</h3>
                                <Link href="/admin/company">
                                    <Button type="primary">Back to List</Button>
                                </Link>
                            </div>
                            <Form
                                name="mainInfo"
                                {...formItemLayout}
                            >
                                <Form.Item
                                    label="Name"
                                    validateStatus={company.name !== '' ? 'success' : 'error'}
                                >
                                    <Input value={company.name} onChange={onChangeName}/>
                                </Form.Item>

                                {company?.image && (
                                    <img
                                        src={company.image.file}
                                        alt={company.image.title}
                                        style={{width: 200, height: 200}}
                                    />
                                )}
                                <CompanyMediaManager
                                    image={company.image}
                                    onSelectImage={handleSelectImage}
                                />
                                <div>
                                    <Button type="primary" htmlType="submit" onClick={handleSave}>
                                        Save
                                    </Button>
                                    <Button type="default" onClick={handleReset}>
                                        Reset
                                    </Button>
                                </div>
                            </Form>
                        </SingeCompanyWrapper>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
}
