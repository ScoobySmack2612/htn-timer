import styled from 'styled-components';
import { StyledRoundedButton } from '../../../app-styles';

export const StyledControlBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledControlButton = styled.button`
    ${StyledRoundedButton};
    width: 60px;
    height: 60px;
`;
