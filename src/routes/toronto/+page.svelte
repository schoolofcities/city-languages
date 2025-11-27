<script>
	import Logo from '$lib/header-footer/LogoTop.svelte';
	import TitleStandard from '$lib/header-footer/TitleStandard.svelte';
	import ImageSingle from '$lib/images-videos/ImageSingle.svelte';
	import AuthorDate from '$lib/header-footer/AuthorDate.svelte';
	import Footer from '$lib/header-footer/Footer.svelte';
	import * as Plot from "@observablehq/plot";
	import { onMount } from "svelte";
	
	// Load the JSON data files
	import data1971 from '$data/num_speakers_centroid_1971.json';
	import data1996 from '$data/num_speakers_centroid_1996.json';
	import data2021 from '$data/num_speakers_centroid_2021.json';
	import torontoBoundaries from '$data/TMUN_CSD_OldTO.geo.json';
	
	// Make data available for reactive statements
	let datasets = $state({
		1971: data1971,
		1996: data1996,
		2021: data2021
	});

	// Language selection state - prepared for future dropdown
	let selectedLanguage = $state("num_chi");
	
	// Map containers for future component extraction
	let mapContainers = $state({
		1971: null,
		1996: null,
		2021: null
	});

	// Reactive plot configurations
	let plotConfigs = $derived({
		1971: createPlotConfig(datasets[1971], selectedLanguage, "1971"),
		1996: createPlotConfig(datasets[1996], selectedLanguage, "1996"), 
		2021: createPlotConfig(datasets[2021], selectedLanguage, "2021")
	});

	function createPlotConfig(data, language, year) {
		return {
			width: 800,
			height: 600,
			margin: 0,
			axis: null,
			color: {
				legend: true,
				scheme: "BuPu"
			},
			marks: [
				Plot.contour(data, {
					x: "x",
					y: "y", 
					fill: language,
					stroke: "white",
					strokeWidth: 0.5,
					blur: 5,
				}),
				Plot.geo(torontoBoundaries, {
					stroke: "black",
					strokeWidth: 1.0,
					fill: "none"
				})
			]
		};
	}

	function renderPlot(container, config) {
		if (!container || !config) return;
		
		// Clear existing plot
		container.innerHTML = '';
		
		// Create and append new plot
		const plot = Plot.plot(config);
		container.appendChild(plot);
	}

	// Effect to re-render plots when language changes
	$effect(() => {
		if (plotConfigs) {
			Object.keys(mapContainers).forEach(year => {
				if (mapContainers[year] && plotConfigs[year]) {
					renderPlot(mapContainers[year], plotConfigs[year]);
				}
			});
		}
	});

	onMount(() => {
		// Initial render for all maps
		Object.keys(mapContainers).forEach(year => {
			if (mapContainers[year] && plotConfigs[year]) {
				renderPlot(mapContainers[year], plotConfigs[year]);
			}
		});
	});
</script>


<main>
	<Logo logoType="Blue" backgroundColor="var(--brandWhite)"/>

	<ImageSingle
		imageURL="https://jamaps.github.io/photos/picimgs/taipei1_2025.jpg"
		caption="Taipei skyline."
		source="Jeff Allen."
		altText=""
		maxWidth="1080px"
	/>


	<TitleStandard
		title="Fun Captivating Project Title"
		subtitle="Maybe a slightly longer more detailed wordier project subtitle "
	/>

	<div class="text">

		<AuthorDate
			authors="<a href='' target='_blank'>Author Name</a> & <a href='' target='_blank'>Author Name</a>"
			date="July 2025"
		/>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat lacus eu dolor dapibus sodales. Aenean venenatis metus id eleifend tincidunt. Nulla ut lacus et urna finibus bibendum sit amet et ante. Aliquam tristique, ex sed porttitor hendrerit, ex odio accumsan ex, eu maximus leo quam quis nulla. 
		</p>

		<p>
			Cras tincidunt nisi non tempus suscipit. Nullam metus erat, ultrices vitae mauris commodo, placerat sollicitudin sem. In vitae dignissim eros. Phasellus porttitor orci. nisl, vitae iaculis nulla pretium et. Fusce nec tortor erat. Vestibulum pretium nisl et ligula ultrices fringilla.
		</p>

		<p>
			Vivamus non finibus erat. Ut quis mi at felis aliquam rhoncus eu eget augue. Nunc convallis, dui et congue suscipit, nisl sapien malesuada ligula, vitae luctus justo ligula finibus diam. Quisque aliquam et lacus vitae venenatis. Duis id vulputate augue, vel posuere ex. Nam fermentum consequat dolor, ac finibus justo finibus sit amet. Nam suscipit egestas tellus, malesuada dignissim neque dignissim sed. />
		</p>

		<p>
			Nunc vel massa turpis. Vivamus id odio ut nulla dignissim molestie. 
		</p>

        
	</div>
    
    <!-- Language Maps Section -->
    <div class="maps-section">
		<h2>Language Distribution Over Time</h2>
		<p>Current language: {selectedLanguage.replace('num_', '').toUpperCase()}</p>
		
		<div>
			<h3>1971</h3>
			<div bind:this={mapContainers[1971]} class="plot-container"></div>
		</div>
		
		<div>
			<h3>1996</h3>
			<div bind:this={mapContainers[1996]} class="plot-container"></div>
		</div>
		
		<div>
			<h3>2021</h3>
			<div bind:this={mapContainers[2021]} class="plot-container"></div>
		</div>
	</div>
    
    <div class="text">
        <div class="details">

			<h2>
				Data & Methodology
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat lacus eu dolor dapibus sodales. Aenean venenatis metus id eleifend tincidunt. Nulla ut lacus et urna finibus bibendum sit amet et ante. Aliquam tristique, ex sed porttitor hendrerit, ex odio accumsan ex, eu maximus leo quam quis nulla. 
			</p>
			<p>
				Cras tincidunt nisi non tempus suscipit. Nullam metus erat, ultrices vitae mauris commodo, placerat sollicitudin sem. In vitae dignissim eros. Phasellus porttitor orci nisl, vitae iaculis nulla pretium et. Fusce nec tortor erat. Vestibulum pretium nisl et ligula ultrices fringilla. 
			</p>
			<p>
				Vivamus non finibus erat. Ut quis mi at felis aliquam rhoncus eu eget augue. Nunc convallis, dui et congue suscipit, nisl sapien malesuada ligula, vitae luctus justo ligula finibus diam. Quisque aliquam et lacus vitae venenatis. Duis id vulputate augue, vel posuere ex. Nam fermentum consequat dolor, ac finibus justo finibus sit amet. Nam suscipit egestas tellus, malesuada dignissim neque dignissim sed. 
			</p>

		</div>
    </div>

	<Footer />
</main>


<style>
	.plot-container {
		margin: 1rem 0;
		display: flex;
		justify-content: center;
	}
	
	.maps-section {
		margin: 3rem 0;
		text-align: center;
	}
</style>