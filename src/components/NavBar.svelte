<script>
  import { link } from 'svelte-spa-router'
	import active from 'svelte-spa-router/active'
</script>

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

	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: #ffc4ff;
	}
</style>

<nav>
	<div>
		<a href="/" use:link use:active>
			<svg version="1.1" id="New_entry" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
				y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
			<path d="M18.174,1.826c-1.102-1.102-2.082-0.777-2.082-0.777L7.453,9.681L6,14l4.317-1.454l8.634-8.638
				C18.951,3.908,19.275,2.928,18.174,1.826z M10.605,11.605l-0.471,0.47l-1.473,0.5c-0.104-0.24-0.234-0.477-0.498-0.74
				c-0.264-0.264-0.5-0.394-0.74-0.498l0.5-1.473l0.471-0.47c0,0,0.776-0.089,1.537,0.673C10.693,10.828,10.605,11.605,10.605,11.605z
				M16,17H3V4h5l2-2H3C1.9,2,1,2.9,1,4v13c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2v-7l-2,2V17z"/>
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