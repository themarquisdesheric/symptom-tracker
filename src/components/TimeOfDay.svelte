<script>
  import entry from '../stores/entry'
  import TimeOfDayIcon from '../assets/TimeOfDayIcon.svelte'
  import { TIMES } from '../utils.js'

  export let category = 'pain'
  export let label
  export let type
</script>


<div class="item">
  <span>
    {label}
  </span>
  <div class="time-of-day">
    {#each TIMES as time (time)}
      <label class="flex-center">
        <TimeOfDayIcon {time} checked={$entry[category][type].includes(time)} />
        <input
          type="checkbox"
          value={time}
          bind:group={$entry[category][type]}
        />
      </label>
    {/each}
  </div>
</div>


<style>
  .item {
    display: flex;
    height: 2.5rem;
    align-items: center;
  }

  .item span {
    width: 115px;
    font-size: 14px;
  }

  .time-of-day {
    display: inline-flex;
    justify-content: space-around;
    width: calc(100% - 110px - .25rem);
    height: inherit;
    margin: 0;
  }

  label { margin-bottom: 0; }

  input[type="checkbox"] { display: none; }
</style>