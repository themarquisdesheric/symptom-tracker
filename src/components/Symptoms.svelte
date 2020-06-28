<script>
  import entry from '../stores/entry'
  import { TIMES, arbitrarySort, removeTimeOfDayByCategory } from '../utils'
  import PlusSign from './PlusSign.svelte'

  // move visionLoss to symptoms, beneath Headache

  const toggleSymptom = entry.toggleCheckbox('symptoms')

  let types = {
    visionLoss: '',
    collar: '',
  }

  $: collarTimesFull = $entry.symptoms.collar.length === 4

  const handleHeadache = ({ target }) =>
    entry.updateSymptom('headache', Number(target.value))
  
  const handleUrgency = ({ target }) =>
    entry.updateSymptom('urgency', target.value)

  const handleAddTimeOfDay = (type) => {
    const value = types[type]
    // ignore value if it exists and reset it
    if ($entry.symptoms[type].includes(value)) {
      return types = {
        ...types,
        [type]: value,
      }
    }

    types = {
      ...types,
      [type]: ''
    }

    entry.updateSelect({
      category: 'symptoms',
      type,
      value,
    })
  }

  const handleRemoveTimeOfDay = removeTimeOfDayByCategory('symptoms')
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
    <span class="field-label">Headache</span>
    <input
      type="number"
      min="0"
      max="5"
      class="primary"
      value={$entry.symptoms.headache}
      on:change={handleHeadache}
    />
  </div>

  <div class="urgency">
    <span class="field-label">Urgency</span>
    <PlusSign hiddenClass={$entry.symptoms.urgency} />
    <!-- svelte-ignore a11y-no-onchange -->
    <select
      class="primary"
      on:change={handleUrgency}
    >
      <option></option>
      <option>calm</option>
      <option>upset</option>
      <option>very upset</option>
    </select>
  </div>

  <div class="collar-container">
    <PlusSign hiddenClass={collarTimesFull} />
    <span class="field-label">Collar</span>
    <!-- svelte-ignore a11y-no-onchange -->
    <select
      bind:value={types.collar}
      on:change={() => handleAddTimeOfDay('collar')}
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
      {#each $entry.symptoms.collar as time}
        <button on:click={() => handleRemoveTimeOfDay('collar', time)} class={`tag ${time}`}>{time}</button>
      {/each}
    </div>
  </div>
</section>