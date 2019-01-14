import PropTypes from 'prop-types';
import UserType from './UserType';

export default {
    ...UserType,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
};
