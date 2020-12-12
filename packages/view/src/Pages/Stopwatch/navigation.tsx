import { StyledTimerRouteLink } from './stopwatch-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const StopwatchNavigationItem = () => (
    <StyledTimerRouteLink to="/">
        <FontAwesomeIcon icon={faClock} />
        Stopwatch
    </StyledTimerRouteLink>
);

export default StopwatchNavigationItem;
