<script>
  import Autocomplete from 'simply-svelte-autocomplete';
  import EntryCard from './EntryCard.svelte'
  import entries from '../stores/entries'

  let filteredEntries = Object.keys($entries).map(key => $entries[key])
</script>


<header>
  <h2>Search</h2>
  <Autocomplete
    themeColor="#9c64a6"
    className="autocomplete"
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
</style>