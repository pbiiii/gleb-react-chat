/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AppTopBar from './AppTopBar';
import ActiveUserMock from '../mocks/ActiveUserMock';
import ChatMock from '../mocks/ChatMock';

jest.mock('./UserMenu', () => () => 'UserMenu');
jest.mock('./ChatMenu', () => () => 'ChatMenu');

const mockProps = {
    activeUser: { ...ActiveUserMock },
    activeChat: { ...ChatMock },
    isConnected: true,
    deleteChat: () => {},
    leaveChat: () => {},
    logout: () => {},
    editUser: () => {},
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppTopBar {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<AppTopBar {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
