<script>

    export let blogs;

    const handleEdit = (id) => window.location.href = `/admin/blog/${id}`;

</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Title
            </th>
            <th scope="col" class="px-6 py-3">
                Author
            </th>
            <th scope="col" class="px-6 py-3">
                Visibility
            </th>
            <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
            </th>
        </tr>
        </thead>
        <tbody>
        {#each blogs as blog}
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {blog.title}
                </th>
                <td class="px-6 py-4">
                    {blog.author}
                </td>
                {#if blog.visible}
                    <td class="px-6 py-4 text-green-500">
                        <div class="flex items-center">
                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Visible
                        </div>
                    </td>
                {:else}
                    <td class="px-6 py-4 text-red-500">
                        <div class="flex items-center">
                            <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Hidden
                        </div>
                    </td>
                {/if}
                <td class="px-6 py-4 text-right">
                    <button on:click={() => handleEdit(blog.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
