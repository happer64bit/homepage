import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

interface BlogCardProps {
    title: string;
    thumbnail: string;
    postID: string;
    pubishDate: string
}

const BlogCard = (props: BlogCardProps) => {
    const router = useRouter();

    return (
        <Box
            onClick={() => {
                router.push(`/blog/article/${props.postID.toString()}`);
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
                    src={props.thumbnail} // Specify the type of src prop
                    w={"100%"}
                    h={"18rem"}
                    bgPos={"center"}
                    bgRepeat={"no-repeat"}
                    bgSize={"cover"}
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
