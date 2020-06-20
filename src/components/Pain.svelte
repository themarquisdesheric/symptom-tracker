<script>
  import CheckmarkEmoji from './CheckmarkEmoji.svelte'

  let types = {
    headNeck: {
      name: 'Head/neck',
      entries: [],
    },
    shouldersArms: {
      name: 'Shoulders/arms',
      entries: [],
    },
    hipsLowBack: {
      name: 'Hips/low back',
      entries: [],
    },
    pelvisBladder: {
      name: 'Pelvis/bladder',
      entries: [],
    },
    sciaticaLegs: {
      name: 'Sciatica/legs',
      entries: [],
    },
    bowelsRectum: {
      name: 'Bowels/rectum',
      entries: [],
    },
    vulvaPerineum: {
      name: 'Vulva/perineum',
      entries: [],
    },
    visionLoss: {
      name: 'Vision loss',
      entries: [],
    },
  };

  const handleAdd = (pain) => {
    types = {
      ...types,
      [pain]: {
        name: types[pain].name,
        entries: [...types[pain].entries, Date.now()]
      },
    };
  };

  const handleRemove = (pain, id) => {
    types = {
      ...types,
      [pain]: {
        name: types[pain].name,
        entries: types[pain].entries.filter(entry => entry !== id)
      },
    };
  };
</script>

<style>
  div { margin: .5rem 0; }

  div:first-of-type { margin-top: 0; }

  span {
    display: inline-block;
    width: 115px;
  }
</style>

<section>
  <label>Pain</label>
  
  {#each Object.keys(types) as painType}
    <div>
      <span on:click={() => handleAdd(painType)}>
        {types[painType].name}
      </span>
      {#each types[painType].entries as id}
        <CheckmarkEmoji handleClick={() => handleRemove(painType, id)} />
      {/each}
    </div>
  {/each}
</section>