import styled from 'styled-components';
import { StyledRoundedButton } from '../../../app-styles';

export const StyledControlBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledControlButton = styled.button<{ mode?: 'GO' | 'STOP' }>`
    ${StyledRoundedButton};
    width: 60px;
    height: 60px;

    ${(props) => {
        switch (props.mode) {
            case 'STOP': {
                return `
                    border: 2px double rgb(255,69,58);
                    background: rgb(255,69,58);
              `;
            }
            case 'GO': {
                return `
                    border: 2px double rgb(48, 209, 88);
                    background: rgb(48, 209, 88);
              `;
            }
            default: {
                return `
                    border: 2px double rgb(239, 239, 239);
                    background rgb(239, 239, 239);
                    
                    &:disabled {
                        color: #d2d2d2;
                        border: 2px double rgb(59, 59, 59);
                        background rgb(59, 59, 59);
                    }
                `;
            }
        }
    }}
`;
