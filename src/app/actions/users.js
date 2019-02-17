import ACTIONS from 'constants/actions';
import { get } from 'axios';

const receiveUsers = users => ({ type: ACTIONS.RECEIVE_USERS, users });

export default () => (dispatch) => {
  get('http://localhost:3000/user')
    .then(res => dispatch(receiveUsers(res.data)))
    .catch(() => dispatch(receiveUsers([])));
};
