import styled from 'styled-components';

export const ModalDiv = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    box-sizing: border-box;
    height: auto;
    left: 15%;
    opacity: ${({ visible }) => visible ? 100 : 0};
    padding: 25px 16px;
    position: fixed;
    top: 30%;
    transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(100vh)'};
    transition: all 0.3s ease-out;
    vertical-align: middle;
    width: 70%;
    z-index: 100;
}`;
