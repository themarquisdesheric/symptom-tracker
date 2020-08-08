<script>
  import { format } from 'date-fns'
  import DatePickerTrigger from './DatePickerTrigger.svelte'
  import CalendarIcon from '../assets/CalendarIcon.svelte'
  import { getToday } from '../utils/utils'

  export let handleChange

  const today = getToday()
</script>


<DatePickerTrigger
  type="date"
  handleChange={({ target }) => handleChange(target.value)}
  min="2016-01-01"
  max={today}
  className="search-datepicker"
>
  <CalendarIcon />
  <slot />
</DatePickerTrigger>

<style>
  :global(.search-datepicker svg) {
    height: 1rem;
    width: 1rem;
    margin: 0 .25rem 1px 0;
    fill: #333; 
  }
</style>