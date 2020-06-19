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

  const handleClick = () => {
    if (showInput) {
      addNewMedicine(newMedicine)
    }
    
    showInput = !showInput;
  };
</script>

<style>
  input {
    width: 110px;
    background: #fff;
    color: #333;
  }
</style>

<section>
  <span class="field-label">Medications</span>
  {#if showInput}
    <input type="text" bind:value={newMedicine} />
  {/if}
  <button on:click={handleClick}>+</button>
  <div>
    {#each medications as medication}
      <button class="tag">{medication} (x)</button>
    {/each}
  </div>
</section>