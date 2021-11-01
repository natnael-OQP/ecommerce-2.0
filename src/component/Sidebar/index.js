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
    position:relative;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform:transition all 0.4 ease-in-out;
    display:${({ifclick})=> (ifclick ? "block" : "none" )};
`;
export const Category = styled.h5`
    margin-left: .1rem;
    font-weight:400;
    padding:.3rem .5rem;
    letter-spacing: .03rem;
    user-select: none;
    color: #ECEBEF;
    margin-bottom:.3rem;
    transition: all 0.4 ease-in-out;
    &:hover{
        transition: all 0.5 ease-in-out;
        transform: scale(1.06);
    }
`;

export const Login = styled.button`
    position: absolute;
    left:1rem;
    bottom: 2rem;
    font-weight:400;
    letter-spacing: .03rem;
    user-select: none;
    color: #ECEBEF;
    transition: all 0.4 ease-in-out;
    &:hover{
        transition: all 0.5 ease-in-out;
        transform: scale(1.06);
    }
`;