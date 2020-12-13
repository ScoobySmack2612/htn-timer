import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkAsButton } from '../../app-styles';

export const StyledTimerRouteLink = styled(Link)`
    ${LinkAsButton};
`;

export const StyledStopwatchContainer = styled.div`
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
