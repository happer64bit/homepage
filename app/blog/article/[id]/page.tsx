"use client"
import Navbar from "@/components/Navbar";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';

export default function Page({ params } : { params: { id: string }}) {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ contexts, setContexts ] = useState<{
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
        const res = await fetch(`/api/findPost?postID=${id}`)
        
        const post = await res.json()

        setContexts(post[0])
        setIsLoading(false)
    }
    
    
    useEffect(() => {
        fetchPost(params.id ?? "404")
        console.log(contexts)
    }, [])

    return !isLoading && (
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
                        <Box>
                            <Markdown>
                                # Hello World `hello`
                                **Hello**
                            </Markdown>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}