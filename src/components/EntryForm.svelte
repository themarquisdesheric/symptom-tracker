<script>
  import Voids from './Voids.svelte'
  import Allergens from './Allergens.svelte'
  import Pain from './Pain.svelte'
  import Symptoms from './Symptoms.svelte'
  import MensesCycle from './MensesCycle.svelte'
  import Medications from './Medications.svelte'
  import Notes from './Notes.svelte'
</script>

<style>
  :global(.entry-form > section) {
    margin: 1rem 0;
  }
</style>

<div class="entry-form">
  <Voids />
	<Allergens />
	<Pain />
  <Symptoms />
  <MensesCycle />
  <Medications />
	<Notes />
</div>
