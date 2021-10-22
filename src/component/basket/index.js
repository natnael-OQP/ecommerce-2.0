import styled from 'styled-components';

const Flexy = `{
    display: flex;
    align-items: center;
}`

export const BasketContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    display:flex;
    flex-direction: column;
    padding:.5rem 0 1.5rem 1rem;
    background-color: #ECEBEF;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
        scroll-behavior: smooth;
    }
`;

export const BasketWrapper = styled.div`
    flex:.8;
    display: flex;
`;

export const Image = styled.img`
    width:210px;;
    height:200px;
    object-fit: contain;
`;

export const CartInfo = styled.div`
    display: flex;
    flex-direction: column;
`;


export const Name = styled.h4`
    margin-top:.2rem;
    font-weight:bold;
    letter-spacing: .03rem;
    user-select: none;
    color:#303B46;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Brand = styled.h5`
    font-weight:bold;
    letter-spacing: .03rem;
    user-select: none;
    color:#218394;
    margin:.2rem 0;
`;
export const RateAndReview = styled.div`
    ${Flexy};
    /* justify-content:space-between; */
    .css-ptiqhd-MuiSvgIcon-root {
        color:gold;
        font-size:.9rem;
    }
`;

export const Rate = styled.small`
    color:gold;
    font-size: 12px;
    font-weight: bold;
`;

export const Review = styled.small`
    font-size: 9px;
    font-weight: 400;
    color:gray;
`;

export const PriceContainer = styled.div`
    display:flex;
    position:relative;
    margin-top: .2rem;
`;

export const Price = styled.h3`
    font-weight:400;
    letter-spacing: .03rem;
    margin-right:.1rem;
`;
export const Birr = styled.small`
    font-size:15px;
    font-weight: 400;
    letter-spacing: .02rem;
    color:gray;
    right:.1rem;
`;
export const OldPrice = styled.h5`
    position: absolute;
    right:.1rem;
    bottom:0;
    color:lightgray;
    font-weight:400;
    letter-spacing: .03rem;
    user-select: none;
    
`;

export const Detail = styled.p`
    margin-top: 1rem;
    font-weight:400;
    color:gray;
    letter-spacing: .03rem;
    user-select: none;
    word-wrap: break-word;
`;

export const AddToCart = styled.button`
    cursor: pointer;
    ${Flexy};
    justify-content:center;
    width:100%;
    height:40px;
    margin-top:1.2rem;
    background-color: #FF9901;
    color:#F8FAFB;
    font-weight: bold;
    border-radius:3px;
    font-size: 1.1rem;
`;

export const Sidebar = styled.div`
    flex:.2;
    background-color: #fff;
`;