<script>
  import { location } from 'svelte-spa-router'
	import { format } from 'date-fns'
  import path from 'path'
  
  import BackInTimeIcon from '../assets/BackInTimeIcon.svelte'
  import { getTodaysDate } from '../utils'
  
  let prettyEntryDate
  let pastEntry

  $: if ($location.includes('entry')) {
    const todaysDate = getTodaysDate()
    const entryDate = path.basename($location)
    
    prettyEntryDate = format(new Date(entryDate), 'M/d/y')
    pastEntry = todaysDate !== entryDate
  } else {
    pastEntry = false
  }
</script>


{#if pastEntry}
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
    margin: 0 auto;
    padding: .5rem 0;
		border-radius: 0;
    font-weight: 400;
    background: #90caf9;
    color: #fff;
    border: 4px solid #ce93d8;
    border-top: none;
    border-bottom: none;
  }
</style>