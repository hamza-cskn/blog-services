<script>
    import Contact from "./Contact.svelte";
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import "../../app.postcss";
    import Social from "./Social.svelte";
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>


<NavBar/>
<div style="min-height: 100vh; margin-top: 10rem">
    <h1 class="text-center font-bold text-4xl m-16 tracking-tighter">You can contact me from</h1>
    <Contact/>
    <h1 class="text-center font-bold text-4xl m-16 tracking-tighter">Other social stuffs</h1>
    <Social/>
</div>

<Footer/>