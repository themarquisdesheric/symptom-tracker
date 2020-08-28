<script>
  import page from 'page'
  import entry from '../../stores/entry'
  import entries from '../../stores/entries'
  import initialEntryState from '../../stores/initialEntryState'
  import Voids from './Voids.svelte'
  import Allergens from './Allergens.svelte'
  import Pain from './Pain.svelte'
  import Symptoms from './Symptoms.svelte'
  import MensesCycle from './MensesCycle.svelte'
  import Medications from './Medications.svelte'
  import Notes from './Notes.svelte'
  import { getTodaysDate, getIsPastEntry } from '../../utils/utils'

  export let params = {}
  export let pathname = ''

  let editingEntry = false
  
  const setEditingEntry = (bool) =>
    editingEntry = bool 

  if (!params.date) {
    const todaysDate = getTodaysDate()
    
    page.redirect(`/entry/${todaysDate}`)
  }

  $: entryDate = params.date
  
  $: if (entryDate && entryDate !== $entry.date) {
    const currentEntry = $entries[entryDate]

    if (currentEntry) {
      entry.set(currentEntry)
      editingEntry = false
    } else {
      entry.set(initialEntryState(entryDate))
      editingEntry = true
    }
  }

  $: isPastEntry = getIsPastEntry(pathname)
</script>


<div
  class:edit-lock={isPastEntry && !editingEntry}
  class="entry-form"
>
  <Voids />
	<Allergens />
	<Pain />
  <Symptoms />
  <MensesCycle />
  <Medications />
  <Notes {editingEntry} {setEditingEntry} {isPastEntry} />
</div>


<style>
  :global(.entry-form > section) { margin: 1rem 0; }

  .edit-lock {
    pointer-events: none;
    user-select: none;
  }
</style>