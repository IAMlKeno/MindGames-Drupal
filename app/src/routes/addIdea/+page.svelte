<script lang="ts">
  import IdeaForm from "$lib/forms/IdeaForm.svelte";
  import type { Idea } from "$lib/models/idea";
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';

  // Initial form data
  const formData = {
    title: "Initial Title",
    description: "",
  };
  let baseUrl = import.meta.env.VITE_API;

  function convertToJsonApiRequest(data: any) {
    const idea: Idea = {
      title: data.title,
      field_description: data.description,
      nid: undefined,
      uuid: undefined,
      field_features: [],
      view: undefined,
    };
    const req = {
      data: {
        type: "node--idea",
        attributes: {
          title: idea.title,
          field_description: idea.field_description,
        },
      },
    };

    return req;
  }

  async function handleCreate(
    event: CustomEvent<{ title: string; description: string }>,
  ) {
    const data = convertToJsonApiRequest(event.detail);

    await fetch(`${baseUrl}/jsonapi/node/idea`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
        Authorization: "Basic " + btoa("api:Password1!"),
      },
    }).then(() => window.location.assign("/"));
  }
  let checked = true;
</script>

<main>
  <h1>Idea Form</h1>
  <IdeaForm initialData={formData} on:submit={handleCreate} />
</main>
