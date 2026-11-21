export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  state: string;
  heroImage: string;
  galleryImages: string[];
  isOffbeat: boolean;
  category: 'heritage' | 'spiritual' | 'nature' | 'artisan';
  overview: string;
  highlights: string[];
  bestSeason: string;
  idealDuration: string;
  nearestHub: string;
  localCultureTip: string;
}

export interface Journey {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  durationDays: number;
  style: 'Immersive Heritage' | 'Spiritual Discovery' | 'Offbeat Adventure' | 'Slow Travel';
  coverImage: string;
  routeStops: string[];
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    darshanOrHighlight?: string;
    stay: string;
  }[];
}

export interface OffbeatSpot {
  id: string;
  slug: string;
  name: string;
  location: string;
  state: string;
  category:
    | 'Hidden Nature'
    | 'Offbeat Hills'
    | 'Secret Shores'
    | 'Village Stories'
    | 'Forgotten Heritage'
    | 'Wild Escapes'
    | 'Hidden Shrine'
    | 'Sacred Grove'
    | 'Artisan Trail'
    | 'Architectural Marvel'
    | 'Scenic Trail';
  shortDescription: string;
  whyUnderrated: string;
  image: string;
  travelTip: string;
  highlights?: string[];
  bestSeason?: string;
  idealDuration?: string;
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'chettinad',
    name: 'Chettinad Heritage Trail',
    tagline: 'Palaces of teak and stone, artisan tiles, and forgotten village sanctuaries.',
    region: 'South India',
    state: 'Tamil Nadu',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e44208a3?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: true,
    category: 'heritage',
    overview:
      'Chettinad is a cluster of 70+ heritage villages renowned for 19th-century mansions featuring Burmese teak, Italian marble, and handmade Athangudi terracotta tiles. Beyond the grand estates lie ancient Ayyanar terracotta horse shrines nestled in sacred groves.',
    highlights: [
      'Explore palatial 1000-window merchant mansions in Kanadukathan',
      'Witness the handmade Athangudi tile-making process by local masters',
      'Visit mystical terracotta Ayyanar horse shrines in rural groves',
      'Savour authentic, wood-fired culinary delicacies served on plantain leaves',
    ],
    bestSeason: 'October to March',
    idealDuration: '3 to 4 Days',
    nearestHub: 'Madurai (85 km) or Tiruchirappalli (90 km)',
    localCultureTip: 'Dress respectfully with covered shoulders when visiting clan shrines and sacred Ayyanar groves.',
  },
  {
    slug: 'hampi-anegundi',
    name: 'Anegundi & The River Banks of Hampi',
    tagline: 'Cross the Tungabhadra into the ancient boulder-strewn Kishkindha realm.',
    region: 'Deccan Plateau',
    state: 'Karnataka',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e44208a3?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e44208a3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: true,
    category: 'spiritual',
    overview:
      'While central Hampi attracts thousands, crossing the Tungabhadra River on a round wicker coracle leads to Anegundi—older than Vijayanagara itself. Here, ancient rock art, Pampa Sarovar, and hilltop sunset spots offer a deeply serene spiritual encounter.',
    highlights: [
      'Cross the Tungabhadra River on a traditional bamboo coracle boat',
      'Climb the 575 steps of Anjaneya Hill for a 360-degree sunset across granite boulders',
      'Visit the prehistoric Maurya Mane rock dwellings and megalithic paintings',
      'Wander through tranquil banana plantations to Pampa Sarovar lotus pond',
    ],
    bestSeason: 'November to February',
    idealDuration: '3 to 5 Days',
    nearestHub: 'Hubballi Airport (145 km) or Hospet Junction (13 km)',
    localCultureTip: 'Mornings between 6:00 AM and 8:30 AM are best for quiet reflection before the midday sun.',
  },
  {
    slug: 'darasuram-kumbakonam',
    name: 'Darasuram & The Chola Temple Circuit',
    tagline: 'UNESCO World Heritage temples sculptured as musical chariots in stone.',
    region: 'Cauvery Delta',
    state: 'Tamil Nadu',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: false,
    category: 'heritage',
    overview:
      'In the fertile basin of the River Cauvery, the Airavatesvara temple in Darasuram stands as a masterpiece of 12th-century Dravidian architecture. Unlike crowded temples, Darasuram allows travellers to wander alongside miniature stone carvings and singing staircase steps in quiet contemplation.',
    highlights: [
      'Study exquisite miniature carvings depicting Bharatanatyam postures',
      'Marvel at the mandapam carved as an elephant-drawn royal war chariot',
      'Discover bronze casting workshops preserving lost-wax methods in Swamimalai',
      'Taste traditional degree coffee brewed using freshly roasted delta chicory',
    ],
    bestSeason: 'October to March',
    idealDuration: '2 to 3 Days',
    nearestHub: 'Tiruchirappalli International Airport (95 km)',
    localCultureTip: 'Remove footwear at outer gopuram gates and stroll along the polished granite flagstones barefoot.',
  },
  {
    slug: 'lepakshi-gandikota',
    name: 'Lepakshi & The Canyons of Gandikota',
    tagline: 'Hanging stone pillars, monolithic Nandis, and the Indian Grand Canyon.',
    region: 'Rayalaseema',
    state: 'Andhra Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: true,
    category: 'nature',
    overview:
      'Lepakshi is home to the Veerabhadra Temple with its mysterious hanging pillar that barely touches the ground, alongside India’s largest single monolithic Nandi sculpture. Continue into the dramatic gorge of Gandikota, where the Pennar River cuts through red sandstone cliffs.',
    highlights: [
      'Pass a silk cloth under Lepakshi’s famous gravitational hanging stone pillar',
      'Witness sunrise over the 300-foot-deep red sandstone canyon of Gandikota',
      'Explore the ancient ramparts, granary, and Jama Masjid of Gandikota Fort',
      'Stand beside the magnificent 15-foot high monolithic Basavanna (Nandi)',
    ],
    bestSeason: 'October to February',
    idealDuration: '2 to 3 Days',
    nearestHub: 'Bengaluru Kempegowda Airport (130 km to Lepakshi)',
    localCultureTip: 'Carry plenty of hydration and sun protection when hiking along the Gandikota canyon rim.',
  },
  {
    slug: 'goa',
    name: 'Goa Escapes',
    tagline: 'Golden sands, coastal Portuguese heritage, vibrant sunsets, and curated luxury stays.',
    region: 'Konkan Coast',
    state: 'Goa',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: false,
    category: 'nature',
    overview:
      'Goa offers far more than crowded beach shacks. KovilGo curates the peaceful, heritage-rich side of Goa — from century-old Indo-Portuguese mansions in Fontainhas to tranquil secluded beaches in South Goa, private spice plantation luncheons, and serene backwater river cruises.',
    highlights: [
      'Wander through vibrant pastel lanes of Fontainhas Latin Quarter',
      'Relax on pristine, uncrowded shores of Cola and Butterfly beaches',
      'Dine at private heritage estates with slow-cooked Goan-Portuguese gastronomy',
      'Explore hidden mangrove rivers and bird sanctuaries by silent kayak',
    ],
    bestSeason: 'November to March',
    idealDuration: '4 to 6 Days',
    nearestHub: 'Manohar International Airport, Mopa (GOX) or Dabolim (GOI)',
    localCultureTip: 'Respect the peaceful afternoon susegad hours in residential heritage quarters.',
  },
  {
    slug: 'ooty',
    name: 'Ooty & Coonoor Hills',
    tagline: 'Emerald tea estates, colonial bungalows, misty viewpoints, and heritage mountain railways.',
    region: 'Nilgiri Biosphere',
    state: 'Tamil Nadu',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: false,
    category: 'nature',
    overview:
      'Perched high in the Blue Mountains, Ooty and its quieter sister town Coonoor offer a timeless mountain sanctuary. KovilGo curates private tea estate bungalows, guided artisanal cheese tastings, scenic rides on the UNESCO Nilgiri Mountain Railway, and secluded treks through shola forests.',
    highlights: [
      'Stay in private 19th-century colonial tea planter estates',
      'Ride the historic steam-hauled UNESCO Nilgiri Mountain Railway',
      'Walk through rolling green carpets of Coonoor tea gardens',
      'Witness sunset over the mist-clad peaks of Doddabetta and Dolphin’s Nose',
    ],
    bestSeason: 'September to May',
    idealDuration: '3 to 4 Days',
    nearestHub: 'Coimbatore International Airport (88 km)',
    localCultureTip: 'Mornings and evenings can be brisk; carry light woollens year-round.',
  },
  {
    slug: 'kerala',
    name: 'Kerala Getaways',
    tagline: 'Misty tea hills of Munnar, tranquil Alleppey backwaters, and Ayurvedic wellness.',
    region: 'Malabar & Backwaters',
    state: 'Kerala',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: false,
    category: 'nature',
    overview:
      'Known as God’s Own Country, Kerala weaves emerald tea plantations, serene palm-fringed backwaters, and ancient Kathakali traditions into an unforgettable retreat. KovilGo curates private eco-villas in Munnar, solar-powered houseboats in secluded backwater canals, and authentic Ayurvedic wellness therapies.',
    highlights: [
      'Cruise secluded palm-fringed backwater lagoons on a private luxury houseboat',
      'Wake up to mist rolling over Munnar’s high-altitude tea valleys',
      'Experience private Kathakali recitals and Kalaripayattu martial art demonstrations',
      'Indulge in time-honoured restorative Ayurvedic wellness therapies',
    ],
    bestSeason: 'September to March',
    idealDuration: '5 to 7 Days',
    nearestHub: 'Cochin International Airport (COK)',
    localCultureTip: 'Remove footwear when entering traditional nalukettu courtyards and sacred spaces.',
  },
  {
    slug: 'kodaikanal',
    name: 'Kodaikanal Retreats',
    tagline: 'Star-shaped alpine lakes, pine-scented mist, mountain cottages, and slow living.',
    region: 'Palani Hills',
    state: 'Tamil Nadu',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    ],
    isOffbeat: false,
    category: 'nature',
    overview:
      'Set amidst the granite cliffs of the Palani Hills, Kodaikanal — the Gift of the Forest — offers refreshing mountain air, misty pine canopies, and historic stone cottages. KovilGo curates tranquil lakeside escapes, organic farm stays, and scenic trails around Vattakanal far from crowded viewpoints.',
    highlights: [
      'Row classic wooden boats on the serene star-shaped Kodaikanal Lake',
      'Stroll along Coaker’s Walk with sweeping views of the southern plains',
      'Explore dense pine forests and scenic mist trails',
      'Unwind in cozy stone fireplace cottages with locally sourced organic orchard teas',
    ],
    bestSeason: 'October to June',
    idealDuration: '3 to 4 Days',
    nearestHub: 'Madurai Airport (120 km) or Coimbatore Airport (175 km)',
    localCultureTip: 'Respect the fragile shola eco-system by keeping plastic-free on forest walks.',
  },
];

