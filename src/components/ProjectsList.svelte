<script>
    export let projects;
</script>

<section class="container mx-auto px-4 py-8 md:py-12">
    <h2 class="text-4xl font-bold mb-6">Projects</h2>
    <div class="grid lg:grid-cols-2 gap-2 lg:[&>*:nth-child(4)]:rounded-bl-xl lg:[&>*:nth-child(5)]:rounded-br-xl lg:[&>*:nth-child(5)]:rounded-bl-none  [&>*:nth-child(5)]:rounded-b-xl">
        <div class="lg:col-span-2 bg-zinc-900 p-6 lg:p-8 transition-colors hover:bg-zinc-800 space-y-2 rounded-t-xl">
            <h1 class="text-2xl lg:text-4xl font-bold">{projects[0].name}</h1>
            <p class="lg:line-clamp-none line-clamp-3 text-sm lg:text-base opacity-70">{projects[0].description}</p>
            <div class="flex justify-end items-center">
                <a href={projects[0].repository} target="_blank" class="hover:underline">
                    <div class="flex items-center gap-2">
                        <p class="text-sm opacity-80">{projects[0].repository.split("/").slice(-2).join("/")}</p>
                        <img src="/assets/github.svg" class="w-5 h-5" alt="GitHub Icon" />
                    </div>
                </a>
            </div>
        </div>
        {#each projects.slice(1, 5) as project}
            <div class="bg-zinc-900 p-6 lg:p-8 transition-colors hover:bg-zinc-800 space-y-2">
                <h1 class="text-2xl font-bold">{project.name}</h1>
                <p class="text-sm line-clamp-2 opacity-70">{project.description}</p>
                <div class="mt-4">
                    <div class="flex justify-end items-center">
                        <a href={project.repository} target="_blank" class="hover:underline">
                            <div class="flex items-center gap-2">
                                <p class="text-sm opacity-80">{project.repository.split("/").slice(-2).join("/")}</p>
                                <img src="/assets/github.svg" class="w-5 h-5" alt="GitHub Icon" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>