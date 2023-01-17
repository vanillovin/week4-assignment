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

const defaulatIdSelector = (param: any) => param;

export const createPromiseThunkById = (
  type: string,
  promiseCreator: any,
  idSelector: any = defaulatIdSelector
) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  return (param: any) => async (dispatch: any) => {
    const id = idSelector(param);
    dispatch({ type, meta: id });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
        meta: id,
      });
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
        meta: id,
      });
    }
  };
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

// 단순히 action.meta를 참고해서, key 안에 있는 id 객체를 업데이트
// keepData : 로딩 중에 상태를 초기화할지 말지. 기존 데이터 재사용 여부
export const handleAsyncActionsById = (
  type: string,
  key: string,
  keepData: boolean
) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  return (state: any, action: any) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              keepData ? state[key][id] && state[key][id].data : null
            ),
          },
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          },
        };
      case FAILURE:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          },
        };
      default:
        return state;
    }
  };
};
