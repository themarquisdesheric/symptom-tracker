<script>
  import entry from '../store'
  import { TIMES, arbitrarySort } from '../utils'
  import PlusSign from './PlusSign.svelte'

  const toggleSymptom = entry.toggleField('symptoms')

  let headache = 0
  let urgency = ''
  let collar = ''
  let collarTimes = []

  $: collarTimesFull = collarTimes.length === 4

  const addCollarTime = () => {
    if (collar === '' || collarTimes.includes(collar)) return

    if (collar === 'all day') {
      return collarTimes = [...TIMES]
    }
    
    collarTimes = [
      ...collarTimes,
      collar
    ].sort(arbitrarySort)

    collar = ''
  }

  const handleRemoveCollarTime = (collarTime) => {
    if (confirm(`Are you sure you want to remove ${collarTime}?`)) {
      collarTimes = collarTimes.filter(time => time !== collarTime)
      collar = ''
    }
  }
</script>

<style>
  :global(.entry-form .symptoms) { margin-bottom: 0; }

  .symptoms .field-label { width: 115px; }

  .symptom-buttons {
    display: flex;
    flex-wrap: wrap;
    max-width: 335px;
  }


  input { padding-left: 0; }

  select { font-size: 1rem; }

  .urgency { position: relative; }

  .collar-container { position: relative; }

  .collar { width: 70px; }
</style>

<section class="symptoms">
  <label>Symptoms</label>
  <div class="symptom-buttons">
    {#each Object.keys($entry.symptoms).slice(0, 9) as symptom}
      <input
        type="checkbox"
        id={symptom}
        checked={$entry.symptoms[symptom]}
        on:click={() => toggleSymptom(symptom)}  
      />
      <label for={symptom}>
        {symptom}
      </label>
    {/each}
  </div>

  <div>
    <span class="field-label">Headache</span> <input class="primary" type="number" min="0" max="5" bind:value={headache} />
  </div>

  <div class="urgency">
    <span class="field-label">Urgency</span>
    <PlusSign hiddenClass={urgency} />
    <select class="primary" bind:value={urgency}>
      <option></option>
      <option>
        calm
      </option>
      <option>
        upset
      </option>
      <option>
        very upset
      </option>
    </select>
  </div>

  <div class="collar-container">
    <PlusSign hiddenClass={collarTimesFull} />
    <span class="field-label">Collar</span>
    <!-- svelte-ignore a11y-no-onchange -->
    <select
      bind:value={collar}
      on:change={addCollarTime}
      class="primary collar"
      class:hidden={collarTimesFull}
    >
      <option></option>
      <option>morning</option>
      <option>day</option>
      <option>evening</option>
      <option>night</option>
      <option>all day</option>
    </select>

    <div class:inline={collarTimesFull}>
      {#each collarTimes as collarTime}
        <button on:click={() => handleRemoveCollarTime(collarTime)} class={`tag ${collarTime}`}>{collarTime}</button>
      {/each}
    </div>
  </div>
</section>