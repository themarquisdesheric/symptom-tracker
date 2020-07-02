<script>
  import entry from '../stores/entry'
  import EditIcon from '../assets/EditIcon.svelte'

  let value = ''
  let editing = null

  const toggleEdit = () => {
    if (editing === null) {
      editing = true
      return
    }
    editing = !editing
  }

  const handleSave = () => {
    // form validation
    entry.updateNotes(value)
    editing = false
  }
</script>

<style>
  section.wrapper {
    position: relative;
    padding-bottom: 3rem;
    margin-bottom: 0;
  }

  label {
    width: 100%;
    position: relative;
  }

  .label { margin-bottom: 1rem; }

  textarea { 
    width: 100%;
    margin-bottom: .5rem;
  }

  p { margin: 0 0 1rem; }


  div { display: flex; }

  button:not(.notes-button) { 
    width: 100%;
    border: none;
    margin-right: 0;
    background: #9c64a6;
    color: #fff;
    font-size: 1rem;
  }

  :global(.notes-button) {
    position: absolute;
    top: -11px;
    right: -12px;
		padding: 0.5rem;
    border: none;
    background-color: transparent;
    font-size: 1.25rem;
    color: #9c64a6;
  }

  :global(.notes-button.add) { top: -12px; }
</style>

<section class="wrapper">
  <label class:label={editing === null}>Notes</label>
  <div>
    {#if editing === null}
      <button on:click={toggleEdit} class="notes-button add">+</button>
    {:else if editing}
      <!-- svelte-ignore a11y-autofocus -->
      <textarea autofocus bind:value rows="7"></textarea>
    {:else}
      <p>
        <EditIcon handleClick={toggleEdit} />
        {value}
      </p>
    {/if}
  </div>
  <div>
    <button on:click={handleSave} class="box-shadow">
      Save
    </button>
  </div>
</section>