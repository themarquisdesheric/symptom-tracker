<script>
  import AddButton from './AddButton.svelte'
  import PlusSign from './PlusSign.svelte'

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
    display: flex;
    align-items: center;
    position: relative;
    min-height: 40px;
    margin: 0;
  }

  input {
    width: 165px;
    min-height: 2rem;
    background: #fff;
    color: #333;
  }
</style>


<section class="medications">
  <span class="field-label">Medications</span>
  <PlusSign hiddenClass={showInput} />
  {#if showInput}
    <input type="text" bind:value={newMedicine} bind:this={input} />
  {/if}
  <AddButton
    handleClick={handleAddButtonClick}
    classes={`primary ${showInput ? 'showInput' : 'transparent'}`}
  />
  <div>
    {#each medications as medication}
      <button on:click={() => handleRemoveMedication(medication)} class="tag">{medication}</button>
    {/each}
  </div>
</section>