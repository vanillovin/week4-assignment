import CommentAPI from '../../api/comments';
import { IComment } from '../../types/comments.type';
import { CommentsState } from './types';

// interface GetCommentsRequest extends CommentsState {
//   type: typeof GET_COMMENTS_REQUEST
// }

export const GET_COMMENTS = 'GET_POSTS' as const; // 요청 시작
export const GET_COMMENTS_SUCCESS = 'GET_POSTS_SUCCESS' as const; // 요청 성공
export const GET_COMMENTS_FAILURE = 'GET_POSTS_FAILURE' as const; // 요청 실패

// action creators
export const getCommentsStarted = () => ({ type: GET_COMMENTS });
export const getCommentsSuccess = (comments: IComment[]) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: { comments },
});
export const getCommentsFailure = (error: Error) => ({
  type: GET_COMMENTS_FAILURE,
  payload: { error },
});

export const fetchComments = () => {
  return (dispatch: any) => {
    dispatch(getCommentsStarted());
    return CommentAPI.getComments().then(
      (res) => dispatch(getCommentsSuccess(res.data)),
      (err) => dispatch(getCommentsFailure(err))
    );
  };
};
