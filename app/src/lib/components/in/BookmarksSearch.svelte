<svelte:options />

<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Bookmark as BookmarkIcon } from 'lucide-svelte';
	import { workBookmarks } from '$lib/constants';

	interface Bookmark {
		name: string;
		favicon: string;
		url: string;
	}

	let {
		onOpenChange
	}: {
		onOpenChange: (val: boolean) => void;
	} = $props();

	let bookmarks: Bookmark[] = $state(workBookmarks);

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
		}

		if (event.key === 'Escape') {
			event.preventDefault();
			close();
		}
	}
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Content class="px-4 pb-2 pt-0">
		<div class="flex flex-col pb-2">
			<div class="mt-0 flex">
				<div
					class="mx-auto bg-primary px-4 py-1 text-center text-sm font-black text-primary-foreground"
				>
					Bookmarks
				</div>
			</div>
			<Command.Root>
				<Command.Input
					class="font-bold"
					placeholder=""
					onkeydown={onEnterPress}
					bind:value={inputVal}
				/>
				<Command.List>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Suggestions">
						{#each bookmarks as bookmark}
							<Command.Item
								value={bookmark.name}
								onSelect={() => {
									window.location.href = bookmark.url;
								}}
							>
								<BookmarkIcon class="mr-2 h-4 w-4" />
								<span>{bookmark.name}</span>
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.List>
			</Command.Root>
		</div>
	</Dialog.Content>
</Dialog.Root>
