<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<h1 class="text-3xl font-bold">
	ID: {data.lesson.title}
</h1>
<form method="post" action="?/upvote" use:enhance>
	<button class="m-2 rounded-lg { data.hasVoted ? 'bg-red-200' :"bg-blue-200" } p-1 px-5 font-bold transition-all">
		{#if !data.hasVoted}
			Vote
		{:else}
			Remove vote
		{/if}
	</button>
</form>

<hr />

<div>
	{data.lesson?.text}
</div>
