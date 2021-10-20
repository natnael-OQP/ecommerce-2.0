import { StarTwoTone } from '@mui/icons-material'
import React from 'react'
import { CartContainer, CartInfo, CartWrapper, Image, ImageContainer, Price,RateAndReview } from '.'

const Cart = ({title,image}) => {
    return (
        <CartContainer>
            <CartWrapper>
                <ImageContainer>
                    <Image  />
                </ImageContainer>
                <CartInfo>
                    <RateAndReview>
                        <h3>{image}</h3>
                        <StarTwoTone />
                        <h5>4.5</h5>
                    </RateAndReview>
                    <Price>
                        <h5>4500</h5>
                        <delete>6000</delete>
                    </Price>
                </CartInfo>
            </CartWrapper>
        </CartContainer>
    )
}

export default Cart
