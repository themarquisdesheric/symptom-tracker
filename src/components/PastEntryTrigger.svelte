<script>
  import { format } from 'date-fns'
  import DatePickerTrigger from './DatePickerTrigger.svelte'
  import { getToday, goToPastEntry } from '../utils/utils'

  export let className = ''
  export let id = ''
</script>


<DatePickerTrigger
  type="date"
  handleChange={({ target }) => goToPastEntry(target.value)}
  min="2016-01-01"
  max={getToday()}
  {className}
  {id}
>
  <slot />
</DatePickerTrigger>