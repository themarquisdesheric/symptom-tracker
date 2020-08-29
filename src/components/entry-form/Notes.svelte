<script>
  import entry from '../../stores/entry'
  import entries from '../../stores/entries'
  import EditIcon from '../icons/EditIcon.svelte'

  export let setEditingEntry
  export let editingEntry
  export let isPastEntry

  let editing = null

  $: showAddButton = !$entry.notes && editing === null

  const toggleEdit = () => {
    if (showAddButton) {
      editing = true
      return
    }
    editing = !editing
  }
 
  const handleSave = () => {
    entries.saveEntry($entry)
    setEditingEntry(false)
    editing = false
  }
</script>


<section class="wrapper">
  <label class:label={showAddButton}>
    Notes
    
    {#if editing}
      <span
        class:warn={$entry.notes.length >= 400}
        class="character-counter"
      >
        {500 - $entry.notes.length}
      </span>
    {/if}
  </label>

  <div>
    {#if showAddButton}
      <button on:click={toggleEdit} class="notes-button add">+</button>
    {:else if editing}
      <!-- svelte-ignore a11y-autofocus -->
      <textarea autofocus bind:value={$entry.notes} rows="7" maxlength="500"></textarea>
    {:else}
      <p>
        <EditIcon handleClick={toggleEdit} />
        {$entry.notes}
      </p>
    {/if}
  </div>

  <div>
    {#if editingEntry || !isPastEntry}
      <button on:click={handleSave} class="save-button box-shadow">
        Save
      </button>
    {:else}
      <button on:click={() => setEditingEntry(true)} class="edit-button box-shadow">
        Edit Entry
      </button>
    {/if}
  </div>
</section>


<style>
  section.wrapper {
    position: relative;
    padding-bottom: 3rem;
    margin-bottom: 0;
  }

  label {
    width: 100%;
    position: relative;
    font-weight: 300;
  }

  .label { margin-bottom: 1rem; }

  .character-counter {
    position: absolute;
    right: 0;
    font-size: .75rem;
    font-weight: 300;
    line-height: 1.25rem;
  }

  .warn { color: #ef9a9a; }

  textarea { 
    width: 100%;
    padding: .25rem;
  }

  textarea,
  p { font-size: 14px; }

  p { margin: 0 0 1rem; }

  div { display: flex; }

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

  .save-button,
  .edit-button {
    width: 100%;
    border: none;
    margin: 1rem 0 0;
    color: #fff;
    font-size: 1rem;
  }
  
  .save-button { background: #9c64a6; }
  
  .edit-button {
    background: #90caf9;
    pointer-events: auto;
  }
</style>