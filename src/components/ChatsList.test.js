/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatsList from './ChatsList';
import ChatMock from '../mocks/ChatMock';

const mockProps = {
    activeChat: { ...ChatMock },
    chats: [ChatMock],
    disabled: false,
};

jest.mock('./ChatItem', () => () => 'ChatItem');

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatsList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<ChatsList {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
