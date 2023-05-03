import Head from 'next/head'
import { Poppins } from 'next/font/google'
import { Box, Text, Center, Progress, Grid, Flex } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import { motion, useAnimation } from 'framer-motion'
const poppins = Poppins({ subsets: ['latin'], weight: "500" })

export default function Home() {

  return (
    <div className={poppins.className}>
      <Head>
        <title>Happer64Bit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box bg={"#141a20"} color={"white"}>
        <Box>
          <Box h={"80vh"} display={"flex"} alignItems={"center"} p={4}>
            <Box px={10}>
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
                <Text fontWeight={"black"} fontSize={"5xl"}>{"Hello There,".toUpperCase()} <br /> I AM HAPPER </Text>
                <Text color={"pink.400"} fontWeight={"black"} fontSize={"5xl"}>(WINT KHANT LIN)</Text>
              </motion.div>
            </Box>
          </Box>
        </Box>
        <Box p={10}>
          <Box w={{ base: '100%' }}>
            <Center pb={10}>
              <Text fontSize="5xl" fontWeight="black">
                MY SKILLS
              </Text>
            </Center>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
              <Box>
                <Progress value={98} size="md" colorScheme="orange" w="full" />
                <Text maxW="150px">HTML 98%</Text>
              </Box>
              <Box>
                <Progress value={90} size="md" colorScheme="blue" />
                <Text maxW="150px">CSS 90%</Text>
              </Box>
              <Box>
                <Progress value={85} size="md" colorScheme="yellow" />
                <Text maxW="150px">JAVASCRIPT 85%</Text>
              </Box>
              <Box>
                <Progress value={80} size="md" colorScheme="green" />
                <Text maxW="150px">PYTHON 80%</Text>
              </Box>
              <Box>
                <Progress value={78} size="md" colorScheme="blue" />
                <Text maxW="150px">REACT 78%</Text>
              </Box>
              <Box>
                <Progress value={72} size="md" colorScheme="cyan" />
                <Text maxW="150px">TYPESCRIPT 72%</Text>
              </Box>
              <Box>
                <Progress value={57} size="md" colorScheme="yellow" />
                <Text maxW="150px">EXPRESS 57%</Text>
              </Box>
              <Box>
                <Progress value={57} size="md" colorScheme="red" />
                <Text maxW="150px">RUST 40%</Text>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div >
  )
}
