import React from 'react'
import styled from 'styled-components';
// -->
import Header from '../component/Header/Header'
import Hero from '../component/Hero/Hero'

export const HomeWrapper = styled.div`
    width: 100%;
    height:100Vh;
`;


const HomePage = () => {
    return (
        <HomeWrapper>
            <Header />
            <Hero/>
        </HomeWrapper>
    )
}
export default HomePage
