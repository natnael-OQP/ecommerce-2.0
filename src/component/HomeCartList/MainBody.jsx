import React from 'react';
import styled from 'styled-components';

import CategoryPreview from '../CategoryPreview/CategoryPreview'
import Shop_Data from '../../Data/Shop.Data';
import {LocalFireDepartmentRounded } from '@mui/icons-material';
import BannerSwipe from '../Bannerswipe/BannerSwipe';

export const MainWrapper = styled.div`
    flex:1;
    padding:1.5rem 1rem 1.5rem 1rem;
    background-color: #ECEBEF;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
        scroll-behavior: smooth;
    }
    
`;
const MainBody = () => {
    return (
        <MainWrapper>
            <BannerSwipe/>
            <CategoryPreview title="Popular Category" TitleIcon={LocalFireDepartmentRounded} IsIcon />
            {
                Shop_Data.map(({id,title,path,TitleIcon,items}) => (
                    <CategoryPreview key={id} title={title} TitleIcon={TitleIcon} items={items} path={path}   />
                ))
            }
        </MainWrapper>
    )
}

export default MainBody
