/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserMenu from './UserMenu';
import ActiveUserMock from '../mocks/ActiveUserMock';

const mockProps = {
    activeUser: { ...ActiveUserMock },
    logout: () => {},
    editUser: () => {},
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserMenu {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<UserMenu {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
