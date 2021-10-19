import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    flex:.24;
    background-color:#060608;
    color:#ECEBEF;
    padding-top:.7rem;
    padding-right:.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    display:${({isClick})=>isClick ? "block" : "none" };
`;
export const Category = styled.h5`
    margin-left: 1rem;
    font-weight:400;
    padding:.3rem .5rem;
    letter-spacing: .03rem;
    user-select: none;
    color: #ECEBEF;
    margin-bottom:.3rem;
`;
