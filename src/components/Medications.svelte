<script>
  import AddButton from './AddButton.svelte'

  let newMedicine = ''
  let showInput = false
  let medications = []

  let input

  const addNewMedicine = () => {
    if (medications.includes(newMedicine)) return

    medications = [
      ...medications,
      newMedicine
    ]

    newMedicine = ''
  }

  const handleAddButtonClick = () => {
    if (showInput) {
      if (!newMedicine.length) {
        showInput = false
        return
      }

      addNewMedicine(newMedicine)
    }

    showInput = !showInput
  }

  const handleRemoveMedication = (medication) => {
    if (confirm(`Are you sure you want to remove ${medication}?`)) {
      medications = medications.filter(med => med !== medication)
    }
  }

  $: input && input.focus()
</script>

<style>
  .medications {
    min-height: 40px;
  }

  :global(.medications .add-button) {
    position: relative;
    right: 11px;
  }

  :global(.medications span ~ .add-button span) { font-size: 1rem; }

  :global(.medications .add-button.showInput span) { font-size: 1.25rem; }

  :global(.medications .showInput) { 
    right: 0;
    background: #9c64a6;
    color: #fff;
  }

  input {
    width: 165px;
    background: #fff;
    color: #333;
  }
</style>

<section class="medications">
  <span class="field-label">Medications</span>
  {#if showInput}
    <input type="text" bind:value={newMedicine} bind:this={input} />
  {/if}
  <AddButton
    handleClick={handleAddButtonClick}
    classes={`primary ${showInput ? 'showInput' : ''}`}
  />
  <div>
    {#each medications as medication}
      <button on:click={() => handleRemoveMedication(medication)} class="tag">{medication}</button>
    {/each}
  </div>
</section>