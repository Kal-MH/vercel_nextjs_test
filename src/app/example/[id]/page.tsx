interface Props {
  params: {
    id: string;
  };
}

const ExampleDetail = ({ params }: Props) => {
  return <h1>ExampleDetail Page {params.id}</h1>;
};

export default ExampleDetail;
