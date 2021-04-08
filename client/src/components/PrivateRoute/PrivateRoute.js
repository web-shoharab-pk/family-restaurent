import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DetailsContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const { loggedUser } = useContext(DetailsContext);

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                loggedUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;