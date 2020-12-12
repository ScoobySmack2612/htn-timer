import { Timer } from '../Timer';

describe('Timer', () => {
    it('Timer initializes to 0', () => {
        const timer = new Timer();
        expect(timer).toHaveProperty('duration');
        expect(timer.duration).toEqual(0);
    })
})
