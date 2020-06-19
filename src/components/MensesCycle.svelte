<script>
  let mensesCycle = 1;

  const endPeriod = () => {
    mensesCycle = 1;
  };
</script>

<style>
  button { font-size: .75rem; }
</style>

<section>
  <span class="field-label">Menses cycle</span> <input class="value" type="number" min="1" max="31" bind:value={mensesCycle} />
  {#if mensesCycle > 1}
    <button on:click={endPeriod}>end period</button>
  {/if}
</section>