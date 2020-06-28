<script>
  import entry from '../store'
  import { TIMES, arbitrarySort, removeTimeOfDayByCategory } from '../utils'
  import PlusSign from './PlusSign.svelte'

  let types = {
    headNeck: {
      name: 'Head/neck',
      value: '',
    },
    shouldersArms: {
      name: 'Shoulders/arms',
      value: '',
    },
    hipsLowBack: {
      name: 'Hips/low back',
      value: '',
    },
    pelvisBladder: {
      name: 'Pelvis/bladder',
      value: '',
    },
    sciaticaLegs: {
      name: 'Sciatica/legs',
      value: '',
    },
    bowelsRectum: {
      name: 'Bowels/rectum',
      value: '',
    },
    vulvaPerineum: {
      name: 'Vulva/perineum',
      value: '',
    },
    visionLoss: {
      name: 'Vision loss',
      value: '',
    },
  }

  const handleAddTimeOfDay = (type) => {
    const { value } = types[type]
    // ignore value if it exists and reset it
    if ($entry.pain[type].includes(value)) {
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
      category: 'pain',
      type,
      value,
    })
  }

  const handleRemoveTimeOfDay = removeTimeOfDayByCategory('pain')
</script>

<style>
  div { 
    margin: .5rem 0;
    position: relative;
  }

  div:first-of-type { margin-top: 0; }

  div > span {
    display: inline-block;
    width: 115px;
  }

  :global(.pain .add-button) {
    background: #9c64a6;
    color: #fff;
  }

  select { font-size: 1rem; }

  .plus-sign {
    display: flex;
    width: 28px;
  }

  .plus-sign.hidden { display: none; }
</style>

<section class="pain">
  <label>Pain</label>
  {#each Object.keys($entry.pain) as type}
    <div>
      <PlusSign hiddenClass={$entry.pain[type].length === 4} />
      <span class="field-label">{types[type].name}</span>
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        bind:value={types[type].value} 
        on:change={() => handleAddTimeOfDay(type)}
        class="primary" 
        class:hidden={$entry.pain[type].length === 4}
      >
        <option></option>
        <option>morning</option>
        <option>day</option>
        <option>evening</option>
        <option>night</option>
        <option>all day</option>
      </select>

      <div class:inline={$entry.pain[type].length === 4}>
        {#each $entry.pain[type] as time}
          <button on:click={() => handleRemoveTimeOfDay(type, time)} class={`tag ${time}`}>{time}</button>
        {/each}
      </div>
    </div>
  {/each}
</section>