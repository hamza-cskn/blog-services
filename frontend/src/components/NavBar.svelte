<script>
    import {onDestroy, onMount} from "svelte";

    let atTopOfThePage = false;

    // Function to handle scroll events
    function handleScroll() {
        atTopOfThePage = window.scrollY !== 0;
    }

    // listen scroll event
    onMount(() => {
        window.addEventListener('scroll', handleScroll);
    });

</script>
<style>
    nav {
        z-index: 100;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        width: 100%;
        background: none;
        position: fixed;
    }
</style>

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 {atTopOfThePage ? 'border-b border-gray-200 dark:border-gray-800' : ''}">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
            <img src="favicon.png" class="h-8 mr-3" alt="Logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-purple-400 text-purple-400">Hamza</span>
        </a>
        <div class="flex md:order-2">
            <form class="w-64">
                <label for="default-search" class="mb-2 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-3 pl-10 text-xs
                    text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 cursor-not-allowed" disabled
                           placeholder="Searching currently disabled" required>
                </div>
            </form>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center pl-36 justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg
            md:flex-row md:space-x-24 md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                    <a href="/" class="block py-2 pl-3 pr-4 text-gray-800 rounded
                     md:border-0 md:hover:text-black md:p-0 dark:text-gray-300
                     md:dark:hover:text-white dark:hover:text-white">Home</a>
                </li>
                <li>
                    <a href="/blog" class="block py-2 pl-3 pr-4 text-gray-800 rounded
                     md:border-0 md:hover:text-black md:p-0 dark:text-gray-300
                     md:dark:hover:text-white dark:hover:text-white">Blogs</a>
                </li>
                <li>
                    <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-800 rounded
                     md:border-0 md:hover:text-black md:p-0 dark:text-gray-300
                     md:dark:hover:text-white dark:hover:text-white">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

