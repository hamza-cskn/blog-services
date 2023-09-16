<script>
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import BlogSection from "./BlogSection.svelte";

    export let data;
</script>

<NavBar/>
<div style="min-height: 100vh; margin-top: 100px">
    <BlogSection {data}/>
</div>
<Footer/>