<script>
  export let hiddenClass = '';
</script>


<span class="plus-sign flex-h-center primary primary-border box-shadow" class:hidden={hiddenClass}>
  +
</span>


<style>
  .plus-sign {
    position: absolute;
    top: 6px;
    left: 114px;
    width: 28px;
    border-radius: .25rem;
    padding: .25rem;
    pointer-events: none;
  }

  .hidden.plus-sign { display: none; }
</style>