<script>
  import Checkmark from './Checkmark.svelte'

  export let type;
  export let checked = false
  export let handleClick
</script>

<input
  type="checkbox"
  id={type}
  {checked}
  on:click={handleClick}
/>
<label for={type}>
  <Checkmark />
  <span>{type}</span>
</label>