import CommentListContainer from '../containers/CommentListContainer';
import PageListContainer from '../containers/PageListContainer';
import CommentFormContainer from '../containers/CommentFormContainer';

function CommentsPage() {
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <CommentFormContainer />
    </div>
  );
}

export default CommentsPage;
