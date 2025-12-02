<script>
	import Logo from '$lib/header-footer/LogoTop.svelte';
	import TitleStandard from '$lib/header-footer/TitleStandard.svelte';
	import ImageSingle from '$lib/images-videos/ImageSingle.svelte';
	import AuthorDate from '$lib/header-footer/AuthorDate.svelte';
	import Footer from '$lib/header-footer/Footer.svelte';
	import ScrollyMaps from "$lib/scrolly/ScrollyMaps.svelte";
	import { LANGUAGE_OPTIONS, LANGUAGE_THRESHOLDS, BUPU_COLORS } from "$lib/constants.js";
  
	// Data imports
	import data1971 from '$data/num_speakers_centroid_1971.json';
	import data1996 from '$data/num_speakers_centroid_1996.json';
	import data2021 from '$data/num_speakers_centroid_2021.json';
	import torontoBoundaries from '$data/TMUN_CSD_OldTO.geo.json';
  
	// Datasets map keyed by year
	const datasets = {
		1971: data1971,
		1996: data1996,
		2021: data2021
	};
  
	// language controls
	let selectedLanguage = "num_chi";
  
	// Reactive sections that update with language selection
	$: sections = [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — ${LANGUAGE_OPTIONS[selectedLanguage]} speakers</p>
				   <p>Early 1970s ${LANGUAGE_OPTIONS[selectedLanguage]}-speaking population in Toronto.</p>`,
			language: selectedLanguage,
			thresholds: LANGUAGE_THRESHOLDS[selectedLanguage]
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Growth and dispersion</p>
				   <p>By 1996 the ${LANGUAGE_OPTIONS[selectedLanguage]}-speaking population expanded outwards.</p>`,
			language: selectedLanguage,
			thresholds: LANGUAGE_THRESHOLDS[selectedLanguage]
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				   <p>2021 shows the current distribution of ${LANGUAGE_OPTIONS[selectedLanguage]} speakers.</p>`,
			language: selectedLanguage,
			thresholds: LANGUAGE_THRESHOLDS[selectedLanguage]
		}
	];
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
		title="Language Distribution in Toronto"
		subtitle="Exploring how language communities have evolved over five decades"
	/>

	<div class="text">
		<AuthorDate
			authors="<a href='' target='_blank'>Author Name</a> & <a href='' target='_blank'>Author Name</a>"
			date="July 2025"
		/>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat lacus eu dolor dapibus sodales. Aenean venenatis metus id eleifend tincidunt.
		</p>
	</div>

	<div class="language-selector">
		<label for="language-select">
			<strong>Select language:</strong>
		</label>
		<select id="language-select" bind:value={selectedLanguage}>
			{#each Object.entries(LANGUAGE_OPTIONS) as [key, label]}
				<option value={key}>{label}</option>
			{/each}
		</select>
	</div>

	{#key selectedLanguage}
		<ScrollyMaps
			{sections}
			{datasets}
			boundaries={torontoBoundaries}
			width={900}
			height={600}
			colors={BUPU_COLORS}
			defaultLanguage={selectedLanguage}
		/>
	{/key}

	<div class="text">
		<div class="details">
			<h2>Data & Methodology</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat lacus eu dolor dapibus sodales.
			</p>
			<p>
				Cras tincidunt nisi non tempus suscipit. Nullam metus erat, ultrices vitae mauris commodo, placerat sollicitudin sem.
			</p>
		</div>
	</div>

	<Footer />
</main>

<style>
	.text {
		max-width: 700px;
		margin: 0 auto;
		padding: 1rem 1.5rem;
	}

	.details {
		margin-top: 2rem;
	}

	.language-selector {
		max-width: 700px;
		margin: 2rem auto;
		text-align: center;
		padding: 0 1.5rem;
		z-index: 100;
		position: relative;
	}

	.language-selector label {
		display: block;
		margin-bottom: 0.5rem;
	}

	select {
		padding: 0.75rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		background: white;
		min-width: 200px;
		cursor: pointer;
		/* Ensure select is interactable */
		pointer-events: auto;
		touch-action: manipulation;
		/* Remove any potential interference */
		position: relative;
		z-index: 101;
	}

	/* Ensure options are visible */
	select option {
		background: white;
		color: black;
		padding: 0.5rem;
	}

	@media (max-width: 768px) {
		.language-selector {
			/* Increase touch target and ensure it's above other elements */
			z-index: 1000;
			padding: 1rem 1.5rem;
		}

		select {
			width: 100%;
			max-width: 300px;
			/* Increase touch target size */
			padding: 1rem;
			font-size: 16px; /* Prevents zoom on iOS */
			/* Ensure it's tappable */
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
		}
	}
</style>
