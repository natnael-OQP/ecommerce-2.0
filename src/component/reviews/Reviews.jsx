import { RateReview } from '@mui/icons-material';
import { Button } from '@mui/material';
import React ,{useState} from 'react'
import { useSelector } from 'react-redux';
import {
    ReviewsContainer,
    Form,
    Message,
    Header,
    Body,
    Btn,
    H4,
} from '.';

import Chat from '../chat/Chat';

const Reviews = () => {
    const [open,setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    const [input, setInput] = useState('');
    const sendReview = (e) => {
        e.preventDefault();
    }
    
    return (
        <ReviewsContainer>
            <Header>
                <H4>Positive Reviews</H4>
                <Button>
                    <RateReview onClick={toggle} />
                </Button>
            </Header>
            <Body>
                <Form open={open} >
                    <Message value={input} onChange={(e) => setInput(e.target.value) } placeholder="wright your Message..." cols="60" rows="6"  />
                    <Btn type="submit" onClick={sendReview} >Sent</Btn>
                </Form>
                <Chat />
                <Chat />
                <Chat />
            </Body>
        </ReviewsContainer>
)}

export default Reviews;
