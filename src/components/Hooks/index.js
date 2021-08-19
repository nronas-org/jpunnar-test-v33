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
import * as React from 'react'
import {
  isBigCommerceAddress,
  isBigCommerceCategory,
  isBigCommerceCustomer,
  isBigCommerceOrder,
  isBigCommerceCheckoutProduct,
  isBigCommerceProduct,
  isNormalizedCustomer,
  isNormalizedProduct,
  isShopifyAddress,
  isShopifyCheckoutProduct,
  isShopifyCollection,
  isShopifyCustomer,
  isShopifyOrder,
  isShopifyProduct,
} from 'Components/Utils'

export function useIsMounted() {
  const isMounted = React.useRef(false)

  React.useLayoutEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}

export function useIsFirstRender() {
  const isFirstRender = React.useRef(true)

  React.useEffect(() => {
    setTimeout(() => {
      isFirstRender.current = false
    }, 0)
  }, [])

  return isFirstRender
}

/**
 * @typedef { import("lib/types").Product } Product
 * @typedef { import("lib/types").CmsProduct } CmsProduct
 *
 * @param { CmsProduct | Product | null | undefined } product
 */
export function useNormalizedProduct(product) {
  return React.useMemo(() => {
    if (!product) return null

    if (isNormalizedProduct(product)) return product

    if (isShopifyProduct(product)) {
      /** @type { Product } */
      const normalizedProduct = {
        id: product.externalId,
        name: product.name,
        slug: `/${product.slug}/`,
        description: product.descriptionHtml || product.description,
        media: product.media.map(({ _id, details }) => ({ id: _id, ...details })),
        variants: product.variants.map(({ storefrontId, name, price, sku }) => ({
          storefrontId,
          name,
          price,
          sku,
        })),
        thumbnail: product.thumbnail,
        searchResult: product._highlightResult
          ? {
              name: product._highlightResult.name,
              description: product._highlightResult.description,
            }
          : undefined,
        _originalPlatform: 'shopify',
      }

      return normalizedProduct
    }

    if (isBigCommerceProduct(product)) {
      /** @type { Product } */
      const normalizedProduct = {
        id: product.id,
        name: product.name,
        slug: product.url,
        description: product.description,
        media: product.images.map(({ _id, media }) => ({
          id: _id,
          ...media,
        })),
        variants: product.variants.map(({ _id, price, sku }) => ({
          storefrontId: _id,
          name: sku,
          price,
          sku,
        })),
        searchResult: product._highlightResult
          ? {
              name: product._highlightResult.name,
              description: product._highlightResult.description,
            }
          : undefined,
        _originalPlatform: 'bigcommerce',
      }

      return normalizedProduct
    }

    throw new Error('Unknown Product type. Only Shopify and BigCommerce platforms are supported')
  }, [product])
}

/**
 * @typedef { import("lib/types").CmsCollection } CmsCollection
 * @typedef { import("lib/types").Collection } Collection
 *
 * @param { CmsCollection | null | undefined } cmsCollection
 * @returns { Collection | null }
 */
export function useNormalizedCollection(cmsCollection) {
  if (!cmsCollection) return null

  /** @type { Partial<Collection> } */
  const normalizedCollection = {
    name: '',
    slug: '',
    description: '',
    image: undefined,
    products: [],
  }

  if (isShopifyCollection(cmsCollection)) {
    return {
      ...normalizedCollection,
      name: cmsCollection.name,
      slug: cmsCollection.slug,
      description: cmsCollection.descriptionHtml || cmsCollection.description,
      image: cmsCollection.image,
      products: cmsCollection.products,
    }
  }

  if (isBigCommerceCategory(cmsCollection)) {
    return {
      ...normalizedCollection,
      name: cmsCollection.name,
      slug: `/${cmsCollection.url}/`,
      description: cmsCollection.description,
      image: cmsCollection.image,
      products: cmsCollection.products,
    }
  }

  throw new Error(
    'Unknown Collection/Category type. Only Shopify and BigCommerce platforms are supported.',
  )
}

/**
 * @typedef { import("lib/types").CheckoutProduct } CheckoutProduct
 * @typedef { import("lib/types").NormalizedCheckoutProduct } NormalizedCheckoutProduct
 *
 * @param { CheckoutProduct | null | undefined } checkoutProduct
 * @returns { NormalizedCheckoutProduct | null }
 */
