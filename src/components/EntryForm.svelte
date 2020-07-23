<script>
  import { onMount } from 'svelte';
  import { replace } from 'svelte-spa-router'

  import entry from '../stores/entry'
  import entries from '../stores/entries'
  import Voids from './Voids.svelte'
  import Allergens from './Allergens.svelte'
  import Pain from './Pain.svelte'
  import Symptoms from './Symptoms.svelte'
  import MensesCycle from './MensesCycle.svelte'
  import Medications from './Medications.svelte'
  import Notes from './Notes.svelte'
  import { getTodaysDate } from '../utils'

  export let params = {}

  onMount(() => {
    const todaysDate = getTodaysDate()
    const currentEntry = $entries[todaysDate]

    if (!params.date) {
      return replace(`/entry/${todaysDate}`)
    }

    if (currentEntry) {
      console.log('%cThere is a current entry!', 'color: #f0f')

      entry.set(currentEntry)
    }
  })

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