import moment, { Moment } from 'moment';

type StopwatchConfiguration = {
    startedAt?: Moment;
};
class Stopwatch {
    startedAt: Moment | null;
    laps: [Moment];

    constructor(configuration?: StopwatchConfiguration) {
        if (typeof configuration === 'object') {
            const { startedAt } = configuration;

            this.startedAt = startedAt;
        }

        this.startedAt = null;
    }

    start(startedAt: Moment = moment()) {
        this.startedAt = startedAt;
    }

    lap(lappedAt: Moment = moment()) {
        this.laps.push(lappedAt);
    }

    reportElapsedTime(reportAt: Moment = moment()) {
        const diffInMilliseconds = reportAt.diff(this.startedAt, 'milliseconds', true);
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
    }
}

export default Stopwatch;
