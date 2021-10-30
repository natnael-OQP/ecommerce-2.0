import React from 'react'
import { Info, Number,CheckOutBtn, SubTotalContainer, Rows, PiceValue, Info1, Info3, Info3Container, } from '.'
import { Birr} from '../basketCart'

const Subtotal = () => {
    return (
        <SubTotalContainer>
            <Rows>
                <Info>Order Summary</Info>
                <Number>1 items</Number>
            </Rows>
            <Rows>
                <Info1>Subtotal :</Info1>
                <PiceValue>2000<Birr>ብር</Birr></PiceValue>
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
                <PiceValue>2000<Birr>ብር</Birr></PiceValue>
            </Rows>
            <CheckOutBtn>Continue to Checkout</CheckOutBtn>
        </SubTotalContainer>
    )
}

export default Subtotal
