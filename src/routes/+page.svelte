<script>
	import Hero from "../components/Hero.svelte";
	import Stats from "../components/Stats.svelte";
	import ProjectsList from '../components/ProjectsList.svelte'

	export let data;
</script>

<svelte:head>
	<title>Wint Khant Lin, A Lifeless College Student's Portfolio</title>
	<meta name="description" content="Wint Khant Lin. Hello! I'm a 16-year-old college student from Myanmar, passionate about coding and designing with ❤️.">
</svelte:head>

<div>
  	<Hero />
	<Stats />
	{#await data.projects then projects}
		<ProjectsList projects={projects}/>
	{/await}
</div>
