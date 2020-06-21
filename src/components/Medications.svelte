<script>
  let newMedicine = '';
  let showInput = false;
  let medications = [];

  let input;

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
      if (!newMedicine.length) {
        showInput = false;
        return;
      }

      addNewMedicine(newMedicine);
    }

    showInput = !showInput;
  };

  const handleRemoveMedication = (medication) => {
    if (confirm(`Are you sure you want to remove ${medication}?`)) {
      medications = medications.filter(med => med !== medication)
    }
  };

  $: input && input.focus()
</script>

<style>
  section { min-height: 40px; }
  
  input {
    width: 165px;
    background: #fff;
    color: #333;
  }

  .add-button {
    position: relative;
    right: 11px;
  }

  .showInput { 
    right: 0;
    background: #9c64a6;
    color: #fff;
  }
</style>

<section>
  <span class="field-label">Medications</span>
  {#if showInput}
    <input type="text" bind:value={newMedicine} bind:this={input} />
  {/if}
  <button class="add-button primary" class:showInput on:click={handleAddButtonClick}>+</button>
  <div>
    {#each medications as medication}
      <button on:click={() => handleRemoveMedication(medication)} class="tag">{medication}</button>
    {/each}
  </div>
</section>