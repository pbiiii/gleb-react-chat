import ChatMock from './ChatMock';
import UserMock from './UserMock';

export default {
    _id: 'random_id',
    chatId: ChatMock._id,
    content: 'Mock content',
    sender: { UserMock },
    createdAt: '2019-01-10 13:00',
};
