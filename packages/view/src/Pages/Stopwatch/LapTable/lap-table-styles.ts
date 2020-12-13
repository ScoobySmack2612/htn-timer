import styled from 'styled-components';

export const StyledLapTable = styled.div`
    height: 200px;
    overflow-y: scroll;
`;

export const StyledLapEntry = styled.p`
    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        left: 30px;
        top: -30px;
        z-index: -1;
    }
`;