export const JOURNEYS: Journey[] = [
  {
    slug: 'cauvery-heritage-odyssey',
    title: 'The Sacred Cauvery Heritage Odyssey',
    subtitle: 'From Thanjavur’s imperial granaries to coastal French enclaves and quiet delta hamlets.',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    style: 'Immersive Heritage',
    coverImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    routeStops: ['Tiruchirappalli', 'Thanjavur', 'Darasuram', 'Kumbakonam', 'Tranquebar'],
    overview:
      'A slow-paced journey tracing the path of the sacred River Cauvery as it meanders towards the Bay of Bengal. Encounter Great Chola UNESCO temples, bronze-casting artisan hamlets, and the tranquil seaside ramparts of Danish Fort Dansborg.',
    highlights: [
      'Private sunrise walk around the Brihadisvara Temple with a local historian',
      'Hands-on lost-wax bronze casting demonstration in Swamimalai',
      'Strolls through peaceful mango and betel-nut groves in delta villages',
      'Evening seaside breeze at the historic 17th-century Danish fortress in Tharangambadi',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tiruchirappalli & Rockfort Panoramic Vista',
        description: 'Arrive in Trichy. Afternoon visit to the Rockfort Ucchi Pillayar temple overlooking the Cauvery river basin.',
        darshanOrHighlight: 'Sunset view of Sri Ranganathaswamy temple gopurams from above',
        stay: 'Heritage boutique hotel, Tiruchirappalli',
      },
      {
        day: 2,
        title: 'The Great Temple of Thanjavur & Royal Palace Art Gallery',
        description: 'Travel to Thanjavur. Marvel at the 216-foot monolithic tower of Brihadisvara Temple and explore the Maratha palace library.',
        darshanOrHighlight: 'Brihadisvara inner sanctum architecture and Chola murals',
        stay: 'Garden resort near Cauvery riverbank, Thanjavur',
      },
      {
        day: 3,
        title: 'Musical Pillars of Darasuram & Swamimalai Artisan Trail',
        description: 'Explore the chariot-shaped Airavatesvara temple at Darasuram, followed by a visit to master bronze sculptors.',
        darshanOrHighlight: 'Detailed mini-friezes depicting Ramayana legends',
        stay: 'Restored Brahmin agraharam heritage home, Kumbakonam',
      },
      {
        day: 4,
        title: 'Poompuhar Legends & The Danish Coast of Tharangambadi',
        description: 'Drive toward the coast passing lush paddy fields. Arrive in Tranquebar (Tharangambadi) to see the yellow Danish fortress.',
        darshanOrHighlight: 'Evening wave sounds beside 700-year-old Masilamani Nathar coastal temple',
        stay: 'Colonial heritage residence, Tharangambadi',
      },
      {
        day: 5,
        title: 'Morning Coastal Walk & Departure to Chennai/Trichy',
        description: 'Enjoy a leisurely breakfast overlooking fishermen catamaran boats before your private transfer to the departure airport.',
        stay: 'Departure',
      },
    ],
  },
  {
    slug: 'deccan-boulders-and-silent-kingdoms',
    title: 'Silent Kingdoms of the Deccan Plateau',
    subtitle: 'Rock-cut sanctuaries, hidden cave shrines, and boulder-strewn riversides.',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    style: 'Offbeat Adventure',
    coverImage: 'https://images.unsplash.com/photo-1600100397608-f010e44208a3?auto=format&fit=crop&w=1600&q=80',
    routeStops: ['Hubballi', 'Badami', 'Pattadakal', 'Aihole', 'Anegundi (Hampi)'],
    overview:
      'Before Vijayanagara ruled the Deccan, the early Chalukyas carved poetry into red sandstone cliffs. This journey connects the cliffside cave shrines of Badami with the prehistoric trails and serene boulder hills of Anegundi.',
    highlights: [
      'Climb the red sandstone gorge around Agastya Lake at Badami',
      'Examine the cradle of Indian temple architecture in rural Aihole',
      'Coracle boat journey through secluded Tungabhadra river gorges',
      'Stargazing from the top of Kishkindha boulder plateaus',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hubballi to the Red Sandstone Caves of Badami',
        description: 'Arrive in Hubballi and drive to Badami. Evening walk around the serene green waters of Agastya Lake.',
        darshanOrHighlight: 'Four rock-cut caves carved into towering cliff faces',
        stay: 'Heritage eco-lodge, Badami',
      },
      {
        day: 2,
        title: 'The World Heritage Architecture of Pattadakal & Aihole',
        description: 'Witness the fusion of northern Nagara and southern Dravida architectural styles across ancient river temple complexes.',
        darshanOrHighlight: 'The Durga Temple with its rare apsidal sanctuary plan',
        stay: 'Heritage eco-lodge, Badami',
      },
      {
        day: 3,
        title: 'Journey to the Other Side of Hampi — Anegundi',
        description: 'Drive southeast into the Kishkindha realm. Check into a rural village stay surrounded by green paddy and granite outcrops.',
        darshanOrHighlight: 'Crossing the Tungabhadra on a circular coracle boat',
        stay: 'Rural eco-cottage, Anegundi',
      },
      {
        day: 4,
        title: 'Prehistoric Rock Art & The Sunset on Anjaneya Hill',
        description: 'Morning exploration of Maurya Mane Neolithic dolmens, followed by a late afternoon ascent for sunset over the boulder ocean.',
        darshanOrHighlight: 'Sunset over boulder-strewn riverscapes',
        stay: 'Rural eco-cottage, Anegundi',
      },
      {
        day: 5,
        title: 'Untouched Riverside Sanctums of Vijayanagara',
        description: 'Off-the-beaten-track morning walk along the river path connecting Achyutaraya Temple with riverside Shiva lingas.',
        darshanOrHighlight: 'Reflective silence in the Courtyard of Achyutaraya',
        stay: 'Rural eco-cottage, Anegundi',
      },
      {
        day: 6,
        title: 'Farewell to the Deccan & Departure from Hubballi/Hospet',
        description: 'After breakfast, transfer to Hospet railway station or Hubballi airport for onward travel.',
        stay: 'Departure',
      },
    ],
  },
];

