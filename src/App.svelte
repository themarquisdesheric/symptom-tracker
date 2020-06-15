<script>
	import Router, { location } from 'svelte-spa-router'
	import { routes } from './routes'
</script>

<style>
	div {
		padding: 0 1rem;
	}
	nav {
		padding: 1rem;
    margin-bottom: 1rem;
		background: #fff;
		text-align: right;
		height: 58px;
		line-height: 2rem;
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
	{#if $location === '/dashboard'}
		<a href="/#/">
			<img src="/pom-logo.png" alt="pomegranate logo" /> Home
		</a>
	{:else}
		<a href="/#/dashboard">📊 Dashboard</a>
	{/if}
</nav>
<div>
	<Router {routes} />
</div>
