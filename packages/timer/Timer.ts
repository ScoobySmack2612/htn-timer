import moment, { Moment } from 'moment';

type TimerConfiguration = {
    expires?: Moment;
    milliseconds?: number
    seconds?: number
    hours?: number
}
export class Timer {
    expires: Moment;
    seconds: number;
    milliseconds: number;
    hours: number;

    constructor(configuration?: TimerConfiguration) {
        if (typeof configuration === 'object') {
            const { expires, milliseconds, seconds, hours } = configuration;
            this.expires = expires;
            this.milliseconds = milliseconds;
            this.seconds = seconds;
            this.hours = hours;
        }

        this.expires = null;
        this.milliseconds = 0;
        this.seconds = 0;
        this.hours = 0;
    }

    setMilliseconds(milliseconds: number) {
        this.milliseconds = milliseconds;
    }

    setSeconds(seconds: number) {
        this.seconds = seconds;
    }
    setHours(hours: number) {
        this.hours = hours;
    }

    setExpiration(startedAt: Moment) {
        const millisInHours = Math.floor(this.hours * 60 * 60 * 1000);
        const millisInSeconds = Math.floor(this.seconds * 1000);

        this.expires = moment(startedAt).add(millisInHours + millisInSeconds + this.milliseconds, 'milliseconds')
    }

    start(startedAt: Moment = moment()) {
        this.setExpiration(startedAt)
    }

}
