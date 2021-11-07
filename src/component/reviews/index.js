import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    margin-top:1rem;
    width:70%;
    height:100%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    padding:1rem;
    padding-bottom:4rem;
    background-color: whitesmoke;
    position: relative;
`;

export const Form = styled.form`
    left: 0;
    top: 0;
    padding: 1rem 1.6rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 7px;
    background-color: lightgray;
`;

export const Message = styled.textarea`
    outline: none;
`;