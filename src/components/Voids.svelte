<script>
  import CheckmarkEmoji from './CheckmarkEmoji.svelte'

  let nocturia = 0
  let pee = false
  let poo = false
</script>

<style>
  .void-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.void-container button {
		font-size: 1.75rem;
		padding: 0;
		border: none;
    background: transparent;
  }
  
  :global(.checkmark-button) {
    position: absolute;
    right: 0;
  }

  .pee,
  .poo { position: relative; }

  .delta span,
  .nocturia-input { font-size: 1rem; }

  .delta { display: flex; }

  .delta span { padding-left: .5rem; }

  .void-container .nocturia-label {
    position: relative;
    bottom: 1px;
    font-weight: bold;
    font-size: 14px;
  }

  .nocturia-input { margin-bottom: 0; }
  
  .void-container label { 
    width: unset;
    margin-bottom: 0;
  }

	.void-container label * { font-weight: normal; }

	.pee-chart {
		border: 1px solid;
		border-radius: 5px;
		padding: 1rem;
		background: #fff;
	}
</style>

<section>
  <label>Voids</label>
  <div class="void-container">
    <div>
      <span class="pee">
        {#if pee}
          <CheckmarkEmoji className="checkmark-button" />
        {/if}
        <button on:click={() => pee = !pee}>💧</button>
      </span>
      <span class="poo">
        {#if poo}
          <CheckmarkEmoji className="checkmark-button" />
        {/if}
        <button on:click={() => poo = !poo}>💩</button>
      </span>
    </div>
    <label class="delta">Delta <span class="primary">60min</span></label>
    <label>
      <span class="nocturia-label">Nocturia </span>
      <input type="number" min="0" max="10" bind:value={nocturia} class="nocturia-input primary" />
    </label>
  </div>
  <div class="pee-chart">pee/poo chart from 5am - 10pm</div>
</section>