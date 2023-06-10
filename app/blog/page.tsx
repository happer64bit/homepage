"use client"
import BlogCard from "@/components/BlogCard"
import Navbar from "@/components/Navbar"
import { Box, Container, Flex, Input, Text, VStack } from "@chakra-ui/react"

const Page = () => {
    return (
        <Box>
            <Box bg={"#141a20"} color={"white"}>
                <Box h={"full"} p={20}>
                    <Navbar />
                    <Container>
                        <Box>
                            <Flex justifyContent={"space-between"} alignItems={"center"}>
                                <Text fontSize={"3xl"} fontWeight={"bold"}>Blog</Text>
                                <Input w={"48"} placeholder="Search Post"/>
                            </Flex>
                        </Box>
                        <VStack py={20} spacing={6}>
                            <BlogCard
                                postID="141a20"
                                thumbnail="https://i.pinimg.com/564x/46/b2/b7/46b2b7cc9050f31154cb44d1370e8283.jpg"
                                title="PROGRAMMING TOOLS THAT EVERY DEV NEED"
                                pubishDate="2, May, 2023 at 12:10"
                                key={1}
                            />
                            <BlogCard
                                postID="141a20"
                                thumbnail="https://i.pinimg.com/564x/b5/1c/36/b51c364041078282e461de0e5c9d0d31.jpg"
                                title="PROGRAMMING TOOLS THAT EVERY DEV NEED"
                                pubishDate="2, May, 2023 at 12:10"
                                key={2}
                            />
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default Page