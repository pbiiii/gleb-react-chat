/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessageList from './ChatMessageList';
import ActiveUserMock from '../mocks/ActiveUserMock';
import MessageMock from '../mocks/MessageMock';

const mockProps = {
    activeUser: { ...ActiveUserMock },
    messages: [MessageMock],
};

jest.mock('./ChatMessage/ChatMessage', () => () => 'ChatMessage');

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessageList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<ChatMessageList {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
