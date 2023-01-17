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
  comment: reducerUtils.initial(),
};

const getCommentsReducer = handleAsyncActions(GET_COMMENTS, 'comments', true);
const getCommentReducer = handleAsyncActions(GET_COMMENT, 'comment', true);

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
