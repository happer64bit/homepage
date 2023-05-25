"use client"
import { Image, Box, Text, Flex, Badge } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

interface Props {
    projectName: string,
    tag: string,
    verison: string,
    endLifeSupport: boolean,
    icon: string,
    description: string
    sourceCodeUrl: string
}

export default function ProjectCard(props: Props) {
    return (
        <Box p={2} borderWidth="4px" borderColor="transparent" transitionDuration={"0.1s"} cursor={"pointer"} borderRadius={20} _hover={{
            borderColor: "white",
            borderWidth: "4px",
        }}>
            <Box w={"full"} borderRadius={15}>
                <Image src={props.icon} alt={props.projectName} w="full" h={'18rem'} bgPos={"center"} bgSize={"cover"} borderTopRadius={15}/>
                <Box p={5}>
                    <Flex>
                        <Link href={props.sourceCodeUrl} fontSize={"3xl"} fontWeight={"bold"}>{props.projectName}</Link>
                        <Box px={2}>
                            <Badge variant={'outline'} colorScheme='green'>{props.verison}</Badge>
                        </Box>
                        <Box px={2}>
                            {props.tag=="Release" && <Badge variant={'outline'} colorScheme='green'>{props.tag}</Badge>}
                            {props.tag=="Beta" && <Badge variant={'outline'} colorScheme='yellow'>{props.tag}</Badge>}
                            {props.tag=="Alpha" && <Badge variant={'outline'} colorScheme='blue'>{props.tag}</Badge>}
                        </Box>
                        <Box px={2}>
                            {props.endLifeSupport && <Badge>End Life Support</Badge>}
                        </Box>
                    </Flex>
                    <Text color={"#ddd"}>{props.description.toString()}</Text>
                </Box>
            </Box>
        </Box>
    )
}

