<h2>Comments</h2>
<form method="POST" action="?/comment">
    <div class="mb-5 mt-5">
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white mb-3">Name</label>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <input type="text" name="writer" id="name"
                       class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                       placeholder="Your name">
            </div>
        </div>
    </div>
    <label for="comment" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white mb-3">Comment</label>
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea id="comment" name="content" rows="4" style="min-height: 64px"
                      class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write a comment..." required></textarea>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button formaction="?/comment" type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center
                    text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200
                    dark:focus:ring-blue-900 hover:bg-blue-800">
                Post
            </button>
        </div>
    </div>
</form>
<!-- todo <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Comments will be reviewed by staffs before published.</p> -->
