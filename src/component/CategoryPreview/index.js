import styled from 'styled-components';

const Flexy = `
    {
        display: flex;
        align-items: center;
    }`

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:1rem;
    padding-bottom: 1rem;
`;

export const Flex = styled.div`
    ${Flexy};
    margin-bottom: .7rem;
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Title = styled.h3`
    font-weight: 600;
    letter-spacing: .02rem;
    margin-right: .3rem;
`;
