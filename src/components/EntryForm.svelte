<script>
  import { replace, location } from 'svelte-spa-router'
  import path from 'path'

  import entry from '../stores/entry'
  import entries from '../stores/entries'
  import isPastEntry from '../stores/isPastEntry'
  import initialEntryState from '../stores/initialEntryState'
  import Voids from './Voids.svelte'
  import Allergens from './Allergens.svelte'
  import Pain from './Pain.svelte'
  import Symptoms from './Symptoms.svelte'
  import MensesCycle from './MensesCycle.svelte'
  import Medications from './Medications.svelte'
  import Notes from './Notes.svelte'
  import { getTodaysDate } from '../utils'

  export let params = {}

  let editingEntry = false
  
  const setEditingEntry = (bool) =>
    editingEntry = bool 

  if (!params.date) {
    const todaysDate = getTodaysDate()
    
    replace(`/entry/${todaysDate}`)
  }

  $: entryDate = path.basename($location)
  
  $: if (entryDate && entryDate !== $entry.date) {
    const currentEntry = $entries[entryDate]

    if (currentEntry) {
      entry.set(currentEntry)
    } else {
      entry.set(initialEntryState(entryDate))
      editingEntry = true
    }
  }
</script>


<div
  class:edit-lock={$isPastEntry && !editingEntry}
  class="entry-form"
>
  <Voids />
	<Allergens />
	<Pain />
  <Symptoms />
  <MensesCycle />
  <Medications />
  <Notes {editingEntry} {setEditingEntry} />
</div>


<style>
  :global(.entry-form > section) { margin: 1rem 0; }

  .edit-lock {
    pointer-events: none;
    user-select: none;
  }
</style>