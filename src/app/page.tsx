import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/HomeAboutSection";
import HomeBlogDisplay from '@/components/HomeBlogDisplay';
import HomeContactMeSection from "@/components/HomeContactMeSection";
import HomeSkillsShowcase from "@/components/HomeSkillsShowcase";
import { postsSortedByDate } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wint Khant Lin - Portfolio Website",
  description: "A Computer System Engineering student with a passion for software development and technology.",
  keywords: ["Wint Khant Lin", "Portfolio", "Software Development"],
}

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <HeroSection />
      <AboutSection />
      <HomeSkillsShowcase />
      <HomeBlogDisplay posts={postsSortedByDate.slice(0, 3)} />
      <HomeContactMeSection />
    </main>
  );
}
