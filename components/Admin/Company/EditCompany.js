import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import companyActions from "@redux/companies/actions";
import Container from "@iso/ui/UI/Container/Container";
import CompanyMediaManager from "@components/Admin/Company/CompanyMediaManager/CompanyMediaManager";
import Box from "@iso/ui/Box/Box";
import Loader from "@iso/components/utility/loader";
import Link from "next/link";
import { SingeCompanyWrapper } from "@components/Admin/Company/CompanyList.styles";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

export default function EditCompany(props) {
  const [company, setCompany] = useState(null);
  const { companyId } = props;
  const { selectedItem, loading } = useSelector((state) => state.Companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companyActions.getCompany(companyId));
  }, []);

  useEffect(() => {
    if (selectedItem.id === parseInt(companyId)) {
      setCompany(selectedItem);
    }
  }, [selectedItem]);

  function onChangeName(e) {
    setCompany({ ...company, name: e.target.value });
  }

  function handleSelectImage(image) {
    console.log("handleSelectImage", image);
    setCompany({ ...company, image: image });
  }

  function handleSave() {
    if (company.name === "") return;
    dispatch(companyActions.updateCompany(company));
  }

  function handleReset() {
    setCompany({ name: "", image: null });
  }

  if (loading) return <Loader />;

  return (
    <Box>
      <Container>
        <Row>
          <Col lg={{ span: 12, offset: 6 }} sm={24}>
            <SingeCompanyWrapper>
              <div className="card-title-wrapper">
                <h3>Edit Company</h3>
                <Link href="/admin/company">
                  <Button type="primary">Back to List</Button>
                </Link>
              </div>
              {company ? (
                <Form name="companyForm" {...formItemLayout}>
                  <Form.Item
                    label="Name"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                    validateStatus={company.name !== "" ? "success" : "error"}
                  >
                    <Input value={company.name} onChange={onChangeName} />
                  </Form.Item>

                  {company?.image && (
                    <img
                      src={company.image.file}
                      alt={company.image.title}
                      style={{ width: 200, height: 200 }}
                    />
                  )}
                  <CompanyMediaManager
                    image={company.image}
                    onSelectImage={handleSelectImage}
                  />
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                    <Button type="default" onClick={handleReset}>
                      Reset
                    </Button>
                  </div>
                </Form>
              ) : null}
            </SingeCompanyWrapper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
