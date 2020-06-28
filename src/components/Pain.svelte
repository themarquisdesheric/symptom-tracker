<script>
  import entry from '../store'
  import { TIMES, arbitrarySort } from '../utils'
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

  const handleAdd = (painType) => {
    const { value } = types[painType]
    // ignore value if it exists and reset it
    if ($entry.pain[painType].includes(value)) {
      return types = {
        ...types,
        [painType]: {
          ...types[painType],
          value: '',
        },
      }
    }

    types = {
      ...types,
      [painType]: {
        ...types[painType],
        value: '',
      },
    }

    entry.addPain(painType, value)
  }

  const handleRemove = (painType, time) => {
    if (confirm(`Are you sure you want to remove '${time}'?`)) {
      entry.removePain(painType, time)
    }
  }
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
  
  {#each Object.keys($entry.pain) as painType}
    <div>
      <PlusSign hiddenClass={$entry.pain[painType].length === 4} />
      <span class="field-label">{types[painType].name}</span>
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        bind:value={types[painType].value} 
        on:change={() => handleAdd(painType)}
        class="primary" 
        class:hidden={$entry.pain[painType].length === 4}
      >
        <option></option>
        <option>morning</option>
        <option>day</option>
        <option>evening</option>
        <option>night</option>
        <option>all day</option>
      </select>

      <div class:inline={$entry.pain[painType].length === 4}>
        {#each $entry.pain[painType] as time}
          <button on:click={() => handleRemove(painType, time)} class={`tag ${time}`}>{time}</button>
        {/each}
      </div>
    </div>
  {/each}
</section>