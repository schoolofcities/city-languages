<script>
	import Logo from '$lib/header-footer/LogoTop.svelte';
	import TitleStandard from '$lib/header-footer/TitleStandard.svelte';
	import ImageSingle from '$lib/images-videos/ImageSingle.svelte';
	import AuthorDate from '$lib/header-footer/AuthorDate.svelte';
	import Footer from '$lib/header-footer/Footer.svelte';
	import ScrollyMaps from "$lib/scrolly/ScrollyMaps.svelte";
	import { LANGUAGE_OPTIONS, LANGUAGE_THRESHOLDS, SOFC_COLOURS, MAP_DIMENSIONS } from "$lib/constants.js";
	import { getSectionsForLanguage } from "$lib/sectionsConfig.js";
  
	// Data imports
	import data1971 from '$data/num_speakers_centroid_1971.json';
	import data1996 from '$data/num_speakers_centroid_1996.json';
	import data2021 from '$data/num_speakers_centroid_2021.json';
	import percentageData from '$data/total_pct_speakers_tmun.json';

	// Configuration constants
	const DEFAULT_LANGUAGE = "num_chi";
  
	// Datasets map keyed by year
	const datasets = {
		1971: data1971,
		1996: data1996,
		2021: data2021
	};
  
	// Component state
	let selectedLanguage = $state(DEFAULT_LANGUAGE);
	let languageSelectorElement = $state(null);
	let resetTrigger = $state(0);
  
	// Derived reactive values
	let sections = $derived(getSectionsForLanguage(selectedLanguage, LANGUAGE_OPTIONS[selectedLanguage]));
	let thresholds = $derived(LANGUAGE_THRESHOLDS[selectedLanguage]);
	let percentKey = $derived(selectedLanguage.replace('num_', 'pct_'));
	let languagePercentages = $derived(
		percentageData.map(yearData => ({
			year: yearData.year,
			pct: yearData[percentKey]
		}))
	);

	function scrollToLanguageSelector() {
		resetTrigger += 1;
		languageSelectorElement?.scrollIntoView({ 
			behavior: 'smooth', 
			block: 'center' 
		});
	}
</script>

<svelte:head>
	<title>Toronto's Linguistic Heritage | School of Cities</title>

	<meta name="description" content="Explore how Toronto's linguistic landscape has evolved over decades." />
	<meta name="author" content="School of Cities">
	<meta rel="canonical" href="https://schoolofcities.github.io/languages/">

	<meta property="og:title" content="Toronto's Linguistic Heritage" />
	<meta property="og:description" content="Explore how Toronto's linguistic landscape has evolved over decades." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://schoolofcities.github.io/languages/" />
	<meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/languages/main/static/web-card.png" />
	<meta property="og:locale" content="en_CA">

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Toronto's Linguistic Heritage" />
	<meta name="twitter:description" content="Explore how Toronto's linguistic landscape has evolved over decades." />
	<meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/languages/main/static/web-card.png" />
	<meta name="twitter:site" content="https://schoolofcities.github.io/languages/" />
</svelte:head>

