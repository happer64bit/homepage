"use client"
import { Pixelify_Sans } from "next/font/google"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { createRef, useState } from "react"
import { toast } from "@/components/ui/use-toast"

export default function Home() {
  const textareaRef = createRef<HTMLTextAreaElement>();
  const emailRef = createRef<HTMLInputElement>();
  const [isContactFormLoading, setIsContactFormLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // New state variable

  return (
    <main>
      <div className="h-[80vh] flex items-center p-4 lg:p-10 animate-fade-up animate-once animate-duration-1000">
        <motion.div
          initial={{ x: "-50vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, origin: 1, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold">Hi, my name is <span className={`text-emerald-600 dark:text-emerald-500`}>Wint Khant Lin</span></h2>
          <h3 className="text-3xl lg:text-5xl font-bold">I <span className={`text-yellow-600 dark:text-yellow-400`}>develop</span>, I <span className="text-blue-600 dark:text-blue-400">create</span>, I <span className={`text-purple-600 dark:text-purple-400`}>design</span></h3>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <div className="w-[100dvh] mb-10">
          <div className="flex flex-wrap px-4 lg:px-10">
            <motion.div
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
          <motion.div className="my-10 px-4 lg:px-10">
            <div>
              <h3 className="px-4 py-1 mb-4 border-l-4 text-xl font-bold border-black dark:border-white">CONTACT</h3>
              <p className="mb-2">If you want to contact me, fill these infomation here</p>
              <form onSubmit={async (event) => {
                event.preventDefault();
                setIsContactFormLoading(true);

                try {
                  const req = await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify({
                      message: textareaRef.current?.value,
                      email: emailRef.current?.value,
                    }),
                  });

                  if (req.ok) {
                    setIsSubmitted(true);
                    if (textareaRef.current && emailRef.current) {
                      textareaRef.current.value = "";
                      emailRef.current.value = '';
                    }
                    toast({
                      title: "Submitted Successfully"
                    })
                    window.location.reload()
                  } else {
                    toast({
                      title: "Error Failed to send, let developer fix it",
                      variant: "destructive",
                    });
                  }
                } catch (error) {
                  console.error("Error submitting form:", error);
                }

                setIsContactFormLoading(false);
              }}>
                <div className="mb-2">
                  <Textarea rows={10} placeholder="Message (max 2000)" className="resize-none" maxLength={2000} ref={textareaRef} />
                </div>
                <div className="flex gap-3">
                  <Input placeholder="john@example.com" type="email" required ref={emailRef} />
                  <Button className="flex items-center justify-center">{isContactFormLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg> : "SUBMIT"}</Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
