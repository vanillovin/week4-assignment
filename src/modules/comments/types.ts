import {
  getCommentsStarted,
  getCommentsSuccess,
  getCommentsFailure,
  getCommentStarted,
  getCommentSuccess,
  getCommentFailure,
} from './actions';
import { type IComment } from '../../types/comments.type';

// 모든 액션 객체들에 대한 타입
export type CommentsAction =
  | ReturnType<typeof getCommentsStarted>
  | ReturnType<typeof getCommentsSuccess>
  | ReturnType<typeof getCommentsFailure>
  | ReturnType<typeof getCommentStarted>
  | ReturnType<typeof getCommentSuccess>
  | ReturnType<typeof getCommentFailure>;

export type CommentsState = {
  loading: boolean;
  error: Error | null;
  data: IComment[] | null;
};

export type CommentState = {
  [key: number]: {
    loading: boolean;
    error: Error | null;
    data: IComment | null;
  };
};

// export type AppDispatch = typeof store.dispatch;
// export type ReduxState = ReturnType<typeof rootReducer>;
// export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
// export type TypedThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   ReduxState,
//   unknown,
//   AnyAction
// >;
