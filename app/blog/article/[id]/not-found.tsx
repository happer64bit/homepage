"use client"
import { Box, Flex, Text } from "@chakra-ui/react";

export default function() {
    return (
        <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Box textAlign={"center"}>
                <Text fontSize={"3xl"}>404 Page Not Found</Text>
            </Box>
        </Flex>
    )
}