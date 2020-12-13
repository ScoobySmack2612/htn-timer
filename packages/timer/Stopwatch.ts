import moment, { Moment } from 'moment';

export type StopwatchConfiguration = {
    startedAt?: Moment;
};

export type ElapsedTime = {
    minutes: number;
    seconds: number;
    milliseconds: number;
};

export type StopwatchLaps = Set<ElapsedTime>;

class Stopwatch {
    inProgress: boolean;
    startedAt: Moment | null;
    runningPauseTime: number;
    endedAt: Moment | null;
    private laps: StopwatchLaps;
    constructor(configuration?: StopwatchConfiguration) {
        if (!instance) {
            instance = this;
        }

        if (typeof configuration === 'object') {
            const { startedAt } = configuration;

            this.startedAt = startedAt;
        }

        this.startedAt = null;
        this.endedAt = null;
        this.runningPauseTime = 0;
        this.laps = new Set();

        return instance;
    }

    private setRunningPauseTime(startedAt, pausedAt) {
        const diffInMilliseconds = pausedAt.diff(startedAt, 'milliseconds', true);

        this.runningPauseTime += diffInMilliseconds;
    }

    reset = () => {
        this.startedAt = null;
        this.endedAt = null;
        this.laps = null;
        this.runningPauseTime = 0;
        this.inProgress = false;
        this.laps = new Set();
    };

    start = (startedAt: Moment = moment()) => {
        this.inProgress = true;
        if (!this.startedAt) {
            this.startedAt = startedAt;
        }

        if (this.endedAt) {
            this.setRunningPauseTime(startedAt, this.endedAt);
        }
    };

    stop = (stopAt: Moment = moment()) => {
        this.endedAt = stopAt;
    };

    lap = () => {
        this.laps.add(this.reportElapsedTime());
    };

    getLaps(): Set<ElapsedTime> {
        return this.laps;
    }

    reportElapsedTime = (reportAt: Moment = moment()): ElapsedTime => {
        if (!this.startedAt) {
            return {
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            };
        }

        const reportAtBase = this.endedAt || reportAt;

        const diffInMilliseconds = reportAtBase.diff(this.startedAt, 'milliseconds', true);
        const diffInRoundedSeconds = Math.floor(diffInMilliseconds / 1000).toFixed(0);
        const roundedSecondsInMilliseconds = Math.floor(parseInt(diffInRoundedSeconds) * 1000);

        const diffInHours = parseInt(diffInRoundedSeconds) / 3600;
        if (diffInHours >= 1) {
            this.stop();
            throw Error('Out of stopwatch bounds, exiting');
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

let instance = null;

export default Stopwatch;
