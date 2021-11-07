import { Avatar } from '@mui/material'
import React from 'react'
import {
    ChatContainer,
    ReviewsContent
} from '.'

const Chat = ({id,data:{message,name,photo,timeStamp,}}) => {
    return (
        <ChatContainer>
            <Avatar src={photo} />
            <ReviewsContent>{message}</ReviewsContent>
        </ChatContainer>
    )
}

export default Chat
