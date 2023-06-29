<script lang="ts">
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';
      
    var isInMainView: boolean;

    var isInLatestBlogPostView: boolean;
    
  </script>
  
  <main>
    <section>
        <div
            id="__animation_warpper__"
            use:inview={{ unobserveOnEnter: true }}
            on:change={(event) => {
                // @ts-ignore
                (isInMainView = event.detail.inView);
            }}
        >
            <article class="flex items-center p-10 h-screen">
                {#if isInMainView == true}
                    <div in:fade>
                        <h1 class="text-5xl font-bold">Hello! My Name is Happer</h1>
                        <h1 class="text-5xl font-bold text-purple-500">(Wint Khant Lin)</h1>
                    </div>
                {/if}
            </article>
        </div>
    </section>
    <section>
        <div
            id="__animation_warpper__"
            use:inview={{ unobserveOnEnter: true }}
            on:change={(event) => {
                // @ts-ignore
                (isInLatestBlogPostView = event.detail.inView);
            }}
        >
            <article class="p-10">
                {#if isInLatestBlogPostView == true}
                    <div in:fade>
                        <div class="text-center py-5 w-full">
                            <h1 class="text-5xl font-bold">Latest Blog Post</h1>
                        </div>
                        <div>
                            <div class="grid lg:grid-cols-3 gap-4">
                                <div>
                                    <div class="animate-pulse p-2 bg-slate-100 dark:bg-zinc-900 h-[14rem]"></div>
                                    <div class="py-2">
                                        <div class="animate-pulse w-[70%] p-3 bg-slate-100 dark:bg-zinc-900"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="animate-pulse p-2 bg-slate-100 dark:bg-zinc-900 h-[14rem]"></div>
                                    <div class="py-2">
                                        <div class="animate-pulse w-[70%] p-3 bg-slate-100 dark:bg-zinc-900"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="animate-pulse p-2 bg-slate-100 dark:bg-zinc-900 h-[14rem]"></div>
                                    <div class="py-2">
                                        <div class="animate-pulse w-[70%] p-3 bg-slate-100 dark:bg-zinc-900"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </article>
        </div>
    </section>
</main>