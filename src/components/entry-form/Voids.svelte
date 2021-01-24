<script>
  import entry from '../../stores/entry'
  import VoidButton from './VoidButton.svelte'
  import { getVoidDeltas } from '../../utils/utils'

  const updateNocturia = ({ target }) =>
    entry.updateNocturia(Number(target.value))

  $: delta = getVoidDeltas($entry.voids.pee).average
</script>


<section>
  <div class="void-container">
    <div class="void-buttons">
      <VoidButton type="pee" {entry} />
      <VoidButton type="poo" {entry} />
    </div>
    <label class="delta">
      Delta <span class="primary">{delta}min</span>
    </label>
    <label class="nocturia">
      <span>Nocturia </span>
      <input
        type="number"
        min="0"
        max="9"
        value={$entry.voids.nocturia}
        on:change={updateNocturia}
        class="primary"
      />
    </label>
  </div>
</section>


<style>
  section {
    margin-top: 0;
    padding-top: 1rem;
  }

  .void-container {
		display: flex;
		justify-content: space-between;
    align-items: center;
  }

  .void-buttons {
    position: relative;
    left: -9px;
  }
  
  .void-container > *:not(.delta) { width: 90px; }

  .delta { display: flex; }

  .delta span { padding-left: .35rem; }

  .delta span,
  .nocturia input { font-size: 1rem; }
  
  .nocturia input {
    width: 1rem;
    min-width: 1rem;
    margin-bottom: 0;
    padding: 0;
  }

  .nocturia { text-align: right; }

  .nocturia span {
    position: relative;
    bottom: 1px;
    font-size: 14px;
  }

  .delta,
  .nocturia span { font-weight: 300; }
  
  label { 
    width: unset;
    margin-bottom: 0;
  }

	label * { font-weight: normal; }

  @media (width: 375px) {
    /* fix iOS safari bug */
    .nocturia {
      position: relative;
      left: .25rem;
    }
  }
  
  @media (min-width: 500px) {
    input[type="number"] {
      width: 2rem;
    }
  }
</style>