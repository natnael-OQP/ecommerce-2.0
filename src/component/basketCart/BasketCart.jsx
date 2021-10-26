import { Delete, FavoriteBorderTwoTone, StarRate, WatchLater } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import {
    CartInfo,
    Birr,
    Image,
    Name,
    Price,
    Rate,
    RateAndReview,
    Review,
    ItemsWrapper,
    ItemDetail,
    QuantityController,
    PriceController,
    ActionController,
    PiceValue,
    Value,
    ButtonContainer,
    DeleteContainer,
} from '.'
const BasketCart = ({id,name,imageUrl,rate,reviews,price}) => {
    return (
        <ItemsWrapper>
            <ItemDetail>
                <Image src={imageUrl} alt={name} />
                <CartInfo>
                    <Name>{name} </Name>
                    <RateAndReview>
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <Rate>{rate}</Rate>
                        <Review>{reviews}</Review>
                    </RateAndReview>
                    <Price>{price}<Birr>ብር</Birr></Price>
                </CartInfo>
            </ItemDetail>
            <QuantityController>
                <ButtonContainer>
                    <Button>-</Button>
                    <Value>3</Value>
                    <Button>+</Button>
                </ButtonContainer>
            </QuantityController>
            <PriceController>
                <PiceValue>450000<Birr>ብር</Birr></PiceValue>
            </PriceController>
            <ActionController>
                <DeleteContainer>
                    <Delete />
                </DeleteContainer>
                <FavoriteBorderTwoTone/>
            </ActionController>
        </ItemsWrapper>
    )
}

export default BasketCart
