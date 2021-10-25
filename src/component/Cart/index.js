import styled from 'styled-components';
const Flexy = `{
        display: flex;
        align-items: center;
}`;

export const CartContainer = styled.div`
    cursor: w-resize;
`;

export const CartWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width:150px;
    height:310px;
    margin-right: 1rem;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height:190px;
    border-radius: 12px;
    background-color: #fff;
    margin-bottom:.5rem;
    padding:.5rem;  
`;

export const Image = styled.img`
    width: 100%;
    height:100%;
    object-fit: contain;
    border-radius: 10px;

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
    justify-content:space-between;
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
    text-decoration:line-through;
`;