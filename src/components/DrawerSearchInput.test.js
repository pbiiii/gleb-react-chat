/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DrawerSearchInput from './DrawerSearchInput';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DrawerSearchInput />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<DrawerSearchInput />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
