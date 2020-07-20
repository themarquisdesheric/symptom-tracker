<script>
  // menses cycle needs to auto increment every day
  let mensesCycle = 1
  let endPeriod = false
  
  $: showEndPeriodButton = mensesCycle > 3 && endPeriod === false
  $: showBeginPeriodButton = mensesCycle > 3 && !showEndPeriodButton

  const handleBeginPeriod = () => {
    mensesCycle = 1
    endPeriod = false
  }

  const handleEndPeriod = () => {
    // save end period event to db
    showEndPeriodButton = false
    endPeriod = true
  }
</script>


<section class="menses-cycle">
  <span class="field-label">Menses cycle</span> <input class="primary" type="number" min="1" max="31" bind:value={mensesCycle} />
  {#if showBeginPeriodButton}
    <button on:click={handleBeginPeriod} class="tag dark dark-border">
      begin period
    </button>
  {/if}
  {#if showEndPeriodButton}
    <button on:click={handleEndPeriod} class="tag dark dark-border">
      end period
    </button>
  {/if}
</section>


<style>
  :global(.entry-form > .menses-cycle) { margin: 0; }

  button { font-size: .75rem; }
</style>