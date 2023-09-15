<script>
    import { page } from '$app/stores';
</script>

<h1>Sorry, an error occurred.</h1>
<p>Error: {$page.status} - {$page.error.message}</p>
