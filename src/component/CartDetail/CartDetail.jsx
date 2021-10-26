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
    const history = useHistory();
    const addToBasketClick = () => {
        dispatch(addToBasket({
            id:cart.id,
            imageUrl:cart.imageUrl,
            name:cart.name,
            brand:cart.brand,
            rate:cart.rate,
            reviews:cart.reviews,
            price:cart.price,
            oldPrice:cart.oldPrice,
            detail:cart.detail,
        }))
        history.push('/basket')
    }
    return (
        <CartWrapper>
            <ArrowBack fontSize="medium" onClick={()=>history.push('/')} />
            {cart === null ? <h1>empty 😒 </h1> : (
                <Wrapper>
                    <ImageContainer>
                        <Image src={cart.imageUrl} alt={cart.name} />
                    </ImageContainer>
                    <InfoContainer>
                        <Name>{cart.name}</Name>
                        <Brand>{cart.brand}</Brand>
                        <RateAndReview>
                            <StarRate fontSize="small" />
                            <StarRate fontSize="small" />
                            <StarRate fontSize="small" />
                            <StarRate fontSize="small" />
                            <StarRate fontSize="small" />
                            <Rate>{cart.rate}</Rate>
                            <Review>{cart.reviews} </Review>
                        </RateAndReview>
                        <PriceContainer>
                            <Price>{cart.price}<Birr>ብር</Birr></Price>
                            <OldPrice>{cart.oldPrice}<small>ብር</small></OldPrice>
                        </PriceContainer>
                        <Detail>{cart.detail}</Detail>
                        <AddToCart
                        onClick={addToBasketClick}
                        >add to Cart </AddToCart>
                    </InfoContainer>
                </Wrapper>
            )}
        </CartWrapper>
    )
}

export default CartDetail
