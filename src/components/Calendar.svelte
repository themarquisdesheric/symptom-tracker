<script>
  import { format } from 'date-fns'

  const month = format(new Date(), 'MMMM')
</script>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span { font-size: 1rem; }

  button { margin-top: 1rem; }
</style>

<div>
  <h2>September</h2>
  <button class="primary primary-border">
    <span>+</span>
    Add Past Entry
  </button>
</div>