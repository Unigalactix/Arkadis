// Dramatis Personae data source: every named character mentioned across the Stories archive,
// the Episode chronicle, and the Society dossiers. Classified by narrative `priority` (how
// central they are to the telling) and tagged with `contexts` (where their story is told) so
// characters.js can render filterable/searchable roster cards, mirroring the
// episodes.js + episodes_data.js data/render split used elsewhere in this codebase.

export const priorityOrder = ["Primary", "Secondary", "Minor / Historical"];

export const characters = [
    // ---- PRIMARY CAST ----
    {
        id: 'reno',
        name: 'Reno R. Kington',
        title: 'Knight of Erasure \u2014 "Mr. Arkadis" (2011)',
        faction: 'The Order',
        priority: 'Primary',
        contexts: ['Episodes', 'Stories', 'Society'],
        appearsIn: ['Episodes: Outside Ops & Final Collapse', 'Mister Flashback 20A\u201320F', 'Ice Age Flashback 22A\u201322B', 'Volcanic Rage Flashback 39A\u201339B', "Stories: The Knight's Anchor, Shadow Hearts", 'Society: The Order'],
        bio: "The Order's primary enforcer, torn between duty to Claus and Seraphine, his wife Elara, and his secret lover Sariel. Once the undefeated Arena champion \"Mr. Arkadis,\" now the reluctant hand behind every erasure.",
        quote: '"It won\u2019t happen again. I\u2019ll handle the Council."'
    },
    {
        id: 'claus',
        name: 'Claus Arcadian',
        title: 'The King / Head of Family',
        faction: 'House of Arcadian',
        priority: 'Primary',
        contexts: ['Society', 'Episodes'],
        appearsIn: ['Society: The Order', 'Episodes 21\u201344'],
        bio: 'Absolute ruler of Arkadis. His vision of a "Perfect Sanctuary" demands total isolation from the outside world \u2014 and total obedience within it.'
    },
    {
        id: 'seraphine',
        name: 'Seraphine V. Valorian',
        title: 'The Queen / The Strategist',
        faction: 'House of Arcadian',
        priority: 'Primary',
        contexts: ['Society', 'Episodes'],
        appearsIn: ['Society: The Order', 'Episodes 30\u201344 (Queen Reveal, Final Collapse)'],
        bio: "The cold architect behind the Order's deepest control protocols. Views the Unveiled as a \"biological error\" to be purged, and her son Lyros as an asset to be shaped."
    },
    {
        id: 'lyros',
        name: 'Lyros Arcadian',
        title: 'The Heir / Prince',
        faction: 'House of Arcadian',
        priority: 'Primary',
        contexts: ['Stories', 'Society', 'Episodes'],
        appearsIn: ["Stories: The Prince's Doubt", 'Society: The Order', 'Episodes: Inside Arkadis'],
        bio: 'Seventeen years old and listening to rebel broadcasts on the low-freq bands. Sees his father\u2019s vision as a cage and the rebels as birds he envies. "The Pawn or the Player?"'
    },
    {
        id: 'elara',
        name: 'Elara Kington',
        title: "Reno's Wife",
        faction: 'The Order (by marriage)',
        priority: 'Primary',
        contexts: ['Stories'],
        appearsIn: ["Stories: The Knight's Anchor"],
        bio: 'Catalogs the very missions her husband executes in the dark. Ten years married to a man defined by what remains unsaid \u2014 she keeps a hidden, forbidden rose as proof something real survived.'
    },
    {
        id: 'sariel',
        name: 'Sariel',
        title: "Reno's Secret Lover / Bio-Engineer",
        faction: 'The Unveiled (informant)',
        priority: 'Primary',
        contexts: ['Stories'],
        appearsIn: ['Stories: Shadow Hearts'],
        bio: 'Lead Bio-Engineer at Veyrath Labs. Secretly grafts \u2018Identity Nullifiers\u2019 into Reno\u2019s gear, risking Biological Purge protocols every time they meet at the edge of the Wild Zone.'
    },
    {
        id: 'jaxen',
        name: 'Jaxen Vane',
        title: 'Leader of The Unveiled',
        faction: 'The Unveiled',
        priority: 'Primary',
        contexts: ['Stories', 'Episodes'],
        appearsIn: ['Stories: The Spark of Unveiling, The Prince\u2019s Doubt', 'Episodes: Worldbuilding / Political'],
        bio: 'Ex-Sentinel Captain who let a mother and child drift free instead of erasing them. Studied the Outside in secret for six months before resigning his commission to found the Unveiled.'
    },

    // ---- SECONDARY CAST ----
    {
        id: 'mira-belrose',
        name: 'Mira Belrose',
        title: 'Nano-Architect / Technical Lead',
        faction: 'The Unveiled',
        priority: 'Secondary',
        contexts: ['Stories'],
        appearsIn: ['Stories: The Code of Mira'],
        bio: 'Once a designer for the King, now writes the viruses that blind the Sentinels for sixty seconds every midnight \u2014 the only \u2018Doorway\u2019 a rebel has to slip through the grid.'
    },
    {
        id: 'koal',
        name: 'Koal Silas',
        title: 'Ground Operative',
        faction: 'The Unveiled',
        priority: 'Secondary',
        contexts: ['Stories'],
        appearsIn: ["Stories: The Printer's Errand"],
        bio: 'A Tier-2 maintenance worker who smuggles printed contraband \u2014 travel magazines, forbidden beauty \u2014 into communal bathrooms as a silent protest.'
    },
    {
        id: 'octavia',
        name: 'Octavia Rampart',
        title: 'Rook \u2014 Infrastructure & Builder',
        faction: 'The Order (Inner Circle)',
        priority: 'Secondary',
        contexts: ['Society', 'Episodes'],
        appearsIn: ['Society: The Order', 'Episodes: Rise of Land Flashback 11A\u201311B', 'Volcanic Rage Flashback 39A\u201339B'],
        bio: "The Inner Circle's builder. Led the coastal reinforcement crews during the sudden landmass growth, and decades later raced to stabilize the Triple Junction core."
    },
    {
        id: 'magnus',
        name: 'Magnus Fortress',
        title: 'Rook \u2014 Defense & Military',
        faction: 'The Order (Inner Circle)',
        priority: 'Secondary',
        contexts: ['Society', 'Episodes'],
        appearsIn: ['Society: The Order', 'Episodes: Rise of Land Flashback 11A\u201311B'],
        bio: "The Inner Circle's military architect, present since the founding-era coastline crisis that shaped modern Arkadis."
    },
    {
        id: 'minister-thalia',
        name: 'Minister Thalia',
        title: 'Governance Panel \u2014 Agriculture',
        faction: 'The Order (Governance Panel)',
        priority: 'Secondary',
        contexts: ['Society', 'Episodes'],
        appearsIn: ['Society: The Order', 'Episodes: Ice Age Flashback 22A\u201322B'],
        bio: 'Oversees the bio-dome food supply. Authored the rationing doctrine still enforced today, born from the Long Frost crisis of the founding era.'
    },
    {
        id: 'minister-orin',
        name: 'Minister Orin',
        title: 'Governance Panel \u2014 Energy',
        faction: 'The Order (Governance Panel)',
        priority: 'Secondary',
        contexts: ['Society', 'Episodes'],
        appearsIn: ['Society: The Order', 'Episodes: Ice Age Flashback 22A\u201322B'],
        bio: 'Keeper of the geothermal cloaking vents. Nearly lost Arkadis to an ice-locked surface during the founding era before the vents were cleared.'
    },
    {
        id: 'lucian',
        name: 'Lucian Shadowend',
        title: 'Bishop \u2014 Knowledge & Surveillance',
        faction: 'The Order (Inner Circle)',
        priority: 'Secondary',
        contexts: ['Society'],
        appearsIn: ['Society: The Order'],
        bio: 'Keeper of every record and every wiretap. If the Order knows a secret, Lucian catalogued it first.'
    },
    {
        id: 'cassian',
        name: 'Cassian Veyrath',
        title: 'Bishop \u2014 Religious Doctrine',
        faction: 'The Order (Inner Circle)',
        priority: 'Secondary',
        contexts: ['Society'],
        appearsIn: ['Society: The Order'],
        bio: 'Shapes the dawn rituals and civic oaths that keep every household renewing its allegiance to the Order.'
    },
    {
        id: 'mira-stormwatch',
        name: 'Mira Stormwatch',
        title: 'Knight \u2014 Infiltration',
        faction: 'The Order (Inner Circle)',
        priority: 'Secondary',
        contexts: ['Society'],
        appearsIn: ['Society: The Order'],
        bio: 'Not to be confused with Mira Belrose of the Unveiled \u2014 this Mira infiltrates for the Order itself, though whispers persist she\u2019s a double agent.'
    },

    // ---- MINOR / HISTORICAL ----
    {
        id: 'founder',
        name: 'Arkadis the Founder',
        title: 'The Founder (c. 975 BCE)',
        faction: 'The Twelve / First Bloodline',
        priority: 'Minor / Historical',
        contexts: ['Episodes', 'History'],
        appearsIn: ['Episodes: Origins of Secret Society Flashback 24A\u201324D', 'History: The Founding'],
        bio: 'Landed on the volcanic island and discovered the Triple Junction energy source, laying the first stone of the sanctuary that would become Arkadis.'
    },
    {
        id: 'aethelred',
        name: 'Aethelred',
        title: 'The Blind Mapmaker \u2014 one of The Twelve',
        faction: 'The Twelve',
        priority: 'Minor / Historical',
        contexts: ['Stories', 'History'],
        appearsIn: ['Stories: The First Selection'],
        bio: 'Sensed tectonic shifts through his feet and, in 542 AD, was first to realize Arkadis was not naturally formed: "We are standing on a giant clock."'
    },
    {
        id: 'rootvein',
        name: 'Master Rootvein',
        title: 'The Silent Gardener',
        faction: 'Unaffiliated',
        priority: 'Minor / Historical',
        contexts: ['Stories'],
        appearsIn: ['Stories: The Silent Gardener'],
        bio: 'Oversees the Lumina Gardens and secretly grafts \u2018Signal-Relay\u2019 biologicals into the root systems \u2014 a broadcast network hidden in plain sight.'
    },
    {
        id: 'thorne',
        name: 'Dr. Aris Thorne',
        title: 'Void Canon Researcher',
        faction: 'The Order (Science Division)',
        priority: 'Minor / Historical',
        contexts: ['Stories'],
        appearsIn: ['Stories: Void Echoes'],
        bio: 'Discovered the Void Canon towers "record" the history of the world they hide from \u2014 including the fall of the Berlin Wall, scrubbed from Arkadic history books.'
    },
    {
        id: 'kaelen',
        name: 'Kaelen Voss',
        title: 'Signal Hunter',
        faction: 'Unaffiliated',
        priority: 'Minor / Historical',
        contexts: ['Stories'],
        appearsIn: ['Stories: The Glitch'],
        bio: 'Found a three-second gap in the satellite lensing revealing Arkadis\u2019s true coordinates. Now choosing between fixing the hole or widening it.'
    },
    {
        id: 'vespera',
        name: 'Vespera',
        title: 'The Residue',
        faction: 'Legend',
        priority: 'Minor / Historical',
        contexts: ['Stories'],
        appearsIn: ['Stories: Vespera\u2019s Whisper'],
        bio: 'A legend of the Wild Zones \u2014 claims to be from a future Arkadis where the Veil has already fallen, and speaks to wanderers of a world with no Tiers, only sky.'
    }
];
