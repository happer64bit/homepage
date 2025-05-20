<template>
    <footer class="min-h-[50vh] flex flex-col items-center justify-center">
        <div class="w-full">
            <div>
                <p class="text-sm text-[#818181] mb-2">CONTACT ME</p>
                <NuxtLink to="mailto:wintkhantlin@gmail.com" class="group inline-block relative">
                    <span class="text-4xl text-[#818181] hover:text-black transition-all duration-300">
                        wintkhantlin@gmail.com
                    </span>
                    <span
                        class="block absolute left-0 -bottom-2 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 " />
                </NuxtLink>
            </div>
            <div class="flex flex-col items-end">
                <p class="text-[#818181] mb-4">SOCIAL MEDIA</p>
                <div class="space-y-0.5 flex flex-col items-end gap-2">
                    <NuxtLink to="https://github.com/wintkhantlin" target="_blank" class="text-sm text-gray-500">
                        github.com/wintkhantlin
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/wintkhantlin/" target="_blank" class="text-sm text-gray-500 ml-4">
                        linkedin.com/in/wintkhantlin
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>