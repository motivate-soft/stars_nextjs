import React, {useEffect, useState} from "react";
import Box from "@iso/components/utility/box";
import HelperText from "@iso/components/utility/helper-text";
import Scrollbars from "@iso/components/utility/customScrollBar";
import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
import {useDispatch, useSelector} from "react-redux";
import propertyActions from "@redux/properties/actions";


const tableColumns = [
    {
        title: "ID",
        key: "id",
        width: 100,
        render: (object) => <p>{object.id}</p>,
    },
    {
        title: "Name",
        key: "name",
        width: 100,
        render: (object) => <p>{object.name}</p>,
    },
    {
        title: "Address",
        key: "address",
        width: 200,
        render: (object) => <p>{object.address}</p>,
    },
];

export default function SimilarProperty(props) {
    const {propertyId, selectedItems, onRowSelection} = props
    const dispatch = useDispatch();

    const {items, loading} = useSelector((state) => state.Properties);
    const [state, setState] = useState({
        columns: tableColumns,
        dataList: items,
    });

    useEffect(() => {
        dispatch(propertyActions.getAllProperties());
    }, []);

    useEffect(() => {
        setState({
            ...state,
            dataList: items.filter(item => item.id !== propertyId)
        });
    }, [items]);

    const {columns, dataList} = state;

    const rowSelection = {
        selectedRowKeys: selectedItems,
        onChange: (selectedRowKeys, selectedRows) => {
            onRowSelection(selectedRowKeys)
        },
        getCheckboxProps: (record) => ({
            // disabled: selectedItems.findIndex(item => item === parseInt(record.id)) > -1,
            // disabled: record.name === 'Disabled User',
            name: record && record?.id,
        }),
    };

    return (
        <Box>
            {dataList && dataList?.length === 0 ? (
                <HelperText text="No Properties found"/>
            ) : (
                <div className="isoPropertyTable">
                    <Scrollbars
                        style={{width: "100%", height: "calc(60vh - 70px)"}}
                    >
                        <TableWrapper
                            rowKey="id"
                            rowSelection={{
                                type: 'checkbox',
                                ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={dataList}
                            className="propertyListTable"
                        />
                    </Scrollbars>
                </div>
            )}
        </Box>
    );
}
