import { Box, Text, Image } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

interface BlogCardProps {
    title: string;
    thumbnail: string;
    pathname: string;
    pubishDate: string
}

const BlogCard = (props: BlogCardProps) => {
    const router = useRouter();

    return (
        <Box
            onClick={() => {
                router.push(`/blog/article/${String(props.pathname)}`);
            }}
            p={2}
            borderWidth="4px"
            borderColor="transparent"
            transitionDuration={"0.1s"}
            cursor={"pointer"}
            borderRadius={20}
            _hover={{
                borderColor: "white",
                borderWidth: "4px",
            }}
        >
            <Box p={3}>
                <Image
                    alt={props.title}
                    src={props.thumbnail}
                    w={"100%"}
                    h={{ base: "14rem", md: "18rem" }}
                    bgPos={"center"}
                    bgRepeat={"no-repeat"}
                    bgSize={"contain"}
                    borderRadius={12}
                    loading="lazy"
                />
                <Box pt={3}>
                    <Text fontSize={"3xl"} fontWeight={"black"}>{props.title.toString()}</Text>
                    <Box textAlign={'right'} px={4}>
                        <Text fontSize={"sm"} color={'whiteAlpha.800'}>{props.pubishDate.toString()}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogCard;
