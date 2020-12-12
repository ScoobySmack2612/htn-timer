import { StyledTimerRouteLink } from './timer-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const TimerNavigationItem = () => (
    <StyledTimerRouteLink to="/">
        <FontAwesomeIcon icon={faClock} />
        Timer
    </StyledTimerRouteLink>
);

export default TimerNavigationItem;
