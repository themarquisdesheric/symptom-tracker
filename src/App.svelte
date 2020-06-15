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
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 0, 0, .18);
	}
  a {
  	text-decoration: none;
    color: #333;
	}

	img {
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: text-bottom;
	}
</style>

<nav>
	<a href="/#/">
		<img src="/pom-logo.png" alt="pomegranate logo" />
	</a>
	<a href="/#/dashboard">📊 Dashboard</a>
</nav>
<div>
	<Router {routes} />
</div>
