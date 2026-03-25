const rawEpisodes = [
    {
        no: 1,
        title: "Static Over Cape Town",
        summary: "Reno tracks the first Unveiled leak in Africa and wipes every server mirror before dawn."
    },
    {
        no: 2,
        title: "Rio Signal Blackout",
        summary: "In South America, Reno stages a citywide outage to erase footage tied to Arkadis coordinates."
    },
    {
        no: 3,
        title: "Lisbon Ghost Route",
        summary: "A courier chain in Europe is dismantled as Reno burns the paper trail and digital backups."
    },
    {
        no: 4,
        title: "Jakarta Floodfeed",
        summary: "Reno infiltrates a pirate stream in Asia and replaces leaked files with fabricated weather data."
    },
    {
        no: 5,
        title: "Sydney Quiet Tide",
        summary: "In Australia, a deep-net broker vanishes after Reno recovers a map fragment of Arkadis waters."
    },
    {
        no: 6,
        title: "Arctic Null Patrol",
        summary: "Reno intercepts a polar research relay in the Arctic Circle and scrubs expedition telemetry."
    },
    {
        no: 7,
        title: "Anchorage White Noise",
        summary: "North American analysts lose their lead when Reno seeds false geospatial signatures."
    },
    {
        no: 8,
        title: "Sahara Burn File",
        summary: "A nomad data caravan in Africa is neutralized as Reno recovers encrypted leak shards."
    },
    {
        no: 9,
        title: "Andes Dead Beacon",
        summary: "Reno scales a mountain repeater in South America to delete a live triangulation stream."
    },
    {
        no: 10,
        title: "Antarctic Last Echo",
        summary: "At the southern research grid, Reno erases the final outside clue and returns to Arkadis."
    },
    {
        no: 11,
        title: "Gates of the Eighth Continent",
        summary: "The story enters Arkadis, introducing the concealed harbors, dome tiers, and entry rites."
    },
    {
        no: 12,
        title: "Tiers of Breath",
        summary: "Readers learn how citizens are ranked by district access, labor class, and civic duty."
    },
    {
        no: 13,
        title: "Festival of First Light",
        summary: "Arkadis celebrates its annual dawn ritual where every household renews allegiance to the Order."
    },
    {
        no: 14,
        title: "The Iron Etiquette",
        summary: "Social customs of speech, posture, and silence reveal how obedience is woven into daily life."
    },
    {
        no: 15,
        title: "Schools of the Veil",
        summary: "Children are trained under curated history, loyalty tests, and selective memory doctrine."
    },
    {
        no: 16,
        title: "Markets Under Glass",
        summary: "The biodome bazaars expose Arkadis currency rules, ration priorities, and class privileges."
    },
    {
        no: 17,
        title: "The Seven Tea Oaths",
        summary: "A family ceremony reveals the seven spoken vows expected from every household line."
    },
    {
        no: 18,
        title: "Whispers in Tier Three",
        summary: "Workers in lower districts trade coded folk songs that hide rebellion messages."
    },
    {
        no: 19,
        title: "The Sentinel Parade",
        summary: "Military pageantry masks a widening gap between public confidence and private fear."
    },
    {
        no: 20,
        title: "Reno at the Margin",
        summary: "Reno appears briefly, now sidelined, as internal politics push him away from core decisions."
    },
    {
        no: 21,
        title: "Council of Eight Shadows",
        summary: "The Inner Circle is introduced in full, each seat tied to bloodline and strategic function."
    },
    {
        no: 22,
        title: "Doctrine and Bread",
        summary: "Ministers maintain order through paired control of ideology, food, and medicine channels."
    },
    {
        no: 23,
        title: "The Marriage Ledger",
        summary: "Partnerships are shown to be state instruments, negotiated to preserve influence and lineage."
    },
    {
        no: 24,
        title: "Inheritance of Silence",
        summary: "Ancestral records reveal how secrets are passed as duty from one generation to the next."
    },
    {
        no: 25,
        title: "The Unveiled Sermon",
        summary: "Rebel broadcasts reach city interiors, reframing tradition as engineered captivity."
    },
    {
        no: 26,
        title: "Faultline of Faith",
        summary: "Citizens split between loyalty and doubt as rituals begin to feel like surveillance drills."
    },
    {
        no: 27,
        title: "Prince in the Archive",
        summary: "The Heir uncovers forbidden records and starts questioning the official legacy narrative."
    },
    {
        no: 28,
        title: "The Red Corridor",
        summary: "A covert corridor beneath the palace exposes hidden detention chambers and witness erasures."
    },
    {
        no: 29,
        title: "Masks at Midwinter Court",
        summary: "A royal ceremony turns tense as alliances crack and suspicion reaches the throne itself."
    },
    {
        no: 30,
        title: "Crown of Ash",
        summary: "The Queen is revealed as the central antagonist, architect of the deepest control protocols."
    },
    {
        no: 31,
        title: "Order 77",
        summary: "The Queen activates emergency directives that criminalize dissent across all tiers overnight."
    },
    {
        no: 32,
        title: "The Broken Vow",
        summary: "Senior ministers defect after proof emerges of decades-long political assassinations."
    },
    {
        no: 33,
        title: "Reno Returns to Court",
        summary: "Reno re-enters the conflict to protect civilians rather than erase inconvenient truths."
    },
    {
        no: 34,
        title: "The Glass Barricades",
        summary: "Street uprisings spread through dome sectors as defense forces split in loyalty."
    },
    {
        no: 35,
        title: "The Queen's Mirror",
        summary: "A private archive reveals why the Queen chose fear as Arkadis's governing language."
    },
    {
        no: 36,
        title: "Siege of Tier One",
        summary: "Rebel and loyalist factions clash at the administrative heart of the capital dome."
    },
    {
        no: 37,
        title: "Names the Sea Remembers",
        summary: "Victims of erased operations are identified, turning public grief into collective resolve."
    },
    {
        no: 38,
        title: "The Minister's Trial",
        summary: "A public tribunal begins, exposing complicity and forcing confessions in real time."
    },
    {
        no: 39,
        title: "Fault in the Core",
        summary: "The geothermal core destabilizes as sabotage from both sides pushes Arkadis toward collapse."
    },
    {
        no: 40,
        title: "The Last Decree",
        summary: "The Queen issues a final command to burn the archives and preserve power through ruin."
    },
    {
        no: 41,
        title: "Reno's Choice",
        summary: "Reno must choose between stopping the Queen or saving the people trapped in lower domes."
    },
    {
        no: 42,
        title: "Night of Open Gates",
        summary: "Containment barriers are lifted, allowing evacuation routes and outside broadcasts at last."
    },
    {
        no: 43,
        title: "The Fallen Crown",
        summary: "The Queen's regime collapses as the Order fractures and the Inner Circle loses control."
    },
    {
        no: 44,
        title: "Dawn over Arkadis",
        summary: "The conflict closes with a fragile settlement and a new charter built on public truth."
    }
];

