import React from 'react';
import PropTypes from 'prop-types';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

const DrawerBottomNavigation = ({ activeTab, onTabChange }) => (
    <BottomNavigation showLabels value={activeTab} onChange={onTabChange}>
        <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} value="my" />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} value="all" />
    </BottomNavigation>
);

DrawerBottomNavigation.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

export default DrawerBottomNavigation;
