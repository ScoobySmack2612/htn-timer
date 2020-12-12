import { BrowserRouter as Router } from 'react-router-dom';
import { StyledNavigation } from './navigation-styles';
import { FunctionComponent } from 'react';

export const Navigation: FunctionComponent = ({ children }) => {
    return <StyledNavigation>{children}</StyledNavigation>;
};
