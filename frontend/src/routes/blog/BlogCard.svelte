<script>
    import "../../app.postcss";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>

<article class="p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:bg-gray-900 dark:border-gray-700">
    <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      {data.type || "Blog"}
                  </span>
        <span class="text-sm">{data.createdDate || ""}</span>
    </div>
    <h2 class="mb-2 text-2xl font-bold tracking-tight hover:underline text-gray-900 dark:text-white">
        <a href="/blog/{data.id}">{data.title}</a>
    </h2>
    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{data.content?.length >= 200 ? data.content.substring(0,200) + "..." : (data.content || "*no content*")}</p>
    <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <img class="w-7 h-7 rounded-full" src="{data.author_png || 'http://localhost:5173/hamzaphoto.png'}" alt="Hamza avatar" />
            <span class="font-medium dark:text-white">
                  {data.author || "Hamza Coşkun"}
              </span>
        </div>
        <a href="/blog/{data.id}" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
            Read more
            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</article>