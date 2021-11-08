import styled from 'styled-components';

const Flexy = `{
    display: flex;
    align-items: center;
}`;

const Line = `{
    border-right-style: solid;
    border-right-color: gray;
    border-right-width: .02rem;
}`

export const BasketContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    padding:2rem 0.5rem 0rem .5rem;
    background-color: #ECEBEF;
    position: relative;
    @media (max-width:760px){
        padding:0;
        flex-direction: column-reverse;
    }
`;

export const Arrow = styled.div`
        cursor: pointer;
        z-index:999;
        position: absolute;
        top: .3rem;
        left:.6rem;
`;

export const BasketWrapper = styled.div`
    width: 100%;
    flex:.8;
    display: flex;
    flex-direction: column;
    background-color:#ECEBEF;
    margin-right: 1rem;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const BasketHeader = styled.div`
    ${Flexy};
    background-color: whitesmoke;
    height:35px;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    `;

export const ItemsDetails = styled.h5`
    ${Flexy}
    justify-content: center;
    flex:.4;
    font-weight: 400;
    letter-spacing: .03rem;
    user-select: none;
    ${Line};
    border-left-style: solid;
    border-left-color: gray;
    border-left-width: .02rem;
    height:100%;
    
`;
export const Quantity= styled.h5`
    ${Flexy}
    justify-content: center;
    flex:.2;
    font-weight: 400;
    letter-spacing: .03rem;
    user-select: none;
    ${Line};
    height:100%;
`;
export const ItemPrice = styled.h5`
    ${Flexy}
    justify-content: center;
    flex:.2;
    font-weight: 400;
    letter-spacing: .03rem;
    user-select: none;
    ${Line};
    height:100%;
`;
export const Action = styled.h5`
    ${Flexy}
    justify-content: center;
    flex:.2;
    font-weight: 400;
    letter-spacing: .03rem;
    user-select: none;
    ${Line};
    height:100%;
`;
