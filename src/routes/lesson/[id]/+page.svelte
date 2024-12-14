<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-3xl font-bold">
	ID: {data.lesson.title}
</h1>

<hr />

<div>
	{data.lesson?.text}
</div>
