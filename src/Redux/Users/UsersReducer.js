import types from './UsersActionTypes';

const initialState = {
  users: [],
  nextUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  isFetching: false,
  error: null
};


const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_NEXT_URL:
      return {
        ...state,
        nextUrl: payload.nextUrl
      };
    case types.SET_USERS:
      return {
        ...state,
        isFetching: false,
        users: [...state.users, ...payload.usersList],
      };
    case types.SET_USERS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.SET_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: `Error: ${payload.error}`
      };
    default:
      return state;
  }
};

export default usersReducer
