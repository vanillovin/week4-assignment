import { IComment } from '../types/comments.type';

interface CommentListProps {
  comments: IComment[];
  onChangePath: (id: number) => void;
}

function CommentList({ comments, onChangePath }: CommentListProps) {
  return (
    <ul className="flex flex-col border">
      {comments.map((comment, key) => (
        <li
          key={key}
          className="p-3 border-b last:border-0"
          onClick={() => onChangePath(comment.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={comment.profile_url}
                alt=""
                className="rounded-full mr-2 w-10 h-10 tablet:w-12 tablet:h-12"
              />
              <span className="font-medium text-sm tablet:text-base">
                {comment.author}
              </span>
              <span className="text-gray-600 ml-1 text-xs tablet:text-sm">
                {comment.createdAt}
              </span>
            </div>
            <div>
              <button className="rounded-sm bg-indigo-100 px-1">수정</button>
              <button className="rounded-sm bg-indigo-200 px-1 ml-2">
                삭제
              </button>
            </div>
          </div>
          <div className="px-1 py-2">{comment.content}</div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
