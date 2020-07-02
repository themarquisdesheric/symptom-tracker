<script>
  import entry from '../stores/entry'
  import PlusSign from '../assets/PlusSign.svelte'

  export let handleChange = null
  export let hiddenClass = false
  export let selectValue = ''
  export let category = ''
  export let label = ''
  export let type = ''

  export const handleAddTimeOfDay = (type) => {
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

  const removeTimeOfDay = ({ category, type, value }) => {
    if (confirm(`Are you sure you want to remove ${value}?`)) {
      entry.removeTimeOfDayTag({ category, type, value })
    }
  }
</script>

<style>
  div { position: relative; }

  div > span { width: 115px; }

  select { font-size: 1rem; }
</style>

<div>
  <!-- use shorthand here -->
  <PlusSign hiddenClass={hiddenClass} />
  <span class="field-label">{label}</span>
  <!-- svelte-ignore a11y-no-onchange -->
  <select
    bind:value={selectValue}
    on:change={() => handleChange(type)}
    class="primary"
    class:hidden={hiddenClass}
  >
    <option></option>
    <option>morning</option>
    <option>day</option>
    <option>evening</option>
    <option>night</option>
    <option>all day</option>
  </select>

  <div class:inline={hiddenClass}>
    {#each $entry[category][type] as time}
      <button
        on:click={() => removeTimeOfDay({ category, type, value: time })}
        class={`tag box-shadow ${time}`}
      >
        {time}
      </button>
    {/each}
  </div>
</div>