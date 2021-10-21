import { Help, QuestionAnswer, SettingsApplications } from '@mui/icons-material';
import React, { useState } from 'react'
import {
    Category,
    Row,
    SidebarWrapper, 
} from '.';
import Shop_Data from '../../Data/Shop.Data';
import SidebarRows from '../Sidebar_Rows/SidebarRows';

const Sidebar = () => {
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

    return (
        <SidebarWrapper>
            <SidebarRows
                isClick={CategoryClick}
                toggle={toggle}
                Icon={SettingsApplications}
                title="category"
            />
            <Row isClick={CategoryClick} >
                {
                    Shop_Data.map(({Path,id,title}) => (
                        <Category key={id} >{title}</Category>
                    ))
                }
            </Row>
            <SidebarRows
                isClick={SellClick}
                toggle={SellToggle}
                Icon={QuestionAnswer}
                title="Sell on E-Suke "
            />
            <SidebarRows
                isClick={HelpClick}
                toggle={HelpToggle}
                Icon={Help}
                title="help"
            />
            

        </SidebarWrapper>
    )
}

export default Sidebar;
