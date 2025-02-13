<script>
    import GitHubIcon from './../icons/github.svg';
    export let projects;
</script>

<section class="container mx-auto px-4 py-8 md:py-12">
    <h2 class="text-4xl font-bold mb-6">Projects</h2>
    <div class="grid lg:grid-cols-2 gap-2">
        {#each projects.slice(0, 5) as project, index}
            <div 
                class="bg-zinc-900 p-6 lg:p-8 transition-colors hover:bg-zinc-800 space-y-2"
                class:rounded-t-xl={index === 0}
                class:lg:col-span-2={index === 0}
                class:rounded-bl-xl={index === 3}
                class:rounded-br-xl={index === 4}
                class:rounded-b-xl={index === 4}
                class:lg:rounded-bl-none={index === 4}
            >
                <h1 class="text-2xl font-bold" class:lg:text-4xl={index==0}>{project.name}</h1>
                <p class="text-sm lg:text-base opacity-70" class:line-clamp-2={index !== 0} class:lg:line-clamp-none={index === 0}>{project.description}</p>
                <div class="flex justify-end items-center mt-4">
                    <a href={project.repository} target="_blank" class="hover:underline">
                        <div class="flex items-center gap-2">
                            <p class="text-sm opacity-80">{project.repository.split("/").slice(-2).join("/")}</p>
                            <img src={GitHubIcon} class="w-5 h-5" alt="GitHub Icon" />
                        </div>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</section>
