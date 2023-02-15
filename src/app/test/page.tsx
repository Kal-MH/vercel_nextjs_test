import axios from 'axios';

async function getData() {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_API_END_POINT}/posts`
  );

  return data;
}

const Test = async () => {
  const posts = await getData();

  return (
    <div>
      <h1>Test</h1>
      <ul>
        {(posts || []).map((post: { id: string; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
