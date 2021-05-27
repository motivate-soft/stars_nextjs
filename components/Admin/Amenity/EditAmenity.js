import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import amenityActions from "@redux/amenities/actions";
import Container from "@iso/ui/UI/Container/Container";
import AmenityMediaManager from "@components/Admin/Amenity/AmenityMediaManager/AmenityMediaManager";
import Box from "@iso/ui/Box/Box";
import Loader from "@iso/components/utility/loader";
import Link from "next/link";
import { SingeAmenityWrapper } from "@components/Admin/Amenity/AmenityList.styles";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

export default function EditAmenity(props) {
  const [amenity, setAmenity] = useState(null);
  const { amenityId } = props;
  const { selectedItem, loading } = useSelector((state) => state.Amenities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(amenityActions.getAmenity(amenityId));
  }, []);

  useEffect(() => {
    if (selectedItem.id === parseInt(amenityId)) {
      setAmenity(selectedItem);
    }
  }, [selectedItem]);

  function onChangeName(e) {
    setAmenity({ ...amenity, name: e.target.value });
  }

  function handleSelectImage(image) {
    console.log("handleSelectImage", image);
    setAmenity({ ...amenity, image: image });
  }

  function handleSave() {
    if (amenity.name === "") return;
    dispatch(amenityActions.updateAmenity(amenity));
  }

  function handleReset() {
    setAmenity({ name: "", image: null });
  }

  if (loading) return <Loader />;

  return (
    <Box>
      <Container>
        <Row>
          <Col lg={{ span: 12, offset: 6 }} sm={24}>
            <SingeAmenityWrapper>
              <div className="card-title-wrapper">
                <h3>Edit Amenity</h3>
                <Link href="/admin/amenity">
                  <Button type="primary">Back to List</Button>
                </Link>
              </div>
              {amenity ? (
                <Form name="amenityForm" {...formItemLayout}>
                  <Form.Item
                    label="Name"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                    validateStatus={amenity.name !== "" ? "success" : "error"}
                  >
                    <Input value={amenity.name} onChange={onChangeName} />
                  </Form.Item>

                  {amenity?.image && (
                    <img
                      src={amenity.image.file}
                      alt={amenity.image.title}
                      style={{ width: 200, height: 200 }}
                    />
                  )}
                  <AmenityMediaManager
                    image={amenity.image}
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
            </SingeAmenityWrapper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
