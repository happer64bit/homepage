<script>
    import { browser } from '$app/environment';
    import Navbar from '../components/Navbar.svelte';
    import './../app.css'

    if(browser) {
        if(localStorage.getItem("theme-data") === "light") {
            document.getElementsByTagName("html")[0].setAttribute("theme-data", "light")
        } else {
            document.getElementsByTagName("html")[0].setAttribute("theme-data", "dark")
        }
    }
</script>

<div id="__ui_provider__" class="bg-white dark:bg-[#0b0f13] dark:text-white">
    <Navbar />
    <slot />
</div>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
    * {
        font-family: 'Rubik', sans-serif !important;
    }
</style>