const outsideLocations = {
    1: "Cape Town, Africa",
    2: "Rio de Janeiro, South America",
    3: "Lisbon, Europe",
    4: "Jakarta, Asia",
    5: "Sydney, Australia",
    6: "Arctic Circle",
    7: "Anchorage, North America",
    8: "Sahara Transit Route, Africa",
    9: "Andes Range, South America",
    10: "Antarctic Relay Station"
};

function getArc(no) {
    if (no <= 10) return "Outside Ops";
    if (no <= 29) return "Inside Arkadis";
    if (no === 30) return "Queen Reveal";
    return "Final Collapse";
}

function getStatus(no) {
    if (no <= 4) return "Published";
    if (no <= 14) return "Draft";
    return "Planned";
}

function getTags(no) {
    const tags = [];
    if (no <= 10 || no === 33 || no === 41) tags.push("Reno-heavy");
    if (no >= 11 && no <= 24) tags.push("Worldbuilding");
    if (no >= 25 && no <= 39) tags.push("Political");
    if (no >= 40) tags.push("Finale");
    if (!tags.length) tags.push("Worldbuilding");
    return tags;
}

function getLocation(no) {
    if (no <= 10) return outsideLocations[no];
    if (no <= 24) return "Arkadis Central Domes";
    if (no <= 30) return "Arkadis Court District";
    if (no <= 39) return "Arkadis Multi-Tier Zones";
    return "Arkadis Core + Evacuation Gates";
}

function getPov(no) {
    if (no <= 10) return "Reno R. Kington";
    if (no <= 24) return "Archive Observer";
    if (no <= 32) return "Court and Dissenters";
    if (no <= 40) return "Multi-POV: Resistance";
    return "Reno and Civic Council";
}

function getKeyCharacters(no) {
    if (no <= 10) return ["Reno R. Kington", "Unveiled Cells"];
    if (no <= 24) return ["Inner Circle", "Citizens of Arkadis"];
    if (no <= 30) return ["The Queen", "The Heir", "Council Ministers"];
    if (no <= 40) return ["The Queen", "Reno", "Defectors", "Sentinels"];
    return ["Reno", "The Heir", "Civic Council"];
}

export const episodes = rawEpisodes.map((ep) => ({
    ...ep,
    arc: getArc(ep.no),
    status: getStatus(ep.no),
    tags: getTags(ep.no),
    continuity: {
        location: getLocation(ep.no),
        pov: getPov(ep.no),
        timelineDay: `Day ${ep.no}`,
        keyCharacters: getKeyCharacters(ep.no)
    }
}));

export const arcOrder = ["Outside Ops", "Inside Arkadis", "Queen Reveal", "Final Collapse"];
export const filterOrder = ["All", "Reno-heavy", "Worldbuilding", "Political", "Finale"];
