<script>
  import { format } from 'date-fns'
  import RemoveIcon from '../assets/RemoveIcon.svelte'

  export let type = ''
  export let entry

  const emoji = type === 'pee' ? '💧' : '💩'
  let value = format(new Date(), 'kk:mm')
  let showModal = false

  $: voidCount = $entry.voids[type].length

  $: console.table($entry.voids)

  const toggleModal = () =>
    showModal = !showModal
  
  const addVoid = () => {
    entry.addVoid(type, value)
    toggleModal()
  }

  const removeVoid = (timestamp) => {
    if (confirm(`Are you sure you want to remove ${emoji} ${timestamp}?`)) {
      entry.removeVoid(type, timestamp)
    }
  }

  const isCurrentVoid = (timestamp) =>
    timestamp === $entry.voids.lastValue ? 'current-timestamp' : ''
</script>

<style>
  h2 { padding-top: 0; }

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
    width: 40px;
    padding: .5rem 0;
  }

  .close-button {
    display: block;
    margin: 2rem auto 0;
  }
</style>

<span class={type}>
  {#if voidCount}
    <span class="void-counter primary">{voidCount}</span>
  {/if}
  <button on:click={addVoid} class="emoji">
    {emoji}
  </button>

  {#if showModal}
    <div class="modal-background" on:click={toggleModal} />
    <div class="modal">
      <h2>{emoji} {`P${type.slice(1)} Times`}</h2>
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

      <button on:click={toggleModal} class="close-button">close</button>
    </div>
  {/if}
</span>