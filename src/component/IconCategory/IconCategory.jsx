import React from 'react'
import styled from 'styled-components';
import Icons_Data from '../../Data/Icons.data'

const IconContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display:none;
    }
`;

export const IconsWrapper = styled.button`
    cursor: pointer;
    background-color: #F8FAFB;
    padding: .6rem .7rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 7px;
    margin-right: 1rem;
    margin-bottom:.5rem;
    margin-top: .3rem;
`;

const IconCategory = ({ path, id, Icon }) => {
    return (
        <IconContainer>
            {
                Icons_Data.map(({ path, id, Icon }) => (
                    <IconsWrapper key={id} id={id} to={path} >
                        <Icon />
                    </IconsWrapper>
                ))
            }   
        </IconContainer>
    )
}

export default IconCategory
