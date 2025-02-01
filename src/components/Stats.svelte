<script lang="ts">
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    const frameworks = [
        { name: 'Next.js', logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png' },
        { name: 'Svelte', logo: 'https://raw.githubusercontent.com/sveltejs/svelte/master/sites/svelte.dev/static/svelte-logo.svg' },
        { name: 'Flutter', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
        { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'Nest', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg' },
        { name: 'Ruby on Rails', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-plain.svg' }
    ];

    let currentFramework = 0;
    let hoveredFramework: string | null = null;
    let displayFramework = frameworks[currentFramework].name;

    let delayTimeout: ReturnType<typeof setTimeout>;

    const updateFramework = () => {
        if (!hoveredFramework) {
            clearTimeout(delayTimeout);

            delayTimeout = setTimeout(() => {
                currentFramework = (currentFramework + 1) % frameworks.length;
                displayFramework = frameworks[currentFramework].name;
            }, 1500);
        }
    };

    setInterval(updateFramework, 2500);
</script>

<section class="container mx-auto px-4 py-8 md:py-12">
    <div class="mt-6 grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-[1px] overflow-hidden rounded-lg motion-preset-slide-up-lg motion-preset-fade-lg motion-delay-200">
        <div class="col-span-2 bg-zinc-900 p-6 md:p-8 transition-colors hover:bg-zinc-800">
            <div class="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">
                I love{' '}
                <span class="relative inline-block">
                    <span class="invisible">{hoveredFramework || displayFramework}</span>
                    {#key hoveredFramework || displayFramework}
                        <span
                            in:fly={{ y: 20, duration: 400, easing: quintOut }}
                            out:fly={{ y: -20, duration: 400, easing: quintOut }}
                            class="absolute left-0 top-0 text-purple-400"
                        >
                            {hoveredFramework || displayFramework}
                        </span>
                    {/key}
                </span>
            </div>
            <div class="flex flex-wrap gap-2 md:gap-4">
                {#each frameworks as framework, i}
                    <div
                        role="button"
                        tabindex="{i}"
                        class="h-8 w-8 md:h-10 md:w-10 transform cursor-pointer rounded-lg bg-zinc-800 p-1 md:p-2 transition-all hover:scale-110 hover:bg-zinc-700"
                        on:mouseenter={() => (hoveredFramework = framework.name)}
                        on:mouseleave={() => (hoveredFramework = null)}
                    >
                        <img src={framework.logo} alt={framework.name} class="h-full w-full object-contain" />
                    </div>
                {/each}
            </div>
        </div>
        <div class="group flex flex-col justify-evenly bg-zinc-900 p-4 md:p-6 transition-colors hover:bg-zinc-800">
            <p class="text-sm md:text-base font-medium">Experience</p>
            <div class="relative">
                <span class="invisible">4+ Years</span>
                {#key '5+ Years'}
                    <p
                        in:fly={{ y: 20, duration: 400, easing: quintOut }}
                        class="absolute left-0 top-0 text-xl md:text-2xl font-bold transition-colors group-hover:text-purple-400"
                    >
                        5+ Years
                    </p>
                {/key}
            </div>
        </div>
        <div class="group flex flex-col justify-evenly bg-zinc-900 p-4 md:p-6 transition-colors hover:bg-zinc-800">
            <p class="text-sm md:text-base font-medium">Projects</p>
            <div class="relative">
                <span class="invisible">12+</span>
                {#key '12+'}
                    <p
                        in:fly={{ y: 20, duration: 400, easing: quintOut }}
                        class="absolute left-0 top-0 text-xl md:text-2xl font-bold transition-colors group-hover:text-purple-400"
                    >
                        12+
                    </p>
                {/key}
            </div>
        </div>
        <div class="group flex flex-col justify-evenly bg-zinc-900 p-4 md:p-6 transition-colors hover:bg-zinc-800 col-span-2 md:col-span-1">
            <p class="text-sm md:text-base font-medium">Success Rate</p>
            <div class="relative">
                <span class="invisible">100%</span>
                {#key '85%'}
                    <p
                        in:fly={{ y: 20, duration: 400, easing: quintOut }}
                        class="absolute left-0 top-0 text-xl md:text-2xl font-bold transition-colors group-hover:text-purple-400"
                    >
                        85%
                    </p>
                {/key}
            </div>
        </div>
    </div>
</section>
