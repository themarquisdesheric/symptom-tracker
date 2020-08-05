<script>
  import { format } from 'date-fns'
  import DatePickerTrigger from './DatePickerTrigger.svelte'
  import { goToPastEntry } from '../utils'

  export let className = ''
  export let id = ''

  const today = format(new Date(), 'yyyy-MM-dd')
</script>


<DatePickerTrigger
  type="date"
  handleChange={({ target }) => goToPastEntry(target.value)}
  min="2016-01-01"
  max={today}
  {className}
  {id}
>
  <slot />
</DatePickerTrigger>