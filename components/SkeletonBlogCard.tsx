"use client"
import { Box , Skeleton, SkeletonText, SkeletonCircle} from "@chakra-ui/react";

const SkeletonBlogCard = () => {
    return (
        <Skeleton
            onClick={() => {
                
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
                <Skeleton
                    w={"100%"}
                    h={"18rem"}
                    bgPos={"center"}
                    bgRepeat={"no-repeat"}
                    bgSize={"cover"}
                    borderRadius={12}
                />
                <Box pt={3}>
                    <SkeletonText fontSize={"3xl"} fontWeight={"black"}></SkeletonText>
                    <Box textAlign={'right'} px={4}>
                        <SkeletonText fontSize={"sm"} color={'whiteAlpha.800'}></SkeletonText>
                    </Box>
                </Box>
            </Box>
        </Skeleton>
    )
}

export default SkeletonBlogCard