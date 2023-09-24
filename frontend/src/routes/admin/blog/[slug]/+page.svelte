<script>
    import BlogEditArea from "./TextArea.svelte";
    import AdminNavbar from "../../AdminNavbar.svelte";
    import Footer from "../../../../components/Footer.svelte";

    export let data;

    const {blog} = data;
</script>

<AdminNavbar user=data />
<div class="pt-32">
    <div id="blog-edit-area" class="pt-16 w-1/2 ml-auto mr-auto">
        <BlogEditArea {blog}/>
    </div>

</div>
<Footer/>