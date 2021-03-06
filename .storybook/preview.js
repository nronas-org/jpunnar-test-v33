import * as React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { withA11y } from '@storybook/addon-a11y'
import lazyLoadingPolyfill from 'frontend-ui/dist/lazyLoadingPolyfill'
import { StoreProvider } from '../src/lib/built-in/store/context'
import { theme } from '../src/components/Theme'
import { RouterContext } from 'frontend-router'
import { withFrontendHead } from './decorators/withFrontendHead'
import { Router } from './router'
import { customer as customerHandlers, cart as cartHandlers } from './handlers'
import { setupWorker } from 'msw'

const worker = setupWorker(...customerHandlers, ...cartHandlers)

worker.start()

lazyLoadingPolyfill()

addParameters({
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#191818' },
      { name: 'alt', value: '#E7E9EA' },
      { name: 'accent', value: '#F38732' },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Docs', 'Components', 'Sections'],
    },
  },
  controls: { expanded: true },
  layout: 'fullscreen',
})

addDecorator(withA11y)

addDecorator(StoryFn => (
  <RouterContext.Provider value={Router.router}>
    <StoreProvider>
      <ChakraProvider theme={theme}>
        <div id="frontend-root">
          <StoryFn />
        </div>
      </ChakraProvider>
    </StoreProvider>
  </RouterContext.Provider>
))

addDecorator(withFrontendHead)
