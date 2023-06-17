"use client"
import Navbar from "@/components/Navbar";
import { Box, Container, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import MarkdownPreview from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import rehypeGfm from 'remark-gfm'
import { getPost } from '@/lib/getPost';
import "@/lib/one-dark-pro.css"

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [wasPostFound, setWasPostFound] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await getPost(id);
                console.log("Post data:", postData);
                console.log(postData?.wasPostFound);

                if (postData) {
                    setPost({ ...postData });
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
                            <Box py={5}>
                                <Text fontSize="3xl" fontWeight="bold" aria-label="title">
                                    {post?.title ?? "Error on Displaying"}
                                </Text>
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
