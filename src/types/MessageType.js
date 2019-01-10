import PropTypes from 'prop-types';
import UserType from './UserType';

export default {
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sender: PropTypes.shape(UserType).isRequired,
    createdAt: PropTypes.string.isRequired,
};
