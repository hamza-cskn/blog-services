<script>
    import TextArea from "./TextArea.svelte";
    import AdminNavbar from "../AdminNavbar.svelte";
    import Footer from "../../../components/Footer.svelte";

    export let data;
    const {user} = data;
</script>


<AdminNavbar {user}/>
<div>
    <div id="blog-edit-area" class="w-1/2 pt-32 ml-auto mr-auto">
        <TextArea/>
    </div>
</div>
<Footer/>