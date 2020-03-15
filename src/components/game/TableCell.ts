import styled from 'styled-components';

interface CellProps {
    readonly cellColor: string;
};

//TODO: make the size dynamic
export default styled.td<CellProps>`
    outline-width: 1px;
    outline-style: solid;
    outline-color: ${props => props.theme.colors.secondary};
    background: ${props => props.cellColor};
    margin: 0;
    padding: 0;
    height: 24px;
    width: 24px;
`;