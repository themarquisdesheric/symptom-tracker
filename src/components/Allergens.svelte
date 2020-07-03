<script>
  import entry from '../stores/entry'
  import CheckBoxButton from './CheckBoxButton.svelte'

  const toggleAllergen = entry.toggleCheckbox('allergens')
</script>

<style>
  .allergens { margin-bottom: .5rem; }

  div {
    display: flex;
    justify-content: space-between;  
  }

  :global(.allergens label) {
    margin-right: .25rem; 
  }
</style>

<section class="allergens">
  <label>Allergens</label>
  <div>
  {#each Object.keys($entry.allergens) as allergen (allergen)}
    <CheckBoxButton
      type={allergen}
      checked={$entry.allergens[allergen]}
      handleClick={() => toggleAllergen(allergen)}
    />
  {/each}
  </div>
</section>