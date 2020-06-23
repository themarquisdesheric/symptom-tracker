<script>
  import { TIMES, arbitrarySort } from '../utils'
  import PlusSign from './PlusSign.svelte'

  let types = {
    headNeck: {
      name: 'Head/neck',
      times: [],
      value: '',
    },
    shouldersArms: {
      name: 'Shoulders/arms',
      times: [],
      value: '',
    },
    hipsLowBack: {
      name: 'Hips/low back',
      times: [],
      value: '',
    },
    pelvisBladder: {
      name: 'Pelvis/bladder',
      times: [],
      value: '',
    },
    sciaticaLegs: {
      name: 'Sciatica/legs',
      times: [],
      value: '',
    },
    bowelsRectum: {
      name: 'Bowels/rectum',
      times: [],
      value: '',
    },
    vulvaPerineum: {
      name: 'Vulva/perineum',
      times: [],
      value: '',
    },
    visionLoss: {
      name: 'Vision loss',
      times: [],
      value: '',
    },
  }

  const handleAdd = (painType) => {
    const { times, value } = types[painType]

    if (times.includes(value)) {
      // reset value
      return types = {
        ...types,
        [painType]: {
          ...types[painType],
          value: '',
        },
      }
    }

    if (value === 'all day') {
      return types = {
        ...types,
        [painType]: {
          ...types[painType],
          times: [...TIMES],
        },
      }
    }
    
    types = {
      ...types,
      [painType]: {
        ...types[painType],
        value: '',
        times: [
          ...times,
          value
        ].sort(arbitrarySort),
      },
    }
  }

  const handleRemove = (painType, time) => {
    if (confirm(`Are you sure you want to remove '${time}'?`)) {
      types = {
        ...types,
        [painType]: {
          ...types[painType],
          value: '',
          times: types[painType].times.filter(id => id !== time),
        },
      }
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
  
  {#each Object.keys(types) as painType}
    <div>
      <PlusSign hiddenClass={types[painType].times.length === 4} />
      <span class="field-label">{types[painType].name}</span>
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        bind:value={types[painType].value} 
        on:change={() => handleAdd(painType)}
        class="primary" 
        class:hidden={types[painType].times.length === 4}
      >
        <option></option>
        <option>morning</option>
        <option>day</option>
        <option>evening</option>
        <option>night</option>
        <option>all day</option>
      </select>

      <div class:inline={types[painType].times.length === 4}>
        {#each types[painType].times as time}
          <button on:click={() => handleRemove(painType, time)} class={`tag ${time}`}>{time}</button>
        {/each}
      </div>
    </div>
  {/each}
</section>