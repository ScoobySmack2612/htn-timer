import React from 'react';
import { Navigation } from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { Pages } from './Pages';
import { StyledApplicationContainer } from './app-styles';

function App() {
    return (
        <div className="App">
            <Router>
                <StyledApplicationContainer>
                    <Pages />
                    <Navigation />
                </StyledApplicationContainer>
            </Router>
        </div>
    );
}

export default App;
