import styled from 'styled-components';

export const SubTotalContainer = styled.div`
    flex:.27;
    height:280px;
    padding:.4rem;
    padding-top:.8rem;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    @media (max-width:760px){
        height:250px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 0px;
        margin-bottom: .4rem;
        padding:.2rem 3rem;
    }
`;

export const Rows = styled.div`
    border-bottom: 1px solid whitesmoke;
    padding:.6rem .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:760px){
        padding:.3rem 0;
    }
`;

export const Info = styled.h5`
    font-weight: 600;
`;

export const Info1 = styled.h5`
    font-weight: 400;
`;

export const Info3Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Info3 = styled.h6`
    font-size: 9px;
    font-weight: 400;
    color:gray;
`;

export const Number = styled.h6`
    font-weight: 600;
    color:gray;
`;

export const PiceValue = styled.h4`
    font-weight:400;
    letter-spacing: .03rem;
    color:#303B46;
`;

export const CheckOutBtn = styled.button`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content:center;
    width:100%;
    height:35px;
    /* margin-top:1rem; */
    background-color: #FF9901;
    color:#fff;
    font-weight: 400;
    border-radius:3px;
    font-size: 1rem;
`;