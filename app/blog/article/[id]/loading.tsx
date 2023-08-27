"use client"
import { Flex, Spinner } from "@chakra-ui/react";

export default function () {
    return (
        <Flex h="100vh" justifyContent={"center"} alignItems={"center"}>
            <Spinner />
        </Flex>
    )
}