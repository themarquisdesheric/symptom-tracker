<script>
  import entry from '../stores/entry'
  import EditIcon from '../assets/EditIcon.svelte'

  let value = ''
  let editing = true

  const handleEdit = () => {
    editing = true
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
  textarea { 
    width: 100%;
    margin-bottom: .5rem;
  }

  p { margin: 0 0 1rem; }


  div { display: flex; }

  button { 
    width: 100%;
    border: none;
    margin-right: 0;
    background: #9c64a6;
    color: #fff;
    font-size: 1rem;
  }
</style>

<section class="wrapper">
  <label>Notes</label>
  <div>
    {#if editing}
      <textarea bind:value rows="7"></textarea>
    {:else}
      <p>
        <EditIcon handleClick={handleEdit} />
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