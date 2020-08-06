<script>
  import Autocomplete from 'simply-svelte-autocomplete';
  import EntryCard from './EntryCard.svelte'
  import entries from '../stores/entries'

  const options = ['headache', 'migraine', 'flare']
  let searchTerm = ''

  const filterEntries = (searchTerm) =>
    (searchTerm === 'flare')
      ? Object.keys($entries).reduce((acc, key) =>
          $entries[key].symptoms.flare
            ? [...acc, $entries[key]]
            : acc
          , []
        )
      : Object.keys($entries).map(key => $entries[key])

  $: filteredEntries = filterEntries(searchTerm)
</script>


<header>
  <h2>Search</h2>
  <Autocomplete
    {options}
    onSubmit={value => searchTerm = value}
    className="autocomplete"
    themeColor="#9c64a6"
  />
</header>

<div class="entry-cards">
  {#each filteredEntries as entry (entry)}
    <EntryCard {entry} />
  {/each}
</div>


<style>
  header { padding-top: 1rem; }

  h2 {
    font-size: 21px;
    padding-top: 0;
  }

  :global(.svelte-autocomplete.autocomplete input) {
    width: calc(50vw - 1.5rem);
    max-width: 185px;
    min-width: unset;
  }
</style>