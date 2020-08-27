<script>
	import router from 'page'
	import NavBar from './components/NavBar.svelte'
	import EntryForm from './components/entry-form/EntryForm.svelte'
	import Dashboard from './components/Dashboard.svelte'
	import Search from './components/search/Search.svelte'
	import Calendar from './components/Calendar.svelte'

	let currentPage = EntryForm
	let showSearchResults = false
	let params
	let pathname

	const checkForPagesWithSearchResults = (ctx, next) => {
		showSearchResults = /(search|calendar)/.test(ctx.pathname)
		pathname = ctx.pathname
		next()
	}

	router(checkForPagesWithSearchResults)

  router('/', () => {
		currentPage = EntryForm
	})
  router(
		'/entry/:date',
		(ctx, next) => {
			params = ctx.params
			next()
		},
		() => {
			currentPage = EntryForm
		}
	)
  router(
		'/search',
		(ctx, next) => {
			params = ctx.params
			next()
		},
		() => {
			currentPage = Search
		}
	)
	router(
		'/calendar/:date', // date should be optional
		(ctx, next) => {
			params = ctx.params
			next()
		},
		() => {
			currentPage = Calendar
		}
	)
	router('/dashboard', () => {
		currentPage = Dashboard
	})
	
  router.start()
</script>


<NavBar {pathname} />
<div class="outer-border">
	<div class:search-results={showSearchResults} class="inner">
		<svelte:component this={currentPage} {params} />
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