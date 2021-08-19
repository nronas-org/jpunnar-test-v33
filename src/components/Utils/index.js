/**
 *
 * MIT License
 *
 * Copyright 2021 Shogun, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @template T
 * @param {T | 'undefined'} [value]
 * @param {T} [defaultValue]
 * @returns {T | undefined}
 */
export function normalizePropValue(value, defaultValue) {
  return value === undefined || value === 'undefined' ? defaultValue : value
}

/**
 * @param { import("lib/types").Platform } platform
 * @param { Partial<import("lib/types").Address> } address
 * @return { Partial<import("lib/types").PlatformAddress> }
 */
export function denormalizeAddress(platform, address) {
  if (platform === 'shopify')
    return {
      id: address.id,
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      company: address.company,
      country: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      province: address.province,
      zip: address.zip,
    }

  if (platform === 'bigcommerce')
    return {
      id: address.id,
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      company: address.company,
      country: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      state: address.province,
      postalCode: address.zip,
    }

  throw new Error(`Can't denormalize address: unknown platform "${platform}"`)
}

/**
 * @param {string} str
 * @param {RegExp} regexp
 * @returns {string[]}
 */
export function getMatchesFromString(str, regexp) {
  /** @type {string[]} */
  const results = []

  let result = regexp.exec(str)

  while (result) {
    results.push(result[1])
    result = regexp.exec(str)
  }

  return results
}

/**
 * @param {React.ReactNode[]} parts
 * @param {string} placeholder
 * @param {React.ReactNode} replacement
 * @returns {React.ReactNode[]}
 */
export function getArrayNodesReplaced(parts, placeholder, replacement) {
  /**
   * @param {React.ReactNode[]} accumulator
   * @param {React.ReactNode} currentValue
   * @param {number} currentIndex
   * @param {React.ReactNode[]} array
   * @returns {React.ReactNode[]}
   */
  const reducer = (accumulator, currentValue, currentIndex, array) => {
    accumulator.push(currentValue)

    if (currentIndex < array.length - 1) {
      accumulator = accumulator.concat(replacement)
    }

    return accumulator
  }

  /** @type {React.ReactNode[]} */
  let newResult = []

  for (const part of parts) {
    if (typeof part === 'string') {
      const subparts = part.split(placeholder).reduce(reducer, [])

      newResult = newResult.concat(subparts)
    } else {
      newResult = newResult.concat(part)
    }
  }

  return newResult
}

/**
 * @typedef {{
 *  money: string | number
 *  locales?: string | string[]
 *  options?: Intl.NumberFormatOptions
 * }} Payload
 *
 * @param {Payload} payload
 * @returns {string}
 */
export function formatMoney({ money, locales, options }) {
  if (typeof money === 'string') {
    money = Number(money)
  }

  const formatter = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: 'USD',
    ...options,
  })

  return formatter.format(money)
}

/**
 * @typedef {{
 *  date: Date | string
 *  display?: 'datetime' | 'date' | 'time'
 *  locales?: string | string[]
 *  options?: Intl.DateTimeFormatOptions
 * }} FormatDatePayload
 *
 * @param {FormatDatePayload} payload
 * @returns {string}
 */
export function formatDate({ date, display = 'datetime', locales, options }) {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  switch (display) {
    case 'date':
      return date.toLocaleDateString(locales, options)

    case 'time':
      return date.toLocaleTimeString(locales, options)

    default:
      return date.toLocaleString(locales, options)
  }
}

/**
 * Type guards ⤋⤋⤋
 *
 * Customer state (accounts)
 *
 * @typedef { import("lib/types").PlatformCustomer } PlatformCustomer
 * @typedef { import("lib/types").ShopifyCustomer } ShopifyCustomer
 * @typedef { import("lib/types").BigCommerceCustomer } BigCommerceCustomer
 * @typedef { import("lib/types").Customer } Customer
 *
 * @param { Record<string, any> } customer
 * @return { customer is ShopifyCustomer }
 */
export function isShopifyCustomer(customer) {
  return (
    customer &&
    !customer.hasOwnProperty('_originalPlatform') &&
    customer.hasOwnProperty('createdAt') &&
    customer.createdAt !== null
  )
}

