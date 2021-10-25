import React from 'react'
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Basket from '../basket/Basket';
import CartDetail from '../CartDetail/CartDetail';
import MainBody from '../HomeCartList/MainBody';

export const HeroWrapper = styled.div`
    flex:1;
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
                <Route exact path="/">
                    <MainBody />
                </Route>
                <Route path="/detail" >
                    <CartDetail/>
                </Route>
                <Route path="/basket" >
                    <Basket/>
                </Route>
            </Switch>
        </HeroWrapper>
    )
}

export default Hero
