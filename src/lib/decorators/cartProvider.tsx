import * as React from 'react'
import { ArgsStoryFn, StoryContext } from '@storybook/addons'
import { CartProvider } from 'frontend-checkout'
import { StoreConfig, SupportedPlatform } from 'frontend-checkout/dist/types'

const platform = (process.env.PLATFORM || 'shopify') as SupportedPlatform

const storeConfig = {
  storeId: process.env.SITE_ID || '',
  storeName: process.env.STORE_NAME || '',
  storeDomain: process.env.PLATFORM_PUBLIC_DOMAIN || '',
  storePlatformDomain: process.env.PLATFORM_DOMAIN || '',
  platformApiType: process.env.PLATFORM_API_TYPE || 'graphql',
  storeToken: process.env.STORE_TOKEN || '',
} as StoreConfig

export type DecoratorFunction<StoryFnReturnType = unknown> = (
  fn: ArgsStoryFn<StoryFnReturnType>,
  c: StoryContext,
) => ReturnType<ArgsStoryFn<StoryFnReturnType>>

export const getCartDecorator = (): DecoratorFunction<JSX.Element> => StoryFn => {
  return (
    <CartProvider
      platform={platform}
      storeConfig={{ ...storeConfig, storeId: `${storeConfig.storeId}-default` }}
    >
      <StoryFn />
    </CartProvider>
  )
}
