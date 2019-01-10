/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatItem from './ChatItem';
import ChatMock from '../mocks/ChatMock';

jest.mock('react-router-dom', () => () => 'Link');

const mockProps = {
    active: true,
    disabled: true,
    chat: { ...ChatMock },
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatItem {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<ChatItem {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
