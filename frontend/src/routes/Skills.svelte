<script>
    let skills = [
        {text: 'Node.js', categories: ["Framework"]},
        {text: 'Express.js', categories: ["Framework"]},
        {text: 'Socket.io', categories: ["Framework"]},
        {text: 'Bootstrap', categories: ["Framework"]},
        {text: 'Svelte', categories: ["Framework"]},
        {text: 'Tailwind CSS', categories: ["Framework"]},
        {text: 'Jest', categories: ["Framework"]},
        {text: 'Nest.js', categories: ["Framework"]},
        {text: 'Java', categories: ["Language"]},
        {text: 'SQL', categories: ["Language"]},
        {text: 'Javascript & Typescript', categories: ["Language"]},
        {text: 'C', categories: ["Language"]},
        {text: 'MongoDB', categories: ["Tool"]},
        {text: 'Linux', categories: ["Tool"]},
        {text: 'SvelteKit', categories: ["Framework"]},
        {text: 'Github Actions', categories: ["Tool"]},
        {text: 'Amazon Web Services', categories: ["Tool"]},
        {text: 'Gradle', categories: ["Tool"]},
        {text: 'Maven', categories: ["Tool"]},
        {text: 'Git & GitHub', categories: ["Tool"]},
        {text: 'Docker', categories: ["Tool"]},
        {text: 'Redis', categories: ["Tool"]},
        {text: 'REST API', categories: ["Concept"]},
        {text: 'MVC', categories: ["Concept"]},
        {text: 'Object-Oriented Programming', categories: ["Concept"]},
        {text: 'Test Driven Development', categories: ["Concept"]},
    ];

    let shownCategories = ["Concept", "Tool", "Language", "Framework"]

    function toggleCategory(category) {
        if (shownCategories.includes(category)) {
            shownCategories = shownCategories.filter(cat => cat !== category);
        } else {
            shownCategories.push(category);
            shownCategories = shownCategories;
        }
    }


</script>
<div class="max-w-screen-md mb-8 ml-16 lg:mb-16">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Technologies</h2>
    <p class="text-gray-500 sm:text-xl dark:text-gray-400">Methodologies, languages, frameworks and tools I
        experienced.</p>
</div>
<div class="flex justify-center mb-16" id="category-checkboxes">
    <div class="inline-flex  items-center mr-4">
        <input type=checkbox checked on:change={() => toggleCategory("Framework")} id="framework-checkbox"
               value=""
               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="framework-checkbox"
               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frameworks</label>
    </div>
    <div class="inline-flex items-center mr-4">
        <input type=checkbox checked on:change={() => toggleCategory("Language")} id="language-checkbox"
               value=""
               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="language-checkbox"
               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Languages</label>
    </div>
    <div class="inline-flex items-center mr-4 ml-8">
        <input type=checkbox checked on:change={() => toggleCategory("Tool")} id="tool-checkbox"
               value=""
               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="tool-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tools</label>
    </div>

    <div class="inline-flex items-center mr-4">
        <input type=checkbox checked on:change={() => toggleCategory("Concept")} id="concept-checkbox"
               value=""
               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="concept-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Concepts</label>
    </div>
</div>

<ul class="flex flex-wrap items-center justify-center mb-6 lg:ml-48 lg:mr-48 space-x-6 text-gray-900 dark:text-white">
    {#each skills as skill}
        {#if shownCategories.find(category => skill.categories.find(c => c === category))}
            <li>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {skill.text}
              </span>
                </button>
            </li>
        {/if}
    {/each}
</ul>
