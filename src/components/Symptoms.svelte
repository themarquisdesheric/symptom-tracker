<script>
  let flare = false;
  let itch = false;
  let cramps = false;
  let discharge = false;
  let sex = true;
  let headache = 0;
</script>

<style>
  input { padding-left: 0; }

  select { font-size: 1rem; }
</style>

<!-- collar: on selection show [+] button -->

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
    <select class="value">
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
    <select class="value">
      <option>+</option>
      <option>
        morning
      </option>
      <option>
        day
      </option>
      <option>
        evening
      </option>
      <option>
        night
      </option>
    </select>
    <button>+</button>
    <div>
      <button class="tag">morning</button>
    </div>
  </div>
</section>