/**
 * @param { Record<string, any> } customer
 * @return { customer is BigCommerceCustomer }
 */
export function isBigCommerceCustomer(customer) {
  return (
    customer &&
    !customer.hasOwnProperty('_originalPlatform') &&
    customer.hasOwnProperty('addressCount') &&
    customer.addressCount !== null
  )
}

/**
 * @param { PlatformCustomer | Customer } customer
 * @returns { customer is Customer }
 */
export function isNormalizedCustomer(customer) {
  return customer && customer.hasOwnProperty('_originalPlatform')
}

/**
 * @typedef { import("lib/types").PlatformOrder } PlatformOrder
 * @typedef { import("lib/types").ShopifyOrder } ShopifyOrder
 * @typedef { import("lib/types").BigCommerceOrder } BigCommerceOrder
 * @typedef { import("lib/types").Order } Order
 *
 * @param { PlatformOrder | Order } order
 * @returns { order is ShopifyOrder }
 */
export function isShopifyOrder(order) {
  return order && order.hasOwnProperty('name')
}

/**
 * @param { PlatformOrder | Order } order
 * @returns { order is BigCommerceOrder }
 */
export function isBigCommerceOrder(order) {
  return order && order.hasOwnProperty('dateCreated')
}

/**
 * @typedef { import("lib/types").PlatformAddress } PlatformAddress
 * @typedef { import("lib/types").ShopifyAddress } ShopifyAddress
 * @typedef { import("lib/types").BigCommerceAddress } BigCommerceAddress
 * @typedef { import("lib/types").Address } Address
 *
 * @param { PlatformAddress | Address } address
 * @return { address is ShopifyAddress }
 */
export function isShopifyAddress(address) {
  return address && address.hasOwnProperty('zip')
}

/**
 * @param { PlatformAddress | Address } address
 * @return { address is BigCommerceAddress }
 */
export function isBigCommerceAddress(address) {
  return address && address.hasOwnProperty('postalCode')
}

/**
 * Products & Collections
 * @typedef { import("lib/types").CmsProduct } cmsProduct
 * @typedef { import("lib/types").ShopifyProduct } ShopifyProduct
 * @typedef { import("lib/types").BigCommerceProduct } BigCommerceProduct
 * @typedef { import("lib/types").Product } Product
 *
 * @param { cmsProduct | Product } product
 * @returns { product is Product }
 */
export function isNormalizedProduct(product) {
  return product && product.hasOwnProperty('_originalPlatform')
}

/**
 * @param { cmsProduct | Product } product
 * @returns { product is ShopifyProduct }
 */
export function isShopifyProduct(product) {
  return product && product.hasOwnProperty('slug')
}

/**
 * @param { cmsProduct | Product } product
 * @returns { product is BigCommerceProduct }
 */
export function isBigCommerceProduct(product) {
  return product && product.hasOwnProperty('url')
}

/**
 * @param { import("lib/types").CmsCollection } collection
 * @returns { collection is import("lib/types").ShopifyCollection }
 */
export function isShopifyCollection(collection) {
  return collection && collection.hasOwnProperty('slug')
}

/**
 * @param { import("lib/types").CmsCollection } category
 * @returns { category is import("lib/types").BigCommerceCategory }
 */
export function isBigCommerceCategory(category) {
  return category && category.hasOwnProperty('url')
}

/**
 * @param { import("lib/types").CheckoutProduct } checkoutProduct
 * @returns { checkoutProduct is import("lib/types").CheckoutShopifyProduct }
 */
export function isShopifyCheckoutProduct(checkoutProduct) {
  return checkoutProduct && checkoutProduct.hasOwnProperty('title')
}

/**
 * @param { import("lib/types").CheckoutProduct } checkoutProduct
 * @returns { checkoutProduct is import("lib/types").CheckoutBigCommerceProduct }
 */
export function isBigCommerceCheckoutProduct(checkoutProduct) {
  return checkoutProduct && checkoutProduct.hasOwnProperty('name')
}

export default () => null
