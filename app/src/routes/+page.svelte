<script lang="ts">
  import HomePage from "../lib/components/HomePage.svelte";
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
  import { AccordionItem, Accordion } from 'flowbite-svelte';

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
    <div class="" style="border: 2px solid black; width: 50%; margin-left: 0">
      <Accordion>
        <AccordionItem>
          <span slot="header">{idea.title}</span>
          <p class="mb-2 text-white-500 dark:text-white-400">
            {idea.field_description}
          </p>
          <div class="debug-idea-uuid"><small>(ID: {idea.uuid})</small></div>
        </AccordionItem>
      </Accordion>
    </div>
  {:else}
    <h3>loading...</h3>
  {/each}
</div>

<HomePage />
