<script>
  import { onMount } from 'svelte';
  import { replace } from 'svelte-spa-router'

  import Voids from './Voids.svelte'
  import Allergens from './Allergens.svelte'
  import Pain from './Pain.svelte'
  import Symptoms from './Symptoms.svelte'
  import MensesCycle from './MensesCycle.svelte'
  import Medications from './Medications.svelte'
  import Notes from './Notes.svelte'
  import { getTodayDate } from '../utils'

  export let params = {}

  onMount(() => {
    const todayDate = getTodayDate()

    if (!params.date) {
      replace(`/entry/${todayDate}`)
    }
  })
</script>


<div class="entry-form">
  <!-- if not today, display past entry banner -->
  <Voids />
	<Allergens />
	<Pain />
  <Symptoms />
  <MensesCycle />
  <Medications />
  <Notes />
</div>


<style>
  :global(.entry-form > section) {
    margin: 1rem 0;
  }
</style>