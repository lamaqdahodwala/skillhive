<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import '../app.css';
	import { signIn } from '@auth/sveltekit/client';
	let { children, data } = $props();
</script>

<nav class="min-w-screen flex items-center justify-between bg-[#0f0e17] py-12">
	<div class="">
		<p class="my-3 px-32 text-xl font-bold text-[#fffffe]">
			<span class="text-[#fffffe]">Skill</span><span class="text-[#FFA62F]">Hive</span>
		</p>
	</div>
	<div>
		<form action="/search" method="get">
			<input
				type="text"
				class="rounded-full border-gray-700 bg-transparent outline-none"
				placeholder="Search..."
        name="searchTerm"
			/>
		</form>
	</div>
	<div class="flex justify-evenly space-x-5 justify-self-end px-32">
		<!-- svelte-ignore a11y_missing_attribute -->
		<a class="text-sm font-bold text-[#fffffe] hover:cursor-pointer hover:text-[#FFA62F]">Home</a>
		<!-- svelte-ignore a11y_missing_attribute -->
    {#if data.user}
      <button class="text-sm bg-green-900 bg-opacity-50 px-3 rounded-lg font-bold text-[#fffffe] hover:cursor-pointer hover:text-[#FFA62F]">{data.user.name}</button>
    {:else}
		<button
			onclick={() => signIn('google')}
			class="text-sm font-bold text-[#fffffe] hover:cursor-pointer hover:text-[#FFA62F]"
			>Sign In</button
		>
    {/if}
	</div>
</nav>

{@render children()}
