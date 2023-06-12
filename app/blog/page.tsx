"use client"
import { Suspense, useCallback, useEffect, useState } from "react";
import { Box, Container, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonBlogCard from "@/components/SkeletonBlogCard";

type Post = {
    id: string;
    postId: string;
    createdAt: Date;
    thumbnail: string | null;
    title: string;
};

const Page = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPageId, setCurrentPageId] = useState<number | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true)

    const fetchMorePosts = useCallback(async () => {
        if (currentPageId !== null) {
            try {
                const response = await fetch(`/api/getPosts?limit=5&page=${currentPageId}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) {
                        setPosts((prevPosts) => [...prevPosts, ...data]);
                        setCurrentPageId(currentPageId + 1);
                    } else {
                        setHasMore(false);
                    }
                } else {
                    throw new Error("Failed to fetch posts");
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            setCurrentPageId(1)
        }
    }, [currentPageId]);

    useEffect(() => {
        fetchMorePosts();
    }, [fetchMorePosts]);

    return (
        <Box>
            <Box bg="#141a20" color="white" h={"full"}>
                <Box h="full" py={20}>
                    <Navbar />
                    <Container>
                        <Box pb={10}>
                            <Flex justifyContent="space-between" alignItems="center">
                                <Text fontSize="3xl" fontWeight="bold">
                                    Blog
                                </Text>
                                <Input w="48" placeholder="Search Post" />
                            </Flex>
                        </Box>
                        <InfiniteScroll
                            dataLength={posts.length}
                            next={fetchMorePosts}
                            hasMore={hasMore}
                            loader={<Container>
                                <SkeletonBlogCard />
                            </Container>}
                            onScroll={fetchMorePosts}
                            endMessage={null}
                        >
                            {posts.map((post, index) => (
                                <Suspense fallback={<SkeletonBlogCard />} key={index}>
                                    <Box py={4}>
                                        <BlogCard
                                            key={post.id}
                                            postID={post.id}
                                            pubishDate={post.createdAt.toString()}
                                            thumbnail={post.thumbnail ?? ""}
                                            title={post.title}
                                        />
                                    </Box>
                                </Suspense>
                            ))}
                        </InfiniteScroll>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default Page;
