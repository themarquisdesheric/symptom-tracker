<script>
  // menses cycle needs to auto increment every day
  let day = 1
  let endPeriod = false
  
  $: showEndPeriodButton = day > 3 && endPeriod === false
  $: showBeginPeriodButton = day > 3 && !showEndPeriodButton

  const handleBeginPeriod = () => {
    day = 1
    endPeriod = false
  }

  const handleEndPeriod = () => {
    // save end period event to db
    showEndPeriodButton = false
    endPeriod = true
  }
</script>


<section class="menses-cycle">
  <span class="field-label">Menses Cycle</span> <input class="primary" type="number" min="1" max="31" bind:value={day} />
  {#if showBeginPeriodButton}
    <button on:click={handleBeginPeriod} class="tag dark dark-border box-shadow">
      begin period
    </button>
  {/if}
  {#if showEndPeriodButton}
    <button on:click={handleEndPeriod} class="end-period-button tag dark dark-border box-shadow">
      end period
    </button>
  {/if}
</section>


<style>
  :global(.entry-form > .menses-cycle) { margin: 0; }

  button { font-size: .75rem; }

  .end-period-button {
    color: #ef9a9a;
    border-color: #ef9a9a;
  }
</style>