<script>import { type } from 'os';
  import AddButton from './AddButton.svelte';

  let types = {
    headNeck: {
      name: 'Head/neck',
      times: [],
      value: '+',
    },
    shouldersArms: {
      name: 'Shoulders/arms',
      times: [],
      value: '+',
    },
    hipsLowBack: {
      name: 'Hips/low back',
      times: [],
      value: '+',
    },
    pelvisBladder: {
      name: 'Pelvis/bladder',
      times: [],
      value: '+',
    },
    sciaticaLegs: {
      name: 'Sciatica/legs',
      times: [],
      value: '+',
    },
    bowelsRectum: {
      name: 'Bowels/rectum',
      times: [],
      value: '+',
    },
    vulvaPerineum: {
      name: 'Vulva/perineum',
      times: [],
      value: '+',
    },
    visionLoss: {
      name: 'Vision loss',
      times: [],
      value: '+',
    },
  };

  const handleAdd = (painType) => {
    // need to sort and dedupe

    types = {
      ...types,
      [painType]: {
        ...types[painType],
        times: [...types[painType].times, types[painType].value],
      },
    };
  };

  const handleRemove = (painType, time) => {
    // make prompt for this first <confirm>
    types = {
      ...types,
      [painType]: {
        ...types[painType],
        times: types[painType].times.filter(id => id !== time),
      },
    };
  };
</script>

<style>
  div { margin: .5rem 0; }

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
</style>

<section class="pain">
  <label>Pain</label>
  
  {#each Object.keys(types) as painType}
    <div>
      <span class="field-label">{types[painType].name}</span>
      <select class="primary" bind:value={types[painType].value} class:hidden={types[painType].times.length === 4}>
        <option>+</option>
        <option>morning</option>
        <option>day</option>
        <option>evening</option>
        <option>night</option>
        <option>all day</option>
      </select>

      {#if types[painType].value !== '+'}
        <AddButton
          handleClick={() => handleAdd(painType)}
          classes={
            types[painType].times.length === 4 ? 'hidden' : ''
          }
        />
      {/if}
      <div>
        {#each types[painType].times as time}
          <button on:click={() => handleRemove(painType, time)} class="tag">{time}</button>
        {/each}
      </div>
    </div>
  {/each}
</section>