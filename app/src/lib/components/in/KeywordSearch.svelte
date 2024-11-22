<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Command from '$lib/components/ui/command/index.js';

	let isOpen = $state(false);
	let inputVal = $state('');

	export function open() {
		isOpen = true;
		onOpenChange(isOpen);
	}
	export function close() {
		isOpen = false;
		onOpenChange(isOpen);
	}

	let {
		onOpenChange
	}: {
		onOpenChange: (val: boolean) => void;
	} = $props();

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			window.location.href = 'https://www.google.com/search?q=' + inputVal;
		}

		if (event.key === 'Escape') {
			event.preventDefault();
			close();
		}

		event.stopPropagation();
	}
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Content class="px-4 pb-2 pt-0">
		<div class="flex flex-col pb-2">
			<div class="mt-0 flex">
				<div
					class="mx-auto bg-primary px-4 py-1 text-center text-sm font-black text-primary-foreground"
				>
					KEYWORD SEARCH
				</div>
			</div>
			<Command.Root>
				<Command.Input
					class="font-bold"
					placeholder="Type a keyword ..."
					onkeydown={(event) => {
						onKeyDown(event);
					}}
					bind:value={inputVal}
				/>
			</Command.Root>
		</div>
	</Dialog.Content>
</Dialog.Root>
