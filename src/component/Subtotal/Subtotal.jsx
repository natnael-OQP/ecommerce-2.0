import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Info, Number,CheckOutBtn, SubTotalContainer, Rows, PiceValue, Info1, Info3, Info3Container, } from '.'
import { auth, provider } from '../../Database/firebase'
import { selectTotal, selectTotalQuantity } from '../../features/basketSlice'
import { selectUser, signIn } from '../../features/userSlice'
import { Birr} from '../basketCart'
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const Subtotal = () => {
    const total = useSelector(selectTotal);
    const items = useSelector(selectTotalQuantity);
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const SignIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(signIn({
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            }))
        }).catch((error) => alert(error))
    }
    // const createCheckoutSessions = () => {
    // }
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
            {
                user ? (
                    <CheckOutBtn role="link" >Continue to Checkout</CheckOutBtn>
                ): (
                    <CheckOutBtn onClick={SignIn}  >Sign in to checkout </CheckOutBtn>
                )
            }
        </SubTotalContainer>
    )
}

export default Subtotal
