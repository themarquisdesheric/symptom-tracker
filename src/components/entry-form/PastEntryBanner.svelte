<script>
  import { format } from 'date-fns'
  import path from 'path'
  import PastEntryTrigger from './../PastEntryTrigger.svelte'
  import BackInTimeIcon from '../icons/BackInTimeIcon.svelte'
  import { getIsPastEntry } from '../../utils/utils'

  export let pathname

  let prettyEntryDate
  let isPastEntry = false
  
  $: if (pathname.includes('entry')) {
    const entryDate = path.basename(pathname)
    
    prettyEntryDate = format(new Date(entryDate), 'M/d/y')
    isPastEntry = getIsPastEntry(pathname)
  }
</script>


{#if isPastEntry}
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