import React from 'react'
import styled from 'styled-components';

export const CartWrapper = styled.div`
    flex:1;
    padding:.5rem 0 1.5rem 1rem;
    background-color: #ECEBEF;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
        scroll-behavior: smooth;
    }
`;

const CartDetail = () => {
    return (
        <CartWrapper>
            <h1>DetailSection</h1>
        </CartWrapper>
    )
}

export default CartDetail
