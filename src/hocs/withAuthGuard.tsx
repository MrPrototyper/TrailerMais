import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
    isAuthenticated: boolean;
}

const withAuthGuard = <P extends object>(MyComponent: ComponentType<P>) => {
    const WrappedComponent: React.FC<AuthGuardProps & P> = ({ isAuthenticated, ...rest }) => {
        if (!isAuthenticated) {            
            return <Navigate to="/login/enter-email" />;
        }
        return <MyComponent {...(rest as P)} />;
    };

    return WrappedComponent;    
};

export default withAuthGuard;