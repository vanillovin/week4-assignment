import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { CommentsAction } from './types';
import CommentAPI from '../../api/comments';
import {
  getCommentsStarted,
  getCommentsSuccess,
  getCommentsFailure,
} from './actions';

// ThunkAction <thunk 함수의 반환 값 타입,
// 스토어의 상태 타입,
// redux-thunk 미들웨어의 Extra Argument 타입,
// dispatch할수있는액션들의타입 >
export const getCommentsThunk = (): ThunkAction<
  void,
  RootState,
  null,
  CommentsAction
> => {
  return async (dispatch: any) => {
    dispatch(getCommentsStarted());
    try {
      const response = await CommentAPI.getComments();
      const comments = await response.data;
      dispatch(getCommentsSuccess(comments));
    } catch (e) {
      dispatch(getCommentsFailure(e as Error));
    }
  };
};
