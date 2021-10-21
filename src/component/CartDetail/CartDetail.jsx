import React from 'react';
import {useSelector} from 'react-redux'
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

const CartDetail = () => {
    const cart = useSelector(selectCart);
    const { id, image, name, brand, rate, reviews, price, oldPrice, detail, } = cart;

    return (
        <CartWrapper>
            <Wrapper>
                <ImageContainer>
                    <Image src={image} alt={name} />
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
                        // add to cart 
                    >Add To Cart </AddToCart>
                </InfoContainer>
            </Wrapper>
        </CartWrapper>
    )
}

export default CartDetail
