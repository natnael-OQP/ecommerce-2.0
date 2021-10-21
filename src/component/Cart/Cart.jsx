import {StarTwoTone } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Birr, Brand, CartContainer, CartInfo, CartWrapper, Image, ImageContainer, Name, OldPrice, Price,PriceContainer,Rate,RateAndReview, Review } from '.'

const Cart = ({ id, image, name, brand, rate, reviews, price, oldPrice, detail }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    
    return (
        <CartContainer>
            <CartWrapper onClick={()=>history.push('/detail')} >
                <ImageContainer>
                    <Image src={image} />
                </ImageContainer>
                <CartInfo>
                    <Name>{name}</Name>
                    <Brand>{brand}</Brand>
                    <RateAndReview>
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <Rate>{rate}</Rate>
                        <Review>{reviews}</Review>
                    </RateAndReview>
                    <PriceContainer>
                        <Price>{price}<Birr>ብር</Birr></Price>
                        <OldPrice>{oldPrice}<small>ብር</small></OldPrice>
                    </PriceContainer>
                </CartInfo>
            </CartWrapper>
        </CartContainer>
    )
}

export default Cart
