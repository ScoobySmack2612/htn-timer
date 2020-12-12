import React, { FunctionComponent } from 'react';
import StopwatchRoute from './route';
import StopwatchNavigationItem from './navigation';
import StopwatchSlider from './StopwatchSlider';
import ControlBar from './ControlBar';

export interface TimerProps {}

const Stopwatch: FunctionComponent & {
    Route: typeof StopwatchRoute;
    NavigationItem: typeof StopwatchNavigationItem;
} = () => {
    return (
        <div>
            <StopwatchSlider />
            <ControlBar />
        </div>
    );
};

Stopwatch.NavigationItem = StopwatchNavigationItem;
Stopwatch.Route = StopwatchRoute;

export default Stopwatch;
