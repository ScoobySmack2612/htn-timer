import moment from 'moment';
import Stopwatch from '../Stopwatch';

describe('Stopwatch', () => {
    it('should initialize', () => {
        const stopwatch = new Stopwatch();
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.startedAt).toEqual(null);
    });
    it('should set startedAt', () => {
        const startedAt = moment();
        const stopwatch = new Stopwatch();
        stopwatch.start(startedAt);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.startedAt).toEqual(startedAt);
    });
    it('should report millis', () => {
        const startedAt = moment();
        const oneMillisecondElapsedTime = moment().add(1, 'millisecond');
        const stopwatch = new Stopwatch();
        stopwatch.start(startedAt);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime(oneMillisecondElapsedTime)).toEqual({
            minutes: 0,
            seconds: 0,
            milliseconds: 1
        });
    });
    it('should report millis & seconds', () => {
        const startedAt = moment();
        const oneMillisecondElapsedTime = moment().add(1, 'millisecond');
        const oneSecondOneMillisecondElapsedTime = moment(oneMillisecondElapsedTime).add(1, 'second');
        const stopwatch = new Stopwatch();
        stopwatch.start(startedAt);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime(oneSecondOneMillisecondElapsedTime)).toEqual({
            minutes: 0,
            seconds: 1,
            milliseconds: 1
        });
    });
    it('should report millis & seconds & minutes', () => {
        const startedAt = moment();
        const oneMillisecondElapsedTime = moment().add(1, 'millisecond');
        const oneSecondOneMillisecondElapsedTime = moment(oneMillisecondElapsedTime).add(1, 'second');
        const oneMinuteOneSecondOneMillisecondElapsedTime = moment(oneSecondOneMillisecondElapsedTime).add(1, 'minute');
        const stopwatch = new Stopwatch();
        stopwatch.start(startedAt);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime(oneMinuteOneSecondOneMillisecondElapsedTime)).toEqual({
            minutes: 1,
            seconds: 1,
            milliseconds: 1
        });
    });
    it('should stop', () => {
        const startedAt = moment();
        const oneMillisecondElapsedTime = moment().add(1, 'millisecond');
        const oneSecondOneMillisecondElapsedTime = moment(oneMillisecondElapsedTime).add(1, 'second');
        const oneMinuteOneSecondOneMillisecondElapsedTime = moment(oneSecondOneMillisecondElapsedTime).add(1, 'minute');
        const stopwatch = new Stopwatch();
        stopwatch.start(startedAt);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime(oneMinuteOneSecondOneMillisecondElapsedTime)).toEqual({
            minutes: 1,
            seconds: 1,
            milliseconds: 1
        });

        stopwatch.stop(oneMinuteOneSecondOneMillisecondElapsedTime);

        setTimeout(() => {
            expect(stopwatch.reportElapsedTime()).toEqual({
                minutes: 1,
                seconds: 1,
                milliseconds: 1
            });
        }, 5);
    });
    it('should reset', () => {
        const startedAt = moment();
        const oneMillisecondElapsedTime = moment().add(1, 'millisecond');
        const oneSecondOneMillisecondElapsedTime = moment(oneMillisecondElapsedTime).add(1, 'second');
        const oneMinuteOneSecondOneMillisecondElapsedTime = moment(oneSecondOneMillisecondElapsedTime).add(1, 'minute');
        const stopwatch = new Stopwatch();
        stopwatch.start(startedAt);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime(oneMinuteOneSecondOneMillisecondElapsedTime)).toEqual({
            minutes: 1,
            seconds: 1,
            milliseconds: 1
        });

        stopwatch.stop(oneMinuteOneSecondOneMillisecondElapsedTime);
        stopwatch.stop(oneMinuteOneSecondOneMillisecondElapsedTime);

        expect(stopwatch.reportElapsedTime()).toEqual({
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    });
});
