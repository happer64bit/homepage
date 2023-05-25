"use client"
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import { Box, Text, Container } from '@chakra-ui/react'
import projectsDatas from '@/app/projects/projects.json'

export default function page() {
    return (
        <Box>
            <Box bg={"#141a20"} color={"white"}>
                <Box h={"full"}>
                    <Navbar />
                    <Container py={40}>
                        <Box pb={20}>
                            <Text fontSize={"4xl"} fontWeight={"semibold"}>Projects Showcase</Text>
                        </Box>
                        {projectsDatas.map((event, index) => (
                            <Box py={10} key={index}>
                                <ProjectCard
                                    projectName={event.projectName}
                                    description={event.description}
                                    endLifeSupport={event.endLifeSupport}
                                    icon={event.icon}
                                    sourceCodeUrl={event.sourceCodeUrl}
                                    tag={event.tag}
                                    verison={event.version}
                                />
                            </Box>
                        ))}
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}