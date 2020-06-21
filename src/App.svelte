<script>
	import Router, { location } from 'svelte-spa-router'
	import { routes } from './routes'
</script>

<style>
	div {
		padding: 0 1rem;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
    margin-bottom: 1rem;
		background: #ce93d8;
		box-shadow: 0 1px 4px rgba(0, 0, 0, .18);
	}

	a:first-of-type { font-size: 1.5rem; }
  a {
  	text-decoration: none;
    color: #333;
	}
</style>

<nav>
	<a href="/#/">🏠</a>
	<a href="/#/dashboard">📊 Dashboard</a>
</nav>
<div>
	<Router {routes} />
</div>
