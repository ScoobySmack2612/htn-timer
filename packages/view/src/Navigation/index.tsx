import { StyledNavigation, StyledNavigationItem } from './navigation-styles';
import React, { FunctionComponent } from 'react';
import Stopwatch from '../Pages/Stopwatch';

export const Navigation: FunctionComponent = () => {
    return (
        <StyledNavigation>
            <StyledNavigationItem>
                <Stopwatch.NavigationItem />
            </StyledNavigationItem>
        </StyledNavigation>
    );
};
