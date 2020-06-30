<script>
  import entry from '../stores/entry'

  const toggleAllergen = entry.toggleCheckbox('allergens')
</script>

<style>
  .allergens { margin-bottom: .5rem; }

  div { display: flex; }
</style>

<section class="allergens">
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