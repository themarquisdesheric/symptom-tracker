<script>
  import entry from '../store'

  const toggleAllergen = entry.toggleField('allergens')
</script>

<style>
  div { display: flex; }
</style>

<section>
  <label>Allergens</label>
  <div>
    <input
      type="checkbox"
      id="dairy"
      checked={$entry.allergens.dairy}
      on:click={() => toggleAllergen('dairy')}
    />
    <label for="dairy">
      dairy
    </label>
    <input
      type="checkbox"
      id="gluten"
      checked={$entry.allergens.gluten}
      on:click={() => toggleAllergen('gluten')}
    />
    <label for="gluten">
      gluten
    </label>
    <input
      type="checkbox"
      id="sugar"
      checked={$entry.allergens.sugar}
      on:click={() => toggleAllergen('sugar')}
    />
    <label for="sugar">
      sugar
    </label>
    <input
      type="checkbox"
      id="soy"
      checked={$entry.allergens.soy}
      on:click={() => toggleAllergen('soy')}
    />
    <label for="soy">
      soy
    </label>
  </div>
</section>