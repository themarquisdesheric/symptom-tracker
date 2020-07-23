<script>
  import { location } from 'svelte-spa-router'
	import { format } from 'date-fns'
  import path from 'path'
  
  import BackInTimeIcon from '../assets/BackInTimeIcon.svelte'
  import { getTodaysDate } from '../utils'
  
  let prettyEntryDate
  let notToday

  if ($location.includes('entry')) {
    const todaysDate = getTodaysDate()
    const entryDate = path.basename($location)
    
    prettyEntryDate = format(new Date(entryDate), 'M/d/y')
    notToday = todaysDate !== entryDate
  }
</script>


{#if notToday}
  <p>
    <BackInTimeIcon />
    {prettyEntryDate}
  </p>
{/if}


<style>
  p {
    display: flex;
    justify-content: center;
    align-items: center;
		max-width: 500px;
    margin: 0 auto;
    padding: .5rem 0;
		border-radius: 0;
		text-align: center;
    font-weight: 400;
    background: #90caf9;
    color: #fff;
	}
</style>