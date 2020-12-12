import { Route } from 'react-router-dom';
import React from 'react';
import Stopwatch from './index';

const StopwatchRoute = () => <Route path="/" component={Stopwatch} />;

export default StopwatchRoute;
