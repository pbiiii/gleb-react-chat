import * as types from './actionTypes';
import history from '@src/utils/history';

export function redirect(to) {
    return (dispatch) => {
        history.push(to);
        dispatch({
            type: types.REDIRECT,
            payload: { to },
        });
    };
}