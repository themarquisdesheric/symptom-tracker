<script>
  import entry from '../stores/entry'
  import TimeOfDayIcon from '../assets/TimeOfDayIcon.svelte'
  import { TIMES } from '../utils.js'

  export let handleChange
  export let category = 'pain'
  export let label
  export let type

  let group = []
</script>


<div class="item">
  <span>
    {label}
  </span>
  <div class="time-of-day">
    {#each TIMES as time (time)}
      <label>
        <TimeOfDayIcon {time} checked={group.includes(time)} />
        <input
          type="checkbox"
          value={time}
          bind:group
          on:change={() => handleChange({
            category,
            type,
            value: group,
          })}
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

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }

  input[type="checkbox"] { display: none; }
</style>