<script lang="ts">
  import {type PageData} from './$types'
  let { data } = $props()



  let lessons = data.lessons
</script>
<div class="grid grid-cols-3 p-3 m-3">
{#each lessons as lesson}
  <div class="border-gray-100 shadow-lg p-3 m-3 rounded-lg hover:shadow-2xl transition-all">
    <a href="/lesson/{lesson.id}" class="font-bold text-blue-600 text-2xl">{lesson.title}</a>
    <hr class="my-1">
    <p class="text-gray-600">{lesson.description}</p>
  </div>
{/each}</div>

