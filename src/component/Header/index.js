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
    .MuiSvgIcon-root{
        color:#fff;
    }
    @media (max-width:767px){
        padding:0;
    }
`;

export const Logo = styled.img`
    cursor: pointer;
    width:150px;
    height:30px;
    object-fit: contain;
    background-color: transparent;
    @media (min-width:767px){
        width:80px;
        height:30px;
    }
    @media (max-width:530px){
        display: none;
    }
`;

export const SearchContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height:33px;
    max-width:460px;
    border:1px solid #303B46;
    border-radius: 5px;
    margin-left: 5px;
`;

export const Input = styled.input`
    height:100%;
    width:100%;
    padding:2px 5px;
    font-weight: 400;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    background-color: #212D3C;
    color:#ECEBEF;
    `;

export const CategoryButton = styled.button`
    background-color: #212D3C;
    width:170px;
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
    color:#ECEBEF;
    @media (max-width:480px){
        width:20px;
        span{
            display:none;
        }
    }
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
    width:32px;
    height:32px;
    border-radius: 5px;
    background-color: #FF9901 ;
    cursor: pointer;
    padding:5px;
    .MuiSvgIcon-root{
        font-size: 1.3rem;
    }
`;

export const AddCartCounter = styled.small`
    background-color: #fff ;
    height:17px;
    width:17px;
    border-radius: 7px;
    color:#060608;
    position:absolute;
    top:-9px;
    right: -7px;
    display:flex;
    align-items:center;
    justify-content:center;
    user-select: none;
    font-weight:600;
    font-size:12px;
`;