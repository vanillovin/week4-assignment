import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { CommentsAction } from './types';
import CommentAPI from '../../api/comments';
import {
  getCommentsStarted,
  getCommentsSuccess,
  getCommentsFailure,
  getCommentStarted,
  getCommentSuccess,
  getCommentFailure,
} from './actions';

// thunk 함수에선 액션을 dispatch 할 수 있고, getState를 사용해 현재 상태도 조회할 수 있음.
// ThunkAction <thunk 함수의 반환 값 타입, 스토어의 상태 타입, redux-thunk 미들웨어의 Extra Argument 타입, dispatch할수있는액션들의타입 >
// ThunkDispatch<{}, {}, AnyAction>
// thunk creator function
export const getCommentsThunk =
  (): ThunkAction<void, RootState, null, CommentsAction> =>
  // 정확하게 따지자면 이 부분까지가 thunk 함수
  async (dispatch: any, getState) => {
    dispatch(getCommentsStarted());
    try {
      const response = await CommentAPI.getComments();
      const comments = await response.data;
      dispatch(getCommentsSuccess(comments));
    } catch (e) {
      dispatch(getCommentsFailure(e as Error));
    }
  };

export const getCommentsByIdThunk =
  (id: number): ThunkAction<void, RootState, null, CommentsAction> =>
  async (dispatch: any) => {
    dispatch(getCommentStarted(id));
    try {
      const response = await CommentAPI.getCommentsById(id);
      dispatch(getCommentSuccess(response.data, id));
    } catch (e) {
      dispatch(getCommentFailure(e as Error, id));
    }
  };
