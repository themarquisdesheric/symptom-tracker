<script>
  let dairy = false
  let gluten = true
  let sugar = false
  let soy = false
</script>

<style>
  div { display: flex; }
</style>

<section>
  <label>Allergens</label>
  <div>
    <input type="checkbox" id="dairy" bind:checked={dairy} />
    <label for="dairy">
      dairy
    </label>
    <input type="checkbox" id="gluten" bind:checked={gluten} />
    <label for="gluten">
      gluten
    </label>
    <input type="checkbox" id="sugar" bind:checked={sugar} />
    <label for="sugar">
      sugar
    </label>
    <input type="checkbox" id="soy" bind:checked={soy} />
    <label for="soy">
      soy
    </label>
  </div>
</section>