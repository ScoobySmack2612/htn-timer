import { FunctionComponent, useMemo } from 'react';
import { StyledDigitalClockReading, StyledDigitalClockContainer } from './digital-clock-styles';
import { ElapsedTime } from '@htnavarro/timer-lib';
import { getStopwatchDateFromElapsedTime } from '../../../util/date';

const DigitalClock: FunctionComponent<ElapsedTime> = (props) => {
    const { minutes, seconds, milliseconds } = props;
    const displayFormatForTime = useMemo(() => getStopwatchDateFromElapsedTime(props), [
        minutes,
        seconds,
        milliseconds
    ]);
    return (
        <article>
            <StyledDigitalClockContainer>
                <StyledDigitalClockReading>{displayFormatForTime}</StyledDigitalClockReading>
            </StyledDigitalClockContainer>
        </article>
    );
};

export default DigitalClock;
