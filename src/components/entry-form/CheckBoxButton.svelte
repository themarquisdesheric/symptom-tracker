<script>
  import Checkmark from '../icons/Checkmark.svelte'

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
<label for={type} class="box-shadow">
  <Checkmark />
  <span>{type}</span>
</label>


<style>
  input[type="checkbox"],
  :global([type="checkbox"] + label svg) { display: none; }

  input[type="checkbox"] + label {
    background: #ffc4ff;
    font-weight: 300;
    font-size: 14px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #9c64a6;
  }

  input[type="checkbox"] + label:last-child { margin-right: 0; }

  input[type="checkbox"]:checked + label {
    background-color: #9c64a6;
    color: #fff;
  }

  :global([type="checkbox"]:checked + label svg) { display: inline; }
</style>