import { StyledNavigation, StyledNavigationItem } from './navigation-styles';
import React, { FunctionComponent } from 'react';
import StopwatchPage from '../Pages/Stopwatch';

export const Navigation: FunctionComponent = () => {
    return (
        <StyledNavigation>
            <StyledNavigationItem>
                <StopwatchPage.NavigationItem />
            </StyledNavigationItem>
        </StyledNavigation>
    );
};
