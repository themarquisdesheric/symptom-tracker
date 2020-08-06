<script>
	import Router, { location } from 'svelte-spa-router'
	import NavBar from './components/NavBar.svelte'
	import { routes } from './routes'

	$: showSearchResults = /(search|calendar)/.test($location)
</script>


<NavBar />
<div class="outer-border">
	<div class:search-results={showSearchResults} class="inner">
		<Router {routes} />
	</div>
</div>
<footer />


<style>
	.outer-border {
		/* viewport height - nav height - footer height */
		min-height: calc(100vh - 59px - 50px);
		padding: 0 1rem;
		border-left: 4px solid #ce93d8;
    border-right: 4px solid #ce93d8;
    border-image-source: linear-gradient(#ce93d8, #ffc4ff);
    border-image-slice: 0 20;
	}

	.inner {
		max-width: 500px;
    margin: auto;
	}

	.inner.search-results { max-width: 860px; }

	:global(.search-results header) {
		display: flex;
    justify-content: space-between;
    align-items: center;
		max-width: 500px;
		margin: auto;
	}

	footer {
		text-align: center;
    padding: 1rem 0;
		background: #ffc4ff;
		height: 50px;
	}
</style>