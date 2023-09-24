<script>
    import "../../app.postcss";
    import Login from "./Login.svelte";

    /** @type {import('./$types').ActionData} */
    export let form;

    export let data;

    const user = data.user;
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>

<style>
    .background {
        background: linear-gradient(90deg, #554be7 0%, #3a7fff 100%);
        min-height: 100vh;
        min-width: 100vw;
        position: absolute;
    }
    .login-area {
        position: absolute;
        width: 33.3%;
        min-width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media (max-width: 1023px) {
        .login-area {
            width: 100%;
            min-width: 0;
        }
    }
</style>
<div class="background">
    <div class="login-area">
        <Login {user}/>
    </div>
</div>
