<script>
  import { push, replace, location } from 'svelte-spa-router'  
  import { format } from 'date-fns'
  import path from 'path'
  import entries from '../stores/entries'
  import DatePickerTrigger from './DatePickerTrigger.svelte'
  import PastEntryTrigger from './PastEntryTrigger.svelte'
  import EntryCard from './EntryCard.svelte'
  import FilterIcon from './icons/FilterIcon.svelte'
  import BackInTimeIcon from './icons/BackInTimeIcon.svelte'
  import { formatMonth, dehyphenate, isMonthDateMatch } from '../utils/utils'

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
    push(`/calendar/${getMonth(dehyphenate(target.value))}`)
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
    <h1>
      {prettyMonth} <span>{notCurrentYear}</span> <FilterIcon />
    </h1>
  </DatePickerTrigger>

  <PastEntryTrigger>
    <button class="primary primary-border">
      <BackInTimeIcon fill="#ce93d8" />
      <span>Past Entry</span>
    </button>
  </PastEntryTrigger>
</header>

<div class="entry-cards calendar">
  {#each filteredEntries as entry (entry)}
    <EntryCard {entry} />
  {/each}
</div>


<style>
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 { cursor: pointer; }

  h1 span { font-weight: 300; }

  button { margin-top: 1rem; }

  :global(.month-container svg) {
    opacity: 0;
    transition: opacity 150ms;
  }

  :global(.month-container:hover svg) { opacity: 1; }

  .entry-cards.calendar { margin-top: 1.5rem; }
</style>