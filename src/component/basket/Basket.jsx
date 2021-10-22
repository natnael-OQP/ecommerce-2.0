import React from 'react'
import { useSelector } from 'react-redux'
import {
    BasketContainer, BasketWrapper, CartInfo, Image
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
                            
                    </CartInfo>
                </BasketWrapper>
            )}
        </BasketContainer>
    )
}

export default Basket
