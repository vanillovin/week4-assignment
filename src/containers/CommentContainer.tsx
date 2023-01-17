import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Comment from '../components/Comment';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { RootState } from '../modules';
import { getCommentsByIdThunk } from '../modules/comments';
import { reducerUtils } from '../utils/async.utill';

interface CommentContainerProps {
  commentId: string;
}

function CommentContainer({ commentId }: CommentContainerProps) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) =>
      state.comments.comment[parseInt(commentId)] || reducerUtils.initial()
  );

  useEffect(() => {
    if (data) return;
    dispatch(getCommentsByIdThunk(parseInt(commentId)) as any);
  }, [data, commentId, dispatch]);

  if (loading && !data) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return <Comment comment={data} />;
}

export default CommentContainer;
