import { RouteObject } from 'react-router-dom';

import App from '../App';
import CommentsPage from '../pages/CommentsPage';
import CommentPage from '../pages/CommentPage';

const paths: RouteObject[] = [
  { path: '/', element: <App /> },
  { path: '/comments', element: <CommentsPage /> },
  { path: '/comments/:id', element: <CommentPage /> },
  { path: '*', element: <div>no match</div> },
];

export default paths;
