const userDataModel = {
  email: '',
};

export const initialStateAuthReducer = {
  authLoading: false,
  error: null,
  user: userDataModel,
  isAuthenticated: false,
  isRegisted: false,
};

export const authContextModel = {
  state: initialStateAuthReducer,
  dispatch: () => {},
};
