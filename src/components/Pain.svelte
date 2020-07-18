<script>
  import entry from '../stores/entry'
  import { TIMES } from '../utils'
  import TimeOfDay from './TimeOfDay.svelte'

  let types = {
    headNeck: 'Head/neck',
    shouldersArms: 'Shoulders/arms',
    hipsLowBack: 'Hips/low back',
    pelvisBladder: 'Pelvis/bladder',
    sciaticaLegs: 'Sciatica/legs',
    bowelRectum: 'Bowel/rectum',
    vulvaPerineum: 'Vulva/perineum',
    visionLoss: 'Vision loss',
  }
</script>


<section class="pain">
  <header>
    <label>Pain</label>
    <div>
      {#each TIMES as time (time)}
        <span class={time}>{time}</span>
      {/each}
    </div>
  </header>

  {#each Object.keys($entry.pain) as type (type)}
    <TimeOfDay label={types[type]} {type} handleChange={entry.updateTimeOfDay} />
  {/each}
</section>


<style>
  .pain { margin-top: .5rem; }

  label { margin: 0; }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: .25rem;
  }

  header div {
    display: inline-flex;
    justify-content: space-around;
    width: calc(100% - 110px - .25rem);
    text-transform: uppercase;
    font-weight: 200;
    font-size: .5rem;
  }

  header span {
    letter-spacing: .05em;
    position: relative;
  }

  .morning { right: 5px; }

  .day { right: 3px; }

  .night { right: 1px; }
</style>