import { Box, Container, Text } from "@chakra-ui/react"
import { Poppins } from "next/font/google"
import Link from "next/link"

const poppins = Poppins({ subsets: ['latin'], weight: "400"})

const Navbar = () => {
    return (
        <Box pos={"fixed"} top={0} left={0} w={"100%"} display={"flex"} alignItems={"center"} color={"white"} style={poppins.style} backdropBlur={"2xl"} bg={"whiteAlpha.50"} p={4}>
            <Link href={"/"}>
                <Text fontWeight={"semibold"} fontSize={"xl"}>Happer64Bit</Text>
            </Link>
        </Box>
    )
}

export default Navbar