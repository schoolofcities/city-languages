<script>
	import ContourMap from "$lib/charts/ContourMap.svelte";

	// Configuration constants
	const OBSERVER_OPTIONS = {
		root: null,
		rootMargin: "-45% 0px -45% 0px",
		threshold: 0
	};
	const INIT_DELAY = 100;
	const RESET_DURATION = 1000;

	// Props destructuring with defaults
	let { 
		sections = [], 
		datasets = {}, 
		language = "num_chi", 
		thresholds = null, 
		percentages = [],
		width = 1080, 
		height = 600, 
		colors = [],
		resetTrigger = 0
	} = $props();

	// Component state
	let scrollContainer = $state(null);
	let currentSectionIndex = $state(0);
	let observer = $state(null);
	let isResetting = $state(false);
	let sectionEls = $state([]);

	// Derived values - reactive to currentSectionIndex changes
	let activeSection = $derived(sections[currentSectionIndex] ?? sections[0]);
	let activeMapData = $derived(datasets[activeSection?.year] ?? []);
	let activeYear = $derived(activeSection?.year);

	// Handle reset trigger from parent
	$effect(() => {
		if (resetTrigger > 0) {
			isResetting = true;
			currentSectionIndex = 0;

			setTimeout(() => {
				isResetting = false;
			}, RESET_DURATION);
		}
	});

	// Initialize IntersectionObserver for scroll-triggered section changes
	$effect(() => {
		if (!scrollContainer || sections.length === 0) return;

		currentSectionIndex = 0;

		const initTimeout = setTimeout(() => {
			sectionEls = sections
				.map((_, i) =>
					scrollContainer.querySelector(
						`.text-section[data-index="${i}"]`
					)
				)
				.filter(Boolean);

			if (sectionEls.length === 0) return;

			observer = new IntersectionObserver((entries) => {
					if (isResetting) return;

					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const index = sectionEls.indexOf(entry.target);
							if (index >= 0) {
								currentSectionIndex = index;
							}
						}
				});
			}, OBSERVER_OPTIONS);

			sectionEls.forEach(section => observer.observe(section));
		}, INIT_DELAY);

		return () => {
			clearTimeout(initTimeout);
			if (observer) {
				sectionEls.forEach(section => observer.unobserve(section));
				observer.disconnect();
				observer = null;
			}
		};
	});
</script>

<div class="scrolly-container" bind:this={scrollContainer}>
	<!-- Sticky map container -->
	<div class="map-sticky-wrapper">
		{#key `${currentSectionIndex}-${language}`}
			<div class="map-viewport" style="width:{width}px; height:{height}px;">
				<ContourMap
					data={activeMapData}
					{language}
					{thresholds}
					{percentages}
					{activeYear}
					{width}
					{height}
					{colors}
					showLegend={true}
				/>
			</div>
		{/key}
	</div>

	<!-- Scrolling text sections -->
	<div class="text-sections-wrapper">
		{#each sections as section, i}
			<div
				class="text-section"
				data-index={i}
				bind:this={sectionEls[i]}
			>
				<div class="text-box">
					{#if section.image}
						<div class="section-image">
							<img src={section.image} alt="" loading="lazy" />
						</div>
					{/if}
					{@html section.text}
				</div>
			</div>
		{/each}

		<div class="bottom-spacer"></div>
	</div>
</div>

<style>
	.scrolly-container { 
		position: relative; 
		display: block;
		margin: 2rem 0;
	}
		
	.map-sticky-wrapper {
		position: sticky;
		top: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		background: white;
	}
		
	.map-viewport { 
		display: flex; 
		align-items: center; 
		justify-content: center;
		max-width: 100%;
		position: relative;
	}
		
	.text-sections-wrapper {
		position: relative;
		z-index: 2;
		pointer-events: none;
	}
		
	.text-section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem 1rem;
	}

	.bottom-spacer {
		height: 100vh;
		pointer-events: none;
	}
		
	.text-box {
		width: 100%;
		max-width: 21.4375rem;
		background: #aacce1;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid rgba(36, 0, 42, 0.12);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		pointer-events: auto;
	}

	.text-box :global(p) {
		margin: 0.5rem 0;
	}

	.section-image {
		width: 100%;
		margin-bottom: 0.75rem;
		border-radius: 0.25rem;
		overflow: hidden;
	}

	.section-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	@media (min-width: 640px) {
		.text-box {
			max-width: 34.5rem;
		}
	}

	@media (max-width: 768px) {
		.map-sticky-wrapper {
			height: 60vh;
		}

		.map-viewport {
			transform: scale(1);
			width: 100%;
			max-width: 100vw;
		}

		.text-section {
			min-height: 120vh;
			padding: 3rem 1rem;
		}

		.bottom-spacer {
			height: 60vh;
		}

		.text-box {
			padding: 0.75rem 1rem;
			font-size: 0.95rem;
		}
	}

	@media (max-width: 480px) {
		.text-section {
			min-height: 140vh;
			padding: 4rem 0.75rem;
		}
	}
</style>
