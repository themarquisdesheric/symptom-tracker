<script>
  import { format } from 'date-fns'
  import TimeOfDayIcon from '../assets/TimeOfDayIcon.svelte'
  import { getVoidDeltas, getPainSymptoms } from '../utils.js'

  export let entry

  const {
    date,
    voids: { pee, nocturia },
    pain,
    symptoms: { flare, headache, visionLoss },
    mensesCycle: { day },
    medications
  } = entry
  const { average } = getVoidDeltas(pee)
  const painSymptoms = getPainSymptoms(pain)
  const migraine = headache >= 3
</script>


<div class="entry-card">
  <p class="date-container">
    <span class="date flex-center">{format(new Date(date), 'd')}</span>
  </p>
  <figure>
    <p class="delta">{average}</p>
    <figcaption>Average Pee Delta</figcaption>
  </figure>
  <hr />

  <div class="diptych">
    <figure>
      <p>{nocturia}</p>
      <figcaption>Nocturia</figcaption>
    </figure>
    {#if headache}
      <figure>
        <p class:migraine>{headache}</p>
        <figcaption>
          {migraine ? 'Migraine' : 'Headache'}
        </figcaption>
      </figure>
    {/if}
  </div>

  <div class="diptych">
    {#if flare}
      <figure>
        <p>🔥</p>
        <figcaption>Flare</figcaption>
      </figure>
    {/if}
    {#if medications.length}
      <figure>
        <p>💊</p>
        <figcaption>Medicine</figcaption>
      </figure>
    {/if}
  </div>
  <hr />
  <span>Menses Cycle <span class="menses-cycle">{day}</span></span>
  <hr />

  <figure class="pain">
    <figcaption>Pain</figcaption>
    {#each painSymptoms as symptom, index (symptom)}
      <span>
        {symptom}
        {(index % 2 === 0) && painSymptoms[index + 1]
          ? ' · '
          : ''
        }
      </span>
    {/each}
  </figure>
  <hr />

  <figure class="vision-loss">
    <figcaption>Vision Loss</figcaption>
    {#each visionLoss as time (time)}
      <TimeOfDayIcon {time} checked={true} />
    {/each}
  </figure>
</div>


<style>
  .entry-card {
    min-width: 110px;
    margin-top: 1rem;
    border: 1px solid #EEE;
    border-radius: .25rem;
    padding: .5rem;
    font-size: .5rem;
    text-align: center;
  }

  p { font-weight: bold; }

  figure { margin-bottom: .5rem; }

  hr {
    height: 1px;
    background-color: #EEE;
    border: none;
  }

  .date-container {
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }

  .date {
    border: 1px solid #EEE;
    border-radius: .25rem;
    width: 1rem;
    height: 1rem;
    padding: .25rem;
    font-size: .5rem;
  }

  .delta {
    font-size: 1.25rem;
    margin: 0 .5rem 0;
  }

  .diptych {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100px;
    margin: auto;
  }

  .diptych:first-of-type figure { margin-bottom: 0; }

  .diptych figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3rem;
  }
  
  .diptych p {
    font-size: .75rem;
    margin: .25rem 0;
  }

  .migraine { color: #ef9a9a; }

  .menses-cycle { font-weight: bold; }

  .pain {
    max-width: 146px;
    font-weight: 600;
  }

  .pain figcaption {
    font-weight: 300;
    margin-bottom: .125rem;
  }

  :global(.vision-loss svg.checked.box-shadow) {
    width: .75rem;
    height: .75rem;
    border: none;
    box-shadow: none;
    padding: 0;
    margin: .5rem .5rem 0 0;
  }

  :global(.vision-loss svg.checked.box-shadow:last-of-type) { margin-right: 0; }
</style>