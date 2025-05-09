import ProfileCard from "./ProfileCard";
import GridItem from "./HomeGridCard";
import codingIcon from "@/assets/coding.svg";
import cameraIcon from "@/assets/camera.svg";
import musicIcon from "@/assets/music.svg";

export default function AboutSection() {
  return (
    <section className="lg:mt-20 mb-20">
      <div className="grid lg:grid-cols-2 gap-5">
        <ProfileCard />
        <div className="grid grid-rows-3 gap-4">
          <GridItem icon={codingIcon} title="Software Engineering" color="#3B82F6" index={0} />
          <GridItem icon={cameraIcon} title="Photography" color="#EF4444" index={1} />
          <GridItem icon={musicIcon} title="Chilling" color="#111827" index={2} />
        </div>
      </div>
    </section>
  );
}
