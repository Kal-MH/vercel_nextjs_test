import { rest } from 'msw';

export const handlers = [
  rest.get('https://example.com/products/:productId', (req, res, ctx) => {
    const { productId } = req.params;

    const products = [
      {
        id: '22',
        name: 'podo',
        quantity: 3,
      },
    ];

    const product = products.filter((product) => product.id === productId)[0];

    return res(ctx.json(product));
  }),

  rest.get('https://example.com/reviews', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '31',
          author: 'Podo',
          content: '맛있는 포도 👍',
        },
      ])
    );
  }),
];
