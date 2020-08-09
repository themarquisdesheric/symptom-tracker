<script>
	import PencilIcon from './PencilIcon.svelte'

	export let handleClick
</script>

<style>
	:global(.notes-button svg) {
		width: 1rem;
		fill: #9c64a6;	
	}
</style>

<button on:click={handleClick} class="notes-button">
	<PencilIcon />
</button>