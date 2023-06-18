"use client"
import Navbar from "@/components/Navbar";
import { Box, Container, Image, Skeleton, SkeletonText, Spinner, Text } from "@chakra-ui/react";
import { Suspense, useEffect, useMemo, useState } from "react";
import MarkdownPreview from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import rehypeGfm from 'remark-gfm'
import { getPost } from '@/lib/getPost';
import "@/lib/one-dark-pro.css"

interface PostType {
    // Define your post properties here
    title: string;
    postId: string;
    contents: string;
    thumbnail: string;
    createdAt: Date;
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const [post, setPost] = useState<PostType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [wasPostFound, setWasPostFound] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await getPost(id);

                console.log("Post data:", postData);

                if (postData) {
                    const { thumbnail, postId, title, contents, createdAt } = postData;
                    setPost({
                        thumbnail: thumbnail ?? '',
                        postId,
                        title,
                        contents: contents ?? '',
                        createdAt,
                    });
                    setWasPostFound(true);
                } else {
                    setWasPostFound(false);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
                setWasPostFound(false);
            }

            setIsLoading(false);
        };


        fetchPost();
    }, [id]);

    const renderedMarkdown = useMemo(() => {
        if (!post) return null;
        return (
            <MarkdownPreview
                rehypePlugins={[rehypeHighlight, rehypeGfm]}
                remarkRehypeOptions={{ allowDangerousHtml: true }}
            >
                {post.contents}
            </MarkdownPreview>
        );
    }, [post]);

    useEffect(() => {
        console.log(post);
        console.log(isLoading);
    }, [post, isLoading]);

    return (
        <Box color="white">
            <Navbar />
            {isLoading ? (
                <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
                    <Spinner size="xl" color="white" colorScheme="whiteAlpha" />
                </Box>
            ) : (
                <Container>
                    {wasPostFound ? (
                        <Box py={20}>
                            <Suspense fallback={
                                <Skeleton>
                                    <SkeletonText borderRadius={"xl"} w="100dw" h={{ base: "16rem", md: "20rem" }} />
                                </Skeleton>
                            }>
                                <Image
                                    borderRadius="xl"
                                    src={post?.thumbnail ?? "https://i.pinimg.com/564x/b1/4b/92/b14b92a51528a700e47d365a15a68dff.jpg"}
                                    alt={post?.title}
                                    bgPos="center"
                                    bgRepeat="no-repeat"
                                    bgSize="cover"
                                    w="100dvw"
                                    h={{ base: "16rem", md: "20rem" }}
                                    loading="lazy"
                                />
                            </Suspense>
                            <Box py={5}>
                                <h1 style={{
                                    fontWeight: "bold",
                                    fontSize: "1.875rem"
                                }}>
                                    {post?.title ?? "Error on Displaying"}
                                </h1>
                            </Box>
                            <Box className="markdown-contents">
                                {renderedMarkdown}
                                {wasPostFound}
                            </Box>
                        </Box>
                    ) : (
                        <Box></Box>
                    )}
                </Container>
            )}
        </Box>
    );
}
