<script>
  export let className = ''
  export let handleClick
</script>

<style>
  span { margin-left: .25rem; }
</style>

<span on:click={handleClick} class={`primary ${className}`}>☑</span>