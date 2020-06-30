<script>
  import entry from '../stores/entry'
  import CheckmarkEmoji from './CheckmarkEmoji.svelte'

  const handleChange = ({ target }) =>
    entry.addVoid('nocturia', Number(target.value))

  // pee/poo need to be able to display/edit/remove multiple events
</script>

<style>
  section {
    position: relative;
    margin-top: 0;
    padding-top: 1rem;
  }

  .void-container {
		display: flex;
		justify-content: space-between;
    align-items: center;
    padding-bottom: .5rem;
    /* doing this hackiness to maintain accessible button click area ( >= 40px )
      while still keeping items pushed to the edges to maintain implicit lines */
    position: absolute;
    width: calc(100% + 15px);
    left: -11px;
  }
  
  .void-container > * { width: 90px; }

	button {
		font-size: 1.75rem;
		padding: 0;
		border: none;
    background: transparent;
    margin-right: 0;
  }
  
  :global(.checkmark-button) {
    position: absolute;
    right: 0;
  }

  .pee,
  .poo { position: relative; }

  .delta span,
  .nocturia input { font-size: 1rem; }

  .delta { display: flex; }

  .delta span { padding-left: .5rem; }

  .nocturia { text-align: right; }

  .nocturia span {
    position: relative;
    bottom: 1px;
    font-size: 14px;
  }

  .delta,
  .nocturia span { font-weight: 300; }

  .nocturia input {
    width: 1rem;
    min-width: 1rem;
    margin-bottom: 0;
  }
  
  label { 
    width: unset;
    margin-bottom: 0;
  }

	label * { font-weight: normal; }

	.pee-chart {
		border: 1px solid;
		border-radius: .25rem;
    padding: 1rem;
    margin-top: 3rem;
		background: #fff;
	}
</style>

<section>
  <div class="void-container">
    <div>
      <span class="pee">
        {#if $entry.voids.pee.length}
          <CheckmarkEmoji className="checkmark-button" />
        {/if}
        <button on:click={() => entry.addVoid('pee')}>💧</button>
      </span>
      <span class="poo">
        {#if $entry.voids.poo.length}
          <CheckmarkEmoji className="checkmark-button" />
        {/if}
        <button on:click={() => entry.addVoid('poo')}>💩</button>
      </span>
    </div>
    <label class="delta">Delta <span class="primary">60min</span></label>
    <label class="nocturia">
      <span>Nocturia </span>
      <input
        type="number"
        min="0"
        max="9"
        value={$entry.voids.nocturia}
        on:change={handleChange}
        class="primary"
      />
    </label>
  </div>
  <div class="pee-chart">pee/poo chart from 5am - 10pm</div>
</section>