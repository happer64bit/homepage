"use client"
import { Box, Text, Center, Progress, Grid, Container, Link } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { skills } from './datas'

export default function Home() {
  return (
    <div>
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
                <Text fontWeight={"semibold"} fontSize={{ sm: "4xl", md: "5xl"}}>{"Hello There,".toUpperCase()} <br /> I AM HAPPER </Text>
                <Text color={"pink.400"} fontWeight={"semibold"} fontSize={{ sm: "4xl", md: "5xl"}}>(WINT KHANT LIN)</Text>
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
                <Text fontSize="5xl" fontWeight="bold">
                  MY SKILLS
                </Text>
              </Center>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
                {skills.map((event, index) => (
                  <Box key={index}>
                    <Progress value={event.percent} size="md" colorScheme={event.color} w="full" aria-label={event.language}/>
                    <Text maxW="150px">{event.language} {event.percent}%</Text>
                  </Box>
                ))}
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
              <Center fontSize={"5xl"} fontWeight={"bold"}>
                <Text>MY LIFE</Text>
              </Center>
            </motion.div>
            <Box>
              <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>
                <Box py={2}>
                  <Box>
                    <Text fontSize={"xl"} borderLeft={"4px"} px={3} py={1} fontWeight={"semibold"}>ABOUT ME</Text>
                  </Box>
                  <Text py={2}>
                    Hello I am Happer but my real name is Wint Khant Lin. I was born in Myanmar at 13, August, 2008. I am just a student who is trying become rich by coding
                  </Text>
                </Box>
              </motion.div>
              <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>

                <Box py={2}>
                  <Box>
                    <Text fontSize={"xl"} borderLeft={"4px"} px={3} py={1} fontWeight={"semibold"}>MY EDUCATION JOURNEY</Text>
                  </Box>
                  <Box py={2} px={4}>
                    <div>
                      {["Private School", "BEHS 1 ShwePyiThar", "BEHS 3 ShwePyiThar"].map((event, index) => (
                        <p key={index}>{event}</p>
                      ))}
                    </div>
                  </Box>
                </Box>
              </motion.div>
              <motion.div initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 0.4 }} variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>

                <Box py={2}>
                  <Box>
                    <Text fontSize={"xl"} borderLeft={"4px"} px={3} py={1} fontWeight={"semibold"}>SOCIAL MEDIA</Text>
                  </Box>
                  <Box py={2} px={4}>
                    <Link px={4} href='mailto:wintkhantlin@gmail.com'>Email</Link>
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