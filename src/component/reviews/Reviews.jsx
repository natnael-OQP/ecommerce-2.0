import { RateReview } from '@mui/icons-material';
import { Button } from '@mui/material';
import React ,{useEffect, useState} from 'react'
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

import { selectCart, selectID } from '../../features/cartSlice';
import Chat from '../chat/Chat';
import {db} from '../../Database/firebase'
import firebase from 'firebase/compat/app';
import { selectUser } from '../../features/userSlice';

const Reviews = () => {
    const [open,setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const ID = useSelector(selectID);
    const user = useSelector(selectUser);
    useEffect(() => {
        if (ID) {
            db.collection('reviews')
                .doc(ID)
                .collection('messages')
                .orderBy('timeStamp', 'desc')
                .onSnapshot((snapshot) => (
                    setMessages(
                        snapshot.docs.map((doc) => ({
                            data: doc.data(),
                        }))
                    )
                ))
        }
    }, [ID]);
    // toggle
    console.log(ID);
    const toggle = () => {
        setOpen(!open);
    }
    // send Message
    const sendReview = (e) => {
        e.preventDefault();
        db.collection('reviews').doc(ID).collection('messages').add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            name: user.name,
            photo: user.photo,
            email: user.email,
            id: user.id,
        })
        setInput("")
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
                {
                    messages.map(({id,data}) => (
                        <Chat key={id}  data={data} />
                    ))
                }
                
            </Body>
        </ReviewsContainer>
)}

export default Reviews;
