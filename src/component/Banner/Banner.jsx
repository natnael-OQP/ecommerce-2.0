import React from 'react'
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar'
import MainBody from '../MainBody/MainBody'
export const HeroContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


const Banner = () => {
    return (
        <HeroContainer>
            <Sidebar />
            <MainBody/>
        </HeroContainer>
    )
}

export default Banner;