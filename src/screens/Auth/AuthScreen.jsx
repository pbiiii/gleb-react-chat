import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthPage } from "@src/components";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch,
    );

export const AuthScreen = connect(mapStateToProps, mapDispatchToProps)(AuthPage);