<script>
  import entry from '../stores/entry'
  import { TIMES, arbitrarySort } from '../utils'
  import TimeOfDayDropDown from './TimeOfDayDropDown.svelte'
  import PlusSign from './PlusSign.svelte'

  const toggleSymptom = entry.toggleCheckbox('symptoms')

  // ! make types and handleAddTimeOfDay match Pain's, so make util and see if TimeOfDayDropDown can just take types && type

  let types = {
    visionLoss: {
      name: 'Vision Loss',
      value: '',
    },
    collar: {
      name: 'Collar',
      value: '',
    },
  }

  const handleHeadache = ({ target }) =>
    entry.updateSymptom('headache', Number(target.value))
  
  const handleUrgency = ({ target }) =>
    entry.updateSymptom('urgency', target.value)

  const handleAddTimeOfDay = (type) => {
    const { value } = types[type]
    // ignore value if it exists and reset it
    if ($entry.symptoms[type].includes(value)) {
      return types = {
        ...types,
        [type]: {
          ...types[type],
          value: '',
        },
      }
    }

    types = {
      ...types,
      [type]: {
        ...types[type],
        value: '',
      },
    }

    entry.updateSelect({
      category: 'symptoms',
      type,
      value,
    })
  }
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

  .symptom-buttons label {
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

  {#each Object.keys(types) as type, index}
    <TimeOfDayDropDown
      handleChange={handleAddTimeOfDay}
      hiddenClass={$entry.symptoms[type].length === 4}
      bind:selectValue={types[type].value}
      category="symptoms"
      label={types[type].name}
      {type}
    />
    {#if index === 0}
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
    {/if}
  {/each}
</section>