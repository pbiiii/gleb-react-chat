/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DrawerBottomNavigation from './DrawerBottomNavigation';

const mockProps = {
    activeTab: 'my',
    onTabChange: () => {},
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DrawerBottomNavigation {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const tree = renderer
        .create(<DrawerBottomNavigation {...mockProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
