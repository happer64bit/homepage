"use client"
import { Box, Spinner } from '@chakra-ui/react'

export default function Loading() {
    return (
        <Box h={"100vh"} w={"100vw"} pos={'fixed'} top={0} left={0} backgroundColor={"blackAlpha.500"} justifyContent={'center'} alignItems={'center'}>
            <Spinner />
        </Box>
    )
}