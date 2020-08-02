<script>
  import { format } from 'date-fns'
  import entries from '../stores/entries'
  import DatePickerTrigger from './DatePickerTrigger.svelte'
  import PastEntryTrigger from './PastEntryTrigger.svelte'
  import EntryCard from './EntryCard.svelte'
  import FilterIcon from '../assets/FilterIcon.svelte'
  import BackInTimeIcon from '../assets/BackInTimeIcon.svelte'
  import { formatMonth } from '../utils'

  const today = format(new Date(), 'yyyy-MM-dd')
  const thisMonth = today.slice(0, 7)
  let prettyMonth
  let monthDigits

  const setMonth = (date) => {
    prettyMonth = formatMonth(date)
    monthDigits = format(date, 'MM')
  }

  const handleMonthChange = ({ target }) => {
    const formattedDate = new Date(target.value.replace('-', '/'))
       
    setMonth(formattedDate)
  }

  const filterEntries = (month) =>
    Object.keys($entries).reduce(
      (acc, key) =>
        key.indexOf(month) === 0
          ? [...acc, $entries[key]]
          : acc
      , []
    )

  setMonth(new Date())

  $: filteredEntries = filterEntries(monthDigits)
</script>


<div>
  <DatePickerTrigger
    type="month"
    handleChange={handleMonthChange}
    min="2016-01"
    max={thisMonth}
    className="month-container"
  >
    <h2>
      {prettyMonth} <FilterIcon />
    </h2>
  </DatePickerTrigger>

  <PastEntryTrigger>
    <button class="primary primary-border">
      <BackInTimeIcon fill="#ce93d8" />
      <span>Past Entry</span>
    </button>
  </PastEntryTrigger>
</div>

<div>
  {#each filteredEntries as entry (entry)}
    <EntryCard {entry} />
  {/each}
</div>


<style>
  div,
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 { cursor: pointer; }

  button { margin-top: 1rem; }

  :global(.month-container svg) {
    opacity: 0;
    transition: opacity 150ms;
  }

  :global(.month-container:hover svg) { opacity: 1; }
</style>