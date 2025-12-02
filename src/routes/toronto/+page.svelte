<script>
	import * as Plot from "@observablehq/plot";
	import { onMount } from "svelte";
	import { ticks } from "d3-array";

	import Logo from '$lib/header-footer/LogoTop.svelte';
	import TitleStandard from '$lib/header-footer/TitleStandard.svelte';
	import ImageSingle from '$lib/images-videos/ImageSingle.svelte';
	import AuthorDate from '$lib/header-footer/AuthorDate.svelte';
	import Footer from '$lib/header-footer/Footer.svelte';

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

	// Language names dictionary
	const LANGUAGE_OPTIONS = {
		num_eng: "English",
		num_not_eng: "Non-English",
		num_fra: "French",
		num_ara: "Arabic",
		num_fas: "Farsi",
		num_yid: "Yiddish",
		num_heb: "Hebrew",
		num_pol: "Polish",
		num_rus: "Russian",
		num_ukr: "Ukrainian",
		num_hun: "Hungarian",
		num_gre: "Greek",
		num_ita: "Italian",
		num_por: "Portuguese",
		num_spa: "Spanish",
		num_kor: "Korean",
		num_jpn: "Japanese",
		num_chi: "Chinese",
		num_vie: "Vietnamese",
		num_tgl: "Tagalog",
		num_pan: "Punjabi",
		num_tam: "Tamil",
		num_ben: "Bengali",
		num_guj: "Gujarati"
	};

	// Language thresholds dictionary
	const LANGUAGE_THRESHOLDS = {
		num_eng: ticks(0, 7000, 12),
		num_not_eng: ticks(0, 7000, 12),
		num_fra: ticks(0, 350, 12),
		num_ara: ticks(0, 500, 12),
		num_fas: ticks(0, 700, 12),
		num_yid: [0, 21.875, 43.75, 87.5, 131.25, 175, 218.75, 262.5, 306.25, 350],
		num_heb: ticks(0, 175, 12),
		num_pol: ticks(0, 600, 12),
		num_rus: [0, 30, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
		num_ukr: ticks(0, 500, 12),
		num_hun: ticks(0, 200, 12),
		num_gre: ticks(0, 900, 12),
		num_ita: ticks(0, 2000, 12),
		num_por: ticks(0, 2000, 12),
		num_spa: ticks(0, 400, 12),
		num_kor: ticks(0, 600, 12),
		num_jpn: ticks(0, 80, 12),
		num_chi: ticks(0, 2000, 12), //[0,200,400,600,800,1000,1200,1400,1600,1800,2000],
		num_vie: ticks(0, 375, 12),
		num_tgl: ticks(0, 450, 12),
		num_pan: ticks(0, 1400, 12),
		num_tam: ticks(0, 500, 12),
		num_ben: ticks(0, 500, 12),
		num_guj: ticks(0, 300, 12),
	};

	// Language selection state
	let selectedLanguage = $state("num_chi");

	// Containers for plot rendering
	let mapContainers = $state({
		1971: null,
		1996: null,
		2021: null
	});

	// Generate derived configs for each map
	let plotConfigs = $derived({
		1971: createPlotConfig(datasets[1971], selectedLanguage),
		1996: createPlotConfig(datasets[1996], selectedLanguage),
		2021: createPlotConfig(datasets[2021], selectedLanguage)
	});

	// Helper: verify language exists in dataset keys
	function languageExists(data, lang) {
		if (!data || data.length === 0) return false;
		return Object.prototype.hasOwnProperty.call(data[0], lang);
	}

	function createPlotConfig(data, language) {
		const valid = languageExists(data, language);

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
				// Only render contour if language is present
				valid
					? Plot.contour(data, {
							x: "x",
							y: "y",
							fill: language,
							stroke: "white",
							strokeWidth: 0,
							blur: 5,
							thresholds: LANGUAGE_THRESHOLDS[selectedLanguage],
					  })
					: null,

				Plot.geo(torontoBoundaries, {
					stroke: "black",
					strokeWidth: 1.0,
					fill: "none"
				})
			].filter(Boolean)
		};
	}

	function renderPlot(container, config) {
		if (!container || !config) return;

		container.innerHTML = '';
		const plot = Plot.plot(config);
		container.appendChild(plot);
	}

	// Re-render plots when dropdown changes selectedLanguage
	$effect(() => {
		Object.keys(mapContainers).forEach(year => {
			if (mapContainers[year] && plotConfigs[year]) {
				renderPlot(mapContainers[year], plotConfigs[year]);
			}
		});
	});

	onMount(() => {
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
			Lorem ipsum dolor sit amet, consectetur adipiscing elit...
		</p>
	</div>

	<div class="language-selector">
		<label>
			<strong>Select language:</strong>
			<select bind:value={selectedLanguage}>
				{#each Object.entries(LANGUAGE_OPTIONS) as [key, label]}
					<option value={key}>{label}</option>
				{/each}
			</select>
		</label>
	</div>

	<!-- Map Section -->
	<div class="maps-section">
		<h2>Language Distribution Over Time</h2>
		<p>Current language: {LANGUAGE_OPTIONS[selectedLanguage]}</p>

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
			<h2>Data & Methodology</h2>

			<p>
				Lorem ipsum dolor sit amet...
			</p>
		</div>
	</div>

	<Footer />
</main>

<style>
	.language-selector {
		margin: 2rem auto;
		text-align: center;
		font-size: 1.2rem;
	}

	select {
		padding: 0.5rem;
		font-size: 1rem;
		border-radius: 6px;
		border: 1px solid #ccc;
	}

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
