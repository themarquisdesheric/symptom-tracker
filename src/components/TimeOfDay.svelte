<script>
  import entry from '../stores/entry'
  import TimeOfDayIcon from '../assets/TimeOfDayIcon.svelte'
  import { TIMES } from '../utils.js'

  export let handleChange
  export let type

  let group = []
</script>

<style>
  .time-of-day {
    display: inline-flex;
    justify-content: space-around;
    width: calc(100% - 110px - .25rem);
    height: inherit;
    margin: 0;
  }

  :global(.time-of-day svg) { width: 1rem; }

  label {
    display: inline-flex;
    margin-bottom: 0;
    width: unset;
  }

  input[type="checkbox"] { display: none; }
</style>

<div class="time-of-day">
  {#each TIMES as time (time)}
    <label>
      <TimeOfDayIcon {time} checked={group.includes(time)} />
      <input
        type="checkbox"
        value={time}
        bind:group
        on:change={() => handleChange(type, group)}
      />
    </label>
  {/each}
</div>