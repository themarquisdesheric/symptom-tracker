<script>
  import { format } from 'date-fns'
  import { formatTimeTo12Hour } from '../utils.js'
  import RemoveIcon from '../assets/RemoveIcon.svelte'

  export let type = ''
  export let entry

  const emoji = type === 'pee' ? '💧' : '💩'
  let showModal = false

  $: voidCount = $entry.voids[type].length

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
</script>

<style>
  h2 { 
    padding-top: 0;
    margin-bottom: 1.5rem;
  }

  .emoji {
		font-size: 1.75rem;
    padding: 0;
    border: none;
    background: transparent;
    margin-right: 0;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3));
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
  }

  footer {
    text-align: center;
    margin: 2rem auto 0;
  }

  footer button { min-height: unset; }

  .add-button {
    padding-left: 1.75rem;
    position: relative;
  }
  
  .add-button::before {
    font-size: 1rem;
    content: '+';
    position: absolute;
    left: 1rem;
    bottom: 8px;
  }

  .close-button {
    background-color:  #9c64a6;
    color: #fff;
  }
</style>

<span class={type}>
  {#if voidCount}
    <span class="void-counter primary">{voidCount}</span>
  {/if}
  <button on:click={addVoidOpenModal} class="emoji">
    {emoji}
  </button>

  {#if showModal}
    <div class="modal-background" on:click={toggleModal} />
    <div class="modal">
      <h2>
        {emoji} {`P${type.slice(1)} Chart`}
      </h2>
      {#each $entry.voids[type] as timestamp, index (timestamp + index)}
        <div class={`timepicker ${isCurrentVoid(timestamp)}`}>
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
      {/each}

      <footer>
        <button on:click={addVoid} class="add-button dark dark-border">
          add another
        </button>
        <button on:click={toggleModal} class="close-button dark-border">close</button>
      </footer>
    </div>
  {/if}
</span>