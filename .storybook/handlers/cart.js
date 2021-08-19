import { graphql, rest } from 'msw'
import { shopifyCart, shopifyInventory } from '../../src/lib/mocks'


export const cart = [
  // Shopify Inventory
  rest.get('/data/productInventory.json', async (_, res, ctx) => {
    return res(ctx.json(shopifyInventory))
  }),
  // Checkout
  graphql.query('Checkout', async (_, res, ctx) => {
    return res(ctx.data({ node: shopifyCart.checkout }))
  }),
  // CreateCheckout
  graphql.mutation('CreateCheckout', async (_, res, ctx) => {
    return res(
      ctx.data({
        checkoutCreate: shopifyCart,
      }),
    )
  }),
  // // AddCheckoutLineItems
  graphql.mutation('AddCheckoutLineItems', async (_, res, ctx) => {
    return res(ctx.status(302))
  }),
  // RemoveCheckoutLineItems
  graphql.mutation('RemoveCheckoutLineItems', async (_, res, ctx) => {
    return res(ctx.status(302))
  }),
  // UpdateCheckoutLineItems
  graphql.mutation('UpdateCheckoutLineItems', async (_, res, ctx) => {
    return res(ctx.status(302))
  }),
]
