<script>
  import { location } from 'svelte-spa-router'
	import { format } from 'date-fns'
  import path from 'path'
  import isPastEntry from '../../stores/isPastEntry'
  import PastEntryTrigger from './../PastEntryTrigger.svelte'
  import BackInTimeIcon from '../icons/BackInTimeIcon.svelte'

  let prettyEntryDate
  
  $: if ($location.includes('entry')) {
    const entryDate = path.basename($location)
    
    prettyEntryDate = format(new Date(entryDate), 'M/d/y')
  }
</script>


{#if $isPastEntry}
  <div class="flex-h-center">
    <PastEntryTrigger id="past-entry-banner">
      <span class="flex-v-center">
        <BackInTimeIcon />
        {prettyEntryDate}
      </span>
    </PastEntryTrigger>
  </div>
{/if}


<style>
  div {
    background: #90caf9;
    border: 4px solid #ce93d8;
    border-top: none;
    border-bottom: none;
  }
  
  :global(#past-entry-banner input) { min-height: 32px; }

  span {
    margin: 0 auto;
    padding: .5rem 0;
		border-radius: 0;
    font-weight: 400;
    color: #fff;
  }
</style>