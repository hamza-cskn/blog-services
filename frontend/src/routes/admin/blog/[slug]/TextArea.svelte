<script>
    import TextAreaUtils from "./TextAreaUtils.svelte";
    import {onMount} from "svelte";

    onMount(() => {
        const tx = document.getElementsByTagName("textarea");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput() {
            this.style.height = 0;
            this.style.height = (this.scrollHeight) + "px";
        }

        if (blog) {
            document.getElementById("title").value = blog.title;
            document.getElementById("author").value = blog.author;
            document.getElementById("content").value = blog.content;
        }
    });

    export let blog;


</script>
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora">
</head>
<style>
    textarea {
        font-family: 'Lora', serif;
        min-height: 180px;
        overflow: hidden;
    }

    input {
        outline-style: none;
    }

</style>
{#if blog}
    <h2 class="pb-3 font-bold text-3xl">Update blog: <span class="text-blue-300 text-sm">{blog.id}</span></h2>
{:else}
    <h1 class="pb-3 font-bold text-3xl">Write blog to publish</h1>
{/if}

<p class="pb-8 text-md font-medium text-gray-400 dark:text-gray-400">Fill your blog title, author and content below. The blog will be published when you push the publish button.</p>
<form method="POST" action="?/blog">
    <div class="pb-5 flex items-center">
        {#if blog && blog.visible}
            <!--suppress XmlDuplicatedId -->
            <input id="visibility" type="checkbox" name="visibility" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
        {:else}
            <!--suppress XmlDuplicatedId -->
            <input id="visibility" type="checkbox" name="visibility" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        {/if}
        <label for="visibility" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public Visibility</label>
    </div>

    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <TextAreaUtils/>
        <div class="px-4 py-8 bg-white dark:bg-gray-800">
            <label for="content" class="sr-only">Title</label>
            <input id="title" name="title" class="block w-full px-0
            tracking-normal font-bold text-3xl leading-9 theme-color-2
            bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                   placeholder="Write a title" required>
        </div>
        <div class="px-4 py-2 bg-white dark:bg-gray-800">
            <label for="content" class="sr-only">Author</label>
            <input id="author" name="author" class="block w-full px-0
            tracking-normal font-medium text-sm leading-9 theme-color-2
            bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                   placeholder="Write name of the author" required>
        </div>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
        <div class="px-4 py-2 bg-white dark:bg-gray-800">
            <label for="content" class="sr-only">Publish post</label>
            <textarea id="content" name="content" rows="8" class="block w-full px-0
            tracking-normal font-light text-xl leading-9 theme-color-2
            bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write an article..." required></textarea>
        </div>
    </div>
    {#if blog}
        <button formaction="?/blog" type="submit"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Update blog
        </button>
    {:else}
        <button formaction="?/blog" type="submit"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-green-800">
            Publish new blog
        </button>
    {/if}


</form>
