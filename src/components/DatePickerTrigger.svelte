<script>
  import { push } from 'svelte-spa-router'
  import { format } from 'date-fns'
  import { getFormattedDate } from '../utils/utils'

  export let className = ''
  export let id = ''
  export let handleChange
  export let type
  export let min
  export let max
</script>


<label class={className} {id}>
  <input
    on:change={handleChange}
    {type}
    {min}
    {max}
  >
  <slot />
</label>


<style>
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