const subGenres = {
  African: [
    "African heavy metal",
    "African hip hop",
    "Afrobeat",
    "Apala",
    "Benga",
    "Bongo Flava",
    "Bikutsi",
    "Cape Jazz",
    "Chimurenga",
    "Congolese rumba",
    "Coupé-Décalé",
    "Fuji music",
    "Genge",
    "Highlife",
    "Hiplife",
    "Igbo highlife",
    "Igbo rap",
    "Isicathamiya",
    "Jit",
    "Jùjú",
    "Kapuka",
    "Kadongo Kamu",
    "Kizomba",
    "Kuduro",
    "Kwaito",
    "Kwela",
    "Makossa",
    "Maloya",
    "Marrabenta",
    "Mbalax",
    "Mbaqanga",
    "Mbube",
    "Morna",
    "Ndombolo",
    "Palm-wine",
    "Raï",
    "Sakara",
    "Sega",
    "Seggae",
    "Semba",
    "Shangaan electro",
    "Soukous",
    "Kwassa kwassa",
    "Taarab",
    "Zouglou",
  ],
  Asian: ["Fann at-Tanbura", "Fijiri", "Khaliji", "Liwa", "Sawt"],
  "Southeast Asian": [
    "Baila",
    "Baul",
    "Bhangra",
    "Dangdut",
    "Filmi",
    "Indian pop",
    "Lavani",
    "Luk Thung",
    "Luk Krung",
    "Manila Sound",
    "Original Pilipino Music",
    "V-pop",
    "Morlam",
    "Pinoy pop",
    "Pop sunda",
    "Thai pop",
    "Ragini",
    "Keroncong",
    "Gamelan",
  ],
  "Avant-garde": [
    "Experimental music",
    "Noise",
    "Lo-fi",
    "Musique concrète",
    "Electroacoustic",
  ],
  Blues: [
    "African blues",
    "Blues rock",
    "Blues shouter",
    "British blues",
    "Canadian blues",
    "Chicago blues",
    "Classic female blues",
    "Contemporary R&B",
    "Country blues",
    "Delta blues",
    "Detroit blues",
    "Electric blues",
    "Gospel blues",
    "Hill country blues",
    "Hokum blues",
    "Jump blues",
    "Kansas City blues",
    "Louisiana blues",
    "Memphis blues",
    "Piedmont blues",
    "Punk blues",
    "Rhythm and blues",
    "Soul blues",
    "St. Louis blues",
    "Swamp blues",
    "Texas blues",
    "West Coast blues",
  ],
  Caribbean: [
    "Baithak Gana",
    "Dancehall Music",
    "Bouyon",
    "Cadence-lypso",
    "Calypso",
    "cha cha cha",
    "Chutney",
    "Chutney soca",
    "Compas",
    "Mambo",
    "Merengue",
    "Méringue",
    "mosambique",
    "Punta",
    "Punta Rock",
    "Rasin",
    "Reggae",
    "Dancehall",
    "Dub",
    "Lovers rock",
    "Ragga",
    "Ragga jungle",
    "Reggae fusion",
    "Reggaeton",
    "Rocksteady",
    "Rumba",
    "Ska",
    "2 Tone",
    "Ska punk",
    "salsa",
    "Son cubano",
    "songo",
    "Soca",
    "Timba",
    "Twoubadou",
    "Zouk",
  ],
  Country: [
    "Alternative country",
    "Cowpunk",
    "Blues country",
    "Hokum",
    "Outlaw country",
    "Progressive country",
    "Zydeco",
    "Country rap",
    "Red Dirt",
    "Rockabilly",
    "Hellbilly music",
    "Psychobilly/Punkabilly",
    "Country rock",
    "Texas country",
    "Americana",
    "Australian country music",
    "Bakersfield sound",
    "Bluegrass",
    "Progressive bluegrass",
    "Reactionary bluegrass",
    "Cajun",
    "Cajun fiddle tunes",
    "Christian country music",
    "Classic country",
    "Close harmony",
    "Dansband music",
    "Franco-country",
    "Honky Tonk",
    "Instrumental country",
    "Nashville sound",
    "Neotraditional country",
    "Country pop",
    "Sertanejo",
    "Traditional country music",
    "Truck-driving country",
    "Western swing",
  ],
  "Easy listening": [
    "Background music",
    "Beautiful music",
    "Elevator music",
    "Furniture music",
    "Lounge music",
    "Middle of the road",
    "New-age music",
  ],
  Electronic: [
    "Ambient",
    "Ambient dub",
    "Dark ambient",
    "Drone music",
    "Space music",
    "Illbient",
    "Psybient",
    "Isolationism",
    "Lowercase",
    "Asian Underground",
    "Breakbeat",
    "Acid breaks",
    "Baltimore club",
    "Big beat",
    "Broken beat",
    "Florida breaks",
    "Nu-funk",
    "Miami bass",
    "Jersey club",
    "Nu skool breaks",
    "Disco",
    "Afro / Cosmic disco",
    "Disco polo",
    "Euro disco",
    "Italo disco",
    "Nu-disco",
    "Space disco",
    "Downtempo",
    "Acid jazz",
    "Chill-out",
    "New-age music",
    "Space music",
    "Trip hop",
    "Drum and bass",
    "Darkstep",
    "Drill and bass",
    "Drumstep",
    "Funkstep",
    "Hardstep",
    "Jump-up",
    "Liquid funk",
    "Neurofunk",
    "Neurohop",
    "Sambass",
    "Techstep",
    "Dub",
    "Electro music",
    "Freestyle music",
    "Electroacoustic music",
    "Acousmatic music",
    "Musique concrète",
    "Electronic rock",
    "Alternative dance",
    "Indietronica",
    "Coldwave",
    "Dance-punk",
    "Dark wave",
    "Electroclash",
    "Electronicore",
    "Electropunk",
    "Ethereal wave",
    "Krautrock",
    "Minimal wave",
    "New rave",
    "Nu-gaze",
    "Space rock",
    "Synthpop",
    "Synthwave",
    "Electronica",
    "Berlin School",
    "Dubtronica",
    "Ethnic electronica",
    "Folktronica",
    "Funktronica",
    "Laptronica",
    "Livetronica",
    "Hardcore",
    "Gabba",
    "4-beat",
    "Breakbeat hardcore",
    "Bouncy techno",
    "Breakcore",
    "Digital hardcore",
    "Darkcore",
    "Happy hardcore",
    "Mákina",
    "Speedcore",
    "UK hardcore",
    "Doomcore",
    "Hardstyle",
    "Dubstyle",
    "Jumpstyle",
    "Lento violento",
    "Hi-NRG",
    "Eurobeat",
    "Eurodance",
    "Bubblegum dance",
    "Italo dance",
    "House music",
    "Acid house",
    "Ambient house",
    "Balearic beat",
    "Chicago house",
    "Deep house",
    "Future house",
    "Tropical house",
    "Bouncy house",
    "Diva house",
    "Electro house",
    "Big room",
    "Complextro",
    "Melbourne bounce",
    "Fidget house",
    "Dutch house",
    "Moombahton",
    "Moombahcore",
    "Electro swing",
    "French house",
    "Funky house",
    "Garage house",
    "Ghetto house",
    "Ghettotech",
    "Hardbag",
    "Hard house",
    "Hard NRG",
    "Nu-NRG",
    "Hip house",
    "Italo house",
    "Jazz house",
    "Kwaito",
    "Latin house",
    "Microhouse",
    "New beat",
    "Outsider house",
    "Progressive house",
    "Rara tech",
    "Tech house",
    "Tribal house",
    "Trival",
    "Witch house",
    "Industrial music",
    "Aggrotech",
    "Cybergrind",
    "Electro-industrial",
    "Dark electro",
    "Electronic body music",
    "Futurepop",
    "Industrial metal",
    "Industrial rock",
    "Japanoise",
    "Neue Deutsche Härte",
    "Power electronics",
    "Death industrial",
    "Power noise",
    "IDM",
    "Glitch",
    "Glitch Hop",
    "Wonky",
    "Jungle",
    "Darkcore jungle",
    "Raggacore",
    "Post-disco",
    "Boogie",
    "Electropop",
    "Chillwave",
    "Dance-pop",
    "Dance-rock",
    "Techno",
    "Acid techno",
    "Detroit techno",
    "Dub techno",
    "Free tekno",
    "Minimal techno",
    "Nortec",
    "Tecno brega",
    "Techdombe",
    "Trance music",
    "Acid trance",
    "Balearic trance",
    "Dream trance",
    "Goa trance",
    "Hard trance",
    "Nitzhonot",
    "Psychedelic trance",
    "Suomisaundi",
    "Full on",
    "Progressive trance",
    "Tech trance",
    "Uplifting trance",
    "Vocal trance",
    "UK garage",
    "2-step garage",
    "Dubstep",
    "Brostep",
    "Chillstep",
    "Reggaestep",
    "Trapstep",
    "Liquid dubstep",
    "Neurohop",
    "Breakstep",
    "Future garage",
    "Grime",
    "Grindie",
    "Speed garage",
    "Bassline",
    "UK funky",
    "Vaporwave",
    "Video game music",
    "Chiptune",
    "Bitpop",
    "Game Boy music",
    "Skweee",
    "Nintendocore",
  ],
  Folk: [
    "American folk revival",
    "Anti-folk",
    "British folk revival",
    "Celtic music",
    "Chalga",
    "Contemporary folk",
    "Filk music",
    "Folktronica",
    "Freak folk",
    "Indie folk",
    "Industrial folk",
    "Neofolk",
    "Progressive folk",
    "Protest song",
    "Psychedelic folk",
    "Singer-songwriter",
    "Skiffle",
    "Sung poetry",
    "Cowboy/Western music",
  ],
  "Hip hop": [
    "Alternative hip hop",
    "Australian hip hop",
    "Bongo Flava",
    "British hip hop",
    "Chap hop",
    "Christian hip hop",
    "Conscious hip hop",
    "Crunk",
    "Crunkcore",
    "Drill",
    "East Coast hip hop",
    "Baltimore club",
    "Brick City club",
    "Hardcore hip hop",
    "Mafioso rap",
    "New Jersey hip hop",
    "Electro music",
    "Experimental hip hop",
    "Ghetto house",
    "Ghettotech",
    "Golden age hip hop",
    "Grime",
    "Hardcore hip hop",
    "Hip house",
    "Hiplife",
    "Hip pop",
    "Industrial hip hop",
    "Instrumental hip hop",
    "Kwaito",
    "Lyrical hip hop",
    "Low Bap",
    "Midwest hip hop",
    "Chicago hip hop",
    "Ghetto house",
    "Detroit hip hop",
    "Ghettotech",
    "St. Louis hip hop",
    "Twin Cities hip hop",
    "Horrorcore",
    "Merenrap",
    "Motswako",
    "Nerdcore",
    "New jack swing",
    "New school hip hop",
    "Old school hip hop",
    "Political hip hop",
    "Ragga",
    "Reggaeton",
    "Rap music",
    "Country-rap",
    "Cumbia rap",
    "Freestyle rap",
    "Gangsta rap",
    "Igbo rap",
    "Jazz rap",
    "Rap opera",
    "Rap rock",
    "Rapcore",
    "Rap metal",
    "Reggae Español/Spanish Reggae",
    "Southern hip hop",
    "Atlanta hip hop",
    "Snap music",
    "Bounce music",
    "Crunk",
    "Houston hip hop",
    "Chopped and screwed",
    "Miami bass",
    "Songo-salsa",
    "Trap",
    "Trip hop",
    "Turntablism",
    "Underground hip hop",
    "Urban Pasifika",
    "West Coast hip hop",
    "Chicano rap",
    "G-funk",
    "Hyphy",
    "Jerkin'",
  ],
  Jazz: [
    "Acid jazz",
    "Afro-Cuban jazz",
    "Asian American jazz",
    "Avant-garde jazz",
    "Bebop",
    "Boogie-woogie",
    "Bossa nova",
    "British dance band",
    "Cape jazz",
    "Chamber jazz",
    "Continental jazz",
    "Cool jazz",
    "Crossover jazz",
    "Dixieland",
    "Ethno jazz",
    "European free jazz",
    "Free funk",
    "Free improvisation",
    "Free jazz",
    "Gypsy jazz",
    "Hard bop",
    "Jazz blues",
    "Jazz-funk",
    "Jazz fusion",
    "Jazz rap",
    "Jazz rock",
    "Kansas City blues",
    "Kansas City jazz",
    "Latin jazz",
    "Livetronica",
    "M-Base",
    "Mainstream jazz",
    "Modal jazz",
    "Neo-bop jazz",
    "Neo-swing",
    "Novelty ragtime",
    "Nu jazz",
    "Orchestral jazz",
    "Post-bop",
    "Punk jazz",
    "Ragtime",
    "Shibuya-kei",
    "Ska jazz",
    "Smooth jazz",
    "Soul jazz",
    "Stride jazz",
    "Straight-ahead jazz",
    "Swing",
    "Third stream",
    "Trad jazz",
    "Vocal jazz",
    "West Coast jazz",
  ],
  Latin: [
    "Brazilian",
    "Axé",
    "Brazilian rock",
    "Brega",
    "Tecnobrega",
    "Choro",
    "Forró",
    "Frevo",
    "Funk Carioca",
    "Lambada",
    "Zouk-Lambada",
    "Maracatu",
    "Música popular brasileira",
    "Tropicalia",
    "Música sertaneja",
    "Samba",
    "Pagode",
    "Samba rock",
    "Latin Christian",
    "Latin jazz",
    "Afro-Cuban jazz",
    "Bossa Nova",
    "Latin pop",
    "Latin ballad",
    "Latin swing",
    "Latin rock",
    "Latin alternative",
    "Rock en Español",
    "Reggaeton",
    "Regional Mexican",
    "Banda",
    "Grupera",
    "Mariachi",
    "Ranchera",
    "Norteño",
    "Tejano",
    "Flamenco",
    "Tango",
    "Bullerengue",
    "Fado",
    "Huayno",
    "Mexican son",
    "Música criolla",
    "Nueva canción",
    "Tropical",
    "Bachata",
    "Bolero",
    "Criolla",
    "Cumbia",
    "Chicha",
    "Porro",
    "Guajira",
    "Mambo",
    "Merengue",
    "Rumba",
    "Salsa",
    "Salsa romántica",
    "Son",
    "Timba",
    "Tropipop",
    "Vallenato",
  ],
  Pop: [
    "Adult contemporary",
    "Arab pop",
    "Baroque pop",
    "Brill Building",
    "Britpop",
    "Bubblegum pop",
    "Canción",
    "Canzone",
    "Chalga",
    "Chanson",
    "Christian pop",
    "Classical crossover",
    "Country pop",
    "C-pop",
    "Mandopop",
    "Dance-pop",
    "Disco polo",
    "Electropop",
    "Europop",
    "Austropop",
    "Eurobeat",
    "French pop",
    "Italo dance",
    "Italo disco",
    "Laïkó",
    "Latin pop",
    "Nederpop",
    "Russian pop",
    "Fado",
    "Folk pop",
    "Iranian pop",
    "Indie pop",
    "J-pop",
    "Jangle pop",
    "K-pop",
    "Latin ballad",
    "Louisiana swamp pop",
    "Mexican pop",
    "New Romanticism",
    "Operatic pop",
    "Pop rap",
    "Pop rock",
    "Power pop",
    "Soft rock",
    "Pop soul",
    "Progressive pop",
    "Psychedelic pop",
    "Rebetiko",
    "Schlager",
    "Sophisti-pop",
    "Space age pop",
    "Sunshine pop",
    "Surf pop",
    "Synthpop",
    "Teen pop",
    "Traditional pop music",
    "Turkish pop",
    "Vispop",
    "Wonky pop",
    "Worldbeat",
  ],
  "R&B and soul": [
    "Contemporary R&B",
    "Disco",
    "Funk",
    "Deep funk",
    "Freestyle music",
    "Go-go",
    "Hip hop soul",
    "P-Funk",
    "Post-disco",
    "Boogie",
    "New jack swing",
    "Rhythm and blues",
    "Soul",
    "Blue-eyed soul",
    "Hip hop soul",
    "Northern soul",
    "Neo soul",
    "Southern soul",
  ],
  Rock: [
    "Alternative rock",
    "Grunge",
    "Post-grunge",
    "Indie rock",
    "Dunedin Sound",
    "Post-punk revival",
    "Sadcore",
    "Dream Pop",
    "Shoegaze",
    "Slowcore",
    "Beat music",
    "Chinese rock",
    "Christian rock",
    "Dark cabaret",
    "Electronicore",
    "Electronic rock",
    "Experimental rock",
    "Art rock",
    "Industrial rock",
    "Post-punk",
    "Gothic rock",
    "No wave",
    "Noise rock",
    "Post-rock",
    "Post-metal",
    "Folk rock",
    "Garage rock",
    "Glam rock",
    "Hard rock",
    "Heavy metal",
    "Alternative metal",
    "Avant-garde metal",
    "Black metal",
    "Symphonic black metal",
    "Viking metal",
    "War metal",
    "Christian metal",
    "Unblack metal",
    "Death metal",
    "Death 'n' roll",
    "Melodic death metal",
    "Technical death metal",
    "Goregrind",
    "Doom metal",
    "Death-doom",
    "Drone metal",
    "Folk metal",
    "Celtic metal",
    "Medieval metal",
    "Pagan metal",
    "Funk metal",
    "Glam metal",
    "Gothic metal",
    "Grindcore",
    "Industrial metal",
    "Latin metal",
    "Metalcore",
    "Melodic metalcore",
    "Deathcore",
    "Mathcore",
    "Neoclassical metal",
    "Nu metal",
    "Post-metal",
    "Power metal",
    "Progressive metal",
    "Djent",
    "Rap metal",
    "Sludge metal",
    "Speed metal",
    "Symphonic metal",
    "Thrash metal",
    "Crossover thrash",
    "Groove metal",
    "Jazz rock",
    "Math rock",
    "Neue Deutsche Härte",
    "New wave",
    "World fusion",
    "Paisley Underground",
    "Desert rock",
    "Pop rock",
    "Soft rock",
    "Progressive rock",
    "Canterbury scene",
    "Krautrock",
    "New prog",
    "Rock in Opposition",
    "Space rock",
    "Psychedelic rock",
    "Acid rock",
    "Freakbeat",
    "Neo-psychedelia",
    "Raga rock",
    "Punk rock",
    "Anarcho punk",
    "Crust punk",
    "D-beat",
    "Art punk",
    "Christian punk",
    "Deathrock",
    "Digital hardcore",
    "Folk punk",
    "Celtic punk",
    "Cowpunk",
    "Gypsy punk",
    "Garage punk",
    "Grindcore",
    "Crustgrind",
    "Noisegrind",
    "Hardcore punk",
    "Post-hardcore",
    "Emo",
    "Screamo",
    "Thrashcore",
    "Crossover thrash",
    "Powerviolence",
    "Street punk",
    "Horror punk",
    "Pop punk",
    "Psychobilly",
    "Riot grrrl",
    "Ska punk",
    "Skate punk",
    "Rap rock",
    "Rapcore",
    "Rock and roll",
    "Southern rock",
    "Stoner rock",
    "Sufi rock",
    "Surf rock",
    "Visual kei",
    "Nagoya kei",
    "Worldbeat",
  ],
};

export default subGenres;
