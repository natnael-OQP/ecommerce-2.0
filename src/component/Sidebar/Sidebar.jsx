import { Help, QuestionAnswer, SettingsApplications } from '@mui/icons-material';
import React from 'react'
import {
    Category,
    Row,
    SidebarWrapper, 
} from '.';
import Shop_Data from '../../Data/Shop.Data';
import SidebarRows from '../Sidebar_Rows/SidebarRows';

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarRows Icon={SettingsApplications} title="category" />
            <Row isClick={false} >
                {
                    Shop_Data.map(({Path,id,title}) => (
                        <Category key={id} >{title}</Category>
                    ))
                }
            </Row>
            <SidebarRows Icon={Help} title="help" />
            <SidebarRows Icon={QuestionAnswer} title="help" isClick={true} />
            

        </SidebarWrapper>
    )
}

export default Sidebar;