<main>
	<Logo logoType="Blue" backgroundColor="var(--brandWhite)"/>

	<ImageSingle
		imageURL="./web-card.png"
		caption="Different languages over the years in Toronto."
		source="Credit: <a href='https://localfilmculturestoronto.wordpress.com/when-chinatown-was-yiddish-the-old-standard-theatre/#_edn5' target='_blank'>Yiddish</a>, <a href='https://soandco.ca/does-toronto-have-a-little-italy/' target='_blank'>Italian</a>, <a href='https://www.heritagetoronto.org/explore/riding-the-waves/' target='_blank'>Spanish</a>, <a href='https://hongkonger.world/2025/02/12/torontos-three-chinatowns-a-history/' target='_blank'>Chinese</a>, <a href='https://www.bangladeshcentre.ca/?lightbox=dataItem-mdyybae91' target='_blank'>Bengali</a>"
		altText="Collage of 5 historical photos in Toronto showing different languages on signs and banners"
		maxWidth="1080px"
		link="no"
	/>

	<TitleStandard
		title="Toronto's Linguistic Heritage"
		subtitle="Exploring how language communities have evolved over five decades in the Toronto region."
	/>

	<div class="text">
		<AuthorDate
			authors="<a href='https://www.linkedin.com/in/aniket-k-8a8b9921b/' target='_blank'>Aniket Kali</a>, <a href='https://jamaps.github.io/' target='_blank'>Jeff Allen</a>"
			date="January 2026"
		/>

		<p>
			In today's Toronto and surrounding municipalities, it is more common for someone's mother tongue to be a language other than English. A long time hub for immigration to Canada, the region is one of the world's most multicultural. And, as a result, has long been home to dozens of languages from around the globe.
		</p>

		<p>
			Whether Italian or Punjabi, Yiddish or Tagalog, many languages have arrived, grown, and sometimes declined over the last several decades. Some, such as the Chinese languages, have expanded into the suburbs as immigration and settlement patterns shifted. Others, like Greek, are slowly fading away due to a lack of new immigrants and an aging community.
		</p>

		<p>
			Each of these languages belongs to a community, and each community has its own story of arrival, settlement, and cultural life in the region.
		</p>

		<p>
			Below, we map first-language speakers for many different languages across the region in 1971, 1996, and 2021. For each language, we share a brief account of how these communities formed and changed over time, alongside selected images from different periods. Choose a language below and scroll to explore its story.
		</p>
	</div>

	<div class="language-selector" bind:this={languageSelectorElement}>
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
			{thresholds}
			language={selectedLanguage}
			percentages={languagePercentages}
			width={MAP_DIMENSIONS.width}
			height={MAP_DIMENSIONS.height}
			colors={SOFC_COLOURS}
			{resetTrigger}
		/>
	{/key}

	<div class="back-to-top">
		<button onclick={scrollToLanguageSelector}>
			← Select new language
		</button>
	</div>

	<div class="text">
		<h3>Data & Methodology</h3>
			<p>
				Language data are from the Canadian census and were obtained from <a href="https://observatory.uwo.ca/unicen/index.html" target="_blank">UNI-CEN</a>. After reviewing availability across multiple decades, we selected a subset of census years (1971, 1996, and 2021) and languages for which data were consistently available and represented a substantial number of speakers. Due to irregularities and gaps in historical census reporting, additional languages and years could not be included. 
			</p>

			<p>
				We chose to use "First Language" ("<a href="https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/Definition-eng.cfm?ID=pop095" target="_blank">Mother Tongue</a>") rather than "<a href="https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/Definition-eng.cfm?ID=pop054" target="_blank">Knowledge of</a>", as the latter is inconsistently reported in earlier census years. "First Language" denotes the language learned at home in childhood and still understood by the person, whereas "Knowledge of" refers to whether a person can conduct a conversation in a given language. We previously produced an interactive map on <a href="https://schoolofcities.github.io/gtha-language-map/" target="_blank">knowledge of languages and the GTHA</a>, and Alex McPhee created a map of <a href="https://pronghornmaps.com/toronto/" target="_blank">mother tongues in Toronto</a>.
			</p>

			<p>
				It is important to note that "First Language" does not fully capture multilingual households or everyday language use, particularly in later generations. It's only in more recent censuses that respondents may choose multiple first languages, besides recording other linguistic information.
			</p>

			<p>
				Rather than mapping census geographies (such as census tracts), we used <a href="https://cran.r-project.org/web/packages/areal/vignettes/areal-weighted-interpolation.html" target="_blank">population-weighted aerial interpolation</a> to generate a uniform grid of 1 km squares across the Toronto region. This approach allowed us to create smooth contour maps using <a href="https://observablehq.com/plot/" target="_blank">Observable's Plot library</a>.
			</p>

			<p>
				We limited our geography to Toronto and major surrounding municipalities to balance regional coverage with population and importance. Our final list of municipalities were: Toronto, Mississauga, Brampton, Vaughan, Richmond Hill, Markham, Pickering, and Ajax.
			</p>

			<p>
				All <a href='https://github.com/schoolofcities/languages/tree/main' target="_blank">code</a> and <a href='https://github.com/schoolofcities/languages/tree/main/data/language' target="_blank">processed data</a> used in this project are publicly available in the accompanying GitHub repository.
			</p>
			<h3>Acknowledgements</h3>
			<p>
				A special thanks to the many people who contributed context, insight, and background on different linguistic communities: Francesca Allodi-Ross (Spanish), Vidhya Elango (Japanese), Gabriela Pawlus Kasprzak (Polish), Naomi Nagy (Chinese, Japanese, Korean, Italian, Russian, Spanish, Tagalog), Serene Tan (Chinese), Aloysius Wong (Tagalog), Miru Yogarajah (Tamil), and Michelle Zhang (Chinese).
			</p>

			<p>
				We also thank <a href='https://www.naelshiab.com/' target="_blank">Nael Shiab</a> for his clear and intuitive methods section in his project on <a href='https://newsinteractives.cbc.ca/features/2025/climate-matches/' target="_blank">rising temperatures in Canada</a>, which provided inspiration for both the methodological approach and visual design of this project. 
			</p>

			
	</div>

	<Footer />
</main>

<style>

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

	.back-to-top {
		max-width: 700px;
		margin: 2rem auto;
		text-align: center;
		padding: 0 1.5rem;
		position: relative;
		z-index: 1000;
	}

	.back-to-top button {
		padding: 1rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		color: white;
		background: var(--brandDarkBlue);
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.2s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		pointer-events: auto;
		touch-action: manipulation;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
	}

	.back-to-top button:hover {
		opacity: 0.75;
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

		.back-to-top {
			z-index: 1001;
			padding: 1rem 1.5rem;
		}

		.back-to-top button {
			width: 100%;
			max-width: 300px;
			padding: 1.25rem 2rem;
			font-size: 1.05rem;
			/* Ensure it's tappable on mobile */
			min-height: 48px;
		}
	}
</style>
