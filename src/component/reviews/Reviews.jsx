import React from 'react'
import { useSelector } from 'react-redux';
import {
    ReviewsContainer,
    Form,
    Message,
} from '.';
import { selectCart } from '../../features/cartSlice';
import Chat from '../chat/Chat';
const Reviews = () => {
    const reviewID = useSelector(selectCart);

    return (
        <ReviewsContainer>
            <Form>
                <Message   />
            </Form>
        <Chat />
        </ReviewsContainer>
)}

export default Reviews;
