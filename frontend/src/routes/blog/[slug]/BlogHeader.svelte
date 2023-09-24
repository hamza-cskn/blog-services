<script>
    export let blog;
    export let date;

    const firstUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

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

</script>
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