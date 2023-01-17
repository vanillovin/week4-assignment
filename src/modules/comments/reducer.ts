import { handleAsyncActions, reducerUtils } from '../../lib/asyncUtils';
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
  comments: reducerUtils.initial(),
  comment: {},
};

const getCommentsReducer = handleAsyncActions(GET_COMMENTS, 'comments', true);
const getCommentReducer = (state = initialState, action: CommentsAction) => {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        comment: {
          ...state.comment,
          [action.meta]: reducerUtils.loading(
            state.comment[action.meta] && state.comment[action.meta].data
          ),
        },
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: {
          ...state.comment,
          [action.meta]: reducerUtils.success(action.payload),
        },
      };
    case GET_COMMENT_FAILURE:
      return {
        ...state,
        comment: {
          ...state.comment,
          [action.meta]: reducerUtils.error(action.payload),
        },
      };
    default:
      return state;
  }
};

function comments(state = initialState, action: CommentsAction): InitialState {
  switch (action.type) {
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_FAILURE:
      return getCommentsReducer(state, action);
    case GET_COMMENT:
    case GET_COMMENT_SUCCESS:
    case GET_COMMENT_FAILURE:
      return getCommentReducer(state, action);
    default:
      return state;
  }
}

export default comments;
