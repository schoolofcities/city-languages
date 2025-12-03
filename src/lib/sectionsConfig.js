/**
 * Sections configuration for each language.
 * Each language has an array of section objects defining the scrollytelling narrative.
 * Each section specifies:
 * - type: "map" or "image"
 * - year: which dataset to use (1971, 1996, 2021)
 * - text: HTML content for the text box
 */

export const SECTIONS_BY_LANGUAGE = {

	num_eng: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — English speakers</p>
				<p>Distribution of English speakers in early 1970s Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Growth and change</p>
				<p>English-speaking population patterns by the mid-1990s.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current distribution of English speakers.</p>`
		}
	],


	num_not_eng: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Non-English speakers</p>
				<p>Overview of non-English-speaking communities in early Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community change</p>
				<p>Patterns of non-English language use across the city.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current distribution of non-English-speaking populations.</p>`
		}
	],


	num_fra: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — French speakers</p>
				<p>French-speaking community in early Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community evolution</p>
				<p>French speakers across Toronto.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Today's French-speaking population.</p>`
		}
	],


	num_ara: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Arabic speakers</p>
				<p>Early Arabic-speaking population.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community growth</p>
				<p>Expansion of Arabic-speaking communities.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Arabic-speaking population.</p>`
		}
	],


	num_fas: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Farsi speakers</p>
				<p>Early Farsi-speaking presence in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community growth</p>
				<p>Expansion of Farsi-speaking communities.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Farsi-speaking population.</p>`
		}
	],


	num_yid: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Yiddish speakers</p>
				<p>Yiddish-speaking communities in early Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community evolution</p>
				<p>Distribution of Yiddish speakers in the 1990s.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Yiddish-speaking population.</p>`
		}
	],


	num_heb: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Hebrew speakers</p>
				<p>Hebrew-speaking population in the early 1970s.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community change</p>
				<p>Hebrew language distribution through the 1990s.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Hebrew-speaking communities.</p>`
		}
	],


	num_pol: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Polish speakers</p>
				<p>Polish-speaking population in early 1970s Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community development</p>
				<p>Polish speakers continued to shape Toronto's cultural landscape.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Today's Polish-speaking community distribution.</p>`
		}
	],


	num_rus: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Russian speakers</p>
				<p>Russian-speaking presence in early Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Growing community</p>
				<p>Expansion of Russian-speaking populations.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current distribution of Russian speakers.</p>`
		}
	],


	num_ukr: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Ukrainian speakers</p>
				<p>Ukrainian-speaking communities in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community development</p>
				<p>Growth of Ukrainian-speaking neighbourhoods.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Today's Ukrainian-speaking population distribution.</p>`
		}
	],


	num_hun: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Hungarian speakers</p>
				<p>Hungarian community presence in early Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community patterns</p>
				<p>Distribution of Hungarian speakers.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Hungarian-speaking communities.</p>`
		}
	],


	num_gre: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Greek speakers</p>
				<p>Greek-speaking communities in the early 1970s.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community evolution</p>
				<p>Shifts in Greek-speaking population patterns.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current distribution of Greek speakers.</p>`
		}
	],


	num_ita: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Italian speakers</p>
				<p>The Italian-speaking community was well-established in Toronto by the early 1970s.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Continued presence</p>
				<p>Italian speakers maintained strong community ties throughout the city.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>The Italian-speaking population has evolved over five decades.</p>`
		}
	],


	num_por: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Portuguese speakers</p>
				<p>Portuguese speakers began establishing communities in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community growth</p>
				<p>The Portuguese-speaking community expanded significantly.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current distribution of Portuguese speakers across Toronto.</p>`
		}
	],


	num_spa: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Spanish speakers</p>
				<p>Spanish-speaking communities began emerging across Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Growth and settlement</p>
				<p>Expansion of Spanish-speaking populations.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Spanish-speaking population patterns.</p>`
		}
	],


	num_kor: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Korean speakers</p>
				<p>Early Korean-speaking presence in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community growth</p>
				<p>Expansion of Korean-speaking communities.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Korean-speaking population distribution.</p>`
		}
	],


	num_jpn: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Japanese speakers</p>
				<p>Japanese-speaking communities in early Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community continuity</p>
				<p>Distribution of Japanese speakers across the city.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Japanese-speaking population patterns.</p>`
		}
	],


	num_chi: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Chinese speakers</p>
				<p>Early 1970s Chinese-speaking population in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Growth and dispersion</p>
				<p>By 1996 the Chinese-speaking population expanded outwards.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>2021 shows the current distribution of Chinese speakers.</p>`
		}
	],


	num_vie: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Vietnamese speakers</p>
				<p>Early Vietnamese-speaking communities in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community formation</p>
				<p>Growth of Vietnamese-speaking populations.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Vietnamese-speaking population distribution.</p>`
		}
	],


	num_tgl: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Tagalog speakers</p>
				<p>Early Tagalog-speaking presence in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community growth</p>
				<p>Expansion of Tagalog-speaking communities.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Tagalog-speaking population distribution.</p>`
		}
	],


	num_pan: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Punjabi speakers</p>
				<p>Early Punjabi-speaking community in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Rapid growth</p>
				<p>The Punjabi-speaking population grew substantially.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>One of Toronto's largest and fastest-growing language communities.</p>`
		}
	],


	num_tam: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Tamil speakers</p>
				<p>Early Tamil-speaking community.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Significant growth</p>
				<p>Tamil community expansion.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>One of Toronto's major South Asian communities.</p>`
		}
	],


	num_ben: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Bengali speakers</p>
				<p>Early Bengali-speaking presence in Toronto.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community growth</p>
				<p>Expansion of Bengali-speaking neighbourhoods.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Bengali-speaking population distribution.</p>`
		}
	],


	num_guj: [
		{
			type: "map",
			year: 1971,
			text: `<p>1971 — Gujarati speakers</p>
				<p>Gujarati-speaking communities emerging in the 1970s.</p>`
		},
		{
			type: "map",
			year: 1996,
			text: `<p>1996 — Community development</p>
				<p>Expansion of Gujarati-speaking populations.</p>`
		},
		{
			type: "map",
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				<p>Current Gujarati-speaking population distribution.</p>`
		}
	]

};
