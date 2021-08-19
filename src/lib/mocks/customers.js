import { nanoid } from 'nanoid'

export const customers = {
  /**
   * Shopify
   *
   * Customer with 2 orders
   */
  'john@shopify-platform.com': {
    graphql: {
      id: 'Z2lkO52vc2hvcGlaeS9DdXN0h21eci81MTIzrjA5NTU5MTAz',
      email: 'john@shopify-platform.com',
      firstName: 'John',
      lastName: 'Doe',
      displayName: 'John Doe',
      defaultAddress: {
        address1: '4546 Woodland Avenue',
        address2: '',
        city: 'New Orleans',
        company: 'My Company',
        country: 'United States',
        firstName: 'John',
        id: 'Z2f2lkj432vc2hvcGlaeS9DdXN0h21eci81MTIzrjA5NTU5',
        lastName: 'Doe',
        phone: '+1-985-707-1109',
        province: 'Louisiana',
        zip: '70032',
      },
      addresses: {
        edges: [
          {
            node: {
              address1: '4546 Woodland Avenue',
              address2: '',
              city: 'New Orleans',
              company: 'My Company',
              country: 'United States',
              firstName: 'John',
              id: 'Z2f2lkj432vc2hvcGlaeS9DdXN0h21eci81MTIzrjA5NTU5',
              lastName: 'Doe',
              phone: '+1-985-707-1109',
              province: 'Louisiana',
              zip: '70032',
            },
          },
          {
            node: {
              address1: '13407 Southwest Amu Street #U8251',
              address2: '',
              city: 'Tualatin',
              company: '',
              country: 'United States',
              firstName: 'John',
              id: 'Z2lkOi8vc2hvcGlmeMDk1P21vZGVsX25hbWU9QWRkcmVzcw',
              lastName: 'Doe',
              phone: null,
              province: 'Oregon',
              zip: '235256',
            },
          },
        ],
        pageInfo: { hasNextPage: false, hasPreviousPage: false },
      },
      phone: null,
      acceptsMarketing: false,
      createdAt: '2021-02-28T13:46:28Z',

      orders: {
        edges: [
          // Order #1 with 1 item
          {
            node: {
              cancelReason: null,
              canceledAt: null,
              currencyCode: 'USD',
              currentSubtotalPrice: { amount: '7.99', currencyCode: 'USD' },
              currentTotalPrice: { amount: '12.94', currencyCode: 'USD' },
              currentTotalTax: { amount: '0.0', currencyCode: 'USD' },
              customerLocale: 'en',
              customerUrl: 'https://example.com/account/orders/74ecba71353453458293543d70d7cc84c',
              discountApplications: { edges: [] },
              edited: false,
              email: 'john@shopify-platform.com',
              financialStatus: 'PAID',
              fulfillmentStatus: 'FULFILLED',
              id: 'Z2lkOi8vc2sdfzE5P2tleT00MTc5ODkyODRjYTQzYTlhNTc2NTA4MTJjNWFjMzkxOQ==',
              lineItems: {
                edges: [
                  {
                    node: {
                      currentQuantity: 1,
                      customAttributes: [],
                      discountAllocations: [],
                      discountedTotalPrice: { amount: '7.99', currencyCode: 'USD' },
                      originalTotalPrice: { amount: '7.99', currencyCode: 'USD' },
                      quantity: 1,
                      title: 'The Feed aLOKSAK',
                      variant: {
                        availableForSale: true,
                        currentlyNotInStock: false,
                        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjYzOTIyOTg4NjUyNw==',
                        image: {
                          altText: 'The Feed aLOKSAK-4x7-The Feed',
                          height: 924,
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTQ5MzcyMTA1ODUxNTE=',
                          originalSrc:
                            'https://cdn.shopify.com/s/files/1/1515/2714/products/the-feed-gear-4x7-the-feed-aloksak-14937191546943.jpg?v=1597859495',
                          transformedSrc:
                            'https://cdn.shopify.com/s/files/1/1515/2714/products/the-feed-gear-4x7-the-feed-aloksak-14937191546943.jpg?v=1597859495',
                          width: 916,
                        },
                        priceV2: { amount: '7.99', currencyCode: 'USD' },
                        product: {
                          descriptionHtml:
                            '<meta charset="utf-8">\n<div class="fusion-text">\n<p><span>Are you like us when you work out and always struggling to find the perfect bag to protect your phone and personal items from the elements?  Well look no further as these custom bags are just what you need!  And yes....you can finally stop wasting those sandwich zip lock bags.  Keep those for your kids!</span></p>\n<p><span>We\'re a huge fan of this brand and "aLOKSAK is the only re-sealable, flexible storage bag offering protection from all the elements. The patented, light-weight storage system prevents air, humidity, water, dust and sand from harming your valuables. aLOKSAK can also ensure your treasures are safe from the passage of time.</span><br><span>MILITARY GRADE: These bags are used for safe element proof transport and storage by outdoor enthusiasts, all branches of the U.S. and Foreign Military, and by many governmental and law enforcement agencies worldwide!"</span></p>\n<p><span>Here are the great features of this amazing bag</span></p>\n<meta charset="utf-8">\n<ul>\n<li>Hermetic Seal – An Absolute Airtight Seal Preventing the Re-entry or Release of Air and Micro-Organisms</li>\n<li>Made in the USA</li>\n<li>Holds Five Patents</li>\n<li>4X7 Size - Fits almost all popular smart phone models<br>\n</li>\n<li>Protects Against Microscopic Particles like Dust and Sand</li>\n<li>Recyclable and Reusable</li>\n<li>All Touch Screen Electronics Work 100% While Protected in the aLOKSAK</li>\n<li>Make and Receive Phone Calls While Phone is Protected in aLOKSAK</li>\n</ul>\n</div>',
                          handle: 'the-feed-lok-sak',
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ2NzEzNDM4NTM2MzE=',
                          title: 'The Feed aLOKSAK',
                        },
                        requiresShipping: true,
                        selectedOptions: [{ name: 'Size', value: '4x7' }],
                        sku: 'tf_aloksak',
                        title: '4x7',
                        unitPriceMeasurement: {
                          measuredType: null,
                          quantityUnit: null,
                          quantityValue: 0,
                          referenceUnit: null,
                          referenceValue: 0,
                        },
                        weight: 1,
                        weightUnit: 'GRAMS',
                      },
                    },
                  },
                ],
              },
              name: '#291888',
              orderNumber: 291888,
              originalTotalPrice: { amount: '12.94', currencyCode: 'USD' },
              phone: null,
              processedAt: '2021-05-21T14:16:41Z',
              shippingAddress: {
                address1: '13407 Southwest Amu Street #U8251',
                address2: '',
                city: 'Tualatin',
                company: null,
                country: 'United States',
                firstName: 'John',
                id: 'Z2lkOi8vc2hvcGlmeMDk1P21vZGVsX25hbWU9QWRkcmVzcw==',
                lastName: 'Doe',
                phone: '',
                province: 'Oregon',
                zip: '235256',
              },
              shippingDiscountAllocations: [],
              statusUrl:
                'https://example.com/15152714/orders/74ecba718cbf1d70d7cc84c/authenticate?key=417989284',
              subtotalPriceV2: { amount: '7.99', currencyCode: 'USD' },
              successfulFulfillments: [
                {
                  trackingCompany: 'USPS',
                  trackingInfo: [
                    {
                      number: '3252525314623623642346623463246',
                      url: 'https://tools.usps.com/go/TrackConfirmAction.action?tLabels=3252525314623623642346623463246',
                    },
                  ],
                },
              ],
              totalPriceV2: { amount: '12.94', currencyCode: 'USD' },
              totalRefundedV2: { amount: '0.0', currencyCode: 'USD' },
              totalShippingPriceV2: { amount: '4.95', currencyCode: 'USD' },
              totalTaxV2: { amount: '0.0', currencyCode: 'USD' },
            },
          },

          // Order #2 with 3 items
          {
            node: {
              cancelReason: null,
              canceledAt: null,
              currencyCode: 'USD',
              currentSubtotalPrice: { amount: '645.00', currencyCode: 'USD' },
              currentTotalPrice: { amount: '745.00', currencyCode: 'USD' },
              currentTotalTax: { amount: '0.0', currencyCode: 'USD' },
              customerLocale: 'en',
              customerUrl:
                'https://example.com/account/orders/74ecba71353453346346293543d70d7cc84c',
              discountApplications: { edges: [] },
              edited: false,
              email: 'john@shopify-platform.com',
              financialStatus: 'PAID',
              fulfillmentStatus: 'FULFILLED',
              id: 'Z2lkOi8vc2sdfzE5P2tleT00MTc5ODkyODRjYTQzYTsedgNTc2NTA4MTJjNWFjMzkxOQ==',
              lineItems: {
                edges: [
                  {
                    node: {
                      currentQuantity: 1,
                      customAttributes: [],
                      discountAllocations: [],
                      discountedTotalPrice: { amount: '165.00', currencyCode: 'USD' },
                      originalTotalPrice: { amount: '199.00', currencyCode: 'USD' },
                      quantity: 1,
                      title: '700C Aerospoke - Lime Green Front',
                      variant: {
                        availableForSale: true,
                        currentlyNotInStock: false,
                        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTM0NTUwMTIwODc0NA==',
                        image: {
                          altText: null,
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMjgwODk0NjAwNjQ0MjQ=',
                          width: 2048,
                          height: 1365,
                          originalSrc:
                            'https://cdn.shopify.com/s/files/1/0551/9343/6328/products/img-700c-limewb-250x250.gif?v=1615251069',
                          transformedSrc:
                            'https://cdn.shopify.com/s/files/1/0551/9343/6328/products/img-700c-limewb-250x250.gif?v=1615251069',
                        },
                        priceV2: { amount: '199.0', currencyCode: 'USD' },
                        product: {
                          descriptionHtml:
                            '<p>Whether you are a Velodrome Racer or a Fixie Rider, Aerospoke wheels are essential gear for your ride. Aerospoke is proud of the many world records set on our wheels, many of which came on the Velodrome. The aerodynamic performance and rollability of Aerospoke&nbsp;wheels is proven. The stiffness of Aerospoke&nbsp;wheels means less energy loss due to wheel flex or deformation. Aerospoke&nbsp;wheels are rugged and that means less time truing spokes and more time riding the streets. Aerospoke&nbsp;five spoke wing design provides a canvas to be creative with our wheels as well - and we offer a wide variety of colors to do just that.</p>',
                          handle: '700c-aerospoke',
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NjgxODE3OTI5MzY=',
                          title: '700C Aerospoke - Lime Green Front',
                        },
                        requiresShipping: true,
                        selectedOptions: [
                          { name: 'Wheel-Type', value: 'Front' },
                          { name: 'Color', value: 'Lime Green' },
                        ],
                        sku: 'Aerospoke - Lime Green Front',
                        title: 'Front / Lime Green',
                        unitPriceMeasurement: {
                          measuredType: null,
                          quantityUnit: null,
                          quantityValue: 0,
                          referenceUnit: null,
                          referenceValue: 0,
                        },
                        weight: 13.9994,
                        weightUnit: 'GRAMS',
                      },
                    },
                  },
                  {
                    node: {
                      currentQuantity: 1,
                      customAttributes: [],
                      discountAllocations: [],
                      discountedTotalPrice: { amount: '120.00', currencyCode: 'USD' },
                      originalTotalPrice: { amount: '120.00', currencyCode: 'USD' },
                      quantity: 10,
                      title: 'Ding Dong Bell',
                      variant: {
                        availableForSale: true,
                        currentlyNotInStock: false,
                        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTM0NTU4MTQ5MDM0NA==',
                        image: {
                          altText: null,
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMjgwODk1NjM0MTQ2OTY=',
                          width: 2048,
                          height: 1365,
                          originalSrc:
                            'https://cdn.shopify.com/s/files/1/0551/9343/6328/products/CITY-BELL_PASTEL_RED_FRONT_WEB.jpg?v=1615251594',
                          transformedSrc:
                            'https://cdn.shopify.com/s/files/1/0551/9343/6328/products/CITY-BELL_PASTEL_RED_FRONT_WEB.jpg?v=1615251594',
                        },
                        priceV2: { amount: '12.0', currencyCode: 'USD' },
                        product: {
                          descriptionHtml: `<p>Never shout "On your left!" again! Let the pleasant peal of the Ding Dong bell announce your presence. Perfect for herding pedestrians on the multi-use path, ringing "hello" to a friend, or letting your neighborhood know just how much you enjoy riding, every bike deserves a voice and none sounds more 'bikey' than, "Ding Dong!"</p>
                            <div class="textile">
                            <h3>Specs</h3>
                            <ul>
                            <li>“Ding Dong” – the bell</li>
                            <li>Fits Pure City, Pure Fix, and any 22.2mm handlebars</li>
                            <li>Tolls for thee</li>
                            </ul>
                            </div>`,
                          handle: 'ding-dong-bell',
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NjgyMDAxNDMwMTY=',
                          title: 'Bell - Ding Dong - Red',
                        },
                        requiresShipping: true,
                        selectedOptions: [{ name: 'Color', value: 'Red' }],
                        sku: 'Bell - Ding Dong - Red',
                        title: 'Red',
                        unitPriceMeasurement: {
                          measuredType: null,
                          quantityUnit: null,
                          quantityValue: 0,
                          referenceUnit: null,
                          referenceValue: 0,
                        },
                        weight: 1.0009,
                        weightUnit: 'LB',
                      },
                    },
                  },
                  {
                    node: {
                      currentQuantity: 1,
                      customAttributes: [],
                      discountAllocations: [],
                      discountedTotalPrice: { amount: '360.00', currencyCode: 'USD' },
                      originalTotalPrice: { amount: '360.00', currencyCode: 'USD' },
                      quantity: 3,
                      title: 'DZR Mamba',
                      variant: {
                        availableForSale: true,
                        currentlyNotInStock: false,
                        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTM0NTU4NzI1NzUxMg==',
                        image: {
                          altText: null,
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMjgwODk1NjgzNjI2NjQ=',
                          width: 2048,
                          height: 1365,
                          originalSrc:
                            'https://cdn.shopify.com/s/files/1/0551/9343/6328/products/DZR_MAMBA_PAIR_FRONT_WEB.jpg?v=1615251629',
                          transformedSrc:
                            'https://cdn.shopify.com/s/files/1/0551/9343/6328/products/DZR_MAMBA_PAIR_FRONT_WEB.jpg?v=1615251629',
                        },
                        priceV2: { amount: '120.0', currencyCode: 'USD' },
                        product: {
                          descriptionHtml: `<p>When you need to mash your pedals but can’t afford to clash with your jeans, the DZR Mambas have you covered! Durable, thanks to rugged PU coated suede, comfortable, thanks to asymmetrical ankle padding, and built to perform with DZR’s Co-Molded powerplate – this is a daily-ride shoe that’s always ready for action.</p>
                            <div class="textile">
                            <h3>Specs</h3>
                            <ul>
                            <li>Co-Molded Powerplate for performance</li>
                            <li>Link traction outsole for grip</li>
                            <li>Adjustable power strap for fit and performance</li>
                            <li>Reflective heel badge for visibility</li>
                            <li>Stability upper for fit and comfort</li>
                            <li>Two-hole cleat compatible</li>
                            </ul>
                            </div>`,
                          handle: 'dzr-mamba',
                          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NjgyMDEwNjA1MjA=',
                          title: 'DZR Mamba - 42',
                        },
                        requiresShipping: true,
                        selectedOptions: [{ name: 'Size', value: '42' }],
                        sku: 'Shoes - DZR - Mamba Black - 42',
                        title: '42',
                        unitPriceMeasurement: {
                          measuredType: null,
                          quantityUnit: null,
                          quantityValue: 0,
                          referenceUnit: null,
                          referenceValue: 0,
                        },
                        weight: 1.0996,
                        weightUnit: 'LB',
                      },
                    },
                  },
                ],
              },
              name: '#356363',
              orderNumber: 356363,
              originalTotalPrice: { amount: '779.00', currencyCode: 'USD' },
              phone: null,
              processedAt: '2021-05-21T14:16:41Z',
              shippingAddress: {
                address1: '13407 Southwest Amu Street #U8251',
                address2: '',
                city: 'Tualatin',
                company: null,
                country: 'United States',
                firstName: 'John',
                id: 'Z2lkOi8vc2hvcGlmeMDk1P21vZGVsX25hbWU9QWRkcmVzcw==',
                lastName: 'Doe',
                phone: '',
                province: 'Oregon',
                zip: '235256',
              },
              shippingDiscountAllocations: [],
              statusUrl:
                'https://example.com/15152714/orders/74ecba718cbf1d70d7cc84c/authenticate?key=417989284',
              subtotalPriceV2: { amount: '645', currencyCode: 'USD' },
              successfulFulfillments: [
                {
                  trackingCompany: 'USPS',
                  trackingInfo: [
                    {
                      number: '3252525314623623642346623463246',
                      url: 'https://tools.usps.com/go/TrackConfirmAction.action?tLabels=3252525314623623642346623463246',
                    },
                  ],
                },
              ],
              totalPriceV2: { amount: '745.00', currencyCode: 'USD' },
              totalRefundedV2: { amount: '0.0', currencyCode: 'USD' },
              totalShippingPriceV2: { amount: '100.00', currencyCode: 'USD' },
              totalTaxV2: { amount: '0.0', currencyCode: 'USD' },
            },
          },
        ],
        pageInfo: { hasNextPage: false, hasPreviousPage: false },
      },
      status: 'loaded',
      tags: ['LEAD', 'LOST Customer', 'More than 90 days since last order'],
      updatedAt: '2021-05-01T18:36:51Z',
    },
  },

  /** Customer with long fields and without orders */
  'remington.wolfeschlegelsteinhausenbergerdorff@shopify-platform.com': {
    graphql: {
      id: 'Z2f2lkj432vc2hvcGlaeS9DdXN0h21eci81MTIzrjA5NTU5MTAz',
      email: 'remington.wolfeschlegelsteinhausenbergerdorff@shopify-platform.com',
      firstName: 'Remington',
      lastName: 'Wolfeschlegelsteinhausenbergerdorff',
      displayName: 'Remington Wolfeschlegelsteinhausenbergerdorff',
      defaultAddress: null,
      addresses: {
        edges: [],
        pageInfo: { hasNextPage: false, hasPreviousPage: false },
      },
      phone: null,
      acceptsMarketing: false,
      tags: ['LEAD', 'LOST Customer', 'More than 90 days since last order'],
      status: 'loaded',
      createdAt: '2021-04-28T16:46:28Z',
      updatedAt: '2021-04-29T11:06:01Z',
    },
  },

  /**
   * BigCommerce
   *
   * Customer with a single order
   */

  'bill@bigcommerce-platform.com': {
    graphql: {
      addressCount: 0,
      attributeCount: 0,
      company: '',
      customerGroupId: 0,
      email: 'bill@bigcommerce-platform.com',
      firstName: 'Bill',
      id: 354591,
      lastName: 'Doe',
      notes: '',
      phone: '+71231231212',
      storeCredit: [{ currencyCode: 'USD', value: 0 }],
      0: { currencyCode: 'USD', value: 0 },
      currencyCode: 'USD',
      value: 0,
      taxExemptCategory: '',
    },
    rest: {
      accepts_product_review_abandoned_cart_emails: false,
      address_count: 1,
      addresses: [
        {
          address1: 'SW Amu Street, #U8921',
          address2: '',
          address_type: 'residential',
          city: 'Tualatin',
          company: '',
          country: 'United States',
          country_code: 'US',
          customer_id: 354591,
          first_name: 'Bill',
          id: 359276,
          last_name: 'Doe',
          phone: '+71231231212',
          postal_code: '11407',
          state_or_province: 'Nevada',
        },
      ],
      orders: [
        {
          base_handling_cost: '0.0000',
          base_shipping_cost: '30.0000',
          base_wrapping_cost: '0.0000',
          billing_address: {
            city: 'Tualatin',
            company: '',
            country: 'United States',
            country_iso2: 'US',
            email: 'bill@bigcommerce-platform.com',
            first_name: 'Bill',
            form_fields: [],
            last_name: 'Doe',
            phone: '',
            state: 'Oregon',
            street_1: 'SW Amu Street, #U8921',
            street_2: '',
            zip: '11407',
          },
          cart_id: 'cb185596-3ebb-440d-9e16-9a2c5d96d630',
          channel_id: 1,
          coupon_discount: '0.0000',
          credit_card_type: null,
          currency_code: 'EUR',
          currency_exchange_rate: '1.0000000000',
          currency_id: 1,
          custom_status: 'Awaiting Fulfillment',
          customer_id: 1,
          customer_locale: 'en',
          customer_message: 'Comments visible to customer',
          date_created: 'Thu, 12 Aug 2021 10:28:51 +0000',
          date_modified: 'Thu, 12 Aug 2021 10:28:52 +0000',
          date_shipped: '',
          default_currency_code: 'EUR',
          default_currency_id: 1,
          discount_amount: '10.0000',
          ebay_order_id: '0',
          external_id: nanoid(),
          external_merchant_id: 'starter_kit',
          external_source: 'Stater Kit',
          external: {
            coupons: null,
            products: [
              {
                applied_discounts: [
                  {
                    amount: '7.5700',
                    code: null,
                    id: 'manual-discount',
                    name: 'Manual Discount',
                    target: 'order',
                  },
                ],
                base_cost_price: '0.0000',
                base_price: '109.0000',
                base_total: '109.0000',
                base_wrapping_cost: '0.0000',
                bin_picking_number: '',
                configurable_fields: [],
                cost_price_ex_tax: '0.0000',
                cost_price_inc_tax: '0.0000',
                cost_price_tax: '0.0000',
                depth: '1.0000',
                ebay_item_id: '',
                ebay_transaction_id: '',
                event_date: '',
                event_name: null,
                external_id: null,
                fixed_shipping_cost: '0.0000',
                fulfillment_source: '',
                height: '1.0000',
                id: 1,
                is_bundled_product: false,
                is_refunded: false,
                name: '[Sample] Orbit Terrarium - Large',
                name_customer: '[Sample] Orbit Terrarium - Large',
                name_merchant: '[Sample] Orbit Terrarium - Large',
                option_set_id: null,
                order_address_id: 1,
                order_id: 100,
                parent_order_product_id: null,
                price_ex_tax: '109.0000',
                price_inc_tax: '109.0000',
                price_tax: '0.0000',
                product_id: 80,
                product_options: [],
                quantity: 1,
                quantity_refunded: 0,
                quantity_shipped: 0,
                refund_amount: '0.0000',
                return_id: 0,
                sku: 'OTL',
                total_ex_tax: '109.0000',
                total_inc_tax: '109.0000',
                total_tax: '0.0000',
                type: 'physical',
                upc: '',
                variant_id: 64,
                weight: '1.0000',
                width: '1.0000',
                wrapping_cost_ex_tax: '0.0000',
                wrapping_cost_inc_tax: '0.0000',
                wrapping_cost_tax: '0.0000',
                wrapping_message: '',
                wrapping_name: '',
              },
              {
                applied_discounts: [
                  {
                    amount: '2.4300',
                    code: null,
                    id: 'manual-discount',
                    name: 'Manual Discount',
                    target: 'order',
                  },
                ],
                base_cost_price: '0.0000',
                base_price: '34.9500',
                base_total: '34.9500',
                base_wrapping_cost: '0.0000',
                bin_picking_number: '',
                configurable_fields: [],
                cost_price_ex_tax: '0.0000',
                cost_price_inc_tax: '0.0000',
                cost_price_tax: '0.0000',
                depth: '0.0000',
                ebay_item_id: '',
                ebay_transaction_id: '',
                event_date: '',
                event_name: null,
                external_id: null,
                fixed_shipping_cost: '0.0000',
                fulfillment_source: '',
                height: '0.0000',
                id: 2,
                is_bundled_product: false,
                is_refunded: false,
                name: '[Sample] Oak Cheese Grater',
                name_customer: '[Sample] Oak Cheese Grater',
                name_merchant: '[Sample] Oak Cheese Grater',
                option_set_id: null,
                order_address_id: 1,
                order_id: 100,
                parent_order_product_id: null,
                price_ex_tax: '34.9500',
                price_inc_tax: '34.9500',
                price_tax: '0.0000',
                product_id: 94,
                product_options: [],
                quantity: 1,
                quantity_refunded: 0,
                quantity_shipped: 0,
                refund_amount: '0.0000',
                return_id: 0,
                sku: 'OCG',
                total_ex_tax: '34.9500',
                total_inc_tax: '34.9500',
                total_tax: '0.0000',
                type: 'physical',
                upc: '',
                variant_id: 68,
                weight: '1.0000',
                width: '0.0000',
                wrapping_cost_ex_tax: '0.0000',
                wrapping_cost_inc_tax: '0.0000',
                wrapping_cost_tax: '0.0000',
                wrapping_message: '',
                wrapping_name: '',
              },
              {
                applied_discounts: [],
                base_cost_price: '8.0000',
                base_price: '7.0000',
                base_total: '7.0000',
                base_wrapping_cost: '0.0000',
                bin_picking_number: '',
                configurable_fields: [],
                cost_price_ex_tax: '8.0000',
                cost_price_inc_tax: '8.0000',
                cost_price_tax: '0.0000',
                depth: '0.0000',
                ebay_item_id: '',
                ebay_transaction_id: '',
                event_date: '',
                event_name: null,
                external_id: null,
                fixed_shipping_cost: '0.0000',
                fulfillment_source: '',
                height: '0.0000',
                id: 3,
                is_bundled_product: false,
                is_refunded: false,
                name: '[Sample] 1 L Le Parfait Jar',
                name_customer: '[Sample] 1 L Le Parfait Jar',
                name_merchant: '[Sample] 1 L Le Parfait Jar',
                option_set_id: 17,
                order_address_id: 1,
                order_id: 100,
                parent_order_product_id: null,
                price_ex_tax: '7.0000',
                price_inc_tax: '7.0000',
                price_tax: '0.0000',
                product_id: 93,
                product_options: [
                  {
                    display_name: 'Color',
                    display_name_customer: 'Color',
                    display_name_merchant: 'Color',
                    display_style: '',
                    display_value: 'Orange',
                    display_value_customer: 'Orange',
                    display_value_merchant: 'Orange',
                    id: 1,
                    name: 'Color1628172264-93',
                    option_id: 33,
                    order_product_id: 3,
                    product_option_id: 111,
                    type: 'Swatch',
                    value: '101',
                  },
                  {
                    display_name: 'Size',
                    display_name_customer: 'Size',
                    display_name_merchant: 'Size',
                    display_style: 'Rectangle',
                    display_value: 'Large',
                    display_value_customer: 'Large',
                    display_value_merchant: 'Large',
                    id: 2,
                    name: 'Size1628172264-93',
                    option_id: 34,
                    order_product_id: 3,
                    product_option_id: 112,
                    type: 'Multiple choice',
                    value: '104',
                  },
                ],
                quantity: 1,
                quantity_refunded: 0,
                quantity_shipped: 0,
                refund_amount: '0.0000',
                return_id: 0,
                sku: 'SLLPJ-889E9C0A',
                total_ex_tax: '7.0000',
                total_inc_tax: '7.0000',
                total_tax: '0.0000',
                type: 'physical',
                upc: '',
                variant_id: 57,
                weight: '1.0000',
                width: '0.0000',
                wrapping_cost_ex_tax: '0.0000',
                wrapping_cost_inc_tax: '0.0000',
                wrapping_cost_tax: '0.0000',
                wrapping_message: '',
                wrapping_name: '',
              },
            ],
            shipping_addresses: [
              {
                base_cost: '30.0000',
                base_handling_cost: '0.0000',
                city: 'Tualatin',
                company: '',
                cost_ex_tax: '30.0000',
                cost_inc_tax: '30.0000',
                cost_tax: '0.0000',
                cost_tax_class_id: 2,
                country: 'United States',
                country_iso2: 'US',
                email: 'bill@bigcommerce-platform.com',
                first_name: 'Bill',
                form_fields: [],
                handling_cost_ex_tax: '0.0000',
                handling_cost_inc_tax: '0.0000',
                handling_cost_tax: '0.0000',
                handling_cost_tax_class_id: 2,
                id: 1,
                items_shipped: 0,
                items_total: 3,
                last_name: 'Doe',
                order_id: 100,
                phone: '',
                shipping_method: 'By train',
                shipping_quotes: null,
                shipping_zone_id: 0,
                shipping_zone_name: '',
                state: 'Oregon',
                street_1: 'SW Amu Street, #U8921',
                street_2: '',
                zip: '11407',
              },
            ],
          },
          coupons: {
            resource: '/orders/100/coupons',
            url: 'https://api.bigcommerce.com/stores/veawhmgiie/v2/orders/100/coupons',
          },
          products: {
            resource: '/orders/100/products',
            url: 'https://api.bigcommerce.com/stores/veawhmgiie/v2/orders/100/products',
          },
          shipping_addresses: {
            resource: '/orders/100/shipping_addresses',
            url: 'https://api.bigcommerce.com/stores/veawhmgiie/v2/orders/100/shipping_addresses',
          },
          geoip_country: 'Russian Federation',
          geoip_country_iso2: 'RU',
          gift_certificate_amount: '0.0000',
          handling_cost_ex_tax: '0.0000',
          handling_cost_inc_tax: '0.0000',
          handling_cost_tax: '0.0000',
          handling_cost_tax_class_id: 2,
          id: 100,
          ip_address: '92.243.174.132',
          is_deleted: false,
          is_email_opt_in: false,
          items_shipped: 0,
          items_total: 2,
          order_is_digital: false,
          order_source: 'manual',
          payment_method: 'Test Payment Gateway',
          payment_provider_id: null,
          payment_status: 'captured',
          refunded_amount: '0.0000',
          shipping_address_count: 1,
          shipping_cost_ex_tax: '30.0000',
          shipping_cost_inc_tax: '30.0000',
          shipping_cost_tax: '0.0000',
          shipping_cost_tax_class_id: 2,
          staff_notes: 'Staff notes not visible to customer',
          status: 'Awaiting Fulfillment',
          status_id: 11,
          store_credit_amount: '0.0000',
          store_default_currency_code: 'EUR',
          store_default_to_transactional_exchange_rate: '1.0000000000',
          subtotal_ex_tax: '143.9500',
          subtotal_inc_tax: '143.9500',
          subtotal_tax: '0.0000',
          tax_provider_id: 'BasicTaxProvider',
          total_ex_tax: '163.9500',
          total_inc_tax: '163.9500',
          total_tax: '0.0000',
          wrapping_cost_ex_tax: '0.0000',
          wrapping_cost_inc_tax: '0.0000',
          wrapping_cost_tax: '0.0000',
          wrapping_cost_tax_class_id: 3,
        },
      ],
      authentication: { force_password_reset: false },
      force_password_reset: false,
      channel_ids: null,
      company: '',
      customer_group_id: 0,
      date_created: '2021-07-28T14:43:06Z',
      date_modified: '2021-07-28T14:43:06Z',
      email: 'bill@bigcommerce-platform.com',
      first_name: 'Bill',
      id: 354591,
      last_name: 'Doe',
      notes: '',
      phone: '+71231231212',
      registration_ip_address: '',
      store_credit_amounts: [{ amount: 0 }],
      0: { amount: 0 },
      amount: 0,
      tax_exempt_category: '',
    },
  },
}