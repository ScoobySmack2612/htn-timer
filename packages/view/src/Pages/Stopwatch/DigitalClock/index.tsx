import { FunctionComponent, useMemo } from 'react';
import { StyledDigitalClockReading, StyledDigitalClockContainer } from './digital-clock-styles';
import { ElapsedTime } from '@htnavarro/timer-lib';
import moment from 'moment';

const DigitalClock: FunctionComponent<ElapsedTime> = (props) => {
    const { minutes, seconds, milliseconds } = props;
    const displayFormatForTime = useMemo(
        () => moment().minutes(minutes).seconds(seconds).milliseconds(milliseconds).format('mm:ss:SS'),
        [minutes, seconds, milliseconds]
    );
    return (
        <article>
            <StyledDigitalClockContainer>
                <StyledDigitalClockReading>{displayFormatForTime}</StyledDigitalClockReading>
            </StyledDigitalClockContainer>
        </article>
    );
};

export default DigitalClock;
