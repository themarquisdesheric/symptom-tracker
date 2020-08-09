<script>
  import SearchDatepicker from './SearchDatepicker.svelte'
  import FilterIcon from '../icons/FilterIcon.svelte'

  export let setStartDate
  export let setEndDate
  export let startDate
  export let endDate
</script>

<div class="datepickers">
  <SearchDatepicker handleChange={setStartDate}>
    <FilterIcon />
    {startDate}
  </SearchDatepicker>
  <span class="divider">-</span>
  <SearchDatepicker handleChange={setEndDate}>
    {endDate}
  </SearchDatepicker>
</div>


<style>
  .datepickers,
  :global(.datepickers .search-datepicker) {
    display: flex;
    align-items: center;
    font-weight: 300;
  }

  :global(.datepickers svg) { margin-bottom: 1px; }

  .divider { margin: 0 .5rem 2px; }
</style>