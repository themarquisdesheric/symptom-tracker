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
  {#each Object.keys($entry.allergens) as allergen}
    <input
      type="checkbox"
      id={allergen}
      checked={$entry.allergens[allergen]}
      on:click={() => toggleAllergen(allergen)}
    />
    <label for={allergen}>
      {allergen}
    </label>
  {/each}
  </div>
</section>