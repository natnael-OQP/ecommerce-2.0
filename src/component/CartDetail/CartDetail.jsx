import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { StarTwoTone } from '@mui/icons-material';

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

const CartDetail = () => {
    const [carts,setCarts] = useState();
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const { id, imageUrl, name, brand, rate, reviews, price, oldPrice, detail, } = cart;
    
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
    }

    return (
        <CartWrapper>
            <Wrapper>
                <ImageContainer>
                    <Image src={imageUrl} alt={name} />
                </ImageContainer>
                <InfoContainer>
                    <Name>{name}</Name>
                    <Brand>{brand}</Brand>
                    <RateAndReview>
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
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
