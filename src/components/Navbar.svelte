<nav class="fixed top-0 left-0 w-full p-4 justify-center flex">
    <div
        class="backdrop-blur-[10px] p-2 px-6 lg:px-10 flex items-center justify-between border rounded-xl border-[rgba(255,255,255,0.15)] h-[65px] w-[90vw]"
    >
        <div>
            <h1 class="lg:text-xl font-medium">Happer64Bit</h1>
        </div>
        <div class="flex items-center gap-10 text-sm lg:text-lg">
            <a href="/blog">Blog</a>
            <a href="/projects-showcase">Projects</a>
        </div>
        <div class="flex items-center gap-10">
            <button on:click={() => {
                if(window.localStorage.getItem("theme-data") == "dark") {
                    window.localStorage.setItem("theme-data", "light")
                    document.getElementsByTagName("html")[0].setAttribute("theme-data", "light")
                    document.body.style.colorScheme = "light"
                } else {
                    window.localStorage.setItem("theme-data", "dark")
                    document.getElementsByTagName("html")[0].setAttribute("theme-data", "dark")
                    document.body.style.colorScheme = "dark"
                }
            }}>Theme</button>
            <a
                href="/subscribe"
                class="py-2 px-6 text-sm lg:text-lg bg-[#10253E] text-blue-500 rounded-xl"
                >Subscribe</a
            >
        </div>
    </div>
</nav>
