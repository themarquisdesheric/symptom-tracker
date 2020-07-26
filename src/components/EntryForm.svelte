<script>
  import { replace, location } from 'svelte-spa-router'
  import path from 'path'

  import entry from '../stores/entry'
  import entries from '../stores/entries'
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
  
  if (!params.date) {
    const todaysDate = getTodaysDate()
    
    replace(`/entry/${todaysDate}`)
  }

  $: entryDate = path.basename($location)
  
  $: if (entryDate && entryDate !== $entry.date) {
    const currentEntry = $entries[entryDate]
  
    entry.set(currentEntry || initialEntryState)
  }

  $: console.table('entry:', $entry)
  $: console.table('entries:', $entries)
</script>


<div class="entry-form">
  <Voids />
	<Allergens />
	<Pain />
  <Symptoms />
  <MensesCycle />
  <Medications />
  <Notes />
</div>


<style>
  :global(.entry-form > section) { margin: 1rem 0; }
</style>