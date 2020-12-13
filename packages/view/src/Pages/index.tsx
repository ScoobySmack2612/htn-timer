import { Switch } from 'react-router-dom';
import StopwatchPage from './Stopwatch';
import React from 'react';
import { StyledPageContainer } from './page-styles';

export const Pages = () => (
    <Switch>
        <StyledPageContainer>
            <StopwatchPage.Route />
        </StyledPageContainer>
    </Switch>
);
