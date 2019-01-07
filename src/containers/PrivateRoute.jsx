import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { getUser } from "@src/store/auth/actions";

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUser,
        },
        dispatch,
    );

class PrivateRouteComponent extends React.Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const { component: Component, isAuthenticated, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    (isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/auth',
                                state: { from: props.location },
                            }}
                        />
                    ))
                }
            />
        );
    }
}

export const PrivateRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent));