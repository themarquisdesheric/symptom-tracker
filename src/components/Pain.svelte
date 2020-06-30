<script>
  import entry from '../stores/entry'
  import { TIMES, arbitrarySort } from '../utils'
  import TimeOfDayDropDown from './TimeOfDayDropDown.svelte'

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
</script>

<style>
  :global(.pain div) { margin: .5rem 0; }

  :global(.pain div:first-of-type) { margin-top: 0; }

  .pain { margin-top: .5rem; }

  label {
    position: relative;
    top: .25rem;
    margin-bottom: 0;
  }
</style>

<section class="pain">
  <label>Pain</label>
  {#each Object.keys($entry.pain) as type}
    <TimeOfDayDropDown
      handleChange={handleAddTimeOfDay}
      hiddenClass={$entry.pain[type].length === 4}
      bind:selectValue={types[type].value}
      category="pain"
      label={types[type].name}
      {type}
    />
  {/each}
</section>