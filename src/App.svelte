<script>
	import Router from 'svelte-spa-router'
	import NavBar from './components/NavBar.svelte'
	import PastEntryBanner from './components/PastEntryBanner.svelte'
	import { routes } from './routes'
</script>


<NavBar />
<PastEntryBanner />
<div class="outer-border">
	<div class="inner">
		<Router {routes} />
	</div>
</div>
<footer />


<style>
	.outer-border {
		/* viewport height - nav height - footer height */
		min-height: calc(100vh - 64px - 50px);
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

	footer {
		text-align: center;
    padding: 1rem 0;
		background: #ffc4ff;
		height: 50px;
	}
</style>