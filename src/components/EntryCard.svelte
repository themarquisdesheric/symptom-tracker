<script>
  import { format } from 'date-fns'
  import { getVoidDeltas } from '../utils.js'

  export let entry

  const {
    date,
    voids: { pee, nocturia },
    symptoms: { flare, headache, visionLoss },
    mensesCycle: { day },
    medications
  } = entry
  const { average } = getVoidDeltas(pee)
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

  <p><span class="menses-cycle">Menses Cycle</span> {day}</p>
  <p>Pain</p>
  <p>Vision Loss</p>
</div>


<style>
  .entry-card {
    min-width: 110px;
    margin-top: 1rem;
    border: 1px solid;
    border-radius: .25rem;  
    padding: .5rem;
    font-size: .5rem;
    text-align: center;
  }

  p { font-weight: bold; }

  .date-container {
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }

  .date {
    background: #333;
    color: #fff;
    border: 1px solid #333;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    padding: .25rem;
    font-size: .5rem;
  }

  .delta {
    font-size: 2rem;
    margin: .5rem;
  }

  .diptych {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .diptych figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3rem;
  }
  
  .diptych p {
    font-size: 1rem;
    margin: .5rem 0;
  }

  .migraine { color: #ef9a9a; }

  .menses-cycle { font-weight: normal; }
</style>