import { ACTIONS } from 'constants/actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ACTION:
      return state;

    default:
      return state;
  }
};
