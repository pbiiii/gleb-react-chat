import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthPage } from "@src/components/index";
import { register, login } from '@src/store/auth/actions'

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    error: state.services.errors.auth
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            register,
            login,
        },
        dispatch,
    );

export const AuthScreen = connect(mapStateToProps, mapDispatchToProps)(AuthPage);