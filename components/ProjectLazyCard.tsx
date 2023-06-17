"use client"
import { Skeleton, SkeletonText } from "@chakra-ui/react";

export default function ProjectLazyCard() {
    return (
        <Skeleton p={10} rounded={"xl"}>
            <SkeletonText h={"23rem"} rounded={"xl"}/>
        </Skeleton>
    )
}