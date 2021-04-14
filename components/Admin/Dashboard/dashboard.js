import React from 'react';
import clone from 'clone';
import {Row, Col} from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import StickerWidget from './Sticker/StickerWidget';

import IntlMessages from '@iso/components/utility/intlMessages';
import {
    StickerWidgetUnreadMailIcon,
    StickerWidgetImgUploadIcon,
    StickerWidgetMessageIcon,
    StickerWidgetOrderIcon,
} from '@iso/config/icon.config';
import {dataList} from "@iso/containers/Tables/AntTables/AntTables";

const tableDataList = clone(dataList);
tableDataList.size = 5;
const styles = {
    wisgetPageStyle: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        overflow: 'hidden',
    },
};

const STICKER_WIDGET = [
    {
        number: 'widget.stickerwidget1.number',
        text: 'widget.stickerwidget1.text',
        icon: <StickerWidgetUnreadMailIcon size={30} color="#ffffff"/>,
        fontColor: '#ffffff',
        bgColor: '#7266BA',
    },
    {
        number: 'widget.stickerwidget1.number',
        text: 'widget.stickerwidget2.text',
        icon: <StickerWidgetImgUploadIcon size={30} color="#ffffff"/>,
        fontColor: '#ffffff',
        bgColor: '#42A5F6',
    },
    {
        number: 'widget.stickerwidget1.number',
        text: 'widget.stickerwidget3.text',
        icon: <StickerWidgetMessageIcon size={30} color="#ffffff"/>,
        fontColor: '#ffffff',
        bgColor: '#7ED320',
    },
    {
        number: 'widget.stickerwidget1.number',
        text: 'widget.stickerwidget4.text',
        icon: <StickerWidgetOrderIcon size={30} color="#ffffff"/>,
        fontColor: '#ffffff',
        bgColor: '#F75D81',
    },
];


function Dashboard() {
    const {rowStyle, colStyle} = basicStyle;

    return (
        <LayoutWrapper>
            <div style={styles.wisgetPageStyle}>
                <Row style={rowStyle} gutter={0} justify="start">
                    {STICKER_WIDGET.map((widget, idx) => (
                        <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
                            {/* Sticker Widget */}
                            <StickerWidget
                                number={<IntlMessages id={widget.number}/>}
                                text={<IntlMessages id={widget.text}/>}
                                icon={widget.icon}
                                fontColor={widget.fontColor}
                                bgColor={widget.bgColor}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </LayoutWrapper>
    );
}

export default Dashboard
