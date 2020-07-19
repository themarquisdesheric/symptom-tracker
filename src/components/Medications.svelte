<script>
  import entry from '../stores/entry'
  import Autocomplete from 'simply-svelte-autocomplete';

  const updateMedications = entry.addAutocomplete('medications')

  const handleRemoveMedication = (medication) => {
    if (confirm(`Are you sure you want to remove "${medication}"?`)) {
      entry.removeAutocomplete('medications', medication)
    }
  }
</script>


<section class="medications">
  <div>
    <span class="field-label">Medications</span>
    <Autocomplete
      options={$entry.medications}
      onSubmit={updateMedications}
      themeColor="#9c64a6"
      className="autocomplete"
    />
  </div>

  <div>
    {#each $entry.medications as medication (medication)}
      <button on:click={() => handleRemoveMedication(medication)} class="tag">{medication}</button>
    {/each}
  </div>
</section>


<style>
  .medications { margin: 0; }
</style>