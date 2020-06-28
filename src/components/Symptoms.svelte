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
    <input
      type="checkbox"
      id="flare"
      checked={$entry.symptoms.flare}
      on:click={() => toggleSymptom('flare')}  
    />
    <label for="flare">
      flare
    </label>

    <input
      type="checkbox"
      id="itch"
      checked={$entry.symptoms.itch}
      on:click={() => toggleSymptom('itch')}  
    />
    <label for="itch">
      itch
    </label>

    <input
      type="checkbox"
      id="cramps"
      checked={$entry.symptoms.cramps}
      on:click={() => toggleSymptom('cramps')}  
    />
    <label for="cramps">
      cramps
    </label>

    <input
      type="checkbox"
      id="discharge"
      checked={$entry.symptoms.discharge}
      on:click={() => toggleSymptom('discharge')}  
    />
    <label for="discharge">
      discharge
    </label>

    <input
      type="checkbox"
      id="sex"
      checked={$entry.symptoms.sex}
      on:click={() => toggleSymptom('sex')}  
    />
    <label class="active" for="sex">
      sex
    </label>


    <input
      type="checkbox"
      id="fatigue"
      checked={false} 
      on:click={() => toggleSymptom('fatigue')}  
    >
    <label class="active" for="fatigue">
      fatigue
    </label>

    <input
      type="checkbox"
      id="vertigo"
      checked={false} 
      on:click={() => toggleSymptom('vertigo')}  
    >
    <label class="active" for="vertigo">
      vertigo
    </label>

    <input
      type="checkbox"
      id="gait"
      checked={false} 
      on:click={() => toggleSymptom('gait')}  
    >
    <label class="active" for="gait">
      gait
    </label>

    <input
      type="checkbox"
      id="nausea"
      checked={false} 
      on:click={() => toggleSymptom('nausea')}  
    >
    <label class="active" for="nausea">
      nausea
    </label>
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