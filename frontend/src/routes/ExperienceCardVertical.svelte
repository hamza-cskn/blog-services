<script>
    export let data;
</script>

<li class="mt-16 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" class="w-3 h-3 theme-color-2" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                          clip-rule="evenodd"></path></svg>
        </span>
    <h3 class="mb-1 text-lg font-semibold theme-color-1">{data.title}</h3>
    <time class="block mb-2 text-sm font-normal leading-none theme-color-2">{data.time}
    </time>
    <p class="text-base font-normal theme-color-2">{data.content}</p>
</li>