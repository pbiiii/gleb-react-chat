/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AuthForm from './AuthForm';

const mockProps = {
    username: { value: 'username', valid: true },
    password: { value: 'password', valid: true },
    repeatedPassword: { value: 'password', valid: true },
    onChange: () => {},
    onSubmit: () => {},
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthForm {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<AuthForm {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
