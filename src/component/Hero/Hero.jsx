import React from 'react'
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import CartDetail from '../CartDetail/CartDetail';
import MainBody from '../HomeCartList/MainBody';

export const HeroWrapper = styled.div`
    flex:1;
    padding:.5rem 0 1.5rem 1rem;
    background-color: #ECEBEF;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
        scroll-behavior: smooth;
    }
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <Switch>
                <Route path="/detail" >
                    <CartDetail/>
                </Route>
                <Route exact path="/">
                    <MainBody />
                </Route>
            </Switch>
        </HeroWrapper>
    )
}

export default Hero
