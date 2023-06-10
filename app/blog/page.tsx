"use server"
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { Box, Container, Flex, Input, Text, VStack } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";

type Post = {
    id: string;
    postId: string;
    contents: string;
    createdAt: string;
    thumbnail: string;
    title: string;
};

type Props = {
    posts: Post[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await fetch("/api/getAllBlogPosts");
    const posts = await res.json();

    return {
        props: {
            posts: [...posts],
        },
    };
};

const Page = ({ posts }: Props) => {
    "use server"
    return (
        <Box>
            <Box bg={"#141a20"} color={"white"}>
                <Box h={"full"} p={20}>
                    <Navbar />
                    <Container>
                        <Box>
                            <Flex justifyContent={"space-between"} alignItems={"center"}>
                                <Text fontSize={"3xl"} fontWeight={"bold"}>
                                    Blog
                                </Text>
                                <Input w={"48"} placeholder="Search Post" />
                            </Flex>
                        </Box>
                        <VStack py={20} spacing={6}>
                            {posts.map((post, index) => (
                                <BlogCard
                                    postID={post.postId}
                                    pubishDate={post.createdAt}
                                    thumbnail={post.thumbnail}
                                    title={post.title}
                                />
                            ))}
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default Page;
