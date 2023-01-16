import client from './client';

const CommentAPI = {
  getComments: () => client.get('/comments'),
  getCommentsById: (id: string | number) => client.get(`comments/${id}`),
  createComment: (data: any) => client.post('/comments', data),
  updateComment: ({ id, data }: { id: string | number; data: any }) =>
    client.put(`/comments/${id}`, data),
  deleteComment: (id: string | number) => client.delete(`comments/${id}`),
};

export default CommentAPI;
