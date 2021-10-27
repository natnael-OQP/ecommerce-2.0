import React,{forwardRef, useState } from 'react'
import { Button } from '@mui/material'
import { Delete, FavoriteBorderTwoTone, StarRate,  } from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
} from '.';
import { removeFromBasket } from '../../features/basketSlice';

const BasketCart = forwardRef(({id,name,imageUrl,rate,reviews,price},ref) => {
    const dispatch = useDispatch();
    const [values,setValue] = useState(1);
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
                    <Price>{price}<Birr>ብር</Birr></Price>
                </CartInfo>
            </ItemDetail>
            <QuantityController>
                <ButtonContainer>
                    <Button onClick={() => {
                        values <= 1 ? (dispatch(removeFromBasket({id}))
                        ) : (
                                setValue(values-1)
                            )
                    }} >-</Button>
                    <Value>{values}</Value>
                    <Button onClick={()=>setValue(values+1)}>+</Button>
                </ButtonContainer>
            </QuantityController>
            <PriceController>
                <PiceValue>{values*price}<Birr>ብር</Birr></PiceValue>
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
