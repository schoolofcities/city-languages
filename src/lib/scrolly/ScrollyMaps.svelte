<script>
	import { fade } from "svelte/transition";
	import ContourMap from "$lib/charts/ContourMap.svelte";

	// Props destructuring with defaults
	let { 
		sections = [], 
		datasets = {}, 
		boundaries = null, 
		language = "num_chi", 
		thresholds = null, 
		width = 800, 
		height = 600, 
		colors = null 
	} = $props();

	// Reactive state
	let scrollContainer = $state(null);
	let textSections = $state([]);
	let currentSectionIndex = $state(0);
	let observer = $state(null);

	// Computed values from the active section
	let activeSection = $derived(sections[currentSectionIndex] || sections[0]);
	let activeMapData = $derived(
		activeSection?.year && datasets[activeSection.year] 
			? datasets[activeSection.year] 
			: []
	);

	// Initialize scroll observer when component mounts
	$effect(() => {
		if (!scrollContainer || sections.length === 0) return;

		// Small delay to ensure DOM is ready
		const initTimeout = setTimeout(() => {
			// Find all text section elements
			textSections = sections.map((_, i) => 
				scrollContainer.querySelector(`.text-section[data-index="${i}"]`)
			).filter(Boolean);
			
			// Set up intersection observer if we have sections
			if (textSections.length > 0) {
				observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								const index = textSections.indexOf(entry.target);
								if (index >= 0) {
									currentSectionIndex = index;
								}
							}
						});
					},
					{
						root: null,
						// Trigger when section is in middle 10% of viewport
						rootMargin: `-45% 0px -45% 0px`,
						threshold: 0
					}
				);

				// Observe all text sections
				textSections.forEach(section => observer.observe(section));
			}
		}, 100);

		// Cleanup on unmount
		return () => {
			clearTimeout(initTimeout);
			if (observer) {
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
				{#if activeSection?.type === "map"}
					<div in:fade={{ duration: 400, delay: 100 }} out:fade={{ duration: 400 }}>
						<ContourMap
							data={activeMapData}
							{language}
							{thresholds}
							{boundaries}
							{width}
							{height}
							{colors}
							showLegend={true}
						/>
					</div>
				{:else if activeSection?.type === "image"}
					<div class="image-container" in:fade={{ duration: 400, delay: 100 }} out:fade={{ duration: 400 }}>
						<img src={activeSection.image} alt="" loading="lazy" />
					</div>
				{/if}
			</div>
		{/key}
	</div>

	<!-- Scrolling text sections -->
	<div class="text-sections-wrapper">
		{#each sections as section, i}
			<div class="text-section" data-index={i} bind:this={textSections[i]}>
				<div class="text-box">
					{@html section.text}
				</div>
			</div>
		{/each}
		<!-- Extra space to scroll last section to top -->
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
	
	.image-container {
		width: 100%;
		height: 100%;
	}
	
	.image-container img { 
		width: 100%; 
		height: 100%; 
		object-fit: cover; 
		display: block;
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
