import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const styles = theme => ({

});

const DrawerBottomNavigationComponent = ({classes}) => {
    return (
        <BottomNavigation
            showLabels
        >
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
    );
}

export const DrawerBottomNavigation = withStyles(styles)(DrawerBottomNavigationComponent);