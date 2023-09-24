<script>
    import TextArea from "./[slug]/TextArea.svelte";
    import AdminNavbar from "../AdminNavbar.svelte";
    import Footer from "../../../components/Footer.svelte";
    import BlogsTable from "./BlogsTable.svelte";

    export let data;

    const {blogs} = data;
</script>


<AdminNavbar user=data />
<div class="pt-32">
    <div class="w-1/2 ml-auto mr-auto">
        <a href="/admin/blog/new" class="text-blue-600 hover:text-white hover:bg-blue-500 p-2
        border-blue-600 border-2 rounded font-medium">+ New Blog</a>
    </div>
    <div class="pt-16 w-1/2 ml-auto mr-auto">
        <h1 class="pb-3 font-bold text-3xl">Blogs List</h1>
        <p class="pb-8 text-md font-medium text-gray-400 dark:text-gray-400">Manage exists blogs.</p>
        {#if blogs.length !== 0}
            <BlogsTable blogs={blogs}/>
        {:else}
            <div class="text-center">
                <h1 class="text-sm text-gray-500 font-bold">No blogs found</h1>
            </div>
        {/if}
    </div>
</div>
<Footer/>