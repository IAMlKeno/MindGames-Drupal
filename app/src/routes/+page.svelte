<script>
    // import HomePage from "$lib/components/HomePage.svelte";
    // import { HomePage } from "../main";
    // import { HomePage } from "../lib/components/HomePage.svelte";
    import HomePage from "../lib/components/HomePage.svelte";

    import { onMount } from "svelte";
    // import type { HomePage } from "../main";

    let baseUrl = import.meta.env.VITE_API;
    let test;
  // onMount(async () => {
  //   console.log('onMount');
  //   // const client = new JsonApiClient("http://mindgames_cms:8086");
  //   // test = await client.getCollection("node--idea");
  //   test = await fetch(`${baseUrl}/api/mindgames`);
  //   console.log(test.json());
  // });
</script>


<hr />
<h1>Elkeno's SvelteKit</h1>
<h2>Here's a change</h2>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<HomePage />