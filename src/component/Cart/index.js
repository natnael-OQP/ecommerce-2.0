import styled from 'styled-components';
const Flexy = `{
        display: flex;
        align-items: center;
}`;

export const CartContainer = styled.div`
    
`;

export const CartWrapper = styled.div`
    flex-direction: column;
    width:160px;
    height:200px;
    border: 1px solid #060608;
    margin-right: 1rem;
    
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    
`;

export const Image = styled.img`
    
`;

export const CartInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RateAndReview = styled.div`
    ${Flexy};
`;

export const Price = styled.div`
    ${Flexy};
`;