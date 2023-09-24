<script>
    import AdminNavbar from "./AdminNavbar.svelte";

    export let data;
</script>

<style>
    body {
        background-color: #f7fafc;
    }
</style>

<AdminNavbar user=data />
<h1 class="text-3xl font-bold text-center pt-64">WELCOME TO ADMINISTRATORS' PANEL</h1>
<p class="text-gray-600 font-bold text-center">This page is protected. Only users who has <span class="text-blue-500">ACCESS_ADMIN_PANEL</span> permission can see this page.</p>
