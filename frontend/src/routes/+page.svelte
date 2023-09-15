<script>
    import Experience from "./Experience.svelte";
    import "../app.postcss";
    import NavBar from "../components/NavBar.svelte";
    import Blur from "../components/Blur.svelte";
    import Hero from "./Hero.svelte";
    import Footer from "../components/Footer.svelte";
    import Skills from "./Skills.svelte";
    import Projects from "./Projects.svelte";
    import ToContact from "./ToContact.svelte";
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>
<main>
    <NavBar/>
    <Blur/>

    <div style="min-height: 100vh">
        <Hero/>
    </div>

    <div style="min-height: 80vh">
        <Skills/>
    </div>
    <div style="min-height: 80vh">
        <Projects/>
    </div>

    <Experience/>
    <ToContact/>
    <Footer/>
</main>
