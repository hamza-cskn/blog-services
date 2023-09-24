<script>
    import "../../app.postcss";
    import BlogCard from "./BlogCard.svelte";
    import {onMount} from "svelte";

    export let data;
    const blogs = data.blogs;
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>

<section class="theme-bg-color-1">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tighter font-extrabold text-gray-900 dark:text-white">
                Blog</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">I love to share my experiences and learn
                from experiences of others.</p>
            <p class="font-light text-gray-400 sm:text-md dark:text-gray-500 mt-3 ml-auto mr-auto italic w-1/2">"You
                must learn from the
                mistakes of others. You can't possibly livelong enough to make them all yourself." <span class="font-light text-gray-400 sm:text-md dark:text-gray-500">-Sam Levenson</span>
            </p>
        </div>
        {#if blogs}
            <div class="grid gap-8 lg:grid-cols-2">
                {#each blogs as data}
                    <BlogCard {data}/>
                {/each}
            </div>
        {:else}
            <p class="text-center font-bold text-gray-800 dark:text-gray-100 text-3xl">No blog found</p>
        {/if}
    </div>
</section>