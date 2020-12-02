import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, sessionID, ...rest }) => {
    return <Route {...rest} render={ (props) => (
        sessionID ? <Component {...props} /> : <Redirect to='/login' />
    )} />
};

const mapStateToProps = (state) => ({
    sessionID: state.auth.sessionID
});

export default connect(mapStateToProps, null)(PrivateRoute);
