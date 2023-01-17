import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
} from './actions';
import { CommentsAction, CommentsState, CommentState } from './types';

type InitialState = {
  comments: CommentsState;
  comment: CommentState;
};

const initialState: InitialState = {
  comments: {
    loading: false,
    data: null,
    error: null,
  },
  comment: {
    loading: false,
    data: null,
    error: null,
  },
};

function comments(state = initialState, action: CommentsAction): InitialState {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: { ...state.comments, loading: true },
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          loading: false,
          data: action.payload.comments,
        },
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        comments: {
          ...state.comments,
          loading: false,
          error: action.payload.error,
        },
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: { ...state.comment, loading: true },
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: {
          ...state.comment,
          loading: false,
          data: action.payload.comment,
        },
      };
    case GET_COMMENT_FAILURE:
      return {
        ...state,
        comment: {
          ...state.comment,
          loading: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
}

export default comments;
