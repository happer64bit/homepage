import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.articles.create({
        data: {
            title: "Who is Wint Khant Lin or Happer64Bit?",
            thumbnail: "https://github.com/happer64bit/happer64bit/blob/main/blog-assets/images/who-is-wintkhantlin-1.png?raw=true",
            shortContents: "Who is Wint Khant Lin or Happer64Bit",
            pathname: "about-my-self",
            contents: `
Hey there! I'm Happer, but my real name is Wint Khant Lin. I was born on August 13, 2008, in Myanmar. I'm just a regular student trying to make it big by coding. I've always been fascinated by technology and how coding can shape our lives. I'm constantly learning and improving my skills in different programming languages. But my goal isn't just about getting rich; I want to use my coding skills to make a positive impact on the world. I dream of creating applications that can improve healthcare and education for everyone. It's not going to be easy, but I'm determined to overcome any challenges that come my way. So, let's see where this coding journey takes me!

---
        
## The Birth of a Coder
        
Born in Myanmar on August 13, 2008, as Wint Khant Lin, I am on a remarkable journey into the world of coding. My story is that of a young student with a profound passion for technology and a burning desire to use code for the betterment of society.
        
## Beyond the Ordinary
        
I'm not your average student; I'm a tech enthusiast on a mission. My fascination with the endless possibilities of technology has driven me to continually expand my knowledge and hone my skills in various programming languages. For me, coding is not just a means to an end; it's a powerful tool that can shape the world.
        
## A Higher Purpose
        
While many may pursue coding for personal gain, my vision extends far beyond wealth. I am determined to leverage my coding prowess to create a positive impact on a global scale. My dream is to develop applications that revolutionize healthcare and education, making them accessible to everyone, regardless of their circumstances.
        
## The Path Ahead
        
I am under no illusion that this journey will be a walk in the park. Challenges will undoubtedly arise, but my resolve remains unshaken. With each hurdle, I see an opportunity to grow and adapt. My determination to overcome obstacles fuels my ambition to create lasting change through technology.
        
## A Bright Future
        
In a world where technology evolves by the minute, my commitment to continuous learning and improvement in various programming languages is my compass. With unwavering dedication, I am well on my way to making a significant impact on the lives of countless individuals.
        
Join me as I navigate the ever-changing landscape of coding, turning my dreams into reality. The future holds great promise for a passionate and driven coder like me!
        
`
        }

    })
    const event = await prisma.events.create({
        data: {
            title: "Announcement 📢",
            description: "This is test a announcement",
            redirectLink: "#",
            endDate: "2023-10-09T15:22:37.266Z",
            enabled: true
        }
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
