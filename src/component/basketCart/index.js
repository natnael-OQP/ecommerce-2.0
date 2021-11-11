import styled from 'styled-components';

const Flexy = `{
    display: flex;
    align-items: center;
}`;

export const ItemsWrapper = styled.div`
display:flex;
width: 100%;
background-color: whitesmoke;
padding:.5rem 0 .5rem .5rem;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
margin-bottom: .3rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ItemDetail = styled.div`
flex: .4;
display:flex;
overflow: hidden;
`;

export const QuantityController = styled.div`
    flex: .2;
    display: flex;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    ${Flexy};
    height:28px;
    margin-top:.85rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4pxMuiSvgIcon-root{
        min-width:40px !important;
        min-height:27px !important;
        padding:0 !important;
        color: gray !important;
        font-size:1rem !important;
    }
`;

export const PriceController = styled.div`
flex: .2;
display:flex;
justify-content: center;
`;
export const ActionController = styled.div`
    flex: .2;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .MuiSvgIcon-root{
        cursor: pointer;
    }

`;

export const Image = styled.img`
    flex:.6;
    min-width:90px;
    height:80px;
    object-fit: contain;
`;

export const CartInfo = styled.div`
flex:1;
display: flex;
flex-direction: column;
margin-left: .5rem;
overflow: hidden;
`;


export const Name = styled.h5`
    width: 100%;
    font-weight:600;
    letter-spacing: .03rem;
    user-select: none;
    color:#303B46;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;


export const RateAndReview = styled.div`
${Flexy};
padding: 0;
/* justify-content:space-between; */
.MuiSvgIcon-root {
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
    margin-left:.2rem;
    font-size: 10px;
    font-weight: 600;
    color:gray;
`;


export const Price = styled.h5`
    margin-top: 2px;
    font-weight:400;
    letter-spacing: .03rem;
    color:gray;
`;

export const Birr = styled.small`
    font-size:13px;
    font-weight: 400;
    letter-spacing: .02rem;
    color:4888F4;
    right:.1rem;
    font-family:'Poppins' sans-serif;
    color:lightgray;
`;
export const Sold = styled.small`
    font-size:13px;
    font-weight: 400;
    letter-spacing: .02rem;
    color:4888F4;
    right:.1rem;
    font-family:'Poppins' sans-serif;
    color:#4888F4;
`;


export const Detail = styled.p`
margin-top: 1rem;
font-weight:400;
color:gray;
letter-spacing: .03rem;
user-select: none;
word-wrap: break-word;
`;

export const Value = styled.button`
    cursor: cell;
    ${Flexy};
    justify-content:center;
    width:36px;
    height:28px;
    background-color: #F8FAFB;
    color:#303B46;
    font-weight: 600;
    font-size: 1rem;
    border-right: 1px solid gray;
    border-left: 1px solid gray;
    user-select: none;
`;

export const PiceValue = styled.h3`
    margin-top: .85rem;
    font-weight:400;
    padding:.3rem .2rem;
    letter-spacing: .03rem;
    color:gray;
`;

export const DeleteContainer = styled.div`
    transition: all .9s ease;
    .MuiSvgIcon-root{
        color:#DC1623;
        &:hover {
            transform:rotate(20deg);
        }
    }
`;