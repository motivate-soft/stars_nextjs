import React, {useState} from 'react';
import {Modal, Button} from 'antd';
import styled from "styled-components";
import {palette} from "styled-theme";
import classNames from 'classnames';

const CovidBannerWrapper = styled.div`
  text-align: center;
  background-color: ${palette('primary', 0)};
  color: white;
  transition: all ease-in-out 300ms;

  h6 {
    margin: 0;
    padding: 4px;
    color: #fff;
  }

  button {
    background-color: ${palette('primary', 0)};
    cursor: pointer;
    padding: 4px 16px;
    line-height: 1;
    color: #fff;
  }
  
  &.hide {
    //display: none;
    //height: 0;
    opacity: 0;
    transition: all ease-in-out 300ms;
  }
`

const CovidBanner = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {isScrolled} = props

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const title = <h4 style={{color: '#0071aa'}}>COVID-19 Announcement</h4>

    // if (isScrolled) return null;

    return (
        <CovidBannerWrapper className={classNames({hide: isScrolled})}>
            <div>
                <h6>THE HEALTH OF OUR GUESTS IS A TOP PRIORITY</h6>
                <Button onClick={showModal} style={{border: "none"}}>
                    Our response to COVID-19 and our flexible cancellation policy
                </Button>
            </div>
            <Modal title={title} visible={isModalVisible} cancelText="Close" okButtonProps={{style: {display: 'none'}}}
                   style={{top: 30}}
                   onCancel={handleCancel}>
                <p>The health and safety of our guests and employees is our highest priority.
                    We’re actively monitoring the situation and following the guidance U.S.
                    Center for Disease Control & Prevention and the Massachusetts Department of
                    Public Health. We are adjusting our procedures and protocols as the
                    situation develops and will keep you updated every step of the way.</p>
            </Modal>
        </CovidBannerWrapper>
    );
};

export default CovidBanner;