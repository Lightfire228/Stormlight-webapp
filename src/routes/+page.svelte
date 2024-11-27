<script lang="ts">
    let { data } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.files as file}
<ul>
    <li>{file.name}</li>
</ul>
{/each}