<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<form method="get" use:enhance>
	<input type="text" name="searchTerm"/>
  <button>Search</button>
</form>

{#each data.results as searchResult}
	<p>{searchResult.title}</p>
{:else}
	<p>No results found</p>
{/each}
