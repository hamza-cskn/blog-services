<script>
    import { page } from '$app/stores';
    import Footer from "../../components/Footer.svelte";
    import NavBar from "../../components/NavBar.svelte";
</script>

<NavBar/>
<div style="margin-top: 100px; min-height: 100vh" class="text-center">
    <h1>Sorry, an error occurred.</h1>
    <p>Error: {$page.status} - {$page.error.message}</p>
</div>
<Footer/>
