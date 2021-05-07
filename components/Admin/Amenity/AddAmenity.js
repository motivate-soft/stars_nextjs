import React, {useState, useEffect} from "react";
import {Button, Form, Input, Row, Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import amenityActions from "@redux/amenities/actions";
import Container from "@iso/ui/UI/Container/Container";
import AmenityMediaManager from "@components/Admin/Amenity/AmenityMediaManager/AmenityMediaManager";
import Box from "@iso/ui/Box/Box";
import {SingeAmenityWrapper} from "@components/Admin/Amenity/AmenityList.styles";
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

export default function AddAmenity(props) {
    const [amenity, setAmenity] = useState({
        name: '',
        image: null
    });
    const dispatch = useDispatch();

    function onChangeName(e) {
        setAmenity({...amenity, name: e.target.value});
    }

    function handleSelectImage(image) {
        setAmenity({...amenity, image: image});
    }

    function handleSave() {
        if (amenity.name === '') return
        dispatch(amenityActions.addAmenity(amenity));
    }

    function handleReset() {
        setAmenity({name: "", image: null});
    }


    return (
        <Box>
            <Container>
                <Row>
                    <Col lg={{span: 12, offset: 6}} sm={24}>
                        <SingeAmenityWrapper>
                            <div className="card-title-wrapper">
                                <h3>Add Amenity</h3>
                                <Link href="/admin/amenity">
                                    <Button type="primary">Back to List</Button>
                                </Link>
                            </div>
                            <Form
                                name="mainInfo"
                                {...formItemLayout}
                            >
                                <Form.Item
                                    label="Name"
                                    validateStatus={amenity.name !== '' ? 'success' : 'error'}
                                >
                                    <Input value={amenity.name} onChange={onChangeName}/>
                                </Form.Item>

                                {amenity?.image && (
                                    <img
                                        src={amenity.image.file}
                                        alt={amenity.image.title}
                                        style={{width: 200, height: 200}}
                                    />
                                )}
                                <AmenityMediaManager
                                    image={amenity.image}
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
                        </SingeAmenityWrapper>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
}
