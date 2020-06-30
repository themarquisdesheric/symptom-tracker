<script>
	import Router, { location } from 'svelte-spa-router'
	import { routes } from './routes'
import AddButton from './components/AddButton.svelte'
</script>

<style>
	div {
		/* viewport height - nav height - footer height */
		min-height: calc(100vh - 64px - 50px);
		padding: 0 1rem;
		border-left: 4px solid #ce93d8;
    border-right: 4px solid #ce93d8;
    border-image-source: linear-gradient(#ce93d8, #ffc4ff);
    border-image-slice: 0 20;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.25rem;
		background: #ce93d8;
		box-shadow: 0 1px 4px rgba(0, 0, 0, .18);
	}

  a {
  	text-decoration: none;
    color: #333;
	}

	img {
		width: 26px;
		height: 26px;
	}

	footer {
		text-align: center;
    padding: 1rem 0;
		background: #ffc4ff;
		height: 50px;
	}
</style>

<nav>
	<a href="/#/">
		<img src="/home.svg" alt="home" />
	</a>
	<a href="/#/dashboard">Dashboard</a>
</nav>
<div>
	<Router {routes} />
</div>
<footer />
