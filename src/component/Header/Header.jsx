import { ArrowDownward, FavoriteOutlined, Notifications, Search, ShoppingCart,  } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import {
    AddCartCounter,
    CartWrapper,
    CategoryButton,
    HeaderContainer, HederIconsContainer, Input, Logo, SearchContainer, SearchIconContainer, SearchIcons
} from '.'
import logo from  '../../logo-white.png'
const Header = () => {
    const history = useHistory();
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo" onClick={()=>history.push('/')} />
            {/* Search-Container--> */}
            <SearchContainer>
                <Input type="search" placeholder="Search..." />
                <CategoryButton>All Category <ArrowDownward fontSize="small" /> </CategoryButton>
                <SearchIconContainer>
                    <Search />
                </SearchIconContainer>
            </SearchContainer>
            {/* Icons-Container--> */}
            <HederIconsContainer>
                <IconButton>
                    <FavoriteOutlined/>
                </IconButton>
                <CartWrapper>
                    <ShoppingCart/>
                    <AddCartCounter>1</AddCartCounter>
                </CartWrapper>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
            </HederIconsContainer>
        </HeaderContainer>
    )
}

export default Header
