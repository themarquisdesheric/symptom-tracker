<script>
  import { link } from 'svelte-spa-router'
	import active from 'svelte-spa-router/active'
	import PencilIcon from '../assets/PencilIcon.svelte'
	import PastEntryBanner from './PastEntryBanner.svelte'
</script>


<nav>
	<div>
		<a href="/" use:link use:active={"/entry/*"}>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
			<path d="M14.249,0.438L0.438,14.251c-0.584,0.584-0.584,1.538,0.002,2.124l3.185,3.187
				c0.584,0.584,1.541,0.586,2.124,0.002L19.562,5.751c0.584-0.585,0.584-1.541,0-2.125l-3.186-3.188
				C15.789-0.148,14.834-0.145,14.249,0.438z M3.929,15.312L3.17,16.071l-1.896-1.897l0.759-0.759L3.929,15.312z M6.965,15.312
				l-0.759,0.759l-3.415-3.415l0.759-0.76L6.965,15.312z M6.965,12.276l-0.759,0.759l-1.898-1.896l0.76-0.76L6.965,12.276z
				M8.483,10.758l-0.759,0.759L5.828,9.621l0.759-0.76L8.483,10.758z M11.518,10.758l-0.759,0.759L7.345,8.103l0.759-0.759
				L11.518,10.758z M11.518,7.723l-0.759,0.759L8.863,6.586l0.759-0.759L11.518,7.723z M13.036,6.206l-0.759,0.759L10.38,5.068
				l0.759-0.759L13.036,6.206z M16.072,6.206l-0.76,0.759L11.898,3.55l0.759-0.76L16.072,6.206z M16.071,3.171L15.312,3.93
				l-1.896-1.898l0.759-0.758L16.071,3.171z"/>
			</svg>
		</a>
		<a href="/search" use:link use:active>
			<svg version="1.1" id="Magnifying_glass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
				y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
			<path d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377
				C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801
				c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287
				c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283
				C6.111,12.76,4.004,10.652,4.004,8.287z"/>
			</svg>
		</a>
		<a href="/calendar" use:link use:active>
			<svg version="1.1" id="Calendar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
			<path d="M17,3h-1v2h-3V3H7v2H4V3H3C1.899,3,1,3.9,1,5v12c0,1.1,0.899,2,2,2h14c1.1,0,2-0.9,2-2V5C19,3.9,18.1,3,17,3
				z M17,17H3V9h14V17z M6.5,1h-2v3.5h2V1z M15.5,1h-2v3.5h2V1z"/>
			</svg>
		</a>
		<a href="/dashboard" use:link use:active>
			<svg version="1.1" id="Bar_graph" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
			<path d="M17,1h-2c-0.552,0-1,0.447-1,1v16.992h4V2C18,1.447,17.553,1,17,1z M11,7H9C8.448,7,8,7.447,8,8v10.992h4V8
				C12,7.447,11.553,7,11,7z M5,13H3c-0.552,0-1,0.447-1,1v4.992h4V14C6,13.447,5.553,13,5,13z"/>
			</svg>
		</a>
	</div>
</nav>
<PastEntryBanner />


<style>
  nav {
		box-shadow: 0 1px 4px rgba(0, 0, 0, .18);
		background: #ce93d8;
		padding: 1rem 1.25rem;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 500px;
		margin: auto;
	}

	a {
  	text-decoration: none;
    color: #333;
	}

	:global(a.active svg) { fill: #fff; }

	:global(nav svg) {
		width: 1.5rem;
		height: 1.5rem;
		fill: #ffc4ff;
	}
</style>