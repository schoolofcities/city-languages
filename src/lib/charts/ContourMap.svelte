<script>
	import { onMount, onDestroy } from "svelte";
	import * as Plot from "@observablehq/plot";
	import YearPercentBar from "$lib/chart-addons/YearPercentBar.svelte";
	import { MOBILE_BREAKPOINT } from "$lib/constants.js";

	import outerTorontoBoundaries from '$data/TMUN_CSD_simp_3857.geo.json';
	import innerTorontoBoundaries from '$data/TO_PREAM_simp_3857.geo.json';
	import municipalityCentroids from '$data/TMUN_CSD_OldTO_cent_3857.geo.json';

	// Configuration constants
	const LABEL_CONFIG = {
		large: {
			municipalities: ["Ajax", "Vaughan", "Markham", "Mississauga", "Brampton", "North York", "Scarborough", "Etobicoke", "Toronto", "Pickering", "Richmond Hill"],
			fontSize: 11,
			strokeWidth: 3
		},
		small: {
			municipalities: ["Mississauga", "Brampton", "Vaughan", "Markham", "Toronto"],
			fontSize: 14,
			strokeWidth: 5
		}
	};

	let {
		data = [],
		language = "num_chi",
		thresholds = null,
		percentages = [],
		activeYear = null,
		width = 1080,
		height = 600,
		blur = 6,
		colors = [],
		showLegend = true,
		className = ""
	} = $props();

	let container;
	let plotEl = null;
	let windowWidth = $state(1080);

	// Derived reactive values
	let isMobile = $derived(windowWidth < MOBILE_BREAKPOINT);
	let labelSettings = $derived(isMobile ? LABEL_CONFIG.small : LABEL_CONFIG.large);
	let filteredCentroids = $derived(
		municipalityCentroids.features.filter(f => 
			labelSettings.municipalities.includes(f.properties.NAME)
		)
	);

	function buildConfig() {
		const cfg = {
			width,
			height,
			margin: 0,
			axis: null,
			projection: {
				type: "reflect-y",
				domain: outerTorontoBoundaries,
			},
			color: {
				legend: false,
				type: "linear",
				range: ["white", ...colors],
				clamp: true
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

		// Add geographic boundaries
		const boundaries = [
			{ geo: outerTorontoBoundaries, style: {} },
			{ geo: innerTorontoBoundaries, style: { strokeDasharray: "1,4" } }
		];
		boundaries.forEach(({ geo, style }) => {
			if (geo) {
				cfg.marks.push(Plot.geo(geo, {
					stroke: "black",
					strokeWidth: 1,
					fill: "none",
					...style
				}));
			}
		});

		// Add municipality labels
		if (filteredCentroids.length > 0) {
			cfg.marks.push(
				Plot.text(filteredCentroids, {
					x: d => d.geometry.coordinates[0],
					y: d => d.geometry.coordinates[1],
					text: d => d.properties.NAME.toUpperCase(),
					fill: "#333",
					stroke: "white",
					strokeWidth: labelSettings.strokeWidth,
					fontSize: labelSettings.fontSize,
					fontWeight: 500
				})
			);
		}

		return cfg;
	}

	function render() {
		if (!container) return;
		
		// Clear previous plot
		if (plotEl?.remove) {
			plotEl.remove();
		}
		
		plotEl = Plot.plot(buildConfig());
		container.innerHTML = "";
		container.appendChild(plotEl);
	}

	// Re-render when data/language changes
	$effect(() => {
		if (container && data.length && language) {
			render();
		}
	});

	onMount(() => {
		windowWidth = window.innerWidth;
		
		const handleResize = () => {
			windowWidth = window.innerWidth;
		};
		
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		plotEl?.remove();
	});
</script>

<div class="contour-map {className}">
	{#if showLegend && colors.length > 0}
		<div class="legend">
			<svg class="color-bar" width="225" height="12" viewBox="0 0 240 12" preserveAspectRatio="none">
				{#each colors as color, i}
					<rect
						x={i * (225 / colors.length)}
						y="0"
						width={225 / colors.length}
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
	
	{#if percentages && percentages.length > 0}
			<YearPercentBar 
				data={percentages.map(p => ({ year: p.year, value: p.pct }))}
				{activeYear}
				title="% of first-language speakers"
				{colors}
			/>
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
		width: 210px;
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
