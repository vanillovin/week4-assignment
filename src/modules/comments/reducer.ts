import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
} from './actions';
import { CommentsAction, CommentsState } from './types';

const initialState: CommentsState = {
  loading: false,
  data: null,
  error: null,
};

const comments = (
  state = initialState,
  action: CommentsAction
): CommentsState => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.comments,
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default comments;
