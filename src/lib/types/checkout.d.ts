import { LineItem } from 'frontend-checkout/dist/types'

export type CheckoutProduct = LineItem

export interface NormalizedCheckoutProduct {
  id: string | number
  title: string
  subtitle: string
  price: string | number
  quantity: number
  variantId: string | number
  imageUrl: string
  slug: string
}

export interface CheckoutShopifyProduct {
  id: string | number
  quantity: number
  title: string
  variant?: {
    id: string | number
    image: {
      src: string
    }
    price: string
    product?: {
      handle: string
    }
    title: string
  } | null
}

export interface CheckoutBigCommerceProduct {
  id: string
  brand: string
  name: string
  imageUrl: string
  listPrice: number
  quantity: number
  variantId: number
}
