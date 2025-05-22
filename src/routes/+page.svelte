<script lang="ts">
    import Icon from "@iconify/svelte";
	import { onMount } from "svelte";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import SplitText from 'gsap/SplitText';
	import { gsap } from "gsap";
    import snapHeroImg from '$lib/assets/snap-hero.jpg';
    import SectionDivider from "$lib/components/SectionDivider.svelte";
	import HomeAboutMeSection from "$lib/components/HomeAboutMeSection.svelte";
	import HomeBlogSection from "$lib/components/HomeBlogSection.svelte";
	import Footer from "$lib/components/Footer.svelte";

    onMount(() => {
        gsap.registerPlugin(SplitText, ScrollTrigger);

        // ScrollSmoother.create({
        //     wrapper: ".wrapper",
        //     content: ".content",
        //     smooth: 1,
        //     effects: true,
        // });

        SplitText.create("#heroHeadingText", {
            type: "words",
            autoSplit: true,
            onSplit(splitText) {
                gsap.fromTo(
                    splitText.words,
                    {
                        y: "100%",
                        opacity: 0,
                    },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out",
                        stagger: {
                            amount: 0.2,
                        },
                        delay: 0.2,
                    }
                );
            },
            
        });
    })
</script>

<svelte:head>
	<title>Wint Khant Lin | Portfolio</title>
	<meta name="description" content="I am Wint Khant Lin. Hey, I am a Computer Science student based in Myanmar. I am currently a Tech Content Writer and Full Stack Developer" />
	<meta name="keywords" content="wint khant, wint khant lin, happer64bit, portfolio" />
</svelte:head>

<main class="container wrapper content">
	<div id="heroSection" class="flex flex-col justify-center min-h-[90vh]">
		<div class="space-y-4 text-center">
			<img
				src={snapHeroImg}
                loading="lazy"
				alt="Shoot From Bottom Angle"
				class="mx-auto rounded-full max-w-[500px]"
			/>
			<h1 id="heroHeadingText" class="text-2xl lg:text-4xl mx-auto leading-[1.4] max-w-5xl">
				Hello, I am Wint Khant Lin. I am Computer Science Student, Who love creating and designing
				things.
			</h1>
			<div class="mx-auto flex items-center justify-center gap-4">
				<a
					href="mailto:wintkhantlin@gmail.com"
					class="bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:opacity-80 group"
					>Connect
					<Icon
						icon="solar:arrow-right-up-linear"
						class="relative bottom-0 left-0 transform duration-100 group-hover:bottom-[2px] group-hover:left-[2px]"
					/>
				</a>
				<a
					href="https://facebook.com/wintkhantlin"
					target="_blank"
					class="decoration-dotted text-[#252525]"
					>FaceBook
				</a>
			</div>
		</div>
	</div>

	<SectionDivider />

	<HomeAboutMeSection />

	<SectionDivider />

	<HomeBlogSection />

	<hr class="border-[#ddd]" />

	<Footer />
</main>
