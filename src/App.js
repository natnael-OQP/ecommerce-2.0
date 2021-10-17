import React from 'react'
import GlobalStyle from './GlobalStyled'
import Shop_Data from './Data/Shop.Data'

const App = () => {
    return (
        <>
            <GlobalStyle />
            {
                Shop_Data.map(({id,title,path,items}) => (
                    items.map(({ name }) => (
                        <h1>{name}</h1>
                    ))
                ))
            }
        </>
    )
}

export default App
