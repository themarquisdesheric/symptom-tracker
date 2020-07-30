<script>
  import { push } from 'svelte-spa-router'
  import { format } from 'date-fns'
  import DatePickerTrigger from './DatePickerTrigger.svelte'
  import { getFormattedDate } from '../utils'

  export let className = ''
  export let id = ''

  const today = format(new Date(), 'yyyy-MM-dd')

  const goToPastEntry = ({ target }) => {
    // JS Date constructor quirkiness: hyphenated numbers result in off-by-one errors
    // this means 07-18 returns 7-17 so need to pass in slash separated values instead 
    const date = new Date(target.value.split('-').join('/'))

    push(`/entry/${getFormattedDate(date)}`)
  }
</script>


<DatePickerTrigger
  type="date"
  handleChange={goToPastEntry}
  min="2016-01-01"
  max={today}
  {className}
  {id}
>
  <slot />
</DatePickerTrigger>