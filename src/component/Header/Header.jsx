import React from 'react'
import {  FavoriteOutlined, KeyboardArrowDownSharp,  NotificationsNoneOutlined, Search, ShoppingCart, } from '@mui/icons-material';

import { Avatar, IconButton } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import {
    AddCartCounter,
    CartWrapper,
    CategoryButton,
    HeaderContainer, HederIconsContainer, Input, Logo, SearchContainer, SearchIconContainer,
} from '.'

import { selectItems } from '../../features/basketSlice';
import { search } from '../../features/searchSlice';
import logo from '../../images/logo-white.png';
import { selectUser } from '../../features/userSlice';

const Header = () => {
    const history = useHistory();
    const basket = useSelector(selectItems);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const handelSearch = (e) => {
        e.preventDefault();
        dispatch(search(e.target.value));
    }
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo" onClick={()=>history.push('/')} />
            {/* Search-Container--> */}
            <SearchContainer>
                <Input type="search" placeholder="Search..." onChange={handelSearch} />
                <CategoryButton>All Category <KeyboardArrowDownSharp fontSize="small" /> </CategoryButton>
                <SearchIconContainer>
                    <Search />
                </SearchIconContainer>
            </SearchContainer>
            {/* Icons-Container--> */}
            <HederIconsContainer>
                <IconButton>
                    <FavoriteOutlined/>
                </IconButton>
                <CartWrapper onClick={()=>history.push('/basket')} >
                    <ShoppingCart/>
                    <AddCartCounter>{basket?.length}</AddCartCounter>
                </CartWrapper>
                <IconButton>
                    <NotificationsNoneOutlined />
                </IconButton>
                <IconButton>
                    <Avatar src={user?.photo} alt={user?.name} />
                </IconButton>
            </HederIconsContainer>
        </HeaderContainer>
    )
}

export default Header
