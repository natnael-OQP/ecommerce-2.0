import { StarRateTwoTone, StarTwoTone } from '@mui/icons-material'
import React from 'react'
import { Birr, Brand, CartContainer, CartInfo, CartWrapper, Image, ImageContainer, Name, OldPrice, Price,PriceContainer,Rate,RateAndReview, Review } from '.'

const Cart = ({image,name,brand,rate,reviews,price,oldPrice,detail}) => {
    return (
        <CartContainer>
            <CartWrapper>
                <ImageContainer>
                    <Image src={image} />
                </ImageContainer>
                <CartInfo>
                    <Name>Apple Iphone i12</Name>
                    <Brand>Apple</Brand>
                    <RateAndReview>
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <Rate>4.5</Rate>
                        <Review>9 345 reviews</Review>
                    </RateAndReview>
                    <PriceContainer>
                        <Price>24,540<Birr>ብር</Birr></Price>
                        <OldPrice> 24,000<small>ብር</small></OldPrice>
                    </PriceContainer>
                </CartInfo>
            </CartWrapper>
        </CartContainer>
    )
}

export default Cart
