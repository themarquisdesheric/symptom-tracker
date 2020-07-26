<script>
  import { location } from 'svelte-spa-router'
	import { format } from 'date-fns'
  import path from 'path'
  import isPastEntry from '../stores/isPastEntry'
  import BackInTimeIcon from '../assets/BackInTimeIcon.svelte'

  let prettyEntryDate
  
  $: if ($location.includes('entry')) {
    const entryDate = path.basename($location)
    
    prettyEntryDate = format(new Date(entryDate), 'M/d/y')
  }
</script>


{#if $isPastEntry}
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