import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    margin-top:.5rem;
    width:70%;
    height:100%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    padding-bottom:4rem;
    background-color: whitesmoke;
    position: relative;
    margin-bottom: 1rem;
`;

export const Header = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding:.2rem 0 .1rem .5rem;
    border-bottom: 1px solid lightgray;
`;

export const H4 = styled.h5`
    user-select: none;
    font-weight: 600;
    color:#1A1C2C;
`;

export const Body = styled.div`
    padding:0 1rem;
    position: relative;
`;

export const Form = styled.form`
    padding-bottom: 0 .5rem;
    width: 100%;
    overflow: hidden;
    transition: all .3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    height:${({ open }) => (open ? "160px" : "0px")};
`;

export const Btn = styled.button`
    margin-bottom: 1.5rem;
    background-color: #4888F4;
    color:#fff;
    letter-spacing:.02rem;
    font-size: 1rem;
    font-weight:400;
    display: flex;
    align-items: center;
    justify-content: center;
    width:70px;
    height:30px;
    margin-left: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: .2rem .4rem;
    margin-top: auto;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: translateY(-5px);
    }
`;

export const Message = styled.textarea`
    width:350px;
    height:110px;
    padding:.5rem;
    outline: none;
    background-color: #F8FAFB;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: .4rem 1rem 1rem .5rem;
    ::-webkit-scrollbar{
        display:none;
    };
    font-weight: 400;
    font-size:.9rem;
    overflow-y: hidden;
`;

