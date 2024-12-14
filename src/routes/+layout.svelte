<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import '../app.css';
	import { signIn } from '@auth/sveltekit/client';
	let { children } = $props();
</script>

<nav class="min-w-screen flex items-center justify-between bg-[#0f0e17] py-12">
	<div class="">
		<p class="my-3 px-32 text-xl font-bold text-[#fffffe]">
			<span class="text-[#fffffe]">Skill</span><span class="text-[#FFA62F]">Hive</span>
		</p>
	</div>
	<div class="flex justify-evenly space-x-5 justify-self-end px-32">
		<!-- svelte-ignore a11y_missing_attribute -->
		<a class="text-sm font-bold text-[#fffffe] hover:cursor-pointer hover:text-[#FFA62F]">Home</a>
		<!-- svelte-ignore a11y_missing_attribute -->
		<button
      on:click={() => signIn("google")}
			class="text-sm font-bold text-[#fffffe] hover:cursor-pointer hover:text-[#FFA62F]"
			href="/signin">Sign In</button>
	</div>
</nav>

{@render children()}
