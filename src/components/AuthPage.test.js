/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AuthPage from './AuthPage';

const mockProps = {
    isAuthenticated: false,
    register: () => {},
    login: () => {},
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthPage {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<AuthPage {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
