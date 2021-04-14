import React from 'react';
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux';
import Popover from '@iso/components/uielements/popover';
import authAction from '../../../redux/authentication/actions';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

const {logout} = authAction;
import userpic from '@iso/assets/images/user1.png';
import {useRouter} from "next/router";

export default function TopbarUser() {
    const [visible, setVisibility] = React.useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const {profile} = useSelector(state => state.Auth);

    function handleVisibleChange() {
        setVisibility(visible => !visible);
    }

    const content = (
        <TopbarDropdownWrapper className="isoUserDropdown">
            <a className="isoDropdownLink" onClick={() => {
                router.push("/admin/profile")
            }}>Profile</a>
            <a className="isoDropdownLink" onClick={() => dispatch(logout())}>
                Logout
            </a>
        </TopbarDropdownWrapper>
    );

    return (
        <Popover
            content={content}
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
            arrowPointAtCenter={true}
            placement="bottomLeft"
        >
            <div className="isoImgWrapper">
                <img alt="user" src={userpic}/>
                <span className="userActivity online"/>
            </div>
            <p>{profile && profile.username}</p>
        </Popover>
    );
}
