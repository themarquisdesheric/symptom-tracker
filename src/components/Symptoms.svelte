<script>
  import entry from '../stores/entry'
  import { TIMES, arbitrarySort } from '../utils'
  import CheckBoxButton from './CheckBoxButton.svelte'
  import TimeOfDay from './TimeOfDay.svelte'
  import PlusSign from '../assets/PlusSign.svelte'

  const toggleSymptom = entry.toggleCheckbox('symptoms')

  let types = {
    visionLoss: 'Vision Loss',
    collar: 'Collar',
  }

  const handleHeadache = ({ target }) =>
    entry.updateSymptom('headache', Number(target.value))
  
  const handleUrgency = ({ target }) =>
    entry.updateSymptom('urgency', target.value)
</script>

<style>
  :global(.entry-form .symptoms) { margin-bottom: 0; }

  .symptom-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    margin-bottom: .5rem;
  }

  :global(.symptom-buttons label) {
    width: unset;
    margin: 0;
  }
  input { padding-left: 0; }

  div > span { width: 115px; }

  .urgency { position: relative; }

  select { font-size: 1rem; }
</style>

<section class="symptoms">
  <label>Symptoms</label>
  <div class="symptom-buttons">
    {#each Object.keys($entry.symptoms).slice(0, 9) as symptom (symptom)}
      <CheckBoxButton
        type={symptom}
        checked={$entry.symptoms[symptom]}
        handleClick={() => toggleSymptom(symptom)}  
      />
    {/each}
  </div>

  {#each Object.keys(types) as type (type)}
    <TimeOfDay label={types[type]} category="symptoms" {type} handleChange={entry.updateTimeOfDay} />
  {/each}

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
</section>