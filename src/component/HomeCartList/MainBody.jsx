import React from 'react';
import styled from 'styled-components';

import CategoryPreview from '../CategoryPreview/CategoryPreview'
import Shop_Data from '../../Data/Shop.Data';
import { Computer } from '@mui/icons-material';

export const MainWrapper = styled.div`
    flex:1;
    padding:.5rem 0 1.5rem 1rem;
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
            <CategoryPreview title="Popular Category" TitleIcon={Computer} IsIcon />
            {
                Shop_Data.map(({id,title,path,TitleIcon,items}) => (
                    <CategoryPreview key={id} title={title} TitleIcon={TitleIcon} items={items} path={path}   />
                ))
            }
        </MainWrapper>
    )
}

export default MainBody
