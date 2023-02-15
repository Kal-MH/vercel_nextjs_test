export const checkServerSideEnv = () => {
  const base_url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : process.env.NEXT_PUBLIC_API_END_POINT;

  return base_url;
};
