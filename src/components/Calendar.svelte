<script>
  import { push, replace, location } from 'svelte-spa-router'  
  import { format } from 'date-fns'
  import path from 'path'
  import entries from '../stores/entries'
  import DatePickerTrigger from './DatePickerTrigger.svelte'
  import PastEntryTrigger from './PastEntryTrigger.svelte'
  import EntryCard from './EntryCard.svelte'
  import FilterIcon from '../assets/FilterIcon.svelte'
  import BackInTimeIcon from '../assets/BackInTimeIcon.svelte'
  import { formatMonth, isMonthDateMatch } from '../utils'

  export let params = {}

  const thisMonth = format(new Date(), 'yyyy-MM')
  const thisYear = thisMonth.slice(0, 4)
  let notCurrentYear
  let prettyMonth
  let monthDigits

  const getMonth = (date = new Date()) =>
    format(date, 'MM-yyyy')

  const setMonth = (date = new Date()) => {
    const year = format(date, 'yyyy')

    notCurrentYear = (year !== thisYear) ? year : ''
    prettyMonth = formatMonth(date)
    monthDigits = getMonth(date)
  }

  const handleMonthChange = ({ target }) => {
    const formattedDate = new Date(target.value.replace('-', '/'))
    push(`/calendar/${getMonth(formattedDate)}`)
  }

  const filterEntries = (date) =>
    Object.keys($entries).reduce(
      (acc, key) =>
        isMonthDateMatch(key, date)
          ? [...acc, $entries[key]]
          : acc
      , []
    )

  $: if (!params.date) {
    replace(`/calendar/${getMonth()}`)
    setMonth()
  } else {
    const date = path.basename($location)
    const formattedDate = `${date.slice(0, 2)}-01-${date.slice(3)}`
    setMonth(new Date(formattedDate))
  }

  $: filteredEntries = filterEntries(monthDigits)
</script>


<header>
  <DatePickerTrigger
    type="month"
    handleChange={handleMonthChange}
    min="2016-01"
    max={thisMonth}
    className="month-container"
  >
    <h2>
      {prettyMonth} <span>{notCurrentYear}</span> <FilterIcon />
    </h2>
  </DatePickerTrigger>

  <PastEntryTrigger>
    <button class="primary primary-border">
      <BackInTimeIcon fill="#ce93d8" />
      <span>Past Entry</span>
    </button>
  </PastEntryTrigger>
</header>

<div class="entry-cards">
  {#each filteredEntries as entry (entry)}
    <EntryCard {entry} />
  {/each}
</div>


<style>
  header,
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header {
    max-width: 500px;
    margin: auto;
  }

  h2 { cursor: pointer; }

  h2 span { font-weight: 300; }

  button { margin-top: 1rem; }

  :global(.month-container svg) {
    opacity: 0;
    transition: opacity 150ms;
  }

  :global(.month-container:hover svg) { opacity: 1; }

  .entry-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: .5rem;
  }

  :global(.entry-cards .entry-card) { margin-right: .4rem; }

  :global(.entry-cards .entry-card:last-of-type) { margin-right: 0; }

  @media (min-width: 380px) {
    :global(.entry-cards .entry-card) { margin-right: .5rem; }
  }
</style>