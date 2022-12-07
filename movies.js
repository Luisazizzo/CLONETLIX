const moviesFile = [
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    genre_ids: [28, 12, 878],
    id: 505642,
    original_language: "en",
    original_title: "Black Panther: Wakanda Forever",
    overview:
      "La Regina Ramonda, Shuri, M’Baku, Okoye e le Dora Milaje, lottano per proteggere la loro nazione dalle invadenti potenze mondiali dopo la morte di Re T’Challa. Mentre gli abitanti del Wakanda cercano di comprendere il prossimo capitolo della loro storia, gli eroi devono riunirsi con l’aiuto di War Dog Nakia e di Everett Ross e forgiare un nuovo percorso per il regno del Wakanda.",
    popularity: 4853.507,
    poster_path:
      "https://image.tmdb.org/t/p/w500/fkg6zP3baUeOfeKEleVV06iglXV.jpg",
    release_date: "2022-11-09",
    title: "Black Panther: Wakanda Forever",
    video: false,
    vote_average: 7.6,
    vote_count: 533,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
    genre_ids: [27, 53],
    id: 663712,
    original_language: "en",
    original_title: "Terrifier 2",
    overview:
      "Art the Clown (David Howard Thornton), resuscitato da un'entità sinistra e malvagia, torna nella timida cittadina di Miles County durante la notte di Halloween. Questa volta la sua attenzione si orienta verso una ragazza adolescente, in compagnia del fratello minore.",
    popularity: 3396.717,
    poster_path:
      "https://image.tmdb.org/t/p/w500/kXyRrBOTi4fcZNWwg0UaWNuSdXP.jpg",
    release_date: "2022-10-06",
    title: "Terrifier 2",
    video: false,
    vote_average: 7,
    vote_count: 589,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    genre_ids: [28, 14, 878],
    id: 436270,
    original_language: "en",
    original_title: "Black Adam",
    overview:
      "Black Adam, il cui vero nome è Teth-Adam, è un uomo dell'Antico Egitto ridotto in schiavitù e in seguito ucciso. Grazie al potere del mago Shazam ritorna in vita e gli vengono conferiti grandi poteri, come forza, agilità e la capacità di volare, ma nonostante queste doti, il suo cuore non è puro.  Dopo essere stato a lungo imprigionato, Black Adam viene liberato e dovrà confrontarsi con i supereroi in vita per capire che, non solo un grande potere, ma anche nobili azioni e sacrificio fanno di un uomo un eroe.",
    popularity: 3660.328,
    poster_path:
      "https://image.tmdb.org/t/p/w500/93ApsNWCouIjjotiRgiG6T51o7h.jpg",
    release_date: "2022-10-19",
    title: "Black Adam",
    video: false,
    vote_average: 6.9,
    vote_count: 1075,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/b2FxWOxe9K7ZZ1uaPOze2RJ1ajq.jpg",
    genre_ids: [27, 28, 35],
    id: 675054,
    original_language: "es",
    original_title: "MexZombies",
    overview: "",
    popularity: 2794.744,
    poster_path:
      "https://image.tmdb.org/t/p/w500/85zufUxhD97k2s5Bu2u101Qd8Sg.jpg",
    release_date: "2022-10-26",
    title: "MexZombies",
    video: false,
    vote_average: 7.3,
    vote_count: 71,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/u9Io1hVnxb2b3T0z99aOK8sq0SN.jpg",
    genre_ids: [9648, 12, 80],
    id: 829280,
    original_language: "en",
    original_title: "Enola Holmes 2",
    overview:
      "Diventata un’investigatrice privata come il suo celebre fratello, Enola Holmes accetta il suo primo caso per trovare una ragazza scomparsa mentre la scintilla di una cospirazione pericolosa accende un mistero che richiederà l’aiuto dei suoi amici e di Sherlock stesso.",
    popularity: 3224.502,
    poster_path:
      "https://image.tmdb.org/t/p/w500/jPtF2kYXBqGeKAzMR4BCixArdhL.jpg",
    release_date: "2022-11-04",
    title: "Enola Holmes 2",
    video: false,
    vote_average: 7.8,
    vote_count: 807,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
    genre_ids: [10752, 18, 28],
    id: 49046,
    original_language: "de",
    original_title: "Im Westen nichts Neues",
    overview:
      "L'avvincente storia di un giovane soldato tedesco in prima linea a ovest durante la Grande guerra. Paul e i suoi commilitoni vivono sulla propria pelle come l'euforia iniziale per il conflitto si trasforma in disperazione e paura mentre in trincea combattono per la propria vita e tra di loro.",
    popularity: 2428.602,
    poster_path:
      "https://image.tmdb.org/t/p/w500/2PUMJNFMs4itgRWXaS8snUathxM.jpg",
    release_date: "2022-10-07",
    title: "Niente di nuovo sul fronte occidentale",
    video: false,
    vote_average: 7.8,
    vote_count: 746,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/pGx6O6IwqADOsgmqWzPysmWnOyr.jpg",
    genre_ids: [28, 14],
    id: 732459,
    original_language: "en",
    original_title: "Blade of the 47 Ronin",
    overview: "",
    popularity: 2002.3,
    poster_path:
      "https://image.tmdb.org/t/p/w500/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg",
    release_date: "2022-10-25",
    title: "Blade of the 47 Ronin",
    video: false,
    vote_average: 6.9,
    vote_count: 70,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
    genre_ids: [53],
    id: 985939,
    original_language: "en",
    original_title: "Fall",
    overview:
      "Per i migliori amici Becky e Hunter, la vita consiste nel vincere le paure e superare i limiti. Ma dopo essersi arrampicati per 2.000 piedi fino alla cima di una torre radio abbandonata, si ritrovano bloccati senza possibilità di scendere. Ora le abilità di Becky e Hunter nell'arrampicata saranno messe a dura prova, mentre lottano disperatamente per sopravvivere agli elementi, alla mancanza di rifornimenti e alle altezze vertiginose.",
    popularity: 1741.806,
    poster_path:
      "https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    video: false,
    vote_average: 7.3,
    vote_count: 1730,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
    genre_ids: [27, 53],
    id: 760161,
    original_language: "en",
    original_title: "Orphan: First Kill",
    overview:
      "Dopo la fuga da una struttura psichiatrica Esther, interpretata da Isabelle Fuhrman, si reca in America, s'insinua in una famiglia benestante, ma finisce per scontrarsi con un madre iperprotettiva e piuttosto combattiva interpretata da Julia Stiles",
    popularity: 1639.315,
    poster_path:
      "https://image.tmdb.org/t/p/w500/l8WZDmjJCxOhGToTlhO6l9YAytr.jpg",
    release_date: "2022-07-27",
    title: "Orphan: First Kill",
    video: false,
    vote_average: 6.8,
    vote_count: 1286,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
    genre_ids: [27, 53, 9648],
    id: 717728,
    original_language: "en",
    original_title: "Jeepers Creepers: Reborn",
    overview:
      "Costretta a viaggiare insieme al ragazzo, Laine comincia ad avere premonizioni che si possono collegare al mito del Creeper e si convince di trovarsi invischiata nell'evocazione di qualcosa di soprannaturale.",
    popularity: 1487.516,
    poster_path:
      "https://image.tmdb.org/t/p/w500/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
    release_date: "2022-09-15",
    title: "Jeepers Creepers: Reborn",
    video: false,
    vote_average: 5.8,
    vote_count: 454,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/yo0qfH2dQGGMxkfivdkz5zxVatD.jpg",
    genre_ids: [27, 53],
    id: 830788,
    original_language: "en",
    original_title: "The Invitation",
    overview:
      "Dopo la morte della madre, Evie viene avvicinata da un cugino sconosciuto che la invita a un sontuoso matrimonio nella campagna inglese. Ben presto, la ragazza si rende conto che è in atto una cospirazione gotica e deve lottare per la sopravvivenza mentre scopre segreti contorti nella storia della sua famiglia.",
    popularity: 1193.908,
    poster_path:
      "https://image.tmdb.org/t/p/w500/tUQK7p4fg94sRHnMMn93pyVsWYp.jpg",
    release_date: "2022-08-24",
    title: "The Invitation",
    video: false,
    vote_average: 6.4,
    vote_count: 316,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg",
    genre_ids: [27, 53],
    id: 420634,
    original_language: "en",
    original_title: "Terrifier",
    overview:
      "Il sadico Art the Clown non è morto. Gira ancora per le strade deserte di Miles County con il suo vestito da pagliaccio e il suo trucco inquietante, portandosi sulle spalle un grosso sacco nero della spazzatura pieno di chissà cosa. Ogni notte di Halloween si diverte come un matto a massacrare chi incontra per strada. Questa volta è il turno di due amiche appena uscite da una festa che si ritroveranno chiuse con Art the Clown in un vecchio edificio abbandonato.",
    popularity: 1159.662,
    poster_path:
      "https://image.tmdb.org/t/p/w500/9NuVlVLpTMk8D5weXPWxSHIx0IL.jpg",
    release_date: "2016-03-15",
    title: "Terrifier",
    video: false,
    vote_average: 6.6,
    vote_count: 963,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/f9g3R9gq0bASip9RnK2H56dbb5j.jpg",
    genre_ids: [53],
    id: 979924,
    original_language: "en",
    original_title: "On the Line",
    overview:
      "Un conduttore radiofonico provocatorio e tagliente deve giocare al gatto e al topo con un misterioso interlocutore che ha rapito la sua famiglia e minaccia di far saltare in aria l'intera stazione.",
    popularity: 1533.554,
    poster_path:
      "https://image.tmdb.org/t/p/w500/8p1hDIwaRtOKXhe8gfVHGUB54kw.jpg",
    release_date: "2022-10-31",
    title: "On the Line",
    video: false,
    vote_average: 6.6,
    vote_count: 98,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
    genre_ids: [14, 35, 10751],
    id: 642885,
    original_language: "en",
    original_title: "Hocus Pocus 2",
    overview:
      "Dopo 29 anni, la Candela dalla fiamma nera è stata accesa riportando in vita le sorelle del 17° secolo, che ora cercano vendetta. Toccherà a tre liceali impedire alle diaboliche streghe di scatenare di nuovo scompiglio su Salem prima dell’alba della vigilia di Ognissanti.",
    popularity: 1225.705,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ejmMQggGCqTvKw0HbJkfj9qFWmR.jpg",
    release_date: "2022-09-27",
    title: "Hocus Pocus 2",
    video: false,
    vote_average: 7.5,
    vote_count: 1094,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    genre_ids: [28, 18],
    id: 361743,
    original_language: "en",
    original_title: "Top Gun: Maverick",
    overview:
      "Dopo più di trent’anni di servizio nella Marina, il Tenente Pete “Maverick” Mitchell è proprio dove vorrebbe essere: un pilota coraggioso che può spingersi oltre ogni limite, cercando di schivare l’avanzamento di carriera che metterebbe un freno alla sua libertà. Quando viene ri-chiamato ad addestrare i migliori allievi Top Gun per una missione specializzata che nessuno al mondo ha mai portato a compimento, Maverick incontra il Tenente Bradley Bradshaw, nome in codice “Rooster”: è il figlio di Nick , il compianto “Goose.” Alle prese con un futuro incerto e con i fantasmi del passato, Maverick deve confrontarsi con le sue paure più profonde, fino ad una missione che richiederà il sacrificio ultimo di quelli che sceglieranno di parteciparvi.",
    popularity: 1180.077,
    poster_path:
      "https://image.tmdb.org/t/p/w500/keAFiVKfJGXENjmSjsSG5blbWJ0.jpg",
    release_date: "2022-05-24",
    title: "Top Gun: Maverick",
    video: false,
    vote_average: 8.3,
    vote_count: 4736,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg",
    genre_ids: [878],
    id: 575322,
    original_language: "en",
    original_title: "Звёздный разум",
    overview:
      "Un thriller di fantascienza su una missione spaziale inviata per terraformare un pianeta lontano. Tuttavia, la missione incontra qualcosa di sconosciuto che ha un proprio piano per il pianeta.",
    popularity: 1135.198,
    poster_path:
      "https://image.tmdb.org/t/p/w500/rFljUdOozFEv6HDHIFpFvcYW0ec.jpg",
    release_date: "2022-01-06",
    title: "Project Gemini",
    video: false,
    vote_average: 5.6,
    vote_count: 165,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/akYTfFvYkFGJReFxXM841NidlAa.jpg",
    genre_ids: [80, 18],
    id: 1033107,
    original_language: "en",
    original_title: "Wild Is the Wind",
    overview: "",
    popularity: 1359.047,
    poster_path:
      "https://image.tmdb.org/t/p/w500/rITxQBtnMpneZf8QzH1dqONQocx.jpg",
    release_date: "2022-10-28",
    title: "Wild Is the Wind",
    video: false,
    vote_average: 5.8,
    vote_count: 30,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/3Ykwi0ObNpqy5gAwhddmxKWs1dp.jpg",
    genre_ids: [53, 18],
    id: 848526,
    original_language: "fr",
    original_title: "Arsenault & Fils",
    overview: "",
    popularity: 1123.346,
    poster_path:
      "https://image.tmdb.org/t/p/w500/2symxAMYXpJ9mJ8YOc2b5ZEKIAQ.jpg",
    release_date: "2022-06-17",
    title: "Arsenault & Fils",
    video: false,
    vote_average: 5.1,
    vote_count: 5,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/cvOHMfZTxIiNI9yyjYgYfCpT48p.jpg",
    genre_ids: [28, 80, 53],
    id: 944864,
    original_language: "nl",
    original_title: "The Takeover",
    overview:
      'Incastrata per omicidio dopo aver svelato uno scandalo legato alla privacy, un\'hacker etica deve sfuggire alla polizia mentre cerca di trovare i criminali che la ricattano con un video "deepfake" che mostra mentre commette un omicidio.',
    popularity: 1341.62,
    poster_path:
      "https://image.tmdb.org/t/p/w500/vmvhUTfrFxJhUsJu1Pfj9YUODZi.jpg",
    release_date: "2022-11-01",
    title: "The Takeover",
    video: false,
    vote_average: 5.7,
    vote_count: 62,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
    genre_ids: [28, 12, 14],
    id: 960704,
    original_language: "ja",
    original_title: "鋼の錬金術師 完結編 最後の錬成",
    overview:
      "Il lungo e tortuoso viaggio dei fratelli Elric si conclude in questo epico finale, in cui devono affrontare una minaccia ultraterrena e nazionale.",
    popularity: 1128.456,
    poster_path:
      "https://image.tmdb.org/t/p/w500/jqCPQ6mHr2QkfMiKcx3aBjDFHjm.jpg",
    release_date: "2022-06-24",
    title: "Fullmetal Alchemist - Alchimia finale",
    video: false,
    vote_average: 6.3,
    vote_count: 118,
  },
];
export default moviesFile;
