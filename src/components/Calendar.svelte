<script>
  import { push } from 'svelte-spa-router'
  import { format } from 'date-fns'
  import BackInTimeIcon from '../assets/BackInTimeIcon.svelte'
  import { getFormattedDate } from '../utils'

  const today = format(new Date(), 'yyyy-MM-dd')
  const month = format(new Date(), 'MMMM')

  const goToPastEntry = ({ target }) => {
    // JS Date constructor quirkiness means 2020-07-18 returns 7-17
    // so need to pass in slash separated values instead 
    const date = new Date(target.value.split('-').join('/'))

    push(`/entry/${getFormattedDate(date)}`)
  }
</script>


<div>
  <h2>{month}</h2>

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

  /* 
    the following CSS makes it so the native date input controls are covered
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