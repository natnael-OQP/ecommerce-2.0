import { ArrowBack, } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
    BasketContainer,
    BasketWrapper,
    BasketHeader,
    ItemsDetails,
    Action,
    ItemPrice,
    Quantity,
    Arrow,
} from '.'
import { selectItems } from '../../features/basketSlice'
import BasketCart from '../basketCart/BasketCart'
import Subtotal from '../Subtotal/Subtotal'
import FlipMove from 'react-flip-move';


const Basket = () => {
    const history = useHistory();
    const Items = useSelector(selectItems)

    return (
        <BasketContainer>
            <Arrow>
                <ArrowBack fontSize="medium" onClick={() => history.push('/')} />
            </Arrow>
            {Items.length === 0 ? (
                <h1>Your basket is empty 😒 </h1>
            ) : (
                <>
                    <BasketWrapper>
                        <BasketHeader>
                            <ItemsDetails>Items Detail</ItemsDetails>
                            <Quantity>Quantity</Quantity>
                            <ItemPrice>Items Price</ItemPrice>
                            <Action>Action</Action>
                        </BasketHeader>
                        <FlipMove>
                            {
                                Items.map((item) => (
                                    <BasketCart
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        imageUrl={item.imageUrl}
                                        rate={item.rate}
                                        reviews={item.reviews}
                                        price={item.price}
                                    />
                                ))
                            }
                        </FlipMove>
                    </BasketWrapper>
                    <Subtotal/>
                </>
            )}
        </BasketContainer>
    )
}

export default Basket

