import React from 'react'
import { useSelector } from 'react-redux'
import { Info, Number,CheckOutBtn, SubTotalContainer, Rows, PiceValue, Info1, Info3, Info3Container, } from '.'
import { selectTotal, selectTotalQuantity } from '../../features/basketSlice'
import { Birr} from '../basketCart'

const Subtotal = () => {
    const total = useSelector(selectTotal);
    const items = useSelector(selectTotalQuantity);

    return (
        <SubTotalContainer>
            <Rows>
                <Info>Order Summary</Info>
                <Number>{items}</Number>
            </Rows>
            <Rows>
                <Info1>Subtotal :</Info1>
                <PiceValue>{total}<Birr>ብር</Birr></PiceValue>
            </Rows>
            <Rows>
                <Info1>Delivery Charges :</Info1>
                <Info3Container>
                    <Info3>Add your Delivery</Info3>
                    <Info3>address at checkout to</Info3>
                    <Info3>see delivery charges</Info3>
                </Info3Container>
            </Rows>
            <Rows>
                <Info>Total</Info>
                <PiceValue>{total}<Birr>ብር</Birr></PiceValue>
            </Rows>
            <CheckOutBtn role="link" >Continue to Checkout</CheckOutBtn>
        </SubTotalContainer>
    )
}

export default Subtotal
