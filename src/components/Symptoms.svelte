<style>
  input { padding-left: 0; }
</style>

<section>
  <label>Symptoms</label>
  <div>
    <button>flare</button>
    <button>itch</button>
    <button>cramps</button>
    <button>discharge</button>
    <button class="active">sex</button>
  </div>

  <div>
    <span class="field-label">Headache</span> <input class="value" type="number" min="0" max="10" value="0" />
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
    <div>
      <button class="tag">morning</button>
    </div>
  </div>
</section>