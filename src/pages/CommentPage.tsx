import { useParams } from 'react-router';
import CommentContainer from '../containers/CommentContainer';

function CommentPage() {
  const params = useParams<{ id: string }>();

  return <CommentContainer commentId={params.id!} />;
}

export default CommentPage;
