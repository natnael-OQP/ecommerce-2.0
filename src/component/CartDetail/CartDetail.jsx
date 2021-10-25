import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { ArrowBack, StarRate } from '@mui/icons-material';

import {
    AddToCart,
    Birr,
    Brand,
    CartWrapper,
    Detail,
    Image,
    ImageContainer,
    InfoContainer,
    Name,
    OldPrice,
    Price,
    PriceContainer,
    Rate,
    RateAndReview,
    Review,
    Wrapper,
} from '.';
import { selectCart } from '../../features/cartSlice';
import { addToBasket } from '../../features/basketSlice';
import { useHistory } from 'react-router';

const CartDetail = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const { id, imageUrl, name, brand, rate, reviews, price, oldPrice, detail, } = cart;
    const history = useHistory();
    
    const addToBasketClick = () => {
        dispatch(addToBasket({
            id,
            imageUrl,
            name,
            brand,
            rate,
            reviews,
            price,
            oldPrice,
            detail,
        }))
        history.push('/basket')
    }
    return (
        <CartWrapper>
        <ArrowBack fontSize="medium" onClick={()=>history.push('/')} />
            <Wrapper>
                <ImageContainer>
                    <Image src={imageUrl} alt={name} />
                </ImageContainer>
                <InfoContainer>
                    <Name>{name}</Name>
                    <Brand>{brand}</Brand>
                    <RateAndReview>
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <Rate>{rate}</Rate>
                        <Review>{reviews} </Review>
                    </RateAndReview>
                    <PriceContainer>
                        <Price>{price}<Birr>ብር</Birr></Price>
                        <OldPrice>{oldPrice}<small>ብር</small></OldPrice>
                    </PriceContainer>
                    <Detail>{detail}</Detail>
                    <AddToCart
                    onClick={addToBasketClick}
                    >add to Cart </AddToCart>
                </InfoContainer>
            </Wrapper>
        </CartWrapper>
    )
}

export default CartDetail
