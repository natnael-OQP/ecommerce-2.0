import React from 'react'
import styled from 'styled-components';
// -->
import Header from '../component/Header/Header'
import Banner from '../component/Banner/Banner';

export const HomeWrapper = styled.div`
    width: 100%;
    height:100Vh;
    overflow: hidden;
`;


const HomePage = () => {
    return (
        <HomeWrapper>
            <Header />
            <Banner/>
        </HomeWrapper>
    )
}
export default HomePage
