import React,{forwardRef, useState } from 'react'
import { Button } from '@mui/material'
import { Delete, FavoriteBorderTwoTone, StarRate,  } from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { CartInfo, Birr, Image, Name, Price, Rate, RateAndReview, Review, ItemsWrapper, ItemDetail, QuantityController, PriceController, ActionController, PiceValue, Value, ButtonContainer, DeleteContainer, Sold,} from '.';
import { addToBasket, removeFromBasket, } from '../../features/basketSlice';

const BasketCart = forwardRef(({id,name,imageUrl,rate,reviews,price,quantity},ref) => {
    const dispatch = useDispatch();
    return (
        <ItemsWrapper ref={ref} >
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
                    <Price>Sold by <Sold>E-suke</Sold></Price>
                </CartInfo>
            </ItemDetail>
            <QuantityController>
                <ButtonContainer>
                    <Button onClick={
                        () => dispatch(removeFromBasket({ id }))
                    }>-</Button>
                    <Value>{quantity}</Value>
                    <Button onClick={()=>dispatch(addToBasket({id,name,imageUrl,rate,reviews,price,quantity}))}>+</Button>
                </ButtonContainer>
            </QuantityController>
            <PriceController>
                <PiceValue>{price}<Birr>ብር</Birr></PiceValue>
            </PriceController>
            <ActionController>
                <DeleteContainer>
                    <Delete onClick={()=>dispatch(removeFromBasket({id}))} />
                </DeleteContainer>
                <FavoriteBorderTwoTone/>
            </ActionController>
        </ItemsWrapper>
    )
})

export default BasketCart
