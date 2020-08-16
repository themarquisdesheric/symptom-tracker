<script>
  import entry from '../../stores/entry'
  import TimeOfDayIcon from '../icons/TimeOfDayIcon.svelte'
  import { TIMES } from '../../utils/constants.js'

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
      <label for={`${type}-${time}`} class="flex-center">
        <TimeOfDayIcon {time} checked={$entry[category][type].includes(time)} />
      </label>
      <input
        type="checkbox"
        id={`${type}-${time}`}
        value={time}
        bind:group={$entry[category][type]}
      />
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

  label { margin-bottom: 0; }

  .time-of-day {
    display: inline-flex;
    justify-content: space-around;
    width: calc(100% - 110px - .25rem);
    height: inherit;
    margin: 0;
  }
</style>