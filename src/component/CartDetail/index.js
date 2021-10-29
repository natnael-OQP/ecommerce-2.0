import styled from 'styled-components';

const Flexy = `{
    display: flex;
    align-items: center;
}`

export const CartWrapper = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding:.5rem 0 1.5rem 1rem;
    background-color: #ECEBEF;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
        scroll-behavior: smooth;
    }
    .css-i4bv87-MuiSvgIcon-root{
        cursor: pointer;
    }
`;

export const Wrapper = styled.div`
    width:70%;
    margin:0 auto;
    margin-top:1rem;
    display: flex;
    justify-content: center;
    padding:2rem ;
    /* background-color: #fff; */
`;

export const ImageContainer = styled.div`
    width:220px;;
    height:230px;
    margin-right:2rem;
    background-color: #fff;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
`;


export const Name = styled.h4`
    /* margin-top:.2rem; */
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
    /* margin:.2rem 0; */
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
    ${Flexy};
    position:relative;
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
    text-decoration: line-through;
    margin-top: .2rem;
    margin-left:.3rem;
    color:lightgray;
    font-weight:400;
    letter-spacing: .03rem;
    user-select: none;
    
`;

export const Detail = styled.h5`
    margin-top: .7rem;
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
    text-transform: capitalize;
`;