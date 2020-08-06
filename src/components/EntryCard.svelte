<script>
  import { format } from 'date-fns'
  import TimeOfDayIcon from '../assets/TimeOfDayIcon.svelte'
  import { getVoidDeltas, getPainSymptoms, goToPastEntry } from '../utils/utils'

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


<div on:click={() => goToPastEntry(date)} class="entry-card">
  <p class="date-container">
    <span class="date flex-center">{format(new Date(date), 'd')}</span>
  </p>
  <figure class="delta">
    <p>{average}</p>
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
        {#if (index % 2 === 0) && painSymptoms[index + 1]}
          ·
        {:else}
          <br />
        {/if}
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
    min-width: 161px;
    border: 1px solid #333;
    border-radius: .25rem;
    padding: .5rem;
    font-size: .5rem;
    text-align: center;
    cursor: pointer;
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
    font-size: .5rem;
    font-weight: 500;
  }

  .delta { margin-bottom: .25rem;}

  .delta p {
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

  .pain { font-weight: 500; }

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

  /* container styles */
  :global(.entry-cards) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: .5rem;
    row-gap: .5rem;
    margin: 1.5rem 0 2rem;
  }

  @media (min-width: 540px) {
    :global(.entry-cards) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 600px) {
    :global(.entry-cards) {
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }

  @media (min-width: 735px) {
    :global(.entry-cards) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1000px) {
    :global(.entry-cards) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>