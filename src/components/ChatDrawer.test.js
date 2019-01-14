/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatDrawer from './ChatDrawer';
import ChatMock from '../mocks/ChatMock';

const mockProps = {
    isConnected: true,
    onCreateChat: () => {},
    activeChat: { ...ChatMock },
    myChats: [],
    allChats: [ChatMock],
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatDrawer {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<ChatDrawer {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
