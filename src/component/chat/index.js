import styled from 'styled-components';

export const ChatContainer = styled.div`
    margin-top:1rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #E6E9EA;
    padding:.5rem;
`;

export const Header = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: .5rem;
    padding:0 .5rem;
    position: relative;
`;

export const Name = styled.h5`
    color: #355B98;
    font-weight:600;
    margin-left: .5rem;
`;

export const ReviewsContent = styled.h5`
    font-weight: 600;
    margin-left: .5rem;
    word-wrap: break-word;
    padding:.2rem 1.2rem;
    color:#32333B;
`;
export const Time = styled.h4`
    position: absolute;
    top:.2rem;
    right:.5rem;
    font-weight:400;
    font-size:12px;
    color:gray;
`;

