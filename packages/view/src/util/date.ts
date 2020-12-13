import { ElapsedTime } from '@htnavarro/timer-lib';
import moment from 'moment';

export const getStopwatchDateFromElapsedTime = ({ minutes, seconds, milliseconds }: ElapsedTime) => {
    return moment().minutes(minutes).seconds(seconds).milliseconds(milliseconds).format('mm:ss:SS');
};
