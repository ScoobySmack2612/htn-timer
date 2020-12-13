import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import StopwatchRoute from './route';
import StopwatchNavigationItem from './navigation';
import DigitalClock from './DigitalClock';
import ControlBar from './ControlBar';
import moment from 'moment';
import { ElapsedTime, Stopwatch, StopwatchLaps } from '@htnavarro/timer-lib';
import { StyledStopwatchContainer } from './stopwatch-styles';

const StopwatchPage: FunctionComponent & {
    Route: typeof StopwatchRoute;
    NavigationItem: typeof StopwatchNavigationItem;
} = () => {
    const [elapsedTime, setElapsedTime] = useState<ElapsedTime>({ minutes: 0, seconds: 0, milliseconds: 0 });
    const [laps, setLaps] = useState<Set<StopwatchLaps>>(new Set());
    const [inProgress, setInProgress] = useState(false);
    const stopwatch = useMemo(() => new Stopwatch(), []);

    let mountInterval = () => {
        return setInterval(() => {
            setElapsedTime(stopwatch.reportElapsedTime());
        }, 1);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (stopwatch.inProgress) {
            // @ts-ignore
            interval = mountInterval();
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
        const endAt = moment();

        stopwatch.stop();
        setInProgress(false);
    };

    const resetStopwatch = () => {
        stopwatch.reset();
        setElapsedTime(stopwatch.reportElapsedTime());
        setInProgress(false);
    };

    const lapStopwatch = () => {
        stopwatch.lap();
        stopwatch.getLaps();
    };

    return (
        <StyledStopwatchContainer>
            <DigitalClock {...elapsedTime} />
            <ControlBar
                inProgress={inProgress}
                isDirty={
                    (Object.keys(elapsedTime) as Array<keyof ElapsedTime>).filter((k) => elapsedTime[k] !== 0).length >
                    0
                }
                start={startStopwatch}
                stop={stopStopwatch}
                reset={resetStopwatch}
                lap={lapStopwatch}
            />
        </StyledStopwatchContainer>
    );
};

StopwatchPage.NavigationItem = StopwatchNavigationItem;
StopwatchPage.Route = StopwatchRoute;

export default StopwatchPage;
