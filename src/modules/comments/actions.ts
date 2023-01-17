import { IComment } from '../../types/comments.type';

// interface GetCommentsRequest extends CommentsState {
//   type: typeof GET_COMMENTS_REQUEST
// }

export const GET_COMMENTS = 'comments/GET_COMMENTS' as const; // 요청 시작
export const GET_COMMENTS_SUCCESS = 'comments/GET_COMMENTS_SUCCESS' as const; // 요청 성공
export const GET_COMMENTS_FAILURE = 'comments/GET_COMMENTS_FAILURE' as const; // 요청 실패

export const GET_COMMENT = 'comments/GET_COMMENT' as const;
export const GET_COMMENT_SUCCESS = 'comments/GET_COMMENT_SUCCESS' as const;
export const GET_COMMENT_FAILURE = 'comments/GET_COMMENT_FAILURE' as const;

export const getCommentsStarted = () => ({ type: GET_COMMENTS });
export const getCommentsSuccess = (comments: IComment[]) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: { comments },
});
export const getCommentsFailure = (error: Error) => ({
  type: GET_COMMENTS_FAILURE,
  payload: { error },
});

export const getCommentStarted = () => ({ type: GET_COMMENT });
export const getCommentSuccess = (comment: IComment) => ({
  type: GET_COMMENT_SUCCESS,
  payload: { comment },
});
export const getCommentFailure = (error: Error) => ({
  type: GET_COMMENT_FAILURE,
  payload: { error },
});

// export const fetchComments = () => {
//   return (dispatch: any) => {
//     dispatch(getCommentsStarted());
//     return CommentAPI.getComments().then(
//       (res) => dispatch(getCommentsSuccess(res.data)),
//       (err) => dispatch(getCommentsFailure(err))
//     );
//   };
// };
