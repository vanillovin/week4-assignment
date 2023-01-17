import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../modules';
import { getCommentsThunk } from '../modules/comments';
import CommentList from '../components/CommentList';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useNavigate } from 'react-router';

function CommentListContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.comments.comments
  );

  const onChangePath = (id: number) => navigate(`/comments/${id}`);

  useEffect(() => {
    if (data) return;
    dispatch(getCommentsThunk() as any);
  }, [data, dispatch]);

  if (loading && !data) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return <CommentList comments={data} onChangePath={onChangePath} />;
}

export default CommentListContainer;
