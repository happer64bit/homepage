import Head from 'next/head'
import { Poppins } from 'next/font/google'
import { Box, Text, Center, Progress, Grid, Container, Link } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
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
          <Box h={"100vh"} display={"flex"} alignItems={"center"} p={4}>
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
          <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}>
            <Box w={{ base: '100%' }}>
              <Center pb={10}>
                <Text fontSize="5xl" fontWeight="black">
                  MY SKILLS
                </Text>
              </Center>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
                <Box>
                  <Progress value={93} size="md" colorScheme="orange" w="full" />
                  <Text maxW="150px">HTML 93%</Text>
                </Box>
                <Box>
                  <Progress value={86} size="md" colorScheme="blue" />
                  <Text maxW="150px">CSS 86%</Text>
                </Box>
                <Box>
                  <Progress value={85} size="md" colorScheme="yellow" />
                  <Text maxW="150px">JAVASCRIPT 85%</Text>
                </Box>
                <Box>
                  <Progress value={73} size="md" colorScheme="green" />
                  <Text maxW="150px">PYTHON 73%</Text>
                </Box>
                <Box>
                  <Progress value={68} size="md" colorScheme="blue" />
                  <Text maxW="150px">REACT 68%</Text>
                </Box>
                <Box>
                  <Progress value={37} size="md" colorScheme="yellow" />
                  <Text maxW="150px">EXPRESS 62%</Text>
                </Box>
                <Box>
                  <Progress value={52} size="md" colorScheme="cyan" />
                  <Text maxW="150px">TYPESCRIPT 52%</Text>
                </Box>
                <Box>
                  <Progress value={20} size="md" colorScheme="red" />
                  <Text maxW="150px">RUST 20%</Text>
                </Box>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box p={10}>
          <Container>
            <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}>
              <Center fontSize={"5xl"} fontWeight={"black"}>
                <Text>MY LIFE</Text>
              </Center>
            </motion.div>
            <Box>
              <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>
                <Box py={2}>
                  <ul>
                    <Text fontSize={"xl"} borderLeft={"4px"} px={3} py={1}>ABOUT ME</Text>
                  </ul>
                  <Text py={2}>
                    Hello I am Happer but my real name is Wint Khant Lin. I was born in Myanmar at 13, August. I am just a student who is trying become rich by coding
                  </Text>
                </Box>
              </motion.div>
              <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>

                <Box py={2}>
                  <ul>
                    <Text fontSize={"xl"} borderLeft={"4px"} px={3} py={1}>MY EDUCATION JOURNEY</Text>
                  </ul>
                  <Box py={2} px={4}>
                    <ul>
                      {["Private School", "BEHS 1 ShwePyiThar", "BEHS 3 ShwePyiThar"].map((event, index) => (
                        <li key={index}>{event}</li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              </motion.div>
              <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>

                <Box py={2}>
                  <ul>
                    <Text fontSize={"xl"} borderLeft={"4px"} px={3} py={1}>SOCIAL MEDIA</Text>
                  </ul>
                  <Box py={2} px={4}>
                    <Link px={4} href='mailto:happer64bit@gmail.com'>Email</Link>
                    <Link px={4} href='https://twitter.com/happer64bit'>Twitter</Link>
                    <Link px={4} href='https://github.com/happer64bit'>Github</Link>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </Box>
    </div >
  )
}
