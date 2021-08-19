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
import { useNormalizedProduct } from 'Components/Hooks'
import AddToCartButton from 'Components/AddToCartButton'
import Carousel from 'Components/Carousel'
import Container from 'Components/Container'
import Divider from 'Components/Divider'
import Flex from 'Components/Flex'
import Heading from 'Components/Heading'
import Icon from 'Components/Icon'
import List from 'Components/List'
import ListItem from 'Components/ListItem'
import NumberInput from 'Components/NumberInput'
import Select from 'Components/Select'
import Text from 'Components/Text'

/**
 * @typedef { import("lib/types").CmsProduct } CmsProduct
 * @typedef { import("lib/types").ProductVariant } ProductVariant
 * @typedef {{
 *  product?: CmsProduct
 * }} ProductBoxProps
 *
 * @param { ProductBoxProps } props
 */
const ProductBox = ({ product: cmsProduct }) => {
  const product = useNormalizedProduct(cmsProduct)
  const { id, name, variants, media, description = '' } = product || {}

  const [productQuantity, setProductQuantity] = React.useState(1)

  /** @type { [ ProductVariant | undefined, React.Dispatch<React.SetStateAction<ProductVariant | undefined>> ] } */
  const [currentVariant, setCurrentVariant] = React.useState(variants && variants[0])

  /** @type { Partial<ProductVariant> } */
  const { price, storefrontId } = currentVariant || {}

  const options =
    variants &&
    variants.map((/** @type { ProductVariant } */ variant) => ({
      value: variant.storefrontId,
      text: variant.name,
    }))

  /**
   * @param { string } quantityAsString
   * @param { number } quantityAsNumber
   */
  const handleProductQuantity = (quantityAsString, quantityAsNumber) => {
    setProductQuantity(quantityAsNumber)
  }

  /**
   * @param { React.ChangeEvent<HTMLSelectElement> } event
   */
  const handleVariantsSelect = event => {
    const selectedVariant =
      variants &&
      variants.find(
        (/** @type { ProductVariant } */ variant) =>
          variant.storefrontId === event.currentTarget.value,
      )

    if (!selectedVariant) return

    setCurrentVariant(selectedVariant)
  }

  return (
    <Container constrainContent maxW="1220px">
      <Flex flexDirection={{ base: 'column', lg: 'row' }} pt={10}>
        <Container w={{ base: '100%', lg: '65%' }}>
          <Carousel media={media} />
        </Container>

        <Container w={{ base: '100%', lg: '35%' }}>
          <Heading as="h1" size="lg" mb="3">
            {name}
          </Heading>

          <Text as="strong" display="block" fontSize="lg" mb="3">
            ${price}
          </Text>

          <Container
            mb={{ base: '5', md: '8' }}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <Divider />

          {variants && (
            <Container mt={4}>
              <label htmlFor="product-variants">Variants</label>
              <Select id="product-variants" options={options} onChange={handleVariantsSelect} />
            </Container>
          )}

          <Container mt={4}>
            <label htmlFor="product-quantity">Quantity</label>
            <NumberInput
              id="product-quantity"
              inputProps={{ 'aria-label': 'Product quantity' }}
              onChange={handleProductQuantity}
            />
          </Container>

          <Container mt={{ base: '5', md: '8' }} mb={{ base: '5', md: '10' }}>
            <AddToCartButton id={id} variantId={storefrontId} quantity={productQuantity} />
          </Container>

          <Container variant="solid">
            <List>
              <ListItem mb={3}>
                <Icon icon="ArrowRightIcon" mr="2" /> Free shipping + returns
              </ListItem>
              <ListItem mb={3}>
                <Icon icon="CheckIcon" mr="2" /> Extended warranty
              </ListItem>
              <ListItem>
                <Icon icon="QuestionOutlineIcon" mr="2" /> We’re here for you 24/7
              </ListItem>
            </List>
          </Container>
        </Container>
      </Flex>
    </Container>
  )
}

export default ProductBox
