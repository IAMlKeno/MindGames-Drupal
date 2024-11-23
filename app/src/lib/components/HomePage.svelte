<svelte:options
  customElement={{
    tag: 'home-page',
    shadow: 'none'
  }}
/>

<script lang="ts">
	import '../../app.css';
	import BookmarksSearch from './in/BookmarksSearch.svelte';
	import UrlSearch from './in/UrlSearch.svelte';
	import Whichkey from './in/Whichkey.svelte';
	import KeywordSearch from './in/KeywordSearch.svelte';

	let urlSearch: ReturnType<typeof UrlSearch>;
	let whichKey: ReturnType<typeof Whichkey>;
	let bookmarksSearch: ReturnType<typeof BookmarksSearch>;
	let keywordSearch: ReturnType<typeof KeywordSearch>;

	let hasOpenDialog = $state(false);

	function onkeypress(event: KeyboardEvent) {
		switch (event.key) {
			case ' ':
				if (!hasOpenDialog) {
					whichKey.open();
				}
				break;
			default:
				break;
		}
		//event.stopPropagation();
	}
</script>

<UrlSearch
	bind:this={urlSearch}
	onOpenChange={(val) => {
		hasOpenDialog = val;
	}}
/>
<BookmarksSearch
	bind:this={bookmarksSearch}
	onOpenChange={(val) => {
		hasOpenDialog = val;
	}}
/>
<KeywordSearch
	bind:this={keywordSearch}
	onOpenChange={(val) => {
		hasOpenDialog = val;
	}}
/>
<Whichkey
	bind:this={whichKey}
	onBookmarkSearchSelected={() => {
		whichKey.close();
		bookmarksSearch.open();
	}}
	onUrlSearchSelected={() => {
		whichKey.close();
		urlSearch.open();
	}}
	onKeywordSearchSelected={async () => {
		whichKey.close();
		keywordSearch.open();
	}}
  onNewIdea ={() => {
    whichKey.close();
    console.log('NEW IDEA');
    window.location.assign('/addIdea');
  }}
  onSelectIdea={() => {
    whichKey.close();
    console.log('SELECT IDEA');
  }}
/>

<svelte:window {onkeypress} />
