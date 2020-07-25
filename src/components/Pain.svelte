<script>
  import entry from '../stores/entry'
  import { TIMES } from '../utils'
  import TimeOfDay from './TimeOfDay.svelte'

  let types = {
    headNeck: 'Head/Neck',
    shouldersArms: 'Shoulders/Arms',
    hipsLowBack: 'Hips/Low Back',
    pelvisBladder: 'Pelvis/Bladder',
    sciaticaLegs: 'Sciatica/Legs',
    bowelRectum: 'Bowel/Rectum',
    vulvaPerineum: 'Vulva/Perineum',
    visionLoss: 'Vision Loss',
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
    <TimeOfDay label={types[type]} {type} />
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