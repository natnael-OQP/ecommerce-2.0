import {  Help, LoginRounded, Logout, QuestionAnswer, SettingsApplications } from '@mui/icons-material';
import React, { useState } from 'react'
import {
    Category,
    Login,
    Row,
    SidebarWrapper, 
} from '.';

import Shop_Data from '../../Data/Shop.Data';
import SidebarRows from '../Sidebar_Rows/SidebarRows';
import {auth, provider} from '../../Database/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signIn, signOut } from '../../features/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [CategoryClick, setClick] = useState(false);
    const [SellClick, setSell] = useState(false);
    const [HelpClick, SetHelp] = useState(false);    
    const toggle = () => {
        setClick(!CategoryClick);
        setSell(false);
        SetHelp(false);

    }
    const SellToggle = () => {
        setSell(!SellClick);
        setClick(false);
        SetHelp(false);
    }
    const HelpToggle = () => {
        setSell(false);
        setClick(false);
        SetHelp(!HelpClick);
    }
    // sign-in-with-google
    const SignIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(signIn({
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            }))
        }).catch((error) => alert(error))
    }
    // sign-out
    const SignOut = () => {
        auth.signOut();
        dispatch(signOut());
    }

    return (
        <SidebarWrapper>
            <SidebarRows
                ifclick={CategoryClick}
                toggle={toggle}
                Icon={SettingsApplications}
                title="category"
            />
            <Row ifclick={CategoryClick} >
                {
                    Shop_Data.map(({Path,id,title}) => (
                        <Category key={id} >{title}</Category>
                    ))
                }
            </Row>
            <SidebarRows
                ifclick={SellClick}
                toggle={SellToggle}
                Icon={QuestionAnswer}
                title="Sell on E-Suke "
            />
            <SidebarRows
                ifclick={HelpClick}
                toggle={HelpToggle}
                Icon={Help}
                title="help"
            />
            {
                !user ? (
                    <Login onClick={SignIn} ><LoginRounded fontSize="small" />  Log In</Login>
                ): (
                    <Login onClick={SignOut} > <Logout fontSize="small" /> {"  "} Log Out</Login>
                )
            }

        </SidebarWrapper>
    )
}

export default Sidebar;
