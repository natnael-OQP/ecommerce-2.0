import React from 'react'
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import Hero from '../Hero/Hero';
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
            <Hero/>
        </HeroContainer>
    )
}

export default Banner;