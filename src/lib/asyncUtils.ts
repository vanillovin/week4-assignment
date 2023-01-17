// TODO: 타입 지정 (제네릭, 유틸)

export const createPromiseThunk = (type: any, promiseCreator: any) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];

  return (param: any) => async (dispatch: any) => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
  };
};

export const reducerUtils = {
  initial: (data: any = null) => ({
    data,
    loading: false,
    error: null,
  }),
  loading: (prevState: any = null) => ({
    data: prevState,
    loading: true,
    error: null,
  }),
  success: (data: any) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error: any) => ({
    data: null,
    loading: false,
    error,
  }),
};

export const handleAsyncActions = (
  type: string,
  key: string,
  keepData: boolean
) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case FAILURE:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };

  return reducer;
};
