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
    width: 100%;
    border: none;
    margin-right: 0;
    background: #9c64a6;
    color: #fff;
    font-size: 1rem;
  }
</style>

<section class="wrapper">
  <label>Notes</label>
  <textarea bind:value rows="7"></textarea>
  <div>
    <button on:click={handleSave} class="box-shadow">Save</button>
  </div>
</section>