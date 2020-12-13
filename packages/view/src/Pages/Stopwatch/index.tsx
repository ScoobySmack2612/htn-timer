import React, { FunctionComponent, useEffect } from 'react';
import StopwatchRoute from './route';
import StopwatchNavigationItem from './navigation';
import DigitalClock from './DigitalClock';
import ControlBar from './ControlBar';
import { Stopwatch as StopwatchLib } from '@htnavarro/timer-lib';

export interface TimerProps {}

const Stopwatch: FunctionComponent & {
    Route: typeof StopwatchRoute;
    NavigationItem: typeof StopwatchNavigationItem;
} = () => {
    useEffect(() => {
        const stopwatch = new StopwatchLib();
    }, []);
    return (
        <div>
            <DigitalClock />
            <ControlBar />
        </div>
    );
};

Stopwatch.NavigationItem = StopwatchNavigationItem;
Stopwatch.Route = StopwatchRoute;

export default Stopwatch;
