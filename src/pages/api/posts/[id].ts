import { NextApiRequest, NextApiResponse } from 'next';

//TODO
// - 만약, client단에서 실제 API를 호출하는 것이 아니라 API routes를 사용하게 된다면
//   NEXT_PUBLIC_ prefix 제거해도 됨.
const API_END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = parseInt(req.query.id as string);
  const requestUrl = `${API_END_POINT}/posts/${id}`;
  console.log(`API routes(/api/posts/${id}): ${requestUrl}`);

  const response = await fetch(requestUrl);

  if (response.ok) {
    const data = await response.json();

    res.status(200).json(data);
  } else {
    //TODO: error handling
    res.status(404).send([]);
  }
}
