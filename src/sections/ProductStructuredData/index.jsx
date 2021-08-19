import * as React from 'react'
import Head from 'frontend-head'
import { useCartActions } from 'frontend-checkout'
import { useRouter } from 'frontend-router'
import { useIsMounted, useNormalizedProduct } from 'Components/Hooks'

const HOST_URL = 'https://shogun-starter-kit-mvp.frontend.getshogun.com'

/**
 * @typedef { import("lib/types").CmsProduct } CmsProduct
 * @typedef {{
 *  product: CmsProduct
 * }} ProductStructuredDataProps
 *
 * @param { ProductStructuredDataProps } props
 */
const ProductStructuredData = ({ product: cmsProduct }) => {
  const router = useRouter()
  const isMounted = useIsMounted()

  const product = useNormalizedProduct(cmsProduct)

  const { isProductAvailableForSale } = useCartActions()
  const [availableForSale, setAvailableForSale] = React.useState(true)

  React.useEffect(() => {
    if (!product) return

    const itemId =
      product.variants && product.variants.length ? product.variants[0].storefrontId : product.id
    const id = itemId || ''

    async function setIsProductAvailableForSale() {
      const available = await isProductAvailableForSale({ id })

      if (!isMounted.current) return

      setAvailableForSale(available)
    }

    setIsProductAvailableForSale()
  }, [product, isProductAvailableForSale, isMounted])

  if (!product) return null

  const { id, name, thumbnail, variants, description } = product
  const variant = variants && variants.length > 0 ? variants[0] : undefined

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: thumbnail ? thumbnail.src : undefined,
    sku: variant ? variant.sku : undefined,
    mpn: id,
    brand: {
      '@type': 'Organization',
      name: 'Shogun Starter Kit',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: variant ? variant.price : undefined,
      availability: availableForSale ? 'InStock' : 'OutOfStock',
      url: `${HOST_URL}${router.pathname}`,
      seller: {
        '@type': 'Organization',
        name: 'Shogun Starter Kit',
      },
    },
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  )
}

export default ProductStructuredData
