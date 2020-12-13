import React, { FunctionComponent, useEffect, useState } from 'react';
import StopwatchRoute from './route';
import StopwatchNavigationItem from './navigation';
import DigitalClock from './DigitalClock';
import ControlBar from './ControlBar';
import { ElapsedTime, Stopwatch } from '@htnavarro/timer-lib';
import { StyledStopwatchContainer } from './stopwatch-styles';
import LapTable from './LapTable';

const StopwatchPage: FunctionComponent & {
    Route: typeof StopwatchRoute;
    NavigationItem: typeof StopwatchNavigationItem;
} = () => {
    const [elapsedTime, setElapsedTime] = useState<ElapsedTime>({ minutes: 0, seconds: 0, milliseconds: 0 });
    const [laps, setLaps] = useState<Set<ElapsedTime>>(new Set());
    const [inProgress, setInProgress] = useState(false);
    const stopwatch = new Stopwatch();

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (stopwatch.inProgress) {
            // @ts-ignore
            interval = setInterval(() => {
                setElapsedTime(stopwatch.reportElapsedTime());
            }, 1);
        }
        return () => {
            clearInterval(interval);
        };
    }, [inProgress, stopwatch?.inProgress]);

    const startStopwatch = () => {
        stopwatch.start();
        setInProgress(true);
    };

    const stopStopwatch = () => {
        stopwatch.stop();
        setInProgress(false);
    };

    const resetStopwatch = () => {
        stopwatch.reset();
        setElapsedTime(stopwatch.reportElapsedTime());
        setInProgress(false);
        setLaps(stopwatch.getLaps());
    };

    const lapStopwatch = () => {
        stopwatch.lap();
        setLaps(stopwatch.getLaps());
    };

    const isStopwatchAtZero =
        (Object.keys(elapsedTime) as Array<keyof ElapsedTime>).filter((k) => elapsedTime[k] !== 0).length === 0;

    return (
        <StyledStopwatchContainer>
            <DigitalClock {...elapsedTime} />
            <ControlBar
                inProgress={inProgress}
                isDirty={!isStopwatchAtZero}
                start={startStopwatch}
                stop={stopStopwatch}
                reset={resetStopwatch}
                lap={lapStopwatch}
            />
            <LapTable laps={laps} />
        </StyledStopwatchContainer>
    );
};

StopwatchPage.NavigationItem = StopwatchNavigationItem;
StopwatchPage.Route = StopwatchRoute;

export default StopwatchPage;
