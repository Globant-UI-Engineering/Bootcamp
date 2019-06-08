import { actions } from '../actions/actionDataUser';

const initialState = {
  user: null,
  isFetchingUser: false,
  isAuthenticated: false,
  errorUser: false,
  errorText: null,
};

export default function dataUser(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_DATA_USER: {
      return {
        ...state,
        isFetchingUser: true,
      };
    }
    case actions.FETCHING_DATA_USER_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        isFetchingUser: false,
        errorUser: false,
        user: {
          ...state.user,
          uuid: user.uid,
          name: user.name.first,
          lastname: user.name.last,
          picture: user.picture.large,
          age: user.dob.age,
          username: user.login.username,
          phone: user.phone,
          cell: user.cell,
          location: user.location.city,
        },
      };
    }
    case actions.FETCHING_DATA_REAL_USER_SUCCESS: {
      const { user, isAuthenticated } = action.payload;
      return {
        ...state,
        isFetchingUser: false,
        isAuthenticated: isAuthenticated,
        errorUser: false,
        user: {
          ...state.user,
          uuid: user.uid,
          email: user.email,
        },
      };
    }
    case actions.FETCHING_DATA_USER_FAILED: {
      const errorText = action.payload.error;
      return {
        ...state,
        isFetchingUser: false,
        error: true,
        errorText,
      };
    }
    default: {
      return state;
    }
  }
}
