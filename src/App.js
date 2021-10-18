import React from 'react'
import GlobalStyle from './GlobalStyled'
import Shop_Data from './Data/Shop.Data'
import PopularCategories from './Data/Icons'
import { IconButton } from '@mui/material'

const App = () => {
    return (
        <>
            <GlobalStyle />
            {
                Shop_Data.map(({id,title,path,items}) => (
                    <h1>{title}</h1>
                ))
            }
            {
                PopularCategories.map((title,Icons) => (
                    Icons.map((icon) => (
                        <IconButton>{icon}</IconButton>
                    ))
                ))
            }
            <img src="https://dynamic.brandcrowd.com/preview/logodraft/348737be-e49b-4d53-ae50-500091b33e38/image/large.png" alt="logo" />
        </>
    )
}

export default App
