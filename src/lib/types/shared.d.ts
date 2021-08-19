export type PropsOf<C> = React.ComponentPropsWithRef<C>

export interface Media {
  name: string
  src: string
  alt?: string
  width: number
  height: number
}

export interface MoneyInfo {
  amount: string
  currencyCode: string
}

export type Platform = 'shopify' | 'bigcommerce'

export interface NormalizeHook<FROM, TO> {
  (model: FROM): TO
  (model: null | undefined): null
}
