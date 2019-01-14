import PropTypes from 'prop-types';
import UserType from './UserType';

export default {
    _id: PropTypes.string.isRequired,
    creator: PropTypes.shape(UserType).isRequired,
    title: PropTypes.string.isRequired,
};
