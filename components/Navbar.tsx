import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const NavbarItems = [
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Projects",
        href: "/projects"
    }
]

const Navbar = () => {
    return (
        <Box pos={"fixed"} top={0} left={0} w={"100%"} display={"flex"} alignItems={"center"} color={"white"} backdropFilter="auto" backdropBlur={"xl"} p={4} justifyContent={"space-between"}>
            <Link href={"/"}>
                <Text fontWeight={"semibold"} fontSize={"xl"}>Happer64Bit</Text>
            </Link>
            <Box display={"flex"} alignItems={"center"}>
                {NavbarItems.map((event, index) => (
                    <Box px={4} key={index}>
                        <Link href={event.href}>
                            {event.title}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Navbar