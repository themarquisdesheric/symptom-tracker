<script>
  let value = ''

  const handleSave = () => {
    // form validation
  }
</script>

<style>
  section.wrapper {
    padding-bottom: 3rem;
    margin-bottom: 0;
  }

  textarea { 
    width: 100%;
    margin-bottom: .5rem;
  }

  div { display: flex; }

  button { 
    background: #9c64a6;
    color: #fff;
    margin-right: .5rem;
  }
</style>

<section class="wrapper">
  <label>Notes</label>
  <textarea bind:value rows="7"></textarea>
  <div>
    <button on:click={handleSave}>Save</button>
  </div>
</section>