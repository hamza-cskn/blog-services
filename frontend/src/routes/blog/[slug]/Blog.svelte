<script>
    import "../../../app.postcss";
    import SvelteMarkdown from 'svelte-markdown';
    import Comment from "./comment/Comment.svelte";

    /** @type {import('./$types').PageData} */
    export let blog;
    export let comments;

    console.log("comments", comments);
    console.log("blog", blog);

    const date = new Date(Date.parse(blog.createdDate));

    function getTitleTheme(theme) {
        switch (theme) {
            case "white-to-blue":
                return "rainbow white-to-blue";
            case "rainbow-soft":
                return "rainbow rainbow-soft";
            default:
                return "theme-color-1";
        }
    }


    const firstUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const fillClass = 'material-symbols-outlined-fill';
    const getLikeButton = () => document.getElementById('like-button');
    const getDislikeButton = () => document.getElementById('dislike-button');

    const unmark = (button) => button.className = button.className.replace(fillClass, "");

    const toggle = (button) => {
        if (button.className.includes(fillClass))
            unmark(button);
        else
            button.className = button.className + " " + fillClass;
    }

    const handleDislikeButton = () => {
        toggle(getDislikeButton());
        unmark(getLikeButton());
    }

    const handleLikeButton = () => {
        toggle(getLikeButton());
        unmark(getDislikeButton());
    }

</script>
<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
</head>
<style>
    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24
    }

    .material-symbols-outlined-fill {
        font-variation-settings: 'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24
    }
</style>
<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 theme-bg-color-1"
      style="text-rendering: optimizeLegibility; image-rendering: optimizeQuality">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article
                class="mx-auto w-full font-normal tracking-normal format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img class="mr-4 w-16 h-16 rounded-full"
                             src="{blog.author_png || 'http://localhost:5173/hamzaphoto.png'}" alt="{blog.author}">
                        <div>
                            <a href="#" rel="author"
                               class="text-xl font-bold text-gray-900 dark:text-white">{blog.author}</a>
                            <p class="text-base font-light text-gray-500 dark:text-gray-400">
                                <time pubdate datetime="{date}"
                                      title="{date.toDateString()}">{date.toDateString()}</time>
                            </p>
                        </div>
                    </div>
                </address>
                {#if blog.original_language && blog.original_language.toLowerCase() !== 'english'}
                    <p class="text-sm mb-8">Original language of the article is <span
                            class="text-red-200">{firstUpper(blog.original_language)}</span>. Translated by <a
                            href="https://openai.com/blog/chatgpt" class="text-green-200">ChatGPT</a>.</p>
                {/if}
                <h2 class="mb-4 lg:mb-6 lg:text-5xl text-4xl font-extrabold leading-tight text-gray-900 dark:text-white {getTitleTheme(blog.theme)}">{blog.title}</h2>
                {#if blog.subtitle}
                    <p class="leading">{blog.subtitle}</p>
                {/if}
            </header>

            <div class="tracking-normal font-light text-xl leading-9 theme-color-2" style="font-family: 'Lora',serif">
                <SvelteMarkdown source={blog.content}/>
            </div>
            <div>
                <button on:click={handleLikeButton}>
                    <span id="like-button" class="material-symbols-outlined hover:text-gray-300">
                    thumb_up
                    </span>
                </button>
                <button on:click={handleDislikeButton}>
                    <span id="dislike-button" class="material-symbols-outlined hover:text-gray-300">
                    thumb_down
                    </span>
                </button>
            </div>
            <hr/>
            <h2>Comments</h2>
            <form>
                <div class="mb-5 mt-5">
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white mb-3">Name</label>
                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" class="sr-only">Your comment</label>
                            <input type="text" name="name" id="name"
                                   class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                   placeholder="Your name">
                        </div>
                    </div>
                </div>
                <label for="comment" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white mb-3">Comment</label>
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea id="comment" rows="4" style="min-height: 64px"
                                  class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                  placeholder="Write a comment..." required></textarea>
                    </div>
                    <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit"
                                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post
                        </button>
                    </div>
                </div>
            </form>
            <!-- todo <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Comments will be reviewed by staffs before published.</p> -->
            <div class="mt-16">
                {#each comments as comment}
                    <Comment {comment}/>
                {/each}
            </div>
        </article>
    </div>
</main>