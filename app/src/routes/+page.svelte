<script>
    import { onMount } from "svelte";

    let baseUrl = import.meta.env.VITE_API;
    let test;
  onMount(async () => {
    console.log('onMount');
    // const client = new JsonApiClient("http://mindgames_cms:8086");
    // test = await client.getCollection("node--idea");
    test = await fetch(`${baseUrl}/api/mindgames`);
    console.log(test.json());
  });
</script>


<hr />
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
