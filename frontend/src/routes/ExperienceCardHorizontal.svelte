<script>
    export let data;
</script>

<li class="relative mb-6 sm:mb-0 w-full h-64">
    <div class="flex items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300"
                 fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"></path>
            </svg>
        </div>

        <div class="hidden sm:flex w-full h-0.5 theme-color-forbg-3"></div>
    </div>
    <div class="mt-3 ml-16 sm:pr-8">
        <h3 class="text-lg font-semibold text-left theme-color-1">{data.title}</h3>
        <time class="block mb-2 text-sm text-left font-normal leading-none theme-color-3">
            {data.time}
        </time>
        <p class="text-base font-normal text-left theme-color-2">{data.content}</p>
    </div>
</li>