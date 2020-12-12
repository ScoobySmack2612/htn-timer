import React from 'react';
import './App.css';
import { Navigation } from './Navigation';
import Timer from './Timer';
import { StyledNavigationItem } from './Navigation/navigation-styles';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation>
                    <StyledNavigationItem>
                        <Timer.NavigationItem />
                    </StyledNavigationItem>
                </Navigation>
                <Switch>
                    <Timer.Route />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
