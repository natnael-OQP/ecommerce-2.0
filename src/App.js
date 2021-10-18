import React from 'react'
import GlobalStyle from './GlobalStyled'
import Shop_Data from './Data/Shop.Data'

const App = () => {
    return (
        <>
            <GlobalStyle />
            {
                Shop_Data.map(({id,title,path,items}) => (
                    <h1>{title}</h1>
                ))
            }
            <img src="https://dynamic.brandcrowd.com/preview/logodraft/348737be-e49b-4d53-ae50-500091b33e38/image/large.png" alt="logo" />
        </>
    )
}

export default App
