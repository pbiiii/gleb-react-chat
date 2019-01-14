/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMenu from './ChatMenu';
import ChatMock from '../mocks/ChatMock';
import ActiveUserMock from '../mocks/ActiveUserMock';

const mockProps = {
    activeChat: { ...ChatMock },
    activeUser: { ...ActiveUserMock },
    disabled: false,
    leaveChat: () => {},
    deleteChat: () => {},
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMenu {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<ChatMenu {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
