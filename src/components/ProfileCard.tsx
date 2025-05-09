"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MePhoto from "@/assets/me.png";
import styles from './../app/page.module.css';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileCard() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const profileImageRef = useRef<HTMLImageElement>(null);
  const profileTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const profileTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 70%",
        once: true,
        toggleActions: "play none none reverse",
      },
    });

    profileTl
      .fromTo(profileImageRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(profileTextRef.current?.querySelectorAll("b, p") || [], { y: 30, opacity: 0 }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
      }, "-=0.6");
  }, []);

  return (
    <div ref={aboutSectionRef} className={`p-6 rounded-3xl bg-[#E8E8E8] min-h-[380px] flex flex-col justify-between group ${styles['profile-card']}`}>
      <Image ref={profileImageRef} src={MePhoto} alt="Wint Khant Lin" width={100} height={100} placeholder="blur" className="rounded-full" />
      <div ref={profileTextRef}>
        <b className="mb-2 block">Wint Khant Lin</b>
        <p className="text-lg text-[#414141]">
          I grew up in a small town in Myanmar. My entire life, especially my teenage years,
          was spent with computers and technology since I had no friends. But I finally found
          peace in learning to code, eating, sleeping, and repeating that algorithm every day.
        </p>
      </div>
    </div>
  );
}
