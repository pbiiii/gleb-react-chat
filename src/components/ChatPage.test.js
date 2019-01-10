/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatPage from './ChatPage';
import ChatMock from '../mocks/ChatMock';
import ActiveUserMock from '../mocks/ActiveUserMock';
import MessageMock from '../mocks/MessageMock';

const mockProps = {
    chats: {
        active: { ...ChatMock },
        all: [ChatMock],
        my: [],
    },
    messages: [MessageMock],
    activeUser: { ...ActiveUserMock },
    match: { params: { chatId: 'mock_new_chat_id' } },
    isConnected: true,
    socketsConnect: () => {},
    fetchAllChats: () => {},
    fetchMyChats: () => {},
    setActiveChat: () => {},
    mountChat: () => {},
    unMountChat: () => {},
    createChat: () => {},
    joinChat: () => {},
    deleteChat: () => {},
    leaveChat: () => {},
    sendMessage: () => {},
    logout: () => {},
    editUser: () => {},
};

jest.mock('./AppTopBar', () => () => 'AppTopBar');
jest.mock('./ChatDrawer', () => () => 'ChatDrawer');
jest.mock('./ChatMessageList', () => () => 'ChatMessageList');
jest.mock('./ChatMessageInput/ChatMessageInput', () => () => 'ChatMessageInput');
jest.mock('./ErrorMessage', () => () => 'ErrorMessage');

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatPage {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<ChatPage {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
