import styled from 'styled-components';

export const RowSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 7px;
`;
export const Click = styled.button`
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    width:3px;
    height: 1.4rem;
    background-color: #FF9901;
    display:${({isClick})=>isClick ? "block" : "none" };
`;
export const RowWrapper = styled.div`
    flex: 1;
    padding:.2rem .6rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ isClick }) => isClick ? "#2D3C4C" : "" }; 
    margin-left: .6rem;
    .css-ptiqhd-MuiSvgIcon-root{
        font-size: 1.3rem !important;
        margin-right: 0.3rem !important;
        color:${({ isClick }) => isClick ? "#FF9901" : "#ECEBEF" };
        background-color: transparent !important;
    }
`;
export const Title = styled.h5`
    flex:1;
    font-weight:bold;
    width: 100%;
    letter-spacing: .03rem;
    user-select: none;
    cursor: pointer;
    color:${({ isClick }) => isClick ? "#FF9901" : "#ECEBEF" };
    text-transform: capitalize;
`;
