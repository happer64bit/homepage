// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { NextScript } from 'next/document'

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ColorModeScript initialColorMode={"dark"} />
            <NextScript />
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}