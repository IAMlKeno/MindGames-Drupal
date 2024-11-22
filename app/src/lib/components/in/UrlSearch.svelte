<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Command from '$lib/components/ui/command/index.js';

	let {
		onOpenChange
	}: {
		onOpenChange: (val: boolean) => void;
	} = $props();

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

	function onEnterPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			console.log(inputVal.substring(0, 4));
			if (inputVal.substring(0, 4) !== 'http') {
				window.location.href = 'http://' + inputVal;
			} else {
				window.location.href = inputVal;
			}
		}

		if (event.key === 'Escape') {
			event.preventDefault();
			close();
		}

		event.stopPropagation();
	}
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Content class=" px-4 pb-2 pt-0">
		<div class="flex flex-col pb-2">
			<div class="mt-0 flex">
				<div
					class="mx-auto bg-primary px-4 py-1 text-center text-sm font-black text-primary-foreground"
				>
					URL SEARCH
				</div>
			</div>
			<Command.Root>
				<Command.Input
					class="font-bold"
					placeholder="Type a url ..."
					onkeydown={onEnterPress}
					bind:value={inputVal}
				/>
			</Command.Root>
		</div>
	</Dialog.Content>
</Dialog.Root>
