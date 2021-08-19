import { Order as ShopifySdkOrder } from 'frontend-customer/dist/customer-sdk/platforms/shopify/storefront-api/types/api'
import {
  ShopifySdkAddress,
  ShopifyCustomerProps as ShopifySdkCustomerProps,
} from 'frontend-customer/dist/customer-sdk/platforms/shopify/storefront-api/types/sdk'
import { CustomerState } from 'frontend-customer/dist/customer-hooks'

import { Customer as StorefrontCustomer } from 'frontend-customer/dist/customer-sdk/types'
import {
  BigCommerceSdkOrder,
  BigCommerceSdkAddress,
  BigCommerceSdkCustomerProps,
} from 'frontend-customer/dist/customer-sdk/platforms/big_commerce/rest/types/sdk'
import { Media, Platform, MoneyInfo } from '.'

export type PlatformCustomer = ShopifyCustomer | BigCommerceCustomer
export type PlatformOrder = ShopifyOrder | BigCommerceOrder
export type PlatformAddress = ShopifyAddress | BigCommerceAddress

export type ShopifyCustomer = StorefrontCustomer<ShopifySdkCustomerProps> & {
  isLoggedIn: boolean
  status: CustomerState['status']
}
export type ShopifyOrder = ShopifySdkOrder
export type ShopifyAddress = ShopifySdkAddress

export type BigCommerceCustomer = StorefrontCustomer<BigCommerceSdkCustomerProps> & {
  isLoggedIn: boolean
  status: CustomerState['status']
}
export type BigCommerceOrder = BigCommerceSdkOrder
export type BigCommerceAddress = BigCommerceSdkAddress

/** Shogun customer state (normalized data) */
export interface Customer {
  id?: string | number
  firstName?: string
  lastName?: string
  displayName?: string
  email?: string
  phone?: string
  isLoggedIn: boolean
  status: CustomerState['status']
  defaultAddress?: Address
  addresses?: Address[]
  orders?: Order[]
  _originalPlatform: Platform
}

/** Shogun address (normalized data) */
export interface Address {
  id: string
  address1?: string
  address2?: string
  city?: string
  company?: string
  country?: string
  firstName?: string
  lastName?: string
  phone?: string
  province?: string
  zip?: string
}

/** Shogun order (normalized data) */
export interface Order {
  id: string
  name: string
  financialStatus?: string
  processedAt: string
  fulfillmentStatus: string
  subtotalPrice?: MoneyInfo
  totalShippingPrice?: MoneyInfo
  totalPrice: MoneyInfo
  products: OrderProduct[]
}

export interface OrderProduct {
  title: string
  quantity: number
  originalTotalPrice: MoneyInfo
  discountedTotalPrice: MoneyInfo
  variant?: OrderProductVariant
}

export interface OrderProductVariant {
  id: string | number
  title: string
  image?: Media & {
    id: string | number
    transformedSrc: string
  }
}
