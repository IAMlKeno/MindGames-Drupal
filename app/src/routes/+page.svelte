<script lang="ts">
  import HomePage from "../lib/components/HomePage.svelte";

  import { onMount } from "svelte";
  import type { Idea } from "$lib/models/idea";

  let baseUrl = import.meta.env.VITE_API;
  let ideas: Idea[] = $state([]);
  onMount(async () => {
    console.log("onMount");
    // const client = new JsonApiClient("http://mindgames_cms:8086");
    // test = await client.getCollection("node--idea");
    const res = await fetch(`${baseUrl}/api/mindgames`);
    setTimeout(() => {}, 10);
    ideas = await res.json();
  });
</script>

<hr />
<h1>Elkeno's SvelteKit</h1>
<div class='idea-block'>
  {#each ideas as idea}
    <h3>{idea.title}</h3>
    <h4>{idea.uuid}</h4>
  {:else}
    <h3>loading...</h3>
  {/each}
</div>

<HomePage />
