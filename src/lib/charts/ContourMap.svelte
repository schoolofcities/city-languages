<script>
	import { onMount, onDestroy } from "svelte";
	import * as Plot from "@observablehq/plot";
	import { BUPU_COLORS } from "$lib/constants.js";

	export let data = [];
	export let language = "num_chi";
	export let thresholds = null;
	export let boundaries = null;
	export let width = 800;
	export let height = 600;
	export let blur = 6;
	export let colors = BUPU_COLORS;
	export let showLegend = true;
	export let className = "";

	let container;
	let plotEl = null;

	function buildConfig() {
		const cfg = {
			width,
			height,
			margin: 0,
			axis: null,
			color: {
				legend: false,
				scheme: "BuPu"
			},
			marks: []
		};

		if (data && data.length && language && data[0]?.hasOwnProperty(language)) {
			const contourOpts = {
				x: "x",
				y: "y",
				fill: language,
				stroke: "white",
				strokeWidth: 0,
				blur: blur
			};

			if (thresholds) contourOpts.thresholds = thresholds;

			cfg.marks.push(Plot.contour(data, contourOpts));
		}

		if (boundaries) {
			cfg.marks.push(
				Plot.geo(boundaries, {
					stroke: "black",
					strokeWidth: 1,
					fill: "none"
				})
			);
		}

		return cfg;
	}

	function render() {
		if (!container) return;
		
		// Clear previous plot
		if (plotEl) {
			plotEl.remove();
			plotEl = null;
		}
		
		container.innerHTML = "";
		const cfg = buildConfig();
		plotEl = Plot.plot(cfg);
		container.appendChild(plotEl);
	}

	// Re-render when key props change
	$: if (container && data && language) {
		render();
	}

	onMount(() => {
		render();
	});

	onDestroy(() => {
		if (plotEl && plotEl.remove) {
			plotEl.remove();
		}
		plotEl = null;
	});
</script>

<div class="contour-map {className}">
	{#if showLegend}
		<div class="legend">
			<svg class="color-bar" width="240" height="12" viewBox="0 0 240 12" preserveAspectRatio="none">
				{#each colors as color, i}
					<rect
						x={i * (240 / colors.length)}
						y="0"
						width={240 / colors.length}
						height="12"
						fill={color}
					/>
				{/each}
			</svg>
			<div class="legend-labels">
				<span>Fewer speakers</span>
				<span>More speakers</span>
			</div>
		</div>
	{/if}
	
	<div class="map-root" bind:this={container}></div>
</div>

<style>
	.contour-map { 
		display: inline-block; 
		position: relative;
		max-width: 100%;
	}
	
	.map-root { 
		background: white;
		max-width: 100%;
		overflow: hidden;
	}

	.map-root :global(svg) {
		max-width: 100%;
		height: auto;
	}
	
	.legend {
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		z-index: 10;
		user-select: none;
	}
	
	.color-bar {
		display: block;
	}
	
	.legend-labels {
		display: flex;
		justify-content: space-between;
		width: 240px;
		font-size: 12px;
		color: #222;
		margin-top: 4px;
	}

	@media (max-width: 768px) {
		.legend {
			transform: scale(0.7);
			transform-origin: left top;
			top: 0.25rem;
			left: 0.25rem;
		}
	}
</style>
