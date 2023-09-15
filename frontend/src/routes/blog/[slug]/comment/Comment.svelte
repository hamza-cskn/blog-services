<script>
    import ReplyWindow from "./ReplyWindow.svelte";

    export const ssr = true;
    export let comment;

</script>

<div class="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:bg-gray-900 dark:border-gray-700">
    <h4 class="text-sm text-black dark:text-white">{comment.writer}</h4>
    <p class="text-sm font-normal text-gray-400 dark:text-gray-400"><time pubdate datetime="{comment.createdDate}" title="{comment.createdDate}">{comment.createdDate}</time></p>
    <p class="text-sm text-black dark:text-white">{comment.content}</p>
    {#if comment.subComments && comment.subComments.length > 0}
        {#each comment.subComments as subcomment}
            {#if subcomment}
                <div class="ml-4 mb-8 p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:bg-gray-900 dark:border-gray-700">
                    <h4 class="text-sm text-black dark:text-white">{subcomment.writer}</h4>
                    <p class="text-sm font-normal text-gray-400 dark:text-gray-400"><time pubdate datetime="{subcomment.createdDate}" title="{subcomment.createdDate}">{subcomment.createdDate}</time></p>
                    <p class="text-sm text-black dark:text-white">{subcomment.content}</p>
                </div>
            {/if}
        {/each}
    {/if}
    <ReplyWindow comment={comment} />
</div>
