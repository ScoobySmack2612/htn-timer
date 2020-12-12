import { Switch } from 'react-router-dom';
import Stopwatch from './Stopwatch';
import React from 'react';
import { StyledPageContainer } from './page-styles';

export const Pages = () => (
    <Switch>
        <StyledPageContainer>
            <Stopwatch.Route />
        </StyledPageContainer>
    </Switch>
);
