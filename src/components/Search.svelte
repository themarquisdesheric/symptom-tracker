<script>
  import Autocomplete from 'simply-svelte-autocomplete';
  import EntryCard from './EntryCard.svelte'
  import entries from '../stores/entries'

  const options = ['headache', 'migraine', 'flare']
  let searchTerm = ''

  // basic search, will not be doing this client side soon
  const filterEntries = (searchTerm) => {
    switch(searchTerm) {
      case 'flare':
        return Object.keys($entries).reduce((acc, key) =>
          $entries[key].symptoms.flare
            ? [...acc, $entries[key]]
            : acc    
        , [])
      case 'headache':
        return Object.keys($entries).reduce((acc, key) => {
          const { headache } = $entries[key].symptoms
          
          return headache && headache < 3 
            ? [...acc, $entries[key]]
            : acc
        }, [])
        
      default:
        return Object.keys($entries).map(key => $entries[key])
    }
  }

  const pluralizeResults = (entries) =>
    entries.length === 1 ? 'result' : 'results'

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

<div class="search-modifiers">
  <label for="medicine">
    <input type="checkbox" />
    <span>Medicine</span>
  </label>
  <label for="notes">
    <input type="checkbox" />
    <span>Notes</span>
  </label>
  <span>Date Range</span>
</div>

<div class="search-info">
  {#if searchTerm}
    <small>
      {filteredEntries.length} {pluralizeResults(filteredEntries)} for <span>{searchTerm}</span>
    </small>
  {/if}
</div>
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

  .search-modifiers {
    display: flex;
    align-items: center;
    max-width: 500px;
    margin: auto;
  }

  label {
    display: flex;
    align-items: center;
    margin: .5rem 1rem .5rem 0;
    width: unset;
  }

  input[type="checkbox"] {
    min-height: unset;
    min-width: 1rem;
    -webkit-appearance: checkbox;
    margin-left: 0;
  }

  .search-info { margin-top: .75rem; }

  small {
    font-size: .75rem;
    display: block;
    margin-bottom: .5rem;
  }

  small span {
    font-size: 1rem;
    color: #ce93d8;
    font-weight: 400;
  }
</style>