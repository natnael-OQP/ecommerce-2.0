import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './Database/firebase'
import { signIn, signOut } from './features/userSlice'
import GlobalStyle from './GlobalStyled'
import HomePage from './pages/HomePage'

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn({
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL,
                }))
            } else {
                dispatch(signOut());
            }
        })
    },[])
    return (
        <>
            <GlobalStyle />
            <HomePage/>
        </>
    )
}

export default App
