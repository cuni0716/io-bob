import ACTIONS from 'constants/actions';

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_USERS:
      return Object.assign({}, state, { users: action.users });

    default:
      return state;
  }
};
