'use client';

import { Post } from '@/constants/post';
import { useEffect, useState } from 'react';
import { PostsAPI } from '../../../axios/posts';

// export async function getData(id: string) {
//   try {
//     const data = await PostsAPI.getOnePost(id);
//     return data;
//   } catch (e) {
//     console.error(e);
//   }
// }

const PostPage = ({ params }: { params: { id: string } }) => {
  // const post = use(getData(params.id));

  const [post, setPost] = useState<Post>({
    id: '',
    title: '',
    body: '',
  });

  useEffect(() => {
    async function getData() {
      try {
        const { id } = params;
        const data = await PostsAPI.getOnePost(id);

        setPost(data);
      } catch (e) {
        console.error(e);
      }
    }

    getData();
  }, [params]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
