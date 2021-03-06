import React, { FunctionComponent } from 'react';
import { ElapsedTime } from '@htnavarro/timer-lib';
import { getStopwatchDateFromElapsedTime } from '../../../util/date';
import { StyledLapTable, StyledLapEntry } from './lap-table-styles';

const LapTable: FunctionComponent<{ laps: Set<ElapsedTime> }> = ({ laps }) => {
    return (
        <StyledLapTable>
            {[...laps]
                .map((lap: ElapsedTime, lapNumber: number) => {
                    return (
                        <StyledLapEntry>
                            <span>{lapNumber + 1}</span>
                            <span>{getStopwatchDateFromElapsedTime(lap)}</span>
                        </StyledLapEntry>
                    );
                })
                .reverse()}
        </StyledLapTable>
    );
};

export default LapTable;
