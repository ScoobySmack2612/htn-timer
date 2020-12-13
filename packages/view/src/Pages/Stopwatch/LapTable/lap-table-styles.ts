import styled from 'styled-components';

export const StyledLapTable = styled.div`
    height: 200px;
    overflow-y: scroll;
`;

export const StyledLapEntry = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #d2d2d2;
    border-bottom: 1px solid #ccc;

    && {
        padding-bottom: 10px;
    }
`;
