<script>
  export let handleClick
  export let classes = ''
</script>

<button on:click={handleClick} class={`add-button ${classes}`}>
  <span>+</span>
</button>