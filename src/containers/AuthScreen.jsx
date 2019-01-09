import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { register, login } from 'src/store/auth/actions';
import AuthPage from '../components/AuthPage';

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        register,
        login,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
