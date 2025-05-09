import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/HomeAboutSection";
import HomeBlogDisplay from '@/components/HomeBlogDisplay';
import HomeContactMeSection from "@/components/HomeContactMeSection";
import HomeSkillsShowcase from "@/components/HomeSkillsShowcase";
import { postsSortedByDate } from "@/lib/posts";
// import HomeAboutMyRelationship from "@/components/HomeAboutMyRelationship";
// import HomeContactMeSection from "@/components/HomeContactMeSection";

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
