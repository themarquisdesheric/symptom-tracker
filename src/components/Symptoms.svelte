<script>
  let flare = false;
  let itch = false;
  let cramps = false;
  let discharge = false;
  let sex = true;
  // can also do bind:group if want to receive checkbox values as an array
  let headache = 0;
  let urgency = '+'
  let collar = '+'
  let collarTimes = []

  $: collarTimesFull = collarTimes.length === 4
  $: rejectCollarChange = collar === '+' || collarTimes.includes(collar)

  const arbitrarySort = (a, b) => {
    const arbitraryOrder = { morning: 1, day: 2, evening: 3, night: 4 };

    return arbitraryOrder[a] - arbitraryOrder[b];
  }

  const handleCollarChange = () => {
    if (rejectCollarChange) return;
    
    collarTimes = [
      ...collarTimes,
      collar
    ].sort(arbitrarySort);
  }
</script>

<style>
  input { padding-left: 0; }

  select { font-size: 1rem; }

  .collar { width: 70px; }
</style>

<section>
  <label>Symptoms</label>
  <div>
    <input type="checkbox" id="flare" bind:checked={flare} />
    <label for="flare">
      flare
    </label>
    <input type="checkbox" id="itch" bind:checked={itch} />
    <label for="itch">
      itch
    </label>
    <input type="checkbox" id="cramps" bind:checked={cramps} />
    <label for="cramps">
      cramps
    </label>
    <input type="checkbox" id="discharge" bind:checked={discharge} />
    <label for="discharge">
      discharge
    </label>
    <input type="checkbox" id="sex" bind:checked={sex} />
    <label class="active" for="sex">
      sex
    </label>
  </div>

  <div>
    <span class="field-label">Headache</span> <input class="value" type="number" min="0" max="10" bind:value={headache} />
  </div>

  <div>
    <span class="field-label">Urgency</span>
    <select class="value" bind:value={urgency}>
      <option>+</option>
      <option>
        calm
      </option>
      <option>
        upset
      </option>
      <option>
        very upset
      </option>
    </select>
  </div>

  <div>
    <span class="field-label">Collar</span>
    <select class="value collar" bind:value={collar} on:blur={handleCollarChange} class:hidden={collarTimesFull}>
      <option>+</option>
      <option>morning</option>
      <option>day</option>
      <option>evening</option>
      <option>night</option>
    </select>

    {#if collar !== '+'}
      <button class:hidden={collarTimesFull}>+</button>
    {/if}
    <div>
      {#each collarTimes as time}
        <button class="tag">{time}</button>
      {/each}
    </div>
  </div>
</section>