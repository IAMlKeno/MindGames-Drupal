<svelte:options />

<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';

	let {
		onUrlSearchSelected,
		onBookmarkSearchSelected,
		onKeywordSearchSelected,
    onNewIdea,
    onSelectIdea,
	}: {
		onUrlSearchSelected: () => void;
		onBookmarkSearchSelected: () => void;
		onKeywordSearchSelected: () => void;
    onNewIdea: () => void;
    onSelectIdea: () => void;
	} = $props();

	let isOpen = $state(false);

	export function open() {
		isOpen = true;
	}
	export function close() {
		isOpen = false;
	}

	async function onSpecialKeyPress(event: KeyboardEvent) {
		if (event.key === '/') {
      stopEventDefaults(event);
      onKeywordSearchSelected();
		}

		if (event.key === 'u') {
      stopEventDefaults(event);
			onUrlSearchSelected();
		}

		if (event.key === 'b') {
      stopEventDefaults(event);
      onBookmarkSearchSelected();
    }

		if (event.key === 'a') {
      stopEventDefaults(event);
      onNewIdea();
    }

		if (event.key === 's') {
      stopEventDefaults(event);
      onSelectIdea();
    }
  }

  function stopEventDefaults(event: KeyboardEvent) {
    isOpen = false;
    event.preventDefault();
    event.stopPropagation();
  }
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Content
		class="border-none px-4 pb-2 pt-0 outline-none"
		onkeypresscapture={onSpecialKeyPress}
	>
		<div class="flex flex-col pb-2">
			<div class="mt-0 flex">
				<div
					class="mx-auto bg-primary px-4 py-1 text-center text-sm font-black text-primary-foreground"
				>
					WHICH KEY?
				</div>
			</div>
			<ul class="mx-2 my-4">
				<li>/ for keyword search</li>
				<li>u to navigate to url</li>
				<li>b to go to book marks</li>
				<li>a to add new idea</li>
				<li>s to select an idea</li>
			</ul>
		</div>
	</Dialog.Content>
</Dialog.Root>
