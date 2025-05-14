"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const headingTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    SplitText.create(headingTextRef.current, {
      type: "words",
      onSplit(splitText) {
        gsap.from(splitText.words, {
          duration: 1,
          opacity: 0,
          y: -50,
          stagger: { amount: 0.5 },
          ease: "power2.out",
          onComplete() {
            gsap.set(splitText.lines, { clearProps: "all" });
          },
        });
      },
    });
  }, []);

  return (
    <section className="mt-24 mb-20">
      <h1 ref={headingTextRef} className="text-6xl lg:text-7xl">
        Everything happens for a reason, leading to something better.
      </h1>
      <div className="mt-10">
        <Link
          href={"/posts"}
          className="relative overflow-hidden text-lg rounded-full border border-black px-4 py-3.5 flex items-center gap-2 w-fit group transition-transform duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-black opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 rounded-full blur-md" />
          <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
            See All Blogs
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>

      </div>
    </section>
  );
}
