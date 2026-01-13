/**
 * Sections configuration for each language.
 * Each language has an array of section objects defining the scrollytelling narrative.
 * Each section specifies:
 * - year: which dataset to use (1971, 1996, 2021)
 * - text: HTML content for the text box
 * - image: (optional) path to an image to display above the text
 */

export const SECTIONS_BY_LANGUAGE = {

	num_eng: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Toronto's original English-speaking population is the legacy of its colonial ties to Britain. By 1971, English dominance in public life reflected a city born of British and Irish settler populations. As the suburbs of Etobicoke, North York, and Scarborough grew in the postwar period, many of these speakers moved into them, reflecting  historical wealth that newer non-English speaking immigrants lacked.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/english/1971.png",
			caption: `Credit: <a href="https://www.blogto.com/city/2014/03/that_time_toronto_fought_over_the_beaches/" target="_blank">BlogTO</a>`,
			text: `<p>“The Beaches” in eastern Toronto is a popular summertime neighbourhood. It was settled by British Protestant residents in the early 1900s, and remains made of that same group today whose first language is English by heritage.</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>By 1996, English increasingly functioned as a lingua franca rather than a heritage language. Many English “mother tongue” respondents were second-generation immigrants whose parents spoke other languages, reflecting a rapid linguistic shift. Heritage English speakers continued their own push to the suburbs.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>In 2021, English remained the most reported first language, but its growth was driven primarily by language shift rather than anglophone immigration. English increasingly functions as a language of education, employment, and integration rather than ancestry. It shows Toronto's multi-cultural heritage and integration.</p>`
		}
	],


	num_not_eng: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Non-English speakers in 1971 were overwhelmingly European-origin populations who arrived during postwar labor recruitment programs. Italian, Portuguese, Hungarian, Polish, and Ukrainian speakers formed dense working-class enclaves near factories, rail corridors, and port infrastructure. Language retention was encouraged by churches, ethnic newspapers, and mutual aid societies.</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>By 1996, non-English languages increasingly reflected post-1967 immigration reforms that prioritized skills and education. Asian, Middle Eastern, and African languages reshaped Toronto's linguistic landscape, particularly in suburban municipalities. Immigrant communities increasingly settled directly in those suburbs as well as transitioning outward over generations.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/non-english/1996.jpeg",
			caption: `Credit: <a href="https://cclcs.ca/cclcs-north-york-a-little-canadian-history-at-the-top-of-toronto/" target="_blank">CCLCS North York</a>`,
			text: `<p>Despite their non-English origin, immigrants from different communities took English language classes to participate and work in Toronto.</p>`,
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Non-English first languages now constitute a majority of Toronto households. This reflects sustained immigration, high rates of heritage-language retention, and transnational family networks. Linguistic diversity is most intense in municipalities such as Brampton, Markham, and Mississauga, where multiple language communities coexist spatially.</p>`
		}
	],


	num_fra: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>By the 1900s, French speakers in the city came from smaller Franco-Ontario communities and Quebec – but they never coalesced in the same way as in Ottawa and Montreal. Absent provincial bilingualism and widespread institutions, besides discrimination in the early 1900s, English dominated in public life.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/french/1971.png",
			caption: `Credit: <a href="https://spacing.ca/toronto/2014/04/10/frenchto/" target="_blank">Spacing</a>`,
			text: `<p>French history in Toronto stretches back to the settler colonial period, with exploration and settlements in the region like Fort Rouillé – abandoned in 1759, just before France lost its colonial dominance to Britain in Canada.</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Between Quebec's Quiet Revolution, federal support for bilingualism, and the "C'est l'temps" civil disobedience movement amongst Franco-Ontarians in the mid to late 1970s, French-language rights were significantly expanded in the 1980s. At the same time, increasingly diverse immigration meant French was no longer just a Quebecois heritage language, but one with speakers from Haiti, West Africa, and parts of the Middle East.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>In 2021, French speakers in Toronto continued to rely on immigration for population maintenance, as the community lacks a strong neighborhood anchor. French functions as both a heritage language and a global lingua franca among immigrants from Africa and the Caribbean. Nonetheless, it remains recognized as a language with official support in the province.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/french/2021.jpg",
			caption: `Credit: <a href="https://en.wikipedia.org/wiki/Universit%C3%A9_de_l%27Ontario_fran%C3%A7ais" target="_blank">Wikipedia</a>`,
			text: `<p>Admitting its first full-time cohort of undergraduate students in 2021, the Université de l'Ontario français is Ontario's first French-language University – based in downtown Toronto.</p>`
		},
	],


	num_ara: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Postwar Arab migrants to Toronto were a small group. For the most part, it was Christians from Lebanon and Egypt, with a minority of Muslims, seeking professional and social advancement. The community settled in and around The Junction, as it was close to Orthodox and Maronite Churches and Toronto's first mosque, which all provided a hub for publications, language classes, newcomer opportunities, and religious services all in Arabic.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/arabic/1971.jpg",
			caption: `Credit: <a href="https://en.wikipedia.org/wiki/Jami_Mosque_%28Toronto%29" target="_blank">Wikipedia</a>`,
			text: `<p>Founded in 1969, the Jami Mosque in Roncesvalles was Toronto's first mosque. Its location in the West End made it an easy hub for Muslim Arabic-speakers in the region.</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>As the century closed, Toronto's Arabic speaking community became far more diverse. Civil war brought Lebanese and Palestinian refugees, the First Gulf War brought Iraqi ones, with many more from across the region immigrating for opportunity. Compared to previous waves, these new migrants were more Muslim – and with that, supported and built up mosques, markets, and halal businesses, around Scarborough, North York, Mississauga.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Arabic remains one of the region's fastest growing languages, especially with continued immigration from the Middle East, and refugees from Syria and Iraq. It's not without difficulty as anti-Arab and especially anti-Palestinian racism continue to be issues. But with community classes and cultural festivals, the language finds itself placed in a community rooted increasingly in Mississauga.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/arabic/2021.jpg",
			caption: `Credit: <a href="https://thehalalfood.ca/blog/ridgeway-plaza/" target="_blank">The Halal Food</a>`,
			text: `<p>Home to over 100 ethnic restaurants, Mississauga's Ridgeway Plaza became such a popular community meeting space that the city had to seek an injunction to manage it.</p>`
		}
	],


	num_ben: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Early Bengali immigrants to Canada were a mix of refugees from the 1971 Bangladesh Liberation War, skilled professionals, and students from Bangladesh and India seeking economic opportunity. Most found a home in the East Danforth area, setting up restaurants, grocery stores, fabric shops, and cultural institutions like mosques and temples.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Today's Bengali speakers cluster around East Danforth's "Banglatown" – home to numerous businesses and cultural outlets. Between new immigrants, language schools, and its geographical hub, the language has a home in a community – something that at least one of the authors attest to bartering for fish and Bengali sweets! The community has found a voice for its language in electing its own politicians, its places of worship, and published papers and books.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/bengali/2021.png",
			caption: `Credit: <a href="https://www.bangladeshcentre.ca/?lightbox=dataItem-mdyybae91" target="_blank">BCCS</a>`,
			text: `<p>A celebration of "Noboborsho" – Bengali New Year's – on East Danforth organized by the Bangladesh Centre and Community Services.</p>`
		}
	],


	num_chi: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Chinese immigrants came to Canada starting in the mid 1800s to build the Canadian Pacific Railway (CPR). Working under poor conditions and facing discrimination, the CPR also let them move around the country. Many came to settle in Toronto, eventually coalescing around the Spadina and Dundas Chinatown. By 1971, most were Cantonese speakers, and following immigration reform in 1967, they were increasingly joined by immigrants from Hong Kong.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/chinese/1971.png",
			caption: `Photo credit: <a href="https://hongkonger.world/2025/02/12/torontos-three-chinatowns-a-history/" target="_blank">The Hong Konger</a>`,
			text: `<p>Toronto's second Chinatown grew around Spadina and Dundas. Most early Chinese inhabitants of the city were based in "The Ward", until it was expropriated to create space for Nathan Phillips Square.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/chinese/1996.png",
			text: `<p>Toward the end of the century, both new immigrants and prior residents settled in other parts of the city – like Gerrard East, but more and more in the suburbs of Scarborough and Markham. Agincourt in Scarborough was a popular hub.</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>The 1980s and 1990s saw a rapid growth in Chinese-Canadians, especially in the Toronto region. Many sought to leave Hong Kong with its looming transfer to China, while from mainland China for economic opportunity, bringing both Mandarin and Cantonese. All the same, many of these immigrants were professionals and investors – a stark change from the labour migrants of a century ago.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>The trends continue as a mix of mainland Chinese immigrants and international students increasingly bringing Mandarin to the Toronto region. The suburbs continue to be a hub for the community across North York, Scarborough, and Markham, with a sizable portion of speakers remaining downtown as well.</p>`
		}
	],


	num_fas: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Today's Farsi speakers in Toronto mostly came after the Iranian Revolution and the Iran-Iraq war. Using the points system, they were largely skilled professionals who set themselves up in suburban North York. The community put out numerous monthlies, weeklies, and radio shows as it was finding its footing in the 1990s and early 2000s.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Nicknamed “Tehranto”, it's the northern Yonge corridor that's most known for Farsi speakers today, and where the community has coalesced itself. Home to numerous businesses, cultural events, and professional services, the area has become another ethnic hub in the Toronto region.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/farsi/2021.png",
			caption: `Credit: <a href="https://www.toronto.ca/wp-content/uploads/2024/07/8eca-city-planning-plaza-pov-background-report.pdf" target="_blank">City of Toronto</a>`,
			text: `<p>Inaugurated in 2025, a stretch of Yonge Street in Willowdale home to numerous Iranian businesses is now Toronto's official Little Iran.</p>`
		},
	],


	num_gre: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Toronto's Greek community is nothing new – they were at the heart of the restaurant business in the early 1900s, and the target of nativist riots in 1918. Postwar immigration was driven by poverty, political instability, and limited opportunities in Greece – culminating in a wave of migrants fleeing the military dictatorship in the 1960s and 1970s. They coalesced around Danforth Avenue, building up numerous churches, businesses, and community groups that added life to the Greek language.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/greek/1971.jpeg",
			caption: `Credit: <a href="https://www.heritagetoronto.org/explore/riding-the-waves/" target="_blank">Heritage Toronto</a>`,
			text: `<p>Joining with Chilean exiles fleeing from a similar military dictatorship, musicians of both communities formed the group Compañeros to feature political music from their countries and raise awareness of issues at home. They're pictured above performing at Danforth Music Hall in 1978</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Like many communities, wealth allowed a move toward the suburbs, and Greek-language speakers were no exception. While the Danforth remained its cultural hub, the community slowly moved into Scarborough and its descendants took up English.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/greek/1996.jpg",
			caption: `Credit: <a href="https://en.wikipedia.org/wiki/Taste_of_the_Danforth#/media/File:Taste_of_the_Danforth.jpg" target="_blank">Wikipedia</a>`,
			text: `<p>Beginning in 1993, the businesses in the neighborhood began hosting the annual "Taste of the Danforth" as a tribute to Greek food in the area. In recent years however, the festival has been on pause due to high operating costs</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Between the lack of new immigrants from Greece and assimilation, Greek is fading as a first language in Toronto. There are heritage education programs in the region, but as for the day-to-day, Greek no longer commands what it once had. Still, the community persists through its legacy of business and church.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/greek/2021.png",
			caption: `Credit: <a href="https://www.instagram.com/p/CpD1dQSO3Ve/" target="_blank">Greek Press</a>`,
			text: `<p>Toronto's first Greek language newspaper was published in 1958, and closed operations the same year. Since then, other papers continue to carry the torch of the Greek language, including the Greek Press, pictured above</p>`
		},
	],


	num_guj: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Gujarati-speakers in Toronto come from two streams: one, East Africans who left beginning with political instability in the 1970s, and another, professionals and international students from Gujarat itself in India. Coming when it did, the community went straight for the suburbs of East York and Scarborough in the 1990s, where it had the opportunity to build up places of worship and businesses.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/gujarati/1996.png",
			caption: `Credit: <a href="https://www.toronto.com/things-to-do/food-and-drink/familys-gujarati-food-business-in-scarborough-a-success-after-70-years/article_d2e16d31-1c88-5d4b-b354-bada7eba943f.html" target="_blank">Toronto.com</a>`,
			text: `<p>A community with a reputation for being entrepreneurial, Surati Sweets reestablished itself in Toronto in 1981, after being kicked out of Uganda with the broader community. Today, its products span several countries</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Family reunification and continued immigration make Gujarati one of the fastest growing languages in the region, with hubs in Rexdale, Brampton, and Scarborough. Between many new immigrants, a vibrant business and cultural community, and prominent places of worship, the language easily maintains itself.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/gujarati/2021.jpg",
			caption: `Credit: <a href="https://en.wikipedia.org/wiki/BAPS_Shri_Swaminarayan_Mandir_Toronto#" target="_blank">Wikipedia</a>`,
			text: `<p>Founded 2007, BAPS Shri Swaminarayan Mandir Toronto is Canada's largest Hindu temple. Its specific brand of Hinduism is deeply rooted in Gujarat, and the temple provides Gujarati language and cultural classes</p>`
		},
	],


	num_heb: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Between shifts in the Jewish community and steady immigration from Israel, Hebrew maintained a modest presence in Toronto's linguistic landscape. In that sense, Hebrew grew onto an existing community functioning as a national, cultural, and religious language.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>A small Hebrew presence continues to this day between a mix of Israeli immigration, language retention, Hebrew schools, and religious practice. Much like the rest of Toronto's Jewish Community, its Hebrew speakers have steadily migrated up into suburban communities like Thornhill.</p>`
		}
	],


	num_hun: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>In 1956, the Hungarian Revolution was violently suppressed by the Soviet Union. Fleeing as refugees and bringing with them a strong political identity defined by anti-communism, including thousands who came to Toronto. Many would settle around The Annex, and go on to start Hungarian-language theatre, support university programs, and found numerous businesses in the neighborhood.</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Like other communities, Hungarians toward the end of the century were a community growing in professional credentials, moving to the suburbs, and above all assimilating. Its first language speakers were aging, and dispersion across different neighborhoods and a lack of new immigrants from Hungary meant it was on the decline.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/hungarian/1996.jpg",
			caption: `Credit: <a href="https://livingtorontojournal.com/2013/06/19/the-house-that-was-eaten-alive/" target="_blank">Living Toronto Journal</a>`,
			text: `<p>Opening in 1966, the Hungarian House on St Clair West was the world's largest Hungarian cultural centre outside the home country. It was home to cultural and social events, theater, language instruction, and political meetings. Still, as the community assimilated, it wasn't to last: the association sold it in 2011, and it was demolished in 2012</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Hungarian speakers are a small and aging group in modern Toronto. Many descendants have intermarried and adopted English, while only a handful of new immigrants arrive from the country. Still, cultural associations maintain the heritage of what once was.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/hungarian/2021.jpg",
			caption: `Credit: <a href="http://www.foodjunkiechronicles.net/2011/10/country-style-hungarian-restaurant.html" target="_blank">Food Junkie Chronicles</a>`,
			text: `<p>Once dotted with many Hungarian restaurants and businesses, Bloor and Spadina was once nicknamed the "Goulash Archipelago". Many closed in the 1980s and 1990s, with Country Style standing 62 years before closing in 2023</p>`
		},
	],


	num_ita: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Italians came to Toronto by the ten-thousand after the Second World War from a poorer and rural Southern Italy. In Canada, they saw opportunity, with many taking up work in construction and building community through clubs, cafes, and churches. It was not without difficulty: in 1960, the Hogg's Hollow construction disaster killed five Italian immigrants, leading to labour campaigns that won health and safety regulations in Ontario.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/italian/1971.jpeg",
			caption: `Credit: <a href="https://www.blogto.com/city/2020/10/history-ittle-italy-toronto/" target="_blank">BlogTO</a>`,
			text: `<p>Many Italian immigrants ended up in Toronto's Little Italy – forming 30 to 40 percent of the neighbourhood at their peak. It was a hub of markets, films, newspapers, and all things Italian-language</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Beyond the 1960s and 1970s, many Italians moved up to Corso Italia, building up a second hub for the community. They followed the pattern of many Torontonians of this time, especially in a community that was increasingly stable, by moving into the suburbs and buying homes.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/italian/1996.jpg",
			caption: `Credit: <a href="https://odetothebeautifulgame.blogspot.com/2017/07/july-11-1982-day-we-became-canadian.html" target="_blank">The Power of Sport</a>`,
			text: `<p>Over 250,000 crowded along Corso Italia in 1982 to celebrate Italy's victory in the World Cup. It showed a community that was increasingly established and proud</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>By 2021, Italian language use had declined from its peak around 50 years ago. Better conditions back home saw less immigration, and the first cohort often leaned toward linguistic assimilation. Still, Italians claim one of the highest rates of ethnic heritage in the region, especially in the suburb of Vaughan, with public programs supporting language learning.</p>`
		}
	],


	num_jpn: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Originally having immigrated to British Columbia in the early 20th century, Japanese-Canadians were first forcibly interned during the Second World War, and then banished "East of the Rockies" until 1949. By then, several thousand had already made a home in Toronto. Despite struggles for equality, the community had built up its own cultural institutions by 1971: the Buddhist Church, the Toronto Japanese United Church, the Japanese Canadian Cultural Centre, and the Toronto Japanese Language School.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/japanese/1971.jpg",
			caption: `Credit: Japanese Canadian Cultural Centre George Tsushima Collection, 2011.298.01.11.`,
			text: `<p>The Toronto Japanese Language School promoted the preservation of language and culture through regular educational programs for children and adults. This photo is an early batch of students in 1960</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Japanese language use has been maintained by a modest post-war immigration for a variety of causes: business assignments from Japanese firms, marriage arrangements (mostly for women), international students, and a simple sense of wanting change and adventure. Still, the broader community remained active in Toronto, successfully winning government redress for forced internment in 1988.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/japanese/1996.jpg",
			caption: `Credit: Japanese Canadian Cultural Centre Original Photographic Collection, 2001.2.2.1.`,
			text: `<p>One of many such events, the Japanese Canadian Cultural Centre helped host annual bazaar's to bring the community together in Toronto</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Modest immigration from Japan has continued to preserve the language in Toronto. Many members of the community no longer speak the language; its earlier members have passed away, and those that experienced internment in the Second World War generally avoided teaching their children Japanese due to associated trauma and shame.</p>`
		}
	],


	num_kor: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Like many other communities, immigration reform and 1967 paved the way for mass migration from Korea. Toronto became the hub for Canada's Korean community, with many coming as skilled workers, entrepreneurs, or students – largely basing themselves around Bloor Street's Koreatown. For many Korean Canadians of that time, life was centered around two key venues: the family convenience store and community churches like the Alpha Korean United Church.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/korean/1996.png",
			caption: `Credit: <a href="https://koreatownto.com/f/korea-town-and-the-history-of-koreans-in-toronto" target="_blank">Koreantown BIA</a>`,
			text: `<p>While still a commercially Korean neighborhood, this photo from 1984 of Koreatown shows a time when Korean residents largely lived there as well</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Today's Korean community has largely moved up to Willowdale in North York, while Koreatown remains its commercial hub. Concentration and stability have allowed for Korean-language media, churches, and language programs. Still, the rate of passing on the language to children is modest, and sustained by immigration and community.</p>`
		}
	],


	num_pan: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Like many non-white immigrants, Punjabi-speakers in the GTA found their entry point after the 1967 immigration reforms, which opened the door for professionals. By the 1990s, family reunification and chain migration of relatives and friends led to a rapid growth in the community. Many chose to initially settle in Mississauga's Malton and parts of Brampton, where suburban homes were affordable.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/punjabi/1996.png",
			caption: `Credit: <a href="https://findmypriest.ca/listing/the-ontario-khalsa-darbar-okd/" target="_blank">Find My Priest</a>`,
			text: `<p>Sikh gurdwaras were much more than just places of worship: they brought together the community, to help find employment leads, housing, and welcome newcomers in the Punjabi language. The Ontario Khalsa Darbar is among the GTA's most prominent gurdwara</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Punjabi has grown and clustered in Brampton, and is one of the fastest growing languages in the larger region. Continued immigration, growth of businesses, numerous gurdwara's, and a growing media and cultural scene, all make for a vibrant and thriving home for a language. These days, speakers can even enjoy live hockey commentary in Punjabi.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/punjabi/2021.png",
			caption: `Credit: <a href="https://www.gofundme.com/f/NSN-legal-defence-fund" target="_blank">Naujawan Support Network</a>`,
			text: `<p>It's estimated that tens of thousands of those speakers are international students, often duped out of wages, even by community members. That same Punjabi language is a language used to fight back – the sign above demanding “lutt band karo” (“stop the exploitation”).</p>`
		},
	],


	num_pol: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Toronto's Polish community came to be as a result of interwar economic migration, and those fleeing German destruction and Soviet rule after the Second World War. Centered around parishes like St. Casimir's, St. Stanislaus', and St Mary's, Roncesvalles and The Junction became hubs for the community to share in its culture, language, and faith.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/polish/1971.png",
			caption: `Credit: <a href="https://online.polcu.com/Personal/AboutUs/History/" target="_blank">St. Stanislaus - St. Casimir's Polish Parishes Credit Union</a>`,
			text: `<p>Cardinal Karol Wojtyła visiting St. Casimir's Parish in 1976. He would go on to become the first Polish Pope – a matter of great celebration in Canada's deeply Catholic Polish community</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>In the years following, more Poles came to Canada escaping martial law during the Solidarity movement in Poland, and following the collapse of the Soviet Union. Professional advancement slowly built up new parishes in the suburbs and pulled the community westward, while preservation of the language remained an assertion of national identity especially against Soviet rule.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Fewer Poles have migrated to Canada in recent years, and younger Poles increasingly no longer speak the language, leading to steady shifts in what is spoken at religious services. Still, Toronto remains a hub of Polish heritage – whether it's the Canadian Polish Congress, the credit union, or dance groups like Biały Orzeł, each of them keeps a piece of Poland alive in Toronto.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/polish/2021.png",
			caption: `Credit: <a href="https://polishfestival.ca/#instagramfeed" target="_blank">Roncesvalles Polish Festival</a>`,
			text: `<p>Toronto's annual Roncesvalles Polish Festival remains a hub for culture, music, language, and food</p>`
		},
	],


	num_por: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Due to postwar instability, the Salazar dictatorship, and labour demand in Canada, swaths of Portuguese immigrants came to Toronto in the 1950s and 1960s. Many came especially from the Azores region, and many went undocumented. Numerous cultural, religious, and political organizations were founded, alongside Portuguese-language newspapers like the Luso-Canadiano, as the community was densely packed in Toronto's West End.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/portuguese/1971.jpg",
			caption: `Credit: <a href="https://izi.travel/en/0cc2-portuguese-toronto-early-decades/en#/browse/2af36e64-6e4d-4c09-8ac5-61eff8bd3606/en__0cc257b0-7984-4ba7-b9bf-4b9eec52fa65" target="_blank">izi Travel</a>`,
			text: `<p>Founded in Toronto, the Associação Democrática Portuguesa (Portuguese Canadian Democratic Association) united anti-fascist and pro-democracy elements in the Canadian Portuguese community, and was an outspoken diaspora voice against the dictatorship that had led to the emigration of so many</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>In 1974, the Carnation Revolution democratized Portugal, an event that would reverberate throughout the diaspora. In the years to come, the community's second generation began taking up work as teachers, lawyers, social workers, engineers and civil servants – even stepping into public life as politicians. Many continue to find a place to share language in the numerous community institutions – whether those be churches, markets, or something else.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/portuguese/1996-a.jpg",
			caption: `Credit: <a href="https://izi.travel/en/0cc2-portuguese-toronto-early-decades/en#e0114e2b-0310-4c70-8fef-ed7d7540f980__0cc257b0-7984-4ba7-b9bf-4b9eec52fa65" target="_blank">izi Travel</a>`,
			text: `<p>While Portuguese men had a big role in Toronto's postwar construction boom, Portuguese women had a large role in cleaning buildings across the city. They were routinely underpaid, but fought back by creating the Portuguese-English publication Cleaners' Action Newsletter, and eventually winning a key strike in 1984</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/portuguese/1996-b.jpg",
			caption: `Credit: <a href="https://izi.travel/en/0cc2-portuguese-toronto-early-decades/en#d61bbd4d-6b10-4ab2-b4a6-e1002b97b827__0cc257b0-7984-4ba7-b9bf-4b9eec52fa65" target="_blank">izi Travel</a>`,
			text: `<p>Despite a modest pull toward the suburbs, Toronto's West End remained the hub of its Portuguese community. Year after year, Trinity Bellwoods was home to annual Portugal days celebrations, including this one in 1993</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>The community has continued to age without sustaining its foundational level of immigration. Meanwhile, its third and fourth generations don't maintain the language quite as strongly. All the same, Portuguese remains a key part of Toronto's heritage.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/portuguese/2021.jpg",
			caption: `Credit: <a href="https://izi.travel/en/0cc2-portuguese-toronto-early-decades/en#2411ec80-eb9b-4a32-9c32-f528eb5fb7c0__0cc257b0-7984-4ba7-b9bf-4b9eec52fa65" target="_blank">izi Travel</a>`,
			text: `<p>Cultural institutions still stand strong: here, Azorean Romeiros (pilgrims) gather outside St. Agnes Church on Good Friday in 2016</p>`
		},
	],


	num_rus: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Russian speakers in Toronto in 1971 were a relatively small group. Consisting of immigrants from the early 20th century, and refugees before and after the Second World War, the community was dispersed around the region.</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>The fall of the Soviet Union saw the large-scale emigration of Russian Jews to Israel. Many of them would in turn come to Canada, joining Toronto's existing Jewish community along the upper end of Bathurst Street. Instead of assimilating into the Jewish mainstream, many preserved their specific Soviet Jewish culture as a community.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/russian/2021.png",
			caption: `Credit: <a href="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwYpgVndWSNH-2izps0SzZqrgAG_1X56aUskuxUHeV1Ie1Z5iaGLBU23NeMSZUPQHDmbp3J4g6s7A36geBr1wMS18VL0NUDq-9aRczgPOcWzF3QtQtb2d7nDKIQ0sIaZP1Zhac=s1360-w1360-h1020" target="_blank">Alexandra Kvv</a>`,
			text: `<p>Troyka, a Russian book and gifts store in North York, reflecting the community's preservation of language through education.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Russian-speaking immigration continued over the 2000s through a mix of post-Soviet Jews, Russians, and immigrants from post-Soviet states. They've gone on to concentrate in North York, with local grocers, beauty parlours, public bathhouses, libraries, and Russian after-school programs.</p>`
		}
	],


	num_spa: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Toronto wasn't home to many Spanish speakers before the 1970s, but following a right-wing coup in Chile in 1973, and later Argentina and Uruguay, churchgoers and academics lobbied for refugees from those countries to come to Canada. Many settled in Toronto's West End, and became interwoven with the St. Paul's Avenue United Church and Centre for Spanish Speaking Peoples – both hubs for the growing community.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/spanish/1971.png",
			caption: `Credit: <a href="https://www.heritagetoronto.org/explore/riding-the-waves/" target="_blank">Heritage Toronto</a>`,
			text: `<p>Founded in 1983, the Latin American Women's Collective (LAWC) was amongst the first Latin American feminist groups in the city. It provided space for Spanish-speaking Latin Americans to advocate for women's issues in Canada and in their home countries, once hosting Nicaraguan journalist and feminist Sofia Montenegro</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Tens of thousands of refugees to Toronto from El Salvador in the 1980s and 1990s, fleeing the violence and brutality of the Salvadoran Civil War (1979-1992), besides other conflicts in the region. Like those that came before, many built community through participation: founding advocacy groups like La Farabundo Radio Working Group and the Latino Group Hola, but also cultural hubs like El Convento Rico.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/spanish/2021.jpeg",
			caption: `Credit: <a href="https://www.heritagetoronto.org/explore/riding-the-waves/" target="_blank">Heritage Toronto</a>`,
			text: `<p>Founded in 1991 and named after the Salvadoran Archbishop Oscar Romero, Bloor West's Romero House has provided temporary housing, and community and language services for refugees coming to Toronto – from Latin America and beyond. Pictured above is its annual community block party in 2016</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Today's Spanish Toronto is a diverse one: reflecting many nationalities mostly from the Caribbean, Central America, and South America, arriving through many pathways but united through numerous Spanish-language media, church services, and community groups. Its members trace up along Toronto's western inner suburbs, from Eglinton West to Jane and Finch.</p>`
		}
	],


	num_tam: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>The vast majority of Tamil-speakers came to Toronto as refugees fleeing the Sri Lankan Civil War (1983-2009) – recognized as a genocide by Ontario. As refugees with little wealth to their name, many cramped in the high-rises of St. Jamestown and central Scarborough. They took up formal and informal wage work, and built community up through religion, culture, and anti-war protest, notably blockading the Gardiner in 2009.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/tamil/1996.jpg",
			caption: `Credit: <a href="https://www.heritagetoronto.org/explore/tamil-cooks-toronto-kitchens/allens-on-danforth/" target="_blank">Heritage Toronto</a>`,
			text: `<p>Many Tamil migrants took up work as chefs in the backrooms of kitchens, including Chef Ponniah Vijeyaratnam, pictured in the late 1980s to 1990s at Allen's on the Danforth</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>The community's schools, places of worship, businesses, and media, have consolidated around Scarborough – though wealthier members pursue homeownership all around the suburbs. In recent years, the establishment of Tamil Heritage Month has made official its cultural legacy, as the language is maintained in its dense Scarborough hub.</p>`
		}
	],


	num_tgl: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Tagalog speakers in Toronto were largely the result of Canada's Live-In Caregiver program – dominated by female immigrants from the Philippines who had worked in similar sectors. It was a way to support families back home, though often under precarious conditions, with many new immigrants residing in St James Town and building out early community networks through church.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Labour migration and large-scale family reunification means Tagalog is one of Toronto's fastest growing languages. Filipino communities have built up Church networks, Tagalog-language media, and labour advocacy groups, that preserve the language beyond the home and through the suburbs.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/tagalog/2021.jpg",
			caption: `Credit: <a href="https://www.blogto.com/city/2018/05/little-manila-neighbourhood-filipino-food-toronto/" target="_blank">BlogTO</a>`,
			text: `<p>A growing cluster of Filipinos in North York led to the emergence of Little Manila – an ethnic enclave full of Filipino businesses and restaurants, and a natural juncture for Tagalog speakers</p>`
		},
	],


	num_ukr: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>Ukrainian speakers in Toronto in 1971 reflected two major historical streams: one, of early 20th century agricultural and urban migrants often tied to left-wing unionism, and another, of postwar refugees with no interest in returning to Soviet Ukraine. Settlement clustered around churches, cultural halls, and other everyday institutions that made room for Ukrainian, especially in Toronto's West End.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/ukrainian/1971.png",
			caption: `Credit: <a href="https://www.blogto.com/city/2023/10/300-bathurst-bombing-shook-torontos-ukrainian-community/" target="_blank">BlogTO</a>`,
			text: `<p>The Ukrainian Labour Temple was one such example community organization. Running from the late 1920s to the late 1980s near Bathurst and Dundas, it was a hub for left-wing Ukrainians, and had provided a language school for children – despite being bombed in 1950</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>While the second and third generation did learn some Ukrainian, there was gradual language loss. Its aging postwar refugee population, and a lack of new Ukrainian immigrants, set the stage for declining use. Still, the community built a strong presence in the Bloor West Village neighbourhood.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Like many postwar immigrant communities, Ukrainians kept on moving to the suburbs. More recently, refugees from the Russo-Ukrainian war bring with them a new wave of Ukrainian language use.</p>`
		},
		{
			year: 2021,
			image: "./linguistic-heritage/ukrainian/2021.png",
			caption: `Credit: <a href="https://www.stvolodymyr.org/news/librarian" target="_blank">St. Volodymyr Institute</a>`,
			text: `<p>Institutions like St. Volodymyr Institute keep Ukrainian language heritage alive today – including through a library which contains Ukrainian literature, art, and music</p>`
		},
	],


	num_vie: [
		{
			year: 1996,
			text: `<p>1996</p>
				<p>The Vietnam War created over a million refugees – popularly known as the "boat people", as their only immediate escape route was by sea. Immigration reform in the 1970s saw Canada become more accepting of refugees, with tens of thousands of Vietnamese refugees ending up in Toronto over the 1980s.</p>`
		},
		{
			year: 1996,
			image: "./linguistic-heritage/vietnamese/1996.jpg",
			caption: `Credit: <a href="https://substack.com/home/post/p-145769777?utm_campaign=post&utm_medium=web" target="_blank">Elisa Nguyễn</a>`,
			text: `<p>Covered in the Toronto Star in the 1970s and in other publications later, Vietnamese refugees struggled with culture shock and a new language.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Still, the community has created numerous organizations and institutions – ranging from religion, to parents, to elders, to refugee support, to cultural associations. While lacking a single enclave, some clustering around the Jane and Finch neighborhood and a tight-knit community has made for modest language retention.</p>`
		}
	],


	num_yid: [
		{
			year: 1971,
			text: `<p>1971</p>
				<p>During the 1970s, Toronto's Yiddish community was a mix of Holocaust survivors and earlier waves of Eastern European Jewish immigrants, who would be joined by many Jews from Montreal with the looming prospect of Quebec independence. Formerly packed in dense working class districts on Spadina Avenue, post-war prosperity saw migration up Bathurst Street.</p>`
		},
		{
			year: 1971,
			image: "./linguistic-heritage/yiddish/1971.jpg",
			caption: `Credit: <a href="https://localfilmculturestoronto.wordpress.com/when-chinatown-was-yiddish-the-old-standard-theatre/#_edn5" target="_blank">Local Film Cultures - Toronto</a>`,
			text: `<p>The textile industry employed many Jewish immigrants in the first half of the 1900s. Its concentration around Spadina Avenue led to a growth of Jewish cultural life – including Standard Theatre, a Yiddish language theater during the 1920s and 1930s near Spadina and Dundas</p>`
		},
		{
			year: 1996,
			text: `<p>1996</p>
				<p>Between the extermination of its speaker base in Europe, and shifts toward English and Hebrew within Canada's Jewish immigrants and their descendants, Yiddish continued its terminal decline. Many of its speakers were old, and many of their children did not learn or actively use the language.</p>`
		},
		{
			year: 2021,
			text: `<p>2021</p>
				<p>Modern Toronto has essentially seen Yiddish fade away as a spoken language – although limited usage remains in ultra-Orthodox communities. Today, Yiddish memory lives on through study and heritage.</p>`
		},
	],
};

/**
 * Get sections for a given language, with fallback to a default template
 */
export function getSectionsForLanguage(languageKey, languageName) {
	if (SECTIONS_BY_LANGUAGE[languageKey]) {
		return SECTIONS_BY_LANGUAGE[languageKey];
	}

	// Fallback template for languages not yet configured
	return [
		{
			year: 1971,
			text: `<p>1971 — ${languageName} speakers</p>
				   <p>Early 1970s ${languageName}-speaking population in Toronto.</p>`
		},
		{
			year: 1996,
			text: `<p>1996 — Growth and dispersion</p>
				   <p>By 1996 the ${languageName}-speaking population expanded outwards.</p>`
		},
		{
			year: 2021,
			text: `<p>2021 — Modern distribution</p>
				   <p>2021 shows the current distribution of ${languageName} speakers.</p>`
		}
	];
}
