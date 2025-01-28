'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

// import { Provider } from "@/components/ui/provider"

// export function App({ Component, pageProps }) {
//   return (
//     <Provider>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }
