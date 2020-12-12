import React, { FunctionComponent } from 'react';
import TimerRoute from './route';
import TimerNavigationItem from './navigation';

export interface TimerProps {}

const Timer: FunctionComponent & { Route: typeof TimerRoute; NavigationItem: typeof TimerNavigationItem } = () => {
    return <div></div>;
};

Timer.NavigationItem = TimerNavigationItem;
Timer.Route = TimerRoute;

export default Timer;