export function useNormalizedCheckoutProduct(checkoutProduct) {
  if (!checkoutProduct) return null

  const initialParams = {
    subtitle: '',
    price: '',
    variantId: '',
    imageUrl: '',
    slug: '',
  }

  if (isShopifyCheckoutProduct(checkoutProduct)) {
    /** @type { Partial<NormalizedCheckoutProduct> } */
    const productVariant = checkoutProduct.variant
      ? {
          subtitle: checkoutProduct.variant.title,
          price: checkoutProduct.variant.price,
          variantId: checkoutProduct.variant.id,
          imageUrl: checkoutProduct.variant.image.src,
          slug: checkoutProduct.variant.product && checkoutProduct.variant.product.handle,
        }
      : {}

    return {
      ...initialParams,
      ...productVariant,
      id: checkoutProduct.id,
      title: checkoutProduct.title,
      quantity: checkoutProduct.quantity,
    }
  }

  if (isBigCommerceCheckoutProduct(checkoutProduct)) {
    return {
      ...initialParams,
      id: checkoutProduct.id,
      title: checkoutProduct.name,
      subtitle: checkoutProduct.brand,
      price: checkoutProduct.listPrice,
      quantity: checkoutProduct.quantity,
      variantId: checkoutProduct.variantId,
      imageUrl: checkoutProduct.imageUrl,
    }
  }

  throw new Error(
    'Unknown CheckoutProduct type. Only Shopify and BigCommerce platforms are supported.',
  )
}

/**
 * @typedef { import("lib/types").PlatformCustomer } PlatformCustomer
 * @typedef { import("lib/types").PlatformAddress } PlatformAddress
 * @typedef { import("lib/types").PlatformOrder } PlatformOrder
 * @typedef { import("lib/types").Customer } Customer
 * @typedef { import("lib/types").Order } Order
 * @typedef { import("lib/types").Address } Address
 * @typedef { import("lib/types").OrderProduct } OrderProduct
 *
 * @param { PlatformCustomer | Customer } customer
 */
