"use client"
import { Pixelify_Sans } from "next/font/google"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AnnouncementBar from "@/components/AnnouncementBar"
import { Textarea } from "@/components/ui/textarea"

const pixelify_sans = Pixelify_Sans({
  weight: ["500"],
  subsets: ["latin"]
})

export default function Home() {
  return (
    <main>
      <div className="h-[80vh] flex items-center p-10 animate-fade-up animate-once animate-duration-1000">
        <motion.div
          initial={{ x: "-50vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, origin: 1, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-5xl font-bold">Hi, my name is <span className={`${pixelify_sans.className} text-emerald-500`}>Wint Khant Lin</span></h2>
          <h3 className="text-5xl font-bold">I <span className={`${pixelify_sans.className} text-yellow-400`}>develop</span>, I <span style={pixelify_sans.style} className="text-blue-400">create</span>, I <span className={`${pixelify_sans.className} text-purple-400`}>design</span></h3>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90dvh] mb-10">
          <div className="flex flex-wrap px-10">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
            >
              <div className="my-2">
                <h3 className="px-4 py-1 mb-4 border-l-4 text-xl font-bold border-black dark:border-white">ABOUT ME</h3>
                <p className="font-light leading-6">
                  Hey there! I'm Happer, but my real name is Wint Khant Lin. I was born on August 13, 2008, in Myanmar. I'm just a regular student trying to make it big by coding. I've always been fascinated by technology and how coding can shape our lives. I'm constantly learning and improving my skills in different programming languages . But my goal isn't just about getting rich; I want to use my coding skills to make a positive impact on the world. I dream of creating applications that can improve healthcare and education for everyone. It's not going to be easy, but I'm determined to overcome any challenges that come my way. So, let's see where this coding journey takes me!
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mt-10"
              initial={{
                opacity: 0,
                scale: 0
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
            >
              <h3 className="px-4 py-1 mb-4 border-l-4 text-xl font-bold border-black dark:border-white">EDUCATION</h3>
              <p className="mb-2">Here are my educational journey in my entire life</p>
              <ol className="relative border-l border-black dark:border-white">
                {[
                  {
                    date: "2014-2018",
                    name: "Kaung Su San (Private)"
                  },
                  {
                    date: "2018-2019",
                    name: "Shwe Phyi Thar BEHS 1 (Public)"
                  },
                  {
                    date: "2022-2024",
                    name: "Shwe Phyi Thar BEHS 3 (Public)"
                  },
                  {
                    date: "2023",
                    name: "CS50: Introduction to Computer Science (Online Course)"
                  }
                ].map((event, index) => (
                  <li className="ml-4 py-3" key={index}>
                    <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-white dark:bg-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none">{event.date}</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.name}</h3>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
          <motion.div className="my-10 px-10">
            <div>
              <h3 className="px-4 py-1 mb-4 border-l-4 text-xl font-bold border-black dark:border-white">CONTACT</h3>
              <p className="mb-2">If you want to contact me, fill these infomation here</p>
              <form>
                <div className="mb-2">
                  <Textarea rows={10} placeholder="Message" className="resize-none"/>
                </div>
                <div className="flex gap-3">
                  <Input placeholder="john@example.com" type="email" required/>
                  <Button>SUBMIT</Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
