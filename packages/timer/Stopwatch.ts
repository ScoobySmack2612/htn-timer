import moment, { Moment } from 'moment';

export type StopwatchConfiguration = {
    startedAt?: Moment;
};

export type StopwatchElapsedTime = {
    minutes: number;
    seconds: number;
    milliseconds: number;
};

class Stopwatch {
    startedAt: Moment | null;
    endedAt: Moment | null;
    laps: [Moment];

    constructor(configuration?: StopwatchConfiguration) {
        if (typeof configuration === 'object') {
            const { startedAt } = configuration;

            this.startedAt = startedAt;
        }

        this.startedAt = null;
        this.endedAt = null;
    }

    start = (startedAt: Moment = moment()) => {
        this.startedAt = startedAt;
    };

    stop = (stopAt: Moment = moment()) => {
        if (!this.endedAt) {
            this.endedAt = stopAt;
        }

        this.startedAt = null;
        this.endedAt = null;
    };

    lap = (lappedAt: Moment = moment()) => {
        this.laps.push(lappedAt);
    };

    reportElapsedTime = (reportAt: Moment = moment()): StopwatchElapsedTime => {
        if (!this.startedAt) {
            return {
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            };
        }

        const reportAtBase = !!this.endedAt ? this.endedAt : reportAt;

        const diffInMilliseconds = reportAtBase.diff(this.startedAt, 'milliseconds', true);
        const diffInRoundedSeconds = Math.floor(diffInMilliseconds / 1000).toFixed(0);
        const roundedSecondsInMilliseconds = Math.floor(parseInt(diffInRoundedSeconds) * 1000);

        const diffInHours = parseInt(diffInRoundedSeconds) / 3600;
        if (diffInHours >= 1) {
            throw Error('Out of stopwatch bounds');
        }

        const minutes = Math.floor(diffInMilliseconds / 60000);
        const seconds = parseInt(((diffInMilliseconds % 60000) / 1000).toFixed(0));
        const milliseconds = diffInMilliseconds - roundedSecondsInMilliseconds;

        return {
            minutes,
            seconds,
            milliseconds
        };
    };
}

export default Stopwatch;
