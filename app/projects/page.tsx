"use client"
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import { Box, Text, Container, VStack } from '@chakra-ui/react'
import projectsDatas from '@/app/projects/projects.json'

export default function page() {
    return (
        <Box>
            <Box bg={"#141a20"} color={"white"}>
                <Box h={"full"}>
                    <Navbar/>
                    <Container py={40}>
                        <Box pb={20}>
                            <Text fontSize={"4xl"} fontWeight={"semibold"}>Projects Showcase</Text>
                        </Box>
                        <VStack spacing={10}>
                            {projectsDatas.map((event, index) => (
                                <ProjectCard
                                    key={index}
                                    projectName={event.projectName}
                                    description={event.description}
                                    endLifeSupport={event.endLifeSupport}
                                    icon={event.icon}
                                    sourceCodeUrl={event.sourceCodeUrl}
                                    tag={event.tag}
                                    verison={event.version}
                                />
                            ))}          
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}