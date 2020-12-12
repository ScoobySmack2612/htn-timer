import { Route } from 'react-router-dom';
import React from 'react';
import Timer from './index';

const TimerRoute = () => <Route path="/" component={Timer} />;

export default TimerRoute;
