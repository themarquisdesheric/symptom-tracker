<script>
  import Autocomplete from 'simply-svelte-autocomplete';
  import { format, compareDesc } from 'date-fns'

  import entries from '../../stores/entries'
  import SearchDatepickers from './SearchDatepickers.svelte'
  import EntryCard from '../EntryCard.svelte'
  import { dehyphenate, formatDate, getToday } from '../../utils/utils'
  import { filterEntries } from '../../utils/search'
  import { PAIN_TYPES } from '../../utils/constants'
  
  const painTypes = Object.values(PAIN_TYPES).map(type => type.toLowerCase())
  const options = ['headache', 'migraine', 'flare', ...painTypes]
  let searchTerm = ''
  let startDate = formatDate('2016-01-01')
  let endDate = formatDate(getToday())

  const setStartDate = (date) => {
    const dateIsValid = compareDesc(new Date(dehyphenate(date)), new Date(endDate)) >= 0
    const formattedDate = formatDate(date)

    if (dateIsValid) {
      startDate = formattedDate
      return
    }
    alert('Start date must be before end date')
  }

  const setEndDate = (date) => {
    const dateIsValid = compareDesc(new Date(startDate), new Date(dehyphenate(date))) >= 0
    const formattedDate = formatDate(date)

    if (dateIsValid) {
      endDate = formattedDate
      return
    }
    alert('Start date must be before end date')
  }

  const pluralizeResults = (entries) =>
    entries.length === 1 ? 'result' : 'results'

  $: filteredEntries = filterEntries($entries, searchTerm)
</script>


<header>
  <h1>Search</h1>
  <SearchDatepickers {startDate} {endDate} {setStartDate} {setEndDate} />
</header>

<div class="autocomplete-container">
  <Autocomplete
    {options}
    searchModifiers={['notes', 'urgency', 'medicine', 'subluxations']}
    onSubmit={value => searchTerm = value}
    className="search-autocomplete"
    themeColor="#9c64a6"
  />
</div>

<div class="search-info">
  {#if searchTerm}
    <small>
      <span class="result-quantity">
        {filteredEntries.length}
      </span> 
      {pluralizeResults(filteredEntries)} for
      <span>{searchTerm}</span>
    </small>
  {/if}
</div>
<div class="entry-cards">
  {#each filteredEntries as entry (entry)}
    <EntryCard {entry} showFullDate />
  {/each}
</div>


<style>
  header { padding: 1.5rem 0 1rem; }

  h1 { padding-top: 0; }

  .autocomplete-container { display: flex; }

  :global(.search-autocomplete) { width: 100%; }

  :global(.search-autocomplete),
  .search-info {
    max-width: 500px;
    margin: auto;
  }

  :global(.svelte-autocomplete.search-autocomplete input) { width: 100%; }

  :global(.svelte-autocomplete.search-autocomplete .results-list) {
    top: 39px;
    max-height: 490px;
    overflow-y: auto;
    border-radius: 0 0 .25rem .25rem;
  }
  
  :global(.datepickers label) {
    display: flex;
    align-items: center;
    margin: 0;
    width: unset;
    font-weight: 300;
    font-size: .75rem;
    color: rgba(51, 51, 51, 0.7);
  }

  .search-info { margin-top: 1.25rem; }

  .search-info,
  .result-quantity { font-size: .75rem; }

  small {
    display: block;
    margin-bottom: .5rem;
  }

  small span {
    font-size: 1rem;
    color: #ce93d8;
    font-weight: 400;
  }

  @media (min-width: 500px) {
    :global(.svelte-autocomplete.search-autocomplete .results-list) {
      max-height: unset;
    }
  }
</style>