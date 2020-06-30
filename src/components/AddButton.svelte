<script>
  export let handleClick
  export let classes = ''
</script>

<style>
  .add-button {
    position: relative;
    top: 2px;
    min-height: 2rem;
    min-width: 2rem;
    height: 32px;
    width: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 .25rem .25rem;
    border: none;
    color: #fff;
  }

  span { font-size: 1rem; }

  .transparent { background-color: transparent; }

  .transparent span { color: transparent; }

  :global(.medications .showInput) { 
    background: #9c64a6;
    color: #fff;
  }
</style>

<button on:click={handleClick} class={`add-button ${classes}`}>
  <span>+</span>
</button>