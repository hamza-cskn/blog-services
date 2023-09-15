<script>
    import {onMount} from "svelte";

    let projects = [
        {
            title: 'Chess',
            desc: "A well-optimized chess library to calculate legal movements.",
            technologies: "Typescript and Jest",
            link: "https://github.com/hamza-cskn/chess",
        },
        {
            title: 'Personal Website',
            desc: "Personal website where Hamza introduces himself.",
            technologies: "HTML, CSS, JavaScript, Typescript, Docker, IaaS*, Node.js, Nest.js, Svelte, SvelteKit, AWS, and GitHub Actions",
            footnote: "*: on Premise for dev. environment",
            link: "#",
        },
        {
            title: 'Inventory Framework',
            desc: "Inventory based GUI Framework for Minecraft servers.",
            technologies: "Java",
            link: "https://github.com/hamza-cskn/obliviate-invs",
        },
        {
            title: 'École 42 Cursus',
            desc: "École 42's student projects. <h1 class=\"font-bold mt-3 text-gray-900 dark:text-white\">Projects</h1><ul><li>Libft</li><li>Printf</li><li>GetNextLine</li><li>So Long</li><li>Minitalk</li><li>and many more...</li></ul>",
            technologies: "C, Linux and Shell",
            link: "https://github.com/hamza-cskn/",
        },
        {
            title: 'SQLite Library',
            desc: "An SQLite library to manage SQLite databases using only methods.",
            technologies: "Java and SQLite",
            link: "https://github.com/hamza-cskn/block-sqlite",
        },
        {
            title: 'MongoDB Benchmarker',
            desc: "Benchmarking and data faker tool for MongoDB. It allows to bulk updates, inserts, reads and deletes.",
            technologies: "C#, Docker, MongoDB and GitHub Actions",
            link: "https://github.com/hamza-cskn/MongoDBBenchmarker",
        },
    ];

    async function updateDatas(project) {
        const datas = project.link.split("/");
        const repoName = datas[datas.length - 1];
        const repoOwner = datas[datas.length - 2];
        fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`)
            .then(response => response.json())
            .then(data => {
                //star count
                project.starCount = data.stargazers_count || 0;
                project.archived = data.archived;
                projects = projects;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    onMount(() => {
        for (let project of projects) {
            updateDatas(project)
        }
    });
</script>

<div class="max-w-screen-md mb-8 ml-16 lg:mb-16">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
    <p class="text-gray-500 sm:text-xl dark:text-gray-400">Let me proof what I know.</p>

</div>

<ul class="flex flex-wrap items-center justify-center mb-6 lg:ml-48 lg:mr-48 text-gray-900 dark:text-white">
    {#each projects as project}
        <li>
            <a href="{project.link}" data-popover-target={"popover-default" + project.title}>
                <div style="width: 300px; height: 100px; line-height: 70px"
                     class="ml-3 mr-3 mb-3 border-blue-300 dark:border-blue-900 hover:border-none  border-2 text-gray-900 dark:text-white bg-blue-200 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-950 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img class="theme-svg inline-block" src="github-mark.svg" width="17px"/> &nbsp; {project.title}
                </div>
            </a>
            <div data-popover id={"popover-default" + project.title} role="tooltip"
                 class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <span class="float-right"> {project.starCount ?? 0}
                        <svg aria-hidden="true" class="inline-flex w-5 h-5 text-yellow-400" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Star</title><path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></span>
                    <h3 class="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    {#if project.archived}
                        <p class="font-italic text-gray-500">archived</p>
                    {/if}
                </div>
                <div class="px-3 py-2">
                    <p>{@html project.desc}</p>
                    <h1 class="font-bold mt-3 text-gray-900 dark:text-white">Technologies</h1>
                    <p class="">{project.technologies}</p>
                    {#if project.footnote}
                        <p class="text-sm mt-2 text-gray-400 dark:text-gray-500">{project.footnote}</p>
                    {/if}
                </div>
                <div data-popper-arrow></div>
            </div>
        </li>
    {/each}
</ul>