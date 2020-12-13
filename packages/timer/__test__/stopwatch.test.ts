import moment from 'moment';
import Stopwatch from '../Stopwatch';

describe('Stopwatch', () => {
    beforeEach(() => {
        new Stopwatch().reset();
    });
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
        stopwatch.stop(oneMillisecondElapsedTime);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime()).toEqual({
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
        stopwatch.stop(oneSecondOneMillisecondElapsedTime);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime()).toEqual({
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
        stopwatch.stop(oneMinuteOneSecondOneMillisecondElapsedTime);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime()).toEqual({
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
        stopwatch.stop(oneMinuteOneSecondOneMillisecondElapsedTime);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime()).toEqual({
            minutes: 1,
            seconds: 1,
            milliseconds: 1
        });

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
        stopwatch.stop(oneMinuteOneSecondOneMillisecondElapsedTime);
        expect(stopwatch).toHaveProperty('startedAt');
        expect(stopwatch.reportElapsedTime()).toEqual({
            minutes: 1,
            seconds: 1,
            milliseconds: 1
        });

        stopwatch.reset();

        expect(stopwatch.reportElapsedTime()).toEqual({
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    });

    it('should account for pause time', () => {
        const startedAt = moment();
        const oneMinuteElapsedTime = moment(startedAt).add(1, 'minute');
        const stopwatch = new Stopwatch();
        stopwatch.start(startedAt);
        expect(stopwatch).toHaveProperty('startedAt');
        stopwatch.stop(oneMinuteElapsedTime);
        expect(stopwatch.reportElapsedTime()).toEqual({
            minutes: 1,
            seconds: 0,
            milliseconds: 0
        });

        const oneMinElapsedTimePausedOneMinute = oneMinuteElapsedTime.add(1, 'minute');
        stopwatch.start(oneMinElapsedTimePausedOneMinute);
        stopwatch.stop(oneMinElapsedTimePausedOneMinute);
        expect(stopwatch.reportElapsedTime()).toEqual({
            minutes: 1,
            seconds: 0,
            milliseconds: 0
        });
    });
});
