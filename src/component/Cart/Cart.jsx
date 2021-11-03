import React, { useEffect, useState } from 'react'
import {StarRate, } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Birr, Brand, CartContainer, CartInfo, CartWrapper, Image, ImageContainer, Name, OldPrice, Price,PriceContainer,Rate,RateAndReview, Review } from '.'
import { cartInfo } from '../../features/cartSlice';
import { db } from '../../Database/firebase';

const Cart = ({ id, imageUrl, name, brand, rate, reviews, price, oldPrice, detail,quantity }) => {
    const [reviewsID, setReviewsID] = useState('');
    useEffect(() => {
        db.collection('reviews').onSnapshot((snapshot) => (
            setReviewsID(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(cartInfo({
            id,
            imageUrl,
            name,
            brand,
            rate,
            reviews,
            price,
            oldPrice,
            detail,
            quantity,
            reviewsID,
        }));
        history.push('/detail');

        db.collection('reviews').add({
            ItemName:name+id,
        })
    }
    
    return (
        <CartContainer>
            <CartWrapper onClick={handleClick} >
                <ImageContainer>
                    <Image src={imageUrl} />
                </ImageContainer>
                <CartInfo>
                    <Name>{name}</Name>
                    <Brand>{brand}</Brand>
                    <RateAndReview>
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
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
