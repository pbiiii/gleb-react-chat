import PropTypes from 'prop-types';
import ActiveUserType from './ActiveUserType';

export default {
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sender: PropTypes.shape(ActiveUserType).isRequired,
    createdAt: PropTypes.string.isRequired,
};
