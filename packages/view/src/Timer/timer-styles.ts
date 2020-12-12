import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonAnimationTiming = '.28s';
const ButtonAnimationRadialOut = css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: 0;
        background: #2098d1;
        height: 4px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: ${ButtonAnimationTiming};
        transition-duration: ${ButtonAnimationTiming};
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    &:hover:before {
        left: 0;
        right: 0;
    }
`;
const AccessibleInteraction = css`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
const LinkAsButton = css`
    ${ButtonAnimationRadialOut};
    ${AccessibleInteraction};
    height: 100%;
    display: flex;
    align-items: center;
`;
export const StyledTimerRouteLink = styled(Link)`
    ${LinkAsButton};
`;
