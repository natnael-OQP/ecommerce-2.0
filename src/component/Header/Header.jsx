import { ArrowDownward, FavoriteOutlined, Notifications, Search, ShoppingCart,  } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import {
    AddCartCounter,
    CartWrapper,
    CategoryButton,
    HeaderContainer, HederIconsContainer, Input, Logo, SearchContainer, SearchIconContainer, SearchIcons
} from '.'
import logo from  '../../logo-white.png'
const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo" />
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
