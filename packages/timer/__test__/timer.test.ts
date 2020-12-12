import { Timer } from '../Timer';
import moment = require('moment');

describe('Timer', () => {
    it('Timer initializes', () => {
        const timer = new Timer();
        expect(timer).toHaveProperty('expires');
        expect(timer.expires).toEqual(null);
    })
    it('accepts milliseconds', () => {
        const timer = new Timer();
        const startTime = moment();
        timer.setMilliseconds(1)
        timer.start(startTime)

        expect(timer.expires.diff(startTime, 'milliseconds')).toEqual(1);
    })
    it('accepts seconds', () => {
        const timer = new Timer();
        const startTime = moment();
        timer.setSeconds(1)
        timer.start(startTime)

        expect(timer.expires.diff(startTime, 'second')).toEqual(1);
    })
    it('accepts hours', () => {
        const timer = new Timer();
        const startTime = moment();
        timer.setHours(1)
        timer.start(startTime)

        expect(timer.expires.diff(startTime, 'hours')).toEqual(1);
    })
})
