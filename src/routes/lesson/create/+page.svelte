<script lang="ts">
	import type { ActionData } from "./$types";

  let {form}: {form: ActionData} = $props()


</script>
<form action="" method="post">
  {#if form} 

    {#if form.success} 
      <p>Success! Go <a href="/lesson/home">home to see lesson</a></p>
    {:else} 
      <p>Error: {form.message}</p>
    {/if}
  {/if}
  <p>Title</p>
  <input type="text" name="title">
  <p>Description</p>
  <input type="text" name="description"/>

  <button type="submit">Create</button>

</form>
