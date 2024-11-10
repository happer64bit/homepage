<script>
	import Hero from "../components/Hero.svelte";
	import Stats from "../components/Stats.svelte";
	import ProjectsList from '../components/ProjectsList.svelte'

	export let data;
</script>

<svelte:head>
	<title>Wint Khant Lin Portfolio</title>
</svelte:head>

<div>
  	<Hero />
	<Stats />
	<ProjectsList projects={data.projects}/>
</div>
