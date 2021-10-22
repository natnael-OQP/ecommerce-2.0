import { StarTwoTone } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import {
    BasketContainer,
    BasketWrapper,
    Brand,
    CartInfo,
    AddToCart,
    Birr,
    Detail,
    Image,
    Name,
    OldPrice,
    Price,
    PriceContainer,
    Rate,
    RateAndReview,
    Review,
} from '.'
import { selectItems } from '../../features/basketSlice'


const Basket = () => {
    
    const Items = useSelector(selectItems)

    return (
        <BasketContainer>
            {Items.length === 0 ? (
                <h1>Your basket is empty</h1>
            ) : (
                <BasketWrapper>
                    <Image />
                    <CartInfo>
                        <Name>name</Name>
                        <Brand>brand</Brand>
                        <RateAndReview>
                            <StarTwoTone fontSize="small" />
                            <StarTwoTone fontSize="small" />
                            <StarTwoTone fontSize="small" />
                            <StarTwoTone fontSize="small" />
                            <StarTwoTone fontSize="small" />
                            <Rate>rate</Rate>
                            <Review>reviews </Review>
                        </RateAndReview>
                        <PriceContainer>
                            <Price>price<Birr>ብር</Birr></Price>
                            <OldPrice>oldPrice<small>ብር</small></OldPrice>
                        </PriceContainer>
                        <Detail>detail</Detail>
                        </CartInfo>
                        <AddToCart>Remove to Basket</AddToCart>
                </BasketWrapper>
            )}
        </BasketContainer>
    )
}

export default Basket
