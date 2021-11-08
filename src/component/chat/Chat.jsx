import React,{forwardRef} from 'react'
import { Avatar } from '@mui/material'
import {
    ChatContainer,
    Header,
    Name,
    ReviewsContent,
    Time
} from '.'
import * as timeago from 'timeago.js';


const Chat = forwardRef(({ content: { messages, displayName, photo, timestamp } },ref) => {
    return (
        <>
            <ChatContainer ref={ref}>
                <Header>
                    <Avatar src={photo} alt={displayName} />
                    <Name>{displayName}</Name>
                    <Time>{timeago.format(new Date(timestamp?.toDate()))}</Time>
                </Header>
                <ReviewsContent>{messages}</ReviewsContent>
            </ChatContainer>
        </>
    )
})

export default Chat