export function useNormalizedCustomer(customer) {
  return React.useMemo(() => {
    if (isNormalizedCustomer(customer)) return customer

    if (!customer.isLoggedIn) {
      /** @type { Customer } */
      const normalizedCustomer = {
        isLoggedIn: customer.isLoggedIn,
        status: customer.status,
        _originalPlatform: 'shopify',
      }

      return normalizedCustomer
    }

    if (isShopifyCustomer(customer)) {
      /**
       * @param { PlatformAddress } address
       * @returns { Address }
       */
      const normalizeAddress = address => {
        if (!isShopifyAddress(address)) {
          throw new Error('Expected only Shopify addresses in Shopify customer state')
        }

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
      }

      /**
       * @param { PlatformOrder } order
       * @returns { Order }
       */
      const normalizeOrder = order => {
        if (!isShopifyOrder(order)) {
          throw new Error('Expected only Shopify orders in Shopify customer state')
        }

        /** @type { Order } */
        const normalizedOrder = {
          id: order.id,
          name: order.name,
          processedAt: order.processedAt,
          fulfillmentStatus: order.fulfillmentStatus,
          totalPrice: order.totalPriceV2,
          products: order.lineItems.edges.map(({ node: product }) => {
            const { variant } = product
            const { image: variantImage } = variant

            return {
              title: product.title,
              quantity: product.quantity,
              originalTotalPrice: product.originalTotalPrice,
              discountedTotalPrice: product.discountedTotalPrice,
              variant: {
                id: variant.id,
                title: variant.title,
                image: {
                  id: variantImage.id,
                  name: 'n/a',
                  src: variantImage.originalSrc,
                  transformedSrc: variantImage.transformedSrc,
                  alt: variantImage.altText,
                  width: variantImage.width,
                  height: variantImage.height,
                },
              },
            }
          }),
        }

        if (order.financialStatus !== null) {
          normalizedOrder.financialStatus = order.financialStatus
        }

        if (order.subtotalPriceV2 !== null) {
          normalizedOrder.subtotalPrice = order.subtotalPriceV2
        }

        if (order.totalShippingPriceV2 !== null) {
          normalizedOrder.totalShippingPrice = order.totalShippingPriceV2
        }

        return normalizedOrder
      }

      /** @type { Customer } */
      const normalizedCustomer = {
        isLoggedIn: customer.isLoggedIn,
        status: customer.status,
        _originalPlatform: 'shopify',
      }

      if (customer.id !== null) {
        normalizedCustomer.id = customer.id
      }

      if (customer.firstName !== null) {
        normalizedCustomer.firstName = customer.firstName
      }

      if (customer.lastName !== null) {
        normalizedCustomer.lastName = customer.lastName
      }

      if (customer.defaultAddress !== null) {
        normalizedCustomer.defaultAddress = normalizeAddress(customer.defaultAddress)
      }

      if (customer.email !== null) {
        normalizedCustomer.email = customer.email
      }

      if (customer.phone !== null) {
        normalizedCustomer.phone = customer.phone
      }

      if (customer.addresses !== null) {
        normalizedCustomer.addresses = customer.addresses.map(normalizeAddress)
      }

      if (customer.orders !== null) {
        normalizedCustomer.orders = customer.orders.map(normalizeOrder)
      }

      return normalizedCustomer
    }

    if (isBigCommerceCustomer(customer)) {
      /**
       * @param { PlatformAddress } address
       * @returns { Address }
       */
      const normalizeAddress = address => {
        if (!isBigCommerceAddress(address)) {
          throw new Error('Expected only BigCommerce addresses in BigCommerce customer state')
        }

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
          province: address.state,
          zip: address.postalCode,
        }
      }

      /**
       * @param { PlatformOrder } order
       * @returns { Order }
       */
      const normalizeOrder = order => {
        if (!isBigCommerceOrder(order)) {
          throw new Error('Expected only BigCommerce orders in BigCommerce customer state')
        }

        const { defaultCurrencyCode, currencyCode = defaultCurrencyCode } = order

        /** @type { Order } */
        const normalizedOrder = {
          id: order.id.toString(),
          name: `#${order.id}`,
          processedAt: order.dateCreated,
          fulfillmentStatus: order.status,
          totalPrice: { amount: order.totalIncTax, currencyCode },
          products: order.products.map(product => {
            const { appliedDiscounts = [], productOptions = [] } = product

            const totalDiscount = appliedDiscounts.reduce(
              (accumulator, { amount }) => accumulator + Number(amount),
              0,
            )

            /** @type { OrderProduct } */
            const normalizedProduct = {
              title: product.name,
              quantity: product.quantity,
              originalTotalPrice: { amount: product.totalIncTax, currencyCode },
              discountedTotalPrice: {
                amount: String(Number(product.totalIncTax) - totalDiscount),
                currencyCode,
              },
            }

            const variantTitle = productOptions
              .map(
                ({ display_name_customer, display_value_customer }) =>
                  `${display_name_customer}: ${display_value_customer}`,
              )
              .join(', ')

            if (variantTitle.length > 0) {
              normalizedProduct.variant = {
                id: 'n/a',
                title: variantTitle,
              }
            }

            return normalizedProduct
          }),
        }

        if (order.paymentStatus !== null) {
          normalizedOrder.financialStatus = order.paymentStatus
        }

        if (order.subtotalIncTax !== null) {
          normalizedOrder.subtotalPrice = { amount: order.subtotalIncTax, currencyCode }
        }

        if (order.shippingCostIncTax !== null) {
          normalizedOrder.totalShippingPrice = { amount: order.shippingCostIncTax, currencyCode }
        }

        return normalizedOrder
      }

      /** @type { Customer } */
      const normalizedCustomer = {
        isLoggedIn: customer.isLoggedIn,
        status: customer.status,
        _originalPlatform: 'bigcommerce',
      }

      if (customer.id !== null) {
        normalizedCustomer.id = customer.id
      }

      if (customer.firstName !== null) {
        normalizedCustomer.firstName = customer.firstName
      }

      if (customer.lastName !== null) {
        normalizedCustomer.lastName = customer.lastName
      }

      if (customer.addresses !== null && customer.addresses.length > 0) {
        normalizedCustomer.defaultAddress = normalizeAddress(customer.addresses[0])
      }

      if (customer.email !== null) {
        normalizedCustomer.email = customer.email
      }

      if (customer.phone !== null) {
        normalizedCustomer.phone = customer.phone
      }

      if (customer.addresses !== null) {
        normalizedCustomer.addresses = customer.addresses.map(normalizeAddress)
      }

      if (customer.orders !== null) {
        normalizedCustomer.orders = customer.orders.map(normalizeOrder)
      }

      return normalizedCustomer
    }

    throw new Error('Unknown customer type. Only Shopify and BigCommerce platforms are supported')
  }, [customer])
}

export default () => null
