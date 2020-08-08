<script>
  import Autocomplete from 'simply-svelte-autocomplete';
  import { format } from 'date-fns'

  import SearchDatepicker from './SearchDatepicker.svelte'
  import EntryCard from './EntryCard.svelte'
  import entries from '../stores/entries'
  import { dehyphenate, getFormattedDate, getToday } from '../utils/utils'
  import { filterEntries } from '../utils/search'

  const formatDate = (date) =>
    format(dehyphenate(date), 'M/d/yy')
  const options = ['headache', 'migraine', 'flare']
  let searchTerm = ''
  let fromDate = formatDate('2016-01-01')
  let toDate = formatDate(getToday())

  // * need to ensure from isn't > to, etc
  const setFromDate = (date) =>
    fromDate = formatDate(date)

  const setToDate = (date) =>
    toDate = formatDate(date)

  const pluralizeResults = (entries) =>
    entries.length === 1 ? 'result' : 'results'

  $: filteredEntries = filterEntries($entries, searchTerm)
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
  <div class="checkboxes">
    <label for="medicine">
      <input type="checkbox" id="medicine" />
      <span>Medicine</span>
    </label>
    <label for="notes">
      <input type="checkbox" id="notes" />
      <span>Notes</span>
    </label>
  </div>
  <div class="datepickers">
    <SearchDatepicker handleChange={setFromDate}>
      {fromDate}
    </SearchDatepicker>
    <span class="divider">-</span>
    <SearchDatepicker handleChange={setToDate}>
      {toDate}
    </SearchDatepicker>
  </div>
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
    justify-content: space-between;
    max-width: 500px;
    margin: auto;
  }

  .search-modifiers label {
    display: flex;
    align-items: center;
    padding: .5rem 1rem .5rem 0;
    margin: 0;
    width: unset;
    font-weight: 300;
  }

  :global(.search-modifiers label) { font-size: .75rem; }

  .checkboxes { display: flex; }

  input[type="checkbox"] {
    min-height: unset;
    min-width: 1rem;
    -webkit-appearance: checkbox;
    margin-left: 0;
  }

  .datepickers,
  :global(.datepickers .search-datepicker) {
    display: flex;
    align-items: center;
    font-weight: 300;
  }

  .divider { margin: 0 .5rem 2px; }

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