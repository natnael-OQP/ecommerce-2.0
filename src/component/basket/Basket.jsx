import { ArrowBack, StarTwoTone } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
    BasketContainer,
    BasketWrapper,
    Sidebar,
    BasketHeader,
    ItemsDetails,
    Action,
    ItemPrice,
    Quantity,
    Arrow,
} from '.'
import { selectItems } from '../../features/basketSlice'
import BasketCart from '../basketCart/BasketCart'


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
                            {
                                Items.map((item) => (
                                    <BasketCart
                                        id={item.id}
                                        name={item.name}
                                        imageUrl={item.imageUrl}
                                        rate={item.rate}
                                        reviews={item.reviews}
                                        price={item.price}
                                    />
                                ))
                            }
                    </BasketWrapper>
                    <Sidebar>
                        <h5>sidebar</h5>    
                    </Sidebar>
                </>
            )}
        </BasketContainer>
    )
}

export default Basket

