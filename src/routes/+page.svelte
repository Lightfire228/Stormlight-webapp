<script lang="ts">
    let { data } = $props();

    let files = $state() as FileList;

    $effect(() => {
        if (files) {
            console.log(files);
        }

        for (const file of files) {
            console.log(`${file.name}: ${file.size} bytes`)
        }
    });

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- {#each data.files as file}
<ul>
    <ul>
        <li>{file.name}</li>
        <li>{file.type}</li>
    </ul>
</ul>
{/each} -->

<form
    method="post"
    enctype="multipart/form-data"
>
    <input
        bind:files
        type="file"
        name="formfile"
        id="file"
    >
    <button formaction="?/upload">Submit</button>
</form>

{#if files}
    <h2>Selected files:</h2>
    {#each Array.from(files) as file}
        <p>{file.name} ({file.size} bytes)</p>
    {/each}
{/if}