import Navbar from "@/components/Navbar"
import { Box, Container, Image, Link, Spacer, Text } from "@chakra-ui/react"
import { Poppins } from "next/font/google"
import Head from "next/head"

const poppins = Poppins({ subsets: ['latin'], weight: "400"})

const ProjectsPage = () => {
return (
<Box bg={"#141a20"} color={"white"} style={poppins.style} h={"100%"}>

    <Head>
        <title>Projects</title>
    </Head>
    <Navbar />
    <Spacer h={"28"} />
    <Container p={5}>
        <Text fontSize={"3xl"} fontWeight={"black"}>Projects Showcasae</Text>
        <Box py={10}>
            {require("./../lib/showcase.json").map((event: {
            name: string,
            link: string,
            description: string
            }, index: number) => (
            <Box py={5} key={index}>
                <Box key={index} display={"flex"} alignItems={"center"}>
                    <Box px={4}>
                        <Link href={event.link}>
                        <Text fontFamily={"mono"} fontSize={"2xl"} textDecoration={"dotted"}
                            textDecorationColor={"white"}>{event.name}</Text>
                        </Link>
                        <Text fontFamily={"mono"}>{event.description}</Text>
                    </Box>
                </Box>
            </Box>
            ))}
        </Box>
    </Container>
    <style>
        {

            ` html,
            body {
                background-color: #141a20;
            }

            `
        }
    </style>
</Box>
)
}

export default ProjectsPage