export const OFFBEAT_SPOTS: OffbeatSpot[] = [
  {
    id: 'offbeat-1',
    slug: 'pichavaram-mangrove-channels',
    name: 'Pichavaram Mangrove Secret Channels',
    location: 'Chidambaram, Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Hidden Nature',
    shortDescription:
      'Paddle quiet wooden rowboats through 1,100 hectares of natural mangrove forest canopies where sunlight filters through green canopies.',
    whyUnderrated:
      'Most travellers visit the Nataraja temple at Chidambaram but skip this world-class coastal wetland reserve just 15 km away.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Book the traditional wooden rowboat rather than the motorboat for silent birdwatching in narrow channels.',
    highlights: [
      'Rowboat passage through low-hanging mangrove canopies',
      'Over 170 species of resident and migratory waterbirds',
      'Estuarine confluence between Vellar and Coleroon rivers',
      'Authentic fresh coastal catch prepared in local village homes',
    ],
    bestSeason: 'November to February',
    idealDuration: 'Day Trip or 1 Night',
  },
  {
    id: 'offbeat-2',
    slug: 'valparai-anamalai-hills',
    name: 'Valparai & The Anamalai Clouds',
    location: 'Anamalai Hills, Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Offbeat Hills',
    shortDescription:
      'Forty scenic hairpin bends lead into an uncommercialised tea plantation plateau surrounded by evergreen tropical rainforests.',
    whyUnderrated:
      'Far less commercialised than Ooty or Munnar, Valparai preserves untouched rainforest buffers and zero tour bus crowds.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Drive slowly through the 40 hairpin curves; Nilgiri Tahr often graze near the 9th bend.',
    highlights: [
      'Scenic climb through 40 hairpin curves with panoramic valley vistas',
      'Sightings of endangered lion-tailed macaques in private forest pockets',
      'Colonial tea estate walks with fresh high-altitude brew tastings',
      'Tranquil mountain sunsets over the Sholayar Dam reservoir',
    ],
    bestSeason: 'September to March',
    idealDuration: '2 to 3 Days',
  },
  {
    id: 'offbeat-3',
    slug: 'tranquebar-silent-coast',
    name: 'Tranquebar (Tharangambadi) Silent Coast',
    location: 'Nagapattinam Coast, Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Secret Shores',
    shortDescription:
      'Known as the town of singing waves, this historic 1620 Danish settlement features coastal Fort Dansborg and cobblestone colonial lanes.',
    whyUnderrated:
      'Often overlooked for Pondicherry, offering an intact, serene coastal maritime heritage with peaceful sea breezes.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Early morning walks along the sea ramparts offer peaceful views of traditional catamaran fishing crews.',
    highlights: [
      'Explore the mustard-yellow 1620 Danish fortress Fort Dansborg',
      'Stroll along historic King Street lined with 18th-century colonial villas',
      'Listen to the unique rhythmic resonance of the singing waves',
      'Seafood delicacies seasoned with delta pepper and coastal tamarind',
    ],
    bestSeason: 'October to March',
    idealDuration: '2 Days',
  },
  {
    id: 'offbeat-4',
    slug: 'ayyanar-sacred-groves',
    name: 'Ayyanar Sacred Terracotta Groves',
    location: 'Chettinad Rural Perimeter, Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Village Stories',
    shortDescription:
      'Hundreds of life-sized terracotta guardian horses and deity figures stand silent vigil in ancient community-protected village groves.',
    whyUnderrated:
      'Deeply rooted in indigenous folk worship, known almost exclusively to village clans rather than mainstream tour itineraries.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Always request permission from village elders or local guardians before entering the sacred grove precincts.',
    highlights: [
      'Rows of hand-sculpted terracotta guardian horses under sacred banyan canopies',
      'Ancient folk worship customs preserving sacred grove biodiversity',
      'Interactions with traditional potting families who craft the ritual votive offerings',
      'Quiet forest trails untouched by modern construction or vehicular traffic',
    ],
    bestSeason: 'November to February',
    idealDuration: 'Half Day (Part of Chettinad Trail)',
  },
  {
    id: 'offbeat-5',
    slug: 'gandikota-canyon-fort',
    name: 'Gandikota Canyon & The Sunken Stepwells',
    location: 'Kadapa District, Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Forgotten Heritage',
    shortDescription:
      'A dramatic 300-foot red sandstone gorge cut by the Pennar River, crowned by an abandoned 13th-century stone citadel and royal baoli.',
    whyUnderrated:
      'India’s Grand Canyon remains far off mainstream Golden Triangle routes, offering astonishing natural scale and peaceful solitude.',
    image: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Sunrise from the gorge rim brings vivid vermilion hues across the red sandstone canyon walls.',
    highlights: [
      'Sunrise over the 300-foot red sandstone gorge of the Pennar River',
      'Wander the ancient ramparts, granaries, and Jama Masjid of Gandikota Fort',
      'Explore the hidden geometric stepwell tucked behind medieval battlements',
      'Stargazing over the dark canyon skies free from metropolitan light pollution',
    ],
    bestSeason: 'October to February',
    idealDuration: '2 Days',
  },
  {
    id: 'offbeat-6',
    slug: 'athangudi-tile-village',
    name: 'Athangudi Handmade Tile Village',
    location: 'Sivaganga District, Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Village Stories',
    shortDescription:
      'Generational artisans create geometric patterned floor tiles using glass frames, local river soil, and hand-poured mineral dyes.',
    whyUnderrated:
      'Tucked inside rural Chettinad, these eco-friendly sun-cured tile workshops preserve centuries of handmade artistry.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e44208a3?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Master craftsmen warmly invite travellers to observe the glass-frame pattern pouring technique.',
    highlights: [
      'Watch master artisans pour vibrant liquid mineral dyes into brass pattern molds',
      'Learn about the eco-friendly sun-drying and water-curing process',
      'Visit nearby 19th-century Chettinad palatial mansions tiled with antique Athangudi floors',
      'Opportunity to order custom artisan tile souvenirs directly from the makers',
    ],
    bestSeason: 'October to March',
    idealDuration: 'Half Day',
  },
  {
    id: 'offbeat-7',
    slug: 'anegundi-kishkindha-caves',
    name: 'Anegundi Kishkindha Boulder Realm',
    location: 'Koppal District, Karnataka',
    state: 'Karnataka',
    category: 'Wild Escapes',
    shortDescription:
      'Prehistoric rock art, circular coracle river crossings, and granite boulder plateaus older than Vijayanagara itself.',
    whyUnderrated:
      'While central Hampi draws thousands across the river, Anegundi remains a peaceful rural spiritual landscape of bananas and boulders.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Cross the Tungabhadra on a circular bamboo coracle at dawn for quiet meditation.',
    highlights: [
      'Cross the Tungabhadra river on a circular wicker coracle boat',
      'Ascend 575 granite steps of Anjaneya Hill for a 360-degree sunset over boulder fields',
      'Visit Neolithic rock drawings and megalithic dolmens at Maurya Mane',
      'Cycle through organic village farms and quiet banana groves',
    ],
    bestSeason: 'November to February',
    idealDuration: '2 to 3 Days',
  },
  {
    id: 'offbeat-8',
    slug: 'cola-lagoon-beach',
    name: 'Cola Beach Secluded Emerald Lagoon',
    location: 'South Goa Coast, Goa',
    state: 'Goa',
    category: 'Secret Shores',
    shortDescription:
      'A golden sand crescent bordered by towering palm bluffs where a crystal-clear freshwater river lagoon flows directly into the sea.',
    whyUnderrated:
      'Completely sheltered from commercial North Goa party beaches; accessible only via a discreet unpaved cliff descent.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    travelTip: 'Rent a silent kayak to paddle up the freshwater river lagoon surrounded by coastal forest.',
    highlights: [
      'Unique juxtaposition of a sweet freshwater river lagoon and Arabian Sea waves',
      'Kayaking along tranquil palm-fringed backwater waters',
      'Uncrowded golden sand shores ideal for mindful sunset walks',
      'Secluded tented eco-stays surrounded by native coastal flora',
    ],
    bestSeason: 'November to March',
    idealDuration: '2 to 3 Days',
  },
];
