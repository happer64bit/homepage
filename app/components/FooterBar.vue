<template>
    <footer class="border-t border-neutral-200 w-full text-neutral-400 py-4 grid grid-cols-2 lg:grid-cols-3 font-mono gap-10 text-sm">
        <div>
            <b>Theme Toggle</b>
            <div class="mt-2">
                <ThemeToggleButton />
            </div>
        </div>
        <div class="space-y-4">
            <p>SOCIAL</p>
            <ul class="space-y-1">
                <li class="flex items-center gap-2 transform duration-300 hover:text-black">
                    <Icon name="mdi:arrow-top-right" />
                    <a href="mailto:wintkhantlin@gmail.com">Email</a>
                </li>
                <li class="flex items-center gap-2 transform duration-300 hover:text-black">
                    <Icon name="mdi:arrow-top-right" />
                    <a href="https://linkedin.com/in/wintkhantlin">LinkedIn</a>
                </li>
                <li class="flex items-center gap-2 transform duration-300 hover:text-black">
                    <Icon name="mdi:arrow-top-right" />
                    <a href="https://github.com/happer64bit">GitHub</a>
                </li>
            </ul>
        </div>
        <div class="col-span-2 lg:col-span-1">
            <p>&copy; 2021 - 2025 Wint Khant Lin - All Rights Reserved</p>
            <p>Myanmar, Yangon</p>
        </div>
    </footer>
</template>