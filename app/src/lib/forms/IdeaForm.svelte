<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import * as Dialog from '$lib/components/ui/dialog';
	import * as Command from '$lib/components/ui/command/index.js';

  const dispatch = createEventDispatcher();

  // Accept initial data as prop
  export let initialData: {
    title: string;
    description: string;
  };

  // Create local state from props
  let formData = { ...initialData };

  function handleSubmit() {
    dispatch("submit", formData);
  }

  let isOpen = true;

  export let submitCreate = (data: any) => console.log(data);
</script>

<Dialog.Root bind:open={isOpen}>
  <Dialog.Content class=" px-4 pb-2 pt-0">
    <div class="flex flex-col pb-2">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mt-0 flex">
          <div
            class="mx-auto bg-primary px-4 py-1 text-center text-sm font-black text-primary-foreground"
          >
            FORM
          </div>
        </div>
        <Command.Root>
          <Command.Input
            class="font-bold"
            placeholder="Enter a title"
            bind:value={formData.title}
          />
          <Command.Input
            class="font-bold"
            placeholder="Enter a description"
            bind:value={formData.description}
          />
        </Command.Root>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </Dialog.Content>
</Dialog.Root>
