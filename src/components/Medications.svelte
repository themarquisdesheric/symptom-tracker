<script>
  let newMedicine = '';
  let showInput = false;
  let medications = [];

  const addNewMedicine = () => {
    if (medications.includes(newMedicine)) return;

    medications = [
      ...medications,
      newMedicine
    ];

    newMedicine = '';
  };

  const handleAddButtonClick = () => {
    if (showInput) {
      if (!newMedicine.length) return;

      addNewMedicine(newMedicine);
    }

    showInput = !showInput;
  };

  const handleRemoveMedication = (medication) => {
    if (confirm(`Are you sure you want to remove ${medication}?`)) {
      medications = medications.filter(med => med !== medication)
    }
  };
</script>

<style>
  input {
    width: 165px;
    background: #fff;
    color: #333;
  }

  .add-button {
    position: relative;
    right: 15px;
  }

  .showInput { right: 0; }
</style>

<section>
  <span class="field-label">Medications</span>
  {#if showInput}
    <input type="text" bind:value={newMedicine} />
  {/if}
  <button class="add-button" class:showInput on:click={handleAddButtonClick}>+</button>
  <div>
    {#each medications as medication}
      <button on:click={() => handleRemoveMedication(medication)} class="tag">{medication}</button>
    {/each}
  </div>
</section>