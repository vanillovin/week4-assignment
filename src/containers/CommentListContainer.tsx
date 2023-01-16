import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../modules';
import { getCommentsThunk } from '../modules/comments';
import CommentList from '../components/CommentList';
import Loading from '../components/Loading';
import Error from '../components/Error';

function CommentListContainer() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.comments
  );

  useEffect(() => {
    // [redux-toolkit을 사용하지 않은 경우 as any로 타입 지정을 해줘야했다.](https://muhly.tistory.com/145)
    dispatch(getCommentsThunk() as any);
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return <CommentList comments={data} />;
}

export default CommentListContainer;
