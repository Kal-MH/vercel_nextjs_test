'use client';

import Todo from '@/app/components/todo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Post } from '../constants/post';
import { PostsAPI } from '../axios/posts';

// export async function getData() {
//   try {
//     const data = await PostsAPI.getAll();
//     return data;
//   } catch (e) {
//     console.error(e);
//   }
// }

export default function Home() {
  //1. 실제 url을 가지고 axios instance에서 호출할 때,
  // const posts = use(getData());

  //2. axios instance에서 /api를 통해서 호출할 때,
  // - hydrates error를 해결하기 위해 useEffect 사용
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await PostsAPI.getAll();

        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Todo />
      <h1>Homepage</h1>
      {/*Cypress Test*/}
      <Link href="/About">About</Link>
      <ul>
        {(posts || []).map((p: Post) => (
          <Link key={p.id} href="/posts/[id]" as={`/posts/${p.id}`}>
            <li>{p.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
