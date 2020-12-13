import { FunctionComponent } from 'react';
import { StyledControlButton, StyledControlBar } from './control-bar-styles';
export type ControlBarProps = {
    //Todo these types should be defined in Stopwatch
    start: () => void;
    stop: () => void | null;
    lap: () => void | null;
    reset: () => void | null;
    inProgress: boolean;
    isDirty: boolean;
};

const ControlBar: FunctionComponent<ControlBarProps> = ({ inProgress, isDirty, start, reset, lap, stop }) => {
    const controls = (() => {
        return {
            primary: {
                handler: inProgress ? stop : start,
                name: inProgress && isDirty ? 'Stop' : 'Start'
            },
            secondary: {
                handler: isDirty ? reset : lap,
                name: isDirty ? 'Reset' : 'Lap'
            }
        };
    })();

    return (
        <StyledControlBar>
            <StyledControlButton disabled={!inProgress && !isDirty} onClick={controls.secondary.handler}>
                {controls.secondary.name}
            </StyledControlButton>
            <StyledControlButton onClick={controls.primary.handler} mode={inProgress ? 'STOP' : 'GO'}>
                {controls.primary.name}
            </StyledControlButton>
        </StyledControlBar>
    );
};

export default ControlBar;
