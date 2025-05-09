"use client";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from '@/app/page.module.css';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GridItem({ icon, title, color, index }: {
  icon: StaticImageData;
  title: string;
  color: string;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const item = itemRef.current;
    if (!item) return;

    gsap.fromTo(item,
      { y: 50, opacity: 0, rotate: index % 2 === 0 ? -2 : 2 },
      {
        y: 0, opacity: 1, rotate: 0,
        duration: 1,
        delay: 0.2 + (index * 0.15),
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          once: true,
        }
      }
    );

    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(item, {
        rotateY: x * 5,
        rotateX: -y * 5,
        transformPerspective: 900,
        duration: 0.4,
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
      });
    });
  }, [index]);

  return (
    <div ref={itemRef} className={`rounded-3xl text-white p-5 flex items-center ${styles['grid-bg']}`} style={{ backgroundColor: color }}>
      <Image src={icon} alt={`${title} Icon`} width={80} height={80} />
      <h1 className="text-3xl ml-4">{title}</h1>
    </div>
  );
}
