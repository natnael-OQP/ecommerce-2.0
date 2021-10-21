import React from 'react';
import { StarTwoTone } from '@mui/icons-material';

import {
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

const CartDetail = ({id,detail,}) => {
    return (
        <CartWrapper>
            <Wrapper>
                <ImageContainer>
                    <Image />
                </ImageContainer>
                <InfoContainer>
                    <Name>apple iphone 12</Name>
                    <Brand>iphone</Brand>
                    <RateAndReview>
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <StarTwoTone fontSize="small" />
                        <Rate>45</Rate>
                        <Review>2,450 </Review>
                    </RateAndReview>
                    <PriceContainer>
                        <Price>15,000<Birr>ብር</Birr></Price>
                        <OldPrice>16,500<small>ብር</small></OldPrice>
                    </PriceContainer>
                    <Detail>{detail}</Detail>
                </InfoContainer>
            </Wrapper>
        </CartWrapper>
    )
}

export default CartDetail
