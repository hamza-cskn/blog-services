<script>
    import Blog from "./Blog.svelte";
    import NavBar from "../../../components/NavBar.svelte";
    import Footer from "../../../components/Footer.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<NavBar/>

<div style="min-height: 100vh; margin-top: 100px">
    <Blog blog={data.blog} comments={data.comments} />
</div>
<Footer/>