<script>
  import { push } from 'svelte-spa-router'
  import { format } from 'date-fns'
  import FilterIcon from '../assets/FilterIcon.svelte'
  import BackInTimeIcon from '../assets/BackInTimeIcon.svelte'
  import { formatMonth, getFormattedDate } from '../utils'

  const today = format(new Date(), 'yyyy-MM-dd')
  const thisMonth = today.slice(0, 7)
  let month = formatMonth()

  const filterEntries = ({ target }) => {
    month = formatMonth(new Date(target.value.replace('-', '/')))
  }

  const goToPastEntry = ({ target }) => {
    // JS Date constructor quirkiness: hyphenated numbers result in off-by-one errors
    // this means 07-18 returns 7-17 so need to pass in slash separated values instead 
    const date = new Date(target.value.split('-').join('/'))

    push(`/entry/${getFormattedDate(date)}`)
  }
</script>


<div>
  <label class="month-container">
    <input
      type="month"
      on:change={filterEntries}
      min="2016-01"
      max={thisMonth}
    >
    <h2>
      {month} <FilterIcon />
    </h2>
  </label>

  <label>
    <input
      type="date"
      on:change={goToPastEntry}
      min="2016-01-01"
      max={today}
    >
    <button class="primary primary-border">
      <BackInTimeIcon fill="#ce93d8" />
      <span>Past Entry</span>
    </button>
  </label>
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

  /* 
    the following CSS makes it so the native month/date input controls are covered
    but the click is maintained since you can't just call .click()
    https://stackoverflow.com/questions/15530850/method-to-show-native-datepicker-in-chrome
   */
  label {
    display: inline-block;
    position: relative;
    line-height: 0;
    width: unset;
    margin: 0;
  }

  .month-container {
    height: 2.5rem;
    margin-top: 1rem;
    cursor: pointer;
  }
  
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  input::-webkit-calendar-picker-indicator {
    position: absolute;
    top: -150%;
    left: -150%;
    width: 300%;
    height: 300%;
    cursor: pointer;
  }
</style>