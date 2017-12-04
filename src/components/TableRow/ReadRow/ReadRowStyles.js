import styled from 'styled-components';

export const LineDiv = styled.div`
    align-self: center;
    box-sizing: border-box;
    display: inline-flex;
    height: 7.2rem;
    &:hover {
        background-color: white;
        box-shadow: 0px 0px 2px 1px rgb(220, 220, 220);
        outline: 2px solid rgb(220, 220, 220);
        -webkit-transform: scale(1.01, 1.01);
        -ms-transform: scale(1.01, 1.01);
        transform: scale(1.01, 1.01);
        transition: transform 0.2s ease-in-out;
    }
    justify-content: space-between;
    border-bottom: 1px solid rgb(241, 241, 241);
    overflow: hidden;
    padding-left: 1.6rem;
    width: 100%;
`;

export const TextDiv = styled.div`
    align-self: center;
    height: 100%;
    display: inherit;
    font-size: 16px;
    line-height: 24px;
`;

export const ButtonDiv = styled.div`
    align-self: center;
    height: 100%;
    display: inherit;
    float: right;
    line-height: 24px;
`;