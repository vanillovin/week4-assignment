import {
  getCommentsStarted,
  getCommentsSuccess,
  getCommentsFailure,
} from './actions';
import { type IComment } from '../../types/comments.type';

// 모든 액션 객체들에 대한 타입
export type CommentsAction =
  | ReturnType<typeof getCommentsStarted>
  | ReturnType<typeof getCommentsSuccess>
  | ReturnType<typeof getCommentsFailure>;

// 이거다른파일로빼기
export type CommentsState = {
  loading: boolean;
  error: Error | null;
  data: IComment[] | null;
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
