import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const Navbar = () => {
    return (
        <Box pos={"fixed"} top={0} left={0} w={"100%"} display={"flex"} alignItems={"center"} color={"white"} backdropFilter="auto" backdropBlur={"xl"} p={4} justifyContent={"space-between"}>
            <Link href={"/"}>
                <Text fontWeight={"semibold"} fontSize={"xl"}>Happer64Bit</Text>
            </Link>
            <Box display={"flex"} alignItems={"center"}>
                <Link href={"/projects"}>
                    Projects
                </Link>
            </Box>
        </Box>
    )
}

export default Navbar