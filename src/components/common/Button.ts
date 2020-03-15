import styled from 'styled-components';

export default styled.button`
    padding: 0.5em 1em;
    margin: 0 5em;
    border-radius: 3px;
    font-size: 1rem;
    background-color: rgb(22, 36, 59);
    color: #BBC7CE; 
    &:hover {
        background-color: #07354E;
        color: #FFFFFF;
    }
    &:disabled {
        opacity: 0.3;
    }
`;