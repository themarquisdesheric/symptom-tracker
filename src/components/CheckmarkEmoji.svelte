<script>
  export let className = '';
  export let handleClick;
</script>

<style>
  span {
    margin-left: .25rem;
    color: #fff;
  }
</style>

<span on:click={handleClick} class={className}>☑</span>