import { RateReview } from '@mui/icons-material';
import { Button } from '@mui/material';
import React ,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    ReviewsContainer,
    Form,
    Message,
    Header,
    Body,
    Btn,
    H4,
} from '.';

import {selectID } from '../../features/cartSlice';
import Chat from '../chat/Chat';
import {auth, db, provider} from '../../Database/firebase'
import firebase from 'firebase/compat/app';
import { selectUser, signIn } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

const Reviews = () => {
    const [open,setOpen] = useState(false);
    const [inputs, setInputs] = useState('');
    const [messages, setMessages] = useState([]);
    const ID = useSelector(selectID);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        if (ID) {
            db.collection('reviews')
                .doc(ID)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => (
                    setMessages(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )))
        }
    }, [ID]);
    // toggle
    const toggle = () => {
        setOpen(!open);
    }
    // send Message
    const sentMessage = (e) => {
        e.preventDefault();
        db.collection("reviews").doc(ID).collection("messages").add({
            messages: inputs,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            displayName: user.name,
            email: user.email,
            photo: user.photo,
        });
        setInputs("");
        toggle();
    }
    const SignIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(signIn({
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            }))
        }).catch((error) => alert(error))
    }
    return (
        <ReviewsContainer>
            <Header>
                <H4>Positive Reviews</H4>
                {
                    !user?(
                        <Button onClick={SignIn} >
                            pleas Login 
                        </Button>
                    ) : (
                        <Button>
                            <RateReview onClick={toggle} />
                        </Button>
                        )
                }
            </Header>
            <Body>
                <Form open={open} >
                    <Message
                        type="text"
                        placeholder="write your message..."
                        value={inputs}
                        onChange={(e)=>setInputs(e.target.value)}
                    />
                    <Btn type="submit" onClick={sentMessage} >Sent</Btn>
                </Form>
                <FlipMove>
                    {
                        messages.map(({id,data})=>(
                            <Chat key={id} content={data} />
                        ))
                    }
                </FlipMove>
            </Body>
        </ReviewsContainer>
)}

export default Reviews;
