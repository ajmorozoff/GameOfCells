import styled from 'styled-components';

interface ButtonProps {
    readonly secondary: boolean;
    readonly danger: boolean;
};

export const Button = styled.button<ButtonProps>`
    padding: 1rem 1.5rem;
    margin: 0 5em;
    border-radius: 2px;
    font-size: 1rem;
    color: ${props => props.theme.fonts.filled};
    background-color: ${props => 
        props.danger 
        ? props.theme.colors.danger 
        : props.secondary
        ? props.theme.colors.secondary
        : props.theme.colors.main};
    transition: background-color 0.2s ease-in;
    &:hover {
        background-color: #07354E;
        color: #FFFFFF;
    }
    &:disabled {
        opacity: 0.3;
    }
`;