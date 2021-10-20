import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height:60px;
    background-color:#060608;
    color:#ECEBEF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 15px;
    border-bottom: 1.3px solid #303B46;
`;

export const Logo = styled.img`
    cursor: pointer;
    width:150px;
    height:30px;
    object-fit: contain;
    background-color: transparent;
`;

export const SearchContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height:33px;
    max-width:450px;
    border:1px solid #303B46;
    border-radius: 5px;
`;

export const Input = styled.input`
    height:100%;
    width:100%;
    padding:2px 5px;
    font-weight: 400;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    background-color: #212D3C;
    `;

export const CategoryButton = styled.button`
    background-color: #212D3C;
    width:150px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-left-style: solid;
    border-left-color: #303B46;
    border-left-width: .02rem;
    font-weight:400;
    letter-spacing: .03rem;
    cursor: pointer;
`;

export const SearchIconContainer = styled.button`
    width:50px;
    display:flex;
    align-items: center;
    justify-content: center;
    padding:0 .4rem;
    height: 100%;
    background-color: #FF9901 !important;
    cursor: pointer;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    .MuiSvgIcon-root{
        color:#ECEBEF;
        height: 100%;
        font-size: 1.3rem;
    }
`;

export const HederIconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex:.2;
    .MuiIconButton-root{
    }
    .MuiSvgIcon-root{

    }
`;

export const CartWrapper = styled.div`
    position: relative;
    display: flex;
    align-items:center;
    justify-content: center;
    width:30px;
    height:30px;
    border-radius: 5px;
    background-color: #FF9901 ;
    cursor: pointer;
    padding:5px;
    .MuiSvgIcon-root{
        font-size: 1.3rem;
    }
`;

export const AddCartCounter = styled.small`
    background-color: #ECEBEF ;
    height:14px;
    width:14px;
    border-radius: 50%;
    color:#060608;
    position:absolute;
    top:-7px;
    right: -5px;
    display:flex;
    align-items:center;
    justify-content:center;
    user-select: none;
    font-weight:400;
`;