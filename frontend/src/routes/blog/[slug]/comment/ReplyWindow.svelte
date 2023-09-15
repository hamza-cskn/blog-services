<script>
    export const ssr = true;
    export let comment;

    let openReplyWindow = false;
    function handleClick() {
        return () => openReplyWindow = !openReplyWindow
    }
</script>

{#if openReplyWindow}
    <button class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-ed-900 hover:bg-red-800" on:click={handleClick()}>
        Cancel
    </button>

    <label for="name" class="mb-4 mt-8 block text-sm font-medium leading-6 text-gray-900 dark:text-white">Name</label>
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="name" class="sr-only">Your Name</label>
            <input id="name" type="text" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your Name" required>
        </div>
    </div>

    <label for="comment-{''}" class="mb-4 mt-8 block text-sm font-medium leading-6 text-gray-900 dark:text-white">Reply</label>
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment-{''}" class="sr-only">Your comment</label>
            <textarea id="comment-{''}" rows="4" style="min-height: 64px" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Reply {comment.name}" required></textarea>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Post
            </button>
        </div>
    </div>
{:else}
    <button class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" on:click={handleClick()}>
        Reply
    </button>
{/if}