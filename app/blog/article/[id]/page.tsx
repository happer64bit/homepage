"use client"
import Navbar from "@/components/Navbar";
import { Box, Container, Image, Spinner, Text } from "@chakra-ui/react";
import { Fragment, useEffect, useMemo, useState } from "react";
import MarkdownPreview from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import rehypeGfm from 'remark-gfm' 
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default function Page({ params }: { params: { id: string } }) {
    const [isLoading, setIsLoading] = useState(true)
    const [contexts, setContexts] = useState<{
        id: string,
        title: string,
        thumbnail: string,
        contents: string,
        createdAt: Date | undefined,
    }>({
        id: '',
        title: '',
        thumbnail: '',
        contents: '',
        createdAt: undefined
    })

    async function fetchPost(id: string) {
        const res = await fetch(`/api/findPost?postID=${id}`);
        const post = await res.json();
        if (post.length > 0) {
            setContexts(post[0]);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPost(params.id ?? "404");
        console.log(contexts);
    }, []);

    const renderedMarkdown = useMemo(
        () => (
            <MarkdownPreview rehypePlugins={[rehypeHighlight, rehypeGfm, rehypeAutolinkHeadings]} remarkRehypeOptions={{
                allowDangerousHtml: true,
            }}>
                {contexts.contents}
            </MarkdownPreview>
        ),
        [contexts.contents]
    );

    return !isLoading ? (
        <Box>
            <Navbar />
            <Container>
                <Box py={20}>
                    <Box>
                        <Image
                            borderRadius={"xl"}
                            src={contexts.thumbnail ?? ''}
                            alt={contexts.title ?? ''}
                            w={"100dvw"}
                            h={"23rem"}
                            loading="lazy"
                        />
                        <Box py={5}>
                            <Text fontSize={"3xl"} fontWeight={"bold"}>{contexts.title}</Text>
                        </Box>
                        <Box className="markdown-contents">
                            {renderedMarkdown}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    ) : (
        <Box>
            <Navbar />
            <Box h={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Spinner size={"xl"} color="white" colorScheme="whiteAlpha"/>
            </Box>
        </Box>
    )
}