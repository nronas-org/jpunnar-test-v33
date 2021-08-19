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
import { useCartActions } from 'frontend-checkout'
import { useNormalizedCheckoutProduct, useIsMounted } from 'Components/Hooks'
import { formatMoney } from 'Components/Utils'
import Flex from 'Components/Flex'
import Grid from 'Components/Grid'
import GridItem from 'Components/GridItem'
import Heading from 'Components/Heading'
import Icon from 'Components/Icon'
import IconButton from 'Components/IconButton'
import Image from 'Components/Image'
import Link from 'Components/Link'
import NumberInput from 'Components/NumberInput'
import Text from 'Components/Text'

const PRODUCT_MAX_QUANTITY = 150
const PRODUCT_MIN_QUANTITY = 1

/**
 * @typedef { import('lib/types').CheckoutProduct } CheckoutProduct
 * @typedef {{
 *  product: CheckoutProduct
 *  inDrawer?: boolean
 * }} CartItemProps
 *
 * @param {CartItemProps} props
 */
const CartItem = ({ product: checkoutProduct, inDrawer }) => {
  const product = useNormalizedCheckoutProduct(checkoutProduct)

  if (!product) throw new Error(`Expected product but got ${product}.`)

  const { id, title, subtitle, price, quantity, imageUrl, slug } = product
  const productUrl = slug ? `/products/${slug}` : '#'

  const isMounted = useIsMounted()
  const {
    getProductQuantity,
    getProductMaxOrder,
    getProductMinOrder,
    isProductAvailableForSale,
    removeItems,
    updateItems,
  } = useCartActions()
  const [soldOut, setSoldOut] = React.useState(false)
  const [maxQuantity, setMaxQuantity] = React.useState(PRODUCT_MAX_QUANTITY)
  const [minQuantity, setMinQuantity] = React.useState(PRODUCT_MIN_QUANTITY)

  React.useEffect(() => {
    if (!product) return

    const id = product.variantId || product.id || ''

    async function setIsProductAvailableForSale() {
      const available = await isProductAvailableForSale({ id })

      if (!isMounted.current) return

      setSoldOut(!available)
    }

    async function setProductQuantity() {
      const quantity = await getProductQuantity({ id })
      const maxQuantity = await getProductMaxOrder({ id })
      const minQuantity = await getProductMinOrder({ id })

      if (!isMounted.current) return

      setMaxQuantity(maxQuantity || quantity || PRODUCT_MAX_QUANTITY)
      setMinQuantity(minQuantity || PRODUCT_MIN_QUANTITY)
    }

    setIsProductAvailableForSale()
    setProductQuantity()
  }, [
    getProductQuantity,
    getProductMaxOrder,
    getProductMinOrder,
    isProductAvailableForSale,
    isMounted,
    product,
  ])

  /**
   *
   * @param {string} _
   * @param {number} quantityAsNumber
   */
  const onChangeItemQuantity = (_, quantityAsNumber) => {
    updateItems({ id, quantity: quantityAsNumber })
  }

  return (
    <Grid
      p={1}
      minWidth="2xs"
      bg={soldOut ? 'gray.100' : 'transparent'}
      templateAreas={{
        base: "'thumbnail name remove-button' 'thumbnail price price'",
        md: inDrawer ? undefined : "'thumbnail name price remove-button'",
      }}
      templateColumns={{
        base: '5rem 1fr 2rem',
        md: '7.5rem 6fr 3fr 1fr',
      }}
      gap={4}
      alignItems="center"
    >
      <GridItem gridArea="thumbnail">
        <Link href={productUrl}>
          <Image src={imageUrl} alt="" htmlWidth="180" htmlHeight="120" />
        </Link>
      </GridItem>

      <GridItem gridArea="name">
        <Link href={productUrl}>
          <Heading as="h3" color="black" fontWeight="semibold" size="sm">
            {title}
          </Heading>
          {subtitle && (
            <Text fontSize="sm" noOfLines={1}>
              {subtitle}
            </Text>
          )}
        </Link>
        {soldOut && (
          <Text fontSize="sm" color="red.600">
            Sold Out
          </Text>
        )}
      </GridItem>

      <GridItem gridArea="price" pr={1}>
        <Flex flexWrap={{ base: 'wrap', sm: 'nowrap' }} mb={-2} ml={-10}>
          <Text
            display={inDrawer ? { base: 'none', xl: 'unset' } : undefined}
            mb={2}
            ml={10}
            fontWeight="semibold"
          >
            {formatMoney({ money: price })}
          </Text>
          <NumberInput
            value={quantity}
            isDisabled={!!soldOut}
            max={maxQuantity}
            min={minQuantity}
            onChange={onChangeItemQuantity}
            containerProps={{
              maxW: 80,
              minW: 28,
              mb: 2,
              ml: 10,
            }}
            inputProps={{
              'aria-label': 'Product quantity',
              size: 'xs',
            }}
            buttonProps={{
              size: 'xs',
              height: 'full',
            }}
          />
          <Text mb={2} ml={10} fontWeight="semibold">
            {formatMoney({ money: Number(price) * quantity })}
          </Text>
        </Flex>
      </GridItem>

      <GridItem
        pr={1}
        gridArea="remove-button"
        alignSelf={{ base: 'start', md: 'center' }}
        justifySelf="end"
      >
        <IconButton
          icon={<Icon icon="CloseIcon" />}
          aria-label={`Remove ${title} from cart`}
          size="xs"
          border="0"
          variant="outline"
          height="full"
          p="1"
          _hover={{ color: 'gray.700' }}
          onClick={() => removeItems(id)}
        />
      </GridItem>
    </Grid>
  )
}

export default CartItem
