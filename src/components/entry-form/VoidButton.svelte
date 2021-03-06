<script>
  import { format } from 'date-fns'
  import { formatTimeTo12Hour, getVoidDeltas } from '../../utils/utils.js'
  import RemoveIcon from '../icons/RemoveIcon.svelte'
  import HourglassIcon from '../icons/HourglassIcon.svelte'

  export let type = ''
  export let entry

  const emoji = type === 'pee' ? '💧' : '💩'
  let showModal = false

  $: voidCount = $entry.voids[type].length
  $: peeDeltas = getVoidDeltas($entry.voids.pee).deltas

  const addVoid = () => {
    const timestamp = format(new Date(), 'kk:mm')

    entry.addVoid(type, timestamp)
  }

  const toggleModal = () =>
    showModal = !showModal
  
  const addVoidOpenModal = () => {
    addVoid()
    toggleModal()
  }

  const removeVoid = (timestamp) => {
    const timestamp12Hour = formatTimeTo12Hour(timestamp)
    
    if (confirm(`Are you sure you want to remove the ${emoji} of ${timestamp12Hour}?`)) {
      entry.removeVoid(type, timestamp)
    }
  }

  const isCurrentVoid = (timestamp) =>
    timestamp === $entry.voids.lastValue ? 'current-timestamp' : ''
  
  const handleKeydown = ({ key }) => {
    if (key === 'Escape') {
      showModal = false
    }
  }
</script>


<span class={type}>
  {#if voidCount}
    <span class="void-counter primary">{voidCount}</span>
  {/if}
  <button on:click={addVoidOpenModal} class="emoji emoji-shadow">
    {emoji}
  </button>

  {#if showModal}
    <div class="modal-background" on:click={toggleModal} />
    <div on:keydown={handleKeydown } class="modal">
      <h2>
        <span class="emoji-shadow">{emoji}</span> P{type.slice(1)} Chart
      </h2>
      {#each $entry.voids[type] as timestamp, index (timestamp + index)}
        <div class={`timepicker flex-h-center ${isCurrentVoid(timestamp)}`}>
          <input
            type="time"
            value={timestamp}
            on:blur={({ target }) =>
              entry.updateVoid({
                type,
                value: target.value,
                oldValue: timestamp,
              })
            }
          />
          <button
            on:click={() => removeVoid(timestamp)}
            class="delete-button"
          >
            <RemoveIcon currentVoid={isCurrentVoid(timestamp)} />
          </button>
        </div>

        {#if type === 'pee' && index !== voidCount - 1}
          <small class="flex-h-center dark">
            <HourglassIcon /> {peeDeltas[index]} min
          </small>
        {/if}
      {/each}

      <footer class="flex-h-center">
        <button on:click={addVoid} class="add-button dark dark-border">
          <span>+</span>
          <span>add another</span>
        </button>
        <button on:click={toggleModal} class="close-button dark-border">close</button>
      </footer>
    </div>
  {/if}
</span>


<style>
  h2 { 
    padding-top: 0;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .emoji {
		font-size: 1.75rem;
    padding: 0;
    border: none;
    background: transparent;
    margin-right: 0;
  }

  .void-counter {
    position: absolute;
    right: 0;
    font-size: .75rem;
  }

  .pee,
  .poo { position: relative; }

  .timepicker { margin: 1rem 0; }

  .current-timestamp input[type="time"],
  .current-timestamp button {
    border: 1px solid #ce93d8;
  }

  input[type="time"] {
    border: 1px solid #333;
    padding: 0 .5rem;
  }

  .delete-button {
    width: 2.5rem;
    padding: .5rem 0;
    margin-left: .25rem;
  }

  small { height: 1rem; }

  footer { margin: 2rem auto 0; }

  footer button { min-height: unset; }

  .add-button {
    display: flex;
    line-height: 1rem;
    margin-right: .25rem;
  }

  .add-button span:first-of-type {
    margin: 0;
    font-size: 1rem;
    position: relative;
    bottom: 1px;
    margin-right: .125rem;
  }

  .close-button {
    background-color: #9c64a6;
    color: #fff;
  }
</style>