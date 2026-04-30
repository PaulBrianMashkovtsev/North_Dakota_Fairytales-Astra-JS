export const SUPPORTED_LANGS = ["en", "es", "fr", "ar"];

/**
 * French routes only include songs with both FR title and FR YouTube URL.
 * Other locales keep existing behavior (always listed).
 * @param {object} song
 * @param {string} lang
 */
export function songIsPublishedInLang(song, lang) {
    if (lang !== "fr") return true;
    const title = (song.translations?.fr?.title ?? "").trim();
    const yt = (song.youtubeByLang?.fr ?? "").trim();
    return title.length > 0 && yt.length > 0;
}

export const ALL_CATEGORIES = [
    "farm",
    "guests",
    "holiday",
    "nd",
    "bear",
    "beaver",
    "buffalo",
    "bunny",
    "canada_goose",
    "coyote",
    "deer",
    "fox",
    "frog",
    "hare",
    "mouse",
    "owl",
    "pheasant",
    "raccoon",
    "squirrel",
    "wolf",
    "northern_lights",
    "roosevelt",
];

export const categoryTranslations = {
    en: {
        farm: "Farm",
        guests: "Guests",
        holiday: "Holiday",
        nd: "North Dakota",
        bear: "Bear",
        beaver: "Beaver",
        buffalo: "Buffalo",
        bunny: "Bunny",
        canada_goose: "Canada Goose",
        coyote: "Coyote",
        deer: "Deer",
        fox: "Fox",
        frog: "Frog",
        hare: "Hare",
        mouse: "Mouse",
        owl: "Owl",
        pheasant: "Pheasant",
        raccoon: "Raccoon",
        squirrel: "Squirrel",
        wolf: "Wolf",
        northern_lights: "Northern Lights",
        roosevelt: "Roosevelt",
    },
    es: {
        farm: "Granja",
        guests: "Invitados",
        holiday: "Fiesta",
        nd: "Dakota del Norte",
        bear: "Oso",
        beaver: "Castor",
        buffalo: "Búfalo",
        bunny: "Conejo",
        canada_goose: "Ganso canadiense",
        coyote: "Coyote",
        deer: "Ciervo",
        fox: "Zorro",
        frog: "Rana",
        hare: "Liebre",
        mouse: "Ratón",
        owl: "Búho",
        pheasant: "Faisán",
        raccoon: "Mapache",
        squirrel: "Ardilla",
        wolf: "Lobo",
        northern_lights: "Auroras boreales",
        roosevelt: "Roosevelt",
    },
    fr: {
        farm: "Ferme",
        guests: "Invités",
        holiday: "Fêtes",
        nd: "Dakota du Nord",
        bear: "Ours",
        beaver: "Castor",
        buffalo: "Bison",
        bunny: "Lapin",
        canada_goose: "Bernache du Canada",
        coyote: "Coyote",
        deer: "Cerf",
        fox: "Renard",
        frog: "Grenouille",
        hare: "Lièvre",
        mouse: "Souris",
        owl: "Harfang",
        pheasant: "Faisan",
        raccoon: "Raton laveur",
        squirrel: "Écureuil",
        wolf: "Loup",
        northern_lights: "Aurores boréales",
        roosevelt: "Roosevelt",
    },
    ar: {
        farm: "المزرعة",
        guests: "الضيوف",
        holiday: "العطلة",
        nd: "داكوتا الشمالية",
        bear: "الدب",
        beaver: "القندس",
        buffalo: "البيسون",
        bunny: "الأرنب",
        canada_goose: "الإوزة الكندية",
        coyote: "الكويوت",
        deer: "الغزال",
        fox: "الثعلب",
        frog: "الضفدع",
        hare: "الأرنب البري",
        mouse: "الفأر",
        owl: "البومة",
        pheasant: "التدرج",
        raccoon: "الراكون",
        squirrel: "السنجاب",
        wolf: "الذئب",
        northern_lights: "الشفق القطبي",
        roosevelt: "روزفلت",
    },
};

export const CATEGORY_ALIASES = {
    // English
    "north dakota": "nd",
    "canada goose": "canada_goose",
    rabbit: "bunny",
    geese: "canada_goose",
    guest: "guests",
    "northern lights": "northern_lights",
    "theodore roosevelt park": "roosevelt",
    snow: "holiday",
    // Spanish
    "dakota del norte": "nd",
    "ganso canadiense": "canada_goose",
    conejo: "bunny",
    conejito: "bunny",
    "aurora boreal": "northern_lights",
    "auroras boreales": "northern_lights",
    invitado: "guests",
    vacaciones: "holiday",
    // French
    "dakota du nord": "nd",
    "bernache du canada": "canada_goose",
    lapin: "bunny",
    lapereau: "bunny",
    hibou: "owl",
    invité: "guests",
    vacances: "holiday",
    "aurores boréales": "northern_lights",
    "parc theodore roosevelt": "roosevelt",
    // Arabic
    "داكوتا الشمالية": "nd",
    "إوزة كندية": "canada_goose",
    "ذئب البراري": "coyote",
    "ذئب الأرض (كايوتي)": "coyote",
    "ذئب الأرض": "coyote",
    "ضيف": "guests",
    "عطلة": "holiday",
    "الشفق القطبي": "northern_lights",
    "حديقة ثيودور روزفلت": "roosevelt",
    "أرنب": "bunny",
    "أرنب صغير (أرنوب)": "bunny",
};

export function toCategorySlug(rawCategory) {
    const value = String(rawCategory || "").trim().toLowerCase();
    if (!value) return "";
    return CATEGORY_ALIASES[value] || value.replaceAll(/\s+/g, "_");
}

export function extractYouTubeId(url) {
    if (!url) return "";
    const raw = String(url).trim();
    if (!raw) return "";
    const short = raw.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
    if (short) return short[1];
    const long = raw.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
    if (long) return long[1];
    return "";
}

// Keep empty for now. Import song list in next step.
export const songs = [
    {
        id: "north-dakota-fairyland",
        slug: "north-dakota-fairyland",
        categories: ["nd"],
        youtubeByLang: {
            en: "https://youtu.be/0c9Y_-8DI0g",
            es: "https://youtu.be/hxxrGhhT0aA",
            fr: "",
            ar: "https://youtu.be/dc_qPwmjl3U",
        },
        translations: {
            en: {
                title: "North Dakota Fairyland",
                description: "",
            },
            es: {
                title: "La Tierra Mágica de Dakota del Norte",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أرض السحر في داكوتا الشمالية",
                description: "",
            },
        },
    },
    {
        id: "the-fox-and-her-raccoon-friend-song",
        slug: "the-fox-and-her-raccoon-friend-song",
        categories: ["fox", "raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/JSszCcRcqhI",
            es: "https://youtu.be/dKsoXNf1o1I",
            fr: "",
            ar: "https://youtu.be/k-Sw0byTjG8",
        },
        translations: {
            en: {
                title: "The Fox and Her Raccoon Friend Song",
                description: "",
            },
            es: {
                title: "La Canción de la Zorra y su Amigo Mapache",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أغنية الثعلبة وصديقها الراكون",
                description: "",
            },
        },
    },
    {
        id: "sleepy-little-bear",
        slug: "sleepy-little-bear",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/cfwUmZ1328w",
            es: "https://youtu.be/Rg7fc3GFwuQ",
            fr: "",
            ar: "https://youtu.be/2dztjCeLzXw",
        },
        translations: {
            en: {
                title: "Sleepy Little Bear",
                description: "",
            },
            es: {
                title: "Osito Dormilón",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الدب الصغير النائم",
                description: "",
            },
        },
    },
    {
        id: "if-someones-sad-give-them-a-hug",
        slug: "if-someones-sad-give-them-a-hug",
        categories: ["fox", "bear"],
        youtubeByLang: {
            en: "https://youtu.be/F-6RH-JTSmE",
            es: "https://youtu.be/i7w7IIqAYPI",
            fr: "",
            ar: "https://youtu.be/KGR4ZTAhvZc",
        },
        translations: {
            en: {
                title: "If Someone’s Sad — Give Them a Hug!",
                description: "",
            },
            es: {
                title: "Si Alguien Está Triste — ¡Dale un Abrazo!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "إذا كان أحدهم حزيناً — عانقه!",
                description: "",
            },
        },
    },
    {
        id: "the-puppy-lost-her-bone-in-the-snow",
        slug: "the-puppy-lost-her-bone-in-the-snow",
        categories: ["farm", "fox", "bear"],
        youtubeByLang: {
            en: "https://youtu.be/ILmTUld927Q",
            es: "https://youtu.be/UBbBMENnRL4",
            fr: "",
            ar: "https://youtu.be/KfThp5OxaCc",
        },
        translations: {
            en: {
                title: "The Puppy Lost Her Bone in the Snow",
                description: "",
            },
            es: {
                title: "La Perrita Perdió su Hueso en la Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الجراء الصغيرة فقدت عظمها في الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-coyote-whos-not-afraid-of-the-snow",
        slug: "the-coyote-whos-not-afraid-of-the-snow",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/P_11mkMGRu0",
            es: "https://youtu.be/sjM9kEumrD8",
            fr: "",
            ar: "https://youtu.be/aakRq5e470w",
        },
        translations: {
            en: {
                title: "The Coyote Who’s Not Afraid of the Snow",
                description: "",
            },
            es: {
                title: "El Coyote y la Tormenta de Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أغنية الذئب الذي يتفاخر أمام العاصفة الثلجية",
                description: "",
            },
        },
    },
    {
        id: "dont-tease-be-a-friend",
        slug: "dont-tease-be-a-friend",
        categories: ["coyote", "bear"],
        youtubeByLang: {
            en: "https://youtu.be/p-K24Uy9aAM",
            es: "https://youtu.be/UjKZLPWw1QI",
            fr: "",
            ar: "https://youtu.be/pLwIbjcAiDo",
        },
        translations: {
            en: {
                title: "Don’t Tease — Be a Friend!",
                description: "",
            },
            es: {
                title: "No molestes — ¡Mejor haz amigos!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "لا تزعج الآخرين — كن صديقًا!",
                description: "",
            },
        },
    },
    {
        id: "slippery-ice-song",
        slug: "slippery-ice-song",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/6wiID4q5gsk",
            es: "https://youtu.be/sSSSy9VQkQ4",
            fr: "",
            ar: "https://youtu.be/ZKxaeoZOq3U",
        },
        translations: {
            en: {
                title: "Slippery Ice Song",
                description: "",
            },
            es: {
                title: "¡Cuidado con el hielo!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أغنية الراكون عن الجليد",
                description: "",
            },
        },
    },
    {
        id: "the-kind-fox-and-her-friend-the-raccoon",
        slug: "the-kind-fox-and-her-friend-the-raccoon",
        categories: ["raccoon", "fox"],
        youtubeByLang: {
            en: "https://youtu.be/XnVJA8vEBfo",
            es: "https://youtu.be/HElPiMKmXF0",
            fr: "",
            ar: "https://youtu.be/VJKZjEhC1ws",
        },
        translations: {
            en: {
                title: "The Kind Fox and Her Friend the Raccoon",
                description: "",
            },
            es: {
                title: "La Zorra Buena y su Amigo el Mapache",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الثعلبة الطيبة وصديقها الراكون",
                description: "",
            },
        },
    },
    {
        id: "sing-in-the-snow-with-the-clever-fox",
        slug: "sing-in-the-snow-with-the-clever-fox",
        categories: ["fox"],
        youtubeByLang: {
            en: "https://youtu.be/adKZ_5rCdng",
            es: "https://youtu.be/smKb2eRTTfw",
            fr: "",
            ar: "https://youtu.be/JwoUfXo4zxY",
        },
        translations: {
            en: {
                title: "Sing in the Snow with the Clever Fox!",
                description: "",
            },
            es: {
                title: "¡Canta en la nieve con la Zorra!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "غني في الثلج مع الثعلبة!",
                description: "",
            },
        },
    },
    {
        id: "the-rooster-teaches-his-friends-to-crow-in-winter",
        slug: "the-rooster-teaches-his-friends-to-crow-in-winter",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/cBi34mRm78Y",
            es: "https://youtu.be/3_reEq_8dSE",
            fr: "",
            ar: "https://youtu.be/95F3ZRFnZhc",
        },
        translations: {
            en: {
                title: "The Rooster Teaches His Friends to Crow in Winter!",
                description: "",
            },
            es: {
                title: "¡El Gallo Enseña a Sus Amigos a Cantar en Invierno!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الدِّيك يُعلِّم أصدقاءه الصياح في الشتاء!",
                description: "",
            },
        },
    },
    {
        id: "the-bunny-dreams-to-be-the-king-of-winter",
        slug: "the-bunny-dreams-to-be-the-king-of-winter",
        categories: ["bunny"],
        youtubeByLang: {
            en: "https://youtu.be/wXPKbzNx79k",
            es: "https://youtu.be/qY7s4vL_BNU",
            fr: "",
            ar: "https://youtu.be/C_NV_YaKOSw",
        },
        translations: {
            en: {
                title: "The Bunny Dreams to Be the King of Winter!",
                description: "",
            },
            es: {
                title: "¡El Conejo Sueña con Ser el Rey del Invierno!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الأرنب يحلم أن يصبح ملك الشتاء!",
                description: "",
            },
        },
    },
    {
        id: "the-squirrel-builds-a-snowy-friend",
        slug: "the-squirrel-builds-a-snowy-friend",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/9hXJQwtlB4s",
            es: "https://youtu.be/W9PoR0OjXtI",
            fr: "",
            ar: "https://youtu.be/iDLxBY7scsE",
        },
        translations: {
            en: {
                title: "The Squirrel Builds a Snowy Friend!",
                description: "",
            },
            es: {
                title: "¡La Ardilla Hace un Amigo de Nieve!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "السنجاب يصنع صديقاً من الثلج!",
                description: "",
            },
        },
    },
    {
        id: "the-coyote-creates-a-winter-spell",
        slug: "the-coyote-creates-a-winter-spell",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/i4cD1kBjtTw",
            es: "https://youtu.be/tpb07foOYWs",
            fr: "",
            ar: "https://youtu.be/8rn-q4bMQjI",
        },
        translations: {
            en: {
                title: "The Coyote Creates a Winter Spell!",
                description: "",
            },
            es: {
                title: "¡El Coyote Crea un Hechizo de Invierno!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "ذئب البراري يبتكر تعويذة الشتاء!",
                description: "",
            },
        },
    },
    {
        id: "the-bear-explains-why-winter-is-time-to-rest",
        slug: "the-bear-explains-why-winter-is-time-to-rest",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/Wg4D-k8mVGI",
            es: "https://youtu.be/OI6feXkEcsk",
            fr: "",
            ar: "https://youtu.be/Fh_hWESMoNo",
        },
        translations: {
            en: {
                title: "The Bear Explains Why Winter Is Time to Rest!",
                description: "",
            },
            es: {
                title: "El Oso Explica por Qué el Invierno Es Tiempo de Descansar",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الدب يشرح لماذا الشتاء وقت للراحة!",
                description: "",
            },
        },
    },
    {
        id: "the-raccoon-dreams-of-a-snowy-party",
        slug: "the-raccoon-dreams-of-a-snowy-party",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/8GB_um-67jM",
            es: "https://youtu.be/otgsssMj8rw",
            fr: "",
            ar: "https://youtu.be/yLn87PbmEyY",
        },
        translations: {
            en: {
                title: "The Raccoon Dreams of a Snowy Party!",
                description: "",
            },
            es: {
                title: "¡El Mapache Sueña con una Fiesta en la Nieve!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الراكون يحلم بحفلة ثلجية!",
                description: "",
            },
        },
    },
    {
        id: "the-fox-says-snow-makes-everyone-beautiful",
        slug: "the-fox-says-snow-makes-everyone-beautiful",
        categories: ["fox"],
        youtubeByLang: {
            en: "https://youtu.be/ZsdL138_gWI",
            es: "https://youtu.be/1gQUzo9ZQ4A",
            fr: "",
            ar: "https://youtu.be/wkZ1UJCadP4",
        },
        translations: {
            en: {
                title: "The Fox Says Snow Makes Everyone Beautiful!",
                description: "",
            },
            es: {
                title: "La Zorra Dice que la Nieve Nos Hace Hermosos",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الثعلبة تقول: الثلج يجعلنا جميعاً جميلين!",
                description: "",
            },
        },
    },
    {
        id: "the-frog-woke-up-in-the-middle-of-winter",
        slug: "the-frog-woke-up-in-the-middle-of-winter",
        categories: ["frog"],
        youtubeByLang: {
            en: "https://youtu.be/RP6JAOH2XDE",
            es: "https://youtu.be/BWBQQEuPBcY",
            fr: "",
            ar: "https://youtu.be/Zq-Fz2eOik8",
        },
        translations: {
            en: {
                title: "The Frog Woke Up in the Middle of Winter!",
                description: "",
            },
            es: {
                title: "¡La Rana se Despertó en Medio del Invierno!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الضفدع استيقظ وسط الشتاء ولا يفهم ما يحدث!",
                description: "",
            },
        },
    },
    {
        id: "little-buffalo-looking-for-mom",
        slug: "little-buffalo-looking-for-mom",
        categories: ["buffalo"],
        youtubeByLang: {
            en: "https://youtu.be/_MzXCUZbNv4",
            es: "https://youtu.be/QWRwgSqhlOw",
            fr: "",
            ar: "https://youtu.be/pLxbzPN7IzU",
        },
        translations: {
            en: {
                title: "Little Buffalo Looking for Mom",
                description: "",
            },
            es: {
                title: "El Pequeño Búfalo Busca a su Mamá",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الجاموس الصغير يبحث عن أمه",
                description: "",
            },
        },
    },
    {
        id: "fox-and-raccoon-build-snow-mazes",
        slug: "fox-and-raccoon-build-snow-mazes",
        categories: ["fox", "raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/psEUgJqL_34",
            es: "https://youtu.be/OdeyTmlY5hU",
            fr: "",
            ar: "https://youtu.be/cdjF4mZTQ7A",
        },
        translations: {
            en: {
                title: "Fox and Raccoon Build Snow Mazes",
                description: "",
            },
            es: {
                title: "El Zorro y el Mapache Construyen Laberintos de Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الثعلبة والراكون يبنيان متاهات الثلج",
                description: "",
            },
        },
    },
    {
        id: "little-hedgehog-and-his-warm-burrow-under-the-snow",
        slug: "little-hedgehog-and-his-warm-burrow-under-the-snow",
        categories: ["guests"],
        youtubeByLang: {
            en: "https://youtu.be/QD2KGeWzQKQ",
            es: "https://youtu.be/Yy4Z4O3RBHY",
            fr: "",
            ar: "https://youtu.be/b9CLlufmGBQ",
        },
        translations: {
            en: {
                title: "Little Hedgehog and His Warm Burrow Under the Snow",
                description: "",
            },
            es: {
                title: "El Pequeño Erizo y Su Cálida Madriguera Bajo la Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "القنفذ الصغير وجحره الدافئ تحت الثلج",
                description: "",
            },
        },
    },
    {
        id: "little-hare-leaves-white-tracks-on-the-meadow",
        slug: "little-hare-leaves-white-tracks-on-the-meadow",
        categories: ["hare"],
        youtubeByLang: {
            en: "https://youtu.be/MVwSac6Qznw",
            es: "https://youtu.be/hgZKAIVvhU8",
            fr: "",
            ar: "https://youtu.be/MdNqA_aOjwE",
        },
        translations: {
            en: {
                title: "Little Hare Leaves White Tracks on the Meadow",
                description: "",
            },
            es: {
                title: "El Conejito y Sus Huellas Blancas en el Prado",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الأرنب الصغير وآثاره البيضاء في المرج",
                description: "",
            },
        },
    },
    {
        id: "the-little-wolf-walks-the-frozen-trail-home",
        slug: "the-little-wolf-walks-the-frozen-trail-home",
        categories: ["wolf"],
        youtubeByLang: {
            en: "https://youtu.be/fGxa5Bp3U1Q",
            es: "https://youtu.be/X-h9BAyg5OE",
            fr: "",
            ar: "https://youtu.be/Doa4PXa_QgM",
        },
        translations: {
            en: {
                title: "The Little Wolf Walks the Frozen Trail Home",
                description: "",
            },
            es: {
                title: "El lobito camina por el sendero helado a casa",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الذئب الصغير يمشي في الطريق المتجمد نحو البيت",
                description: "",
            },
        },
    },
    {
        id: "the-owl-guards-the-sleeping-snowy-forest",
        slug: "the-owl-guards-the-sleeping-snowy-forest",
        categories: ["owl"],
        youtubeByLang: {
            en: "https://youtu.be/XkDp2ZAuKwM",
            es: "https://youtu.be/wUZ0UoDZsE8",
            fr: "",
            ar: "https://youtu.be/GDsOG0kuDU8",
        },
        translations: {
            en: {
                title: "The Owl Guards the Sleeping Snowy Forest",
                description: "",
            },
            es: {
                title: "El búho protege el bosque dormido bajo la nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "البومة تحرس الغابة النائمة تحت الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-squirrel-hunts-beneath-the-snow",
        slug: "the-squirrel-hunts-beneath-the-snow",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/RpcEWdcGUe8",
            es: "https://youtu.be/guq-aGXQ7rI",
            fr: "",
            ar: "https://youtu.be/yn55oezaLoI",
        },
        translations: {
            en: {
                title: "The Squirrel Hunts Beneath the Snow",
                description: "",
            },
            es: {
                title: "La ardilla busca su escondite bajo la nieve blanca",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "السنجابة تبحث عن مخبئها تحت الثلج الأبيض",
                description: "",
            },
        },
    },
    {
        id: "farmer-dan-from-north-dakota",
        slug: "farmer-dan-from-north-dakota",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/UBqoHCaL9zs",
            es: "https://youtu.be/LyLKhgyKvtQ",
            fr: "",
            ar: "https://youtu.be/Ued4gImgIK8",
        },
        translations: {
            en: {
                title: "Farmer Dan From North Dakota!",
                description: "",
            },
            es: {
                title: "¡El granjero Dan ama la nieve!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "المزارع دان يحب الثلج!",
                description: "",
            },
        },
    },
    {
        id: "the-roosters-snowy-feet-song",
        slug: "the-roosters-snowy-feet-song",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/lH2Q-RRvz4A",
            es: "https://youtu.be/eaCufjRsZNI",
            fr: "",
            ar: "https://youtu.be/g3cmh-WrtTA",
        },
        translations: {
            en: {
                title: "The Rooster's Snowy Feet Song",
                description: "",
            },
            es: {
                title: "La Canción de las Patitas Congeladas del Gallo",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أغنية أقدام الديك المجمدة",
                description: "",
            },
        },
    },
    {
        id: "the-little-hedgehog-cant-find-his-home",
        slug: "the-little-hedgehog-cant-find-his-home",
        categories: ["guests"],
        youtubeByLang: {
            en: "https://youtu.be/CCBcTJXQny4",
            es: "https://youtu.be/QqIA53z59Do",
            fr: "",
            ar: "https://youtu.be/uzcNzRwztrc",
        },
        translations: {
            en: {
                title: "The Little Hedgehog Can't Find His Home",
                description: "",
            },
            es: {
                title: "El Erizo No Encuentra Su Hogar",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "القنفذ لا يجد بيته تحت الثلج",
                description: "",
            },
        },
    },
    {
        id: "my-tail-is-full-of-snow",
        slug: "my-tail-is-full-of-snow",
        categories: ["fox"],
        youtubeByLang: {
            en: "https://youtu.be/scshEIBlxuc",
            es: "https://youtu.be/REFH5oVgq3U",
            fr: "",
            ar: "https://youtu.be/ANznIGLvwOU",
        },
        translations: {
            en: {
                title: "My Tail Is Full of Snow!",
                description: "",
            },
            es: {
                title: "¡Mi Cola Está Llena de Nieve!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "ذَيْلي مملوءٌ بالثلج!",
                description: "",
            },
        },
    },
    {
        id: "im-a-night-owl-but-not-in-the-snow",
        slug: "im-a-night-owl-but-not-in-the-snow",
        categories: ["owl"],
        youtubeByLang: {
            en: "https://youtu.be/gN9MTWt72kg",
            es: "https://youtu.be/qBtp38TGIDY",
            fr: "",
            ar: "https://youtu.be/ciuQkBNM_zc",
        },
        translations: {
            en: {
                title: "I'm a Night Owl… But Not in the Snow!",
                description: "",
            },
            es: {
                title: "¡Soy un búho nocturno… pero no en la nieve!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أنا بومة ليلية… لكن ليس في الثلج!",
                description: "",
            },
        },
    },
    {
        id: "snow-is-my-thing-oops",
        slug: "snow-is-my-thing-oops",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/gIWjFSwM2uk",
            es: "https://youtu.be/jJWiYZt-RSw",
            fr: "",
            ar: "https://youtu.be/yDxd0HDoglA",
        },
        translations: {
            en: {
                title: "Snow Is My Thing! (Oops…)",
                description: "",
            },
            es: {
                title: "¡La Nieve Es Lo Mío! (Ups…)",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الثلج لعبتي! (أُوْبس…)",
                description: "",
            },
        },
    },
    {
        id: "my-antlers-are-the-best-in-the-snow",
        slug: "my-antlers-are-the-best-in-the-snow",
        categories: ["deer"],
        youtubeByLang: {
            en: "https://youtu.be/1pIk01Y0cZ8",
            es: "https://youtu.be/jdXVoVOqVyE",
            fr: "",
            ar: "https://youtu.be/B_PclDpl-Y8",
        },
        translations: {
            en: {
                title: "My Antlers Are the Best in the Snow!",
                description: "",
            },
            es: {
                title: "¡Mis Astas Son las Más Bellas en la Nieve!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "قروني الأجمل في الثلج!",
                description: "",
            },
        },
    },
    {
        id: "i-just-wanted-to-lick-an-icicle",
        slug: "i-just-wanted-to-lick-an-icicle",
        categories: ["nd"],
        youtubeByLang: {
            en: "https://youtu.be/19MOAFkoz1E",
            es: "https://youtu.be/1eYNsfsoMaI",
            fr: "",
            ar: "https://youtu.be/SdfBnNaFuHA",
        },
        translations: {
            en: {
                title: "I Just Wanted to Lick an Icicle!",
                description: "",
            },
            es: {
                title: "¡Solo Quería Lamer un Carámbano!",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "كنتُ فقط أريد لعق صَقيعة!",
                description: "",
            },
        },
    },
    {
        id: "the-roosters-melt-the-snow-song",
        slug: "the-roosters-melt-the-snow-song",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/F6Ai14BqElg",
            es: "https://youtu.be/jyj0aD5KZEA",
            fr: "",
            ar: "https://youtu.be/-VtyJGX5mYs",
        },
        translations: {
            en: {
                title: "The Rooster's Melt-the-Snow Song",
                description: "",
            },
            es: {
                title: "La Canción del Gallo para Derretir la Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أغنية الديك السحرية لإذابة الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-bear-and-the-tiny-hat",
        slug: "the-bear-and-the-tiny-hat",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/NoXIZu2sSeo",
            es: "https://youtu.be/j_ibmcYrCT8",
            fr: "",
            ar: "https://youtu.be/pSKQ_sFI8eU",
        },
        translations: {
            en: {
                title: "The Bear and the Tiny Hat",
                description: "",
            },
            es: {
                title: "El Oso y su Gorrito Pequeño",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الدب وقبعته الصغيرة",
                description: "",
            },
        },
    },
    {
        id: "two-deer-racing-through-the-snow",
        slug: "two-deer-racing-through-the-snow",
        categories: ["deer"],
        youtubeByLang: {
            en: "https://youtu.be/7XqRxp7ZHXo",
            es: "https://youtu.be/gN7r4-2H2Ew",
            fr: "",
            ar: "https://youtu.be/ZGaQK7S2Czo",
        },
        translations: {
            en: {
                title: "Two Deer Racing Through the Snow",
                description: "",
            },
            es: {
                title: "Dos Ciervos Corren por la Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "غزالان يجريان في الثلج",
                description: "",
            },
        },
    },
    {
        id: "little-mice-hiding-in-the-snow",
        slug: "little-mice-hiding-in-the-snow",
        categories: ["fox", "mouse"],
        youtubeByLang: {
            en: "https://youtu.be/iIyFnt3xx-g",
            es: "https://youtu.be/SJIl-mtTr94",
            fr: "",
            ar: "https://youtu.be/wlNJx8DbUeo",
        },
        translations: {
            en: {
                title: "Little Mice Hiding in the Snow",
                description: "",
            },
            es: {
                title: "Ratoncitos Escondidos en la Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "فئران صغيرة تختبئ تحت الثلج",
                description: "",
            },
        },
    },
    {
        id: "little-bunny-sees-snow-for-the-first-time",
        slug: "little-bunny-sees-snow-for-the-first-time",
        categories: ["bunny"],
        youtubeByLang: {
            en: "https://youtu.be/XmmPTx0oXUE",
            es: "https://youtu.be/-T6bj0SYIPg",
            fr: "",
            ar: "https://youtu.be/xc-jm9zcst0",
        },
        translations: {
            en: {
                title: "Little Bunny Sees Snow for the First Time",
                description: "",
            },
            es: {
                title: "El conejito ve la nieve por primera vez",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الأرنب الصغير يرى الثلج لأول مرة",
                description: "",
            },
        },
    },
    {
        id: "the-canada-goose-flies-over-the-snowy-forest",
        slug: "the-canada-goose-flies-over-the-snowy-forest",
        categories: ["canada_goose"],
        youtubeByLang: {
            en: "https://youtu.be/SHh7Z7wFxWU",
            es: "https://youtu.be/3LHaP5yADys",
            fr: "",
            ar: "https://youtu.be/zEuRmUFIoJM",
        },
        translations: {
            en: {
                title: "The Canada Goose Flies Over the Snowy Forest",
                description: "",
            },
            es: {
                title: "El ganso canadiense vuela sobre el bosque nevado",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الإوزة الكندية تطير فوق الغابة الثلجية",
                description: "",
            },
        },
    },
    {
        id: "how-the-raccoon-got-lost-in-the-snowstorm",
        slug: "how-the-raccoon-got-lost-in-the-snowstorm",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/S2-RPxFykHE",
            es: "https://youtu.be/_h48tjgh0fc",
            fr: "",
            ar: "https://youtu.be/M16dVYkPSdU",
        },
        translations: {
            en: {
                title: "How the Raccoon Got Lost in the Snowstorm",
                description: "",
            },
            es: {
                title: "Cómo el mapache se perdió en la tormenta de nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "كيف ضاع الراكون في عاصفة الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-brightest-northern-lights-in-theodore-roosevelt-park",
        slug: "the-brightest-northern-lights-in-theodore-roosevelt-park",
        categories: ["northern_lights", "roosevelt"],
        youtubeByLang: {
            en: "https://youtu.be/cJlSEuFOaBk",
            es: "https://youtu.be/XX62HmLgNFI",
            fr: "",
            ar: "https://youtu.be/4B7i7IxCxH0",
        },
        translations: {
            en: {
                title: "The Brightest Northern Lights in Theodore Roosevelt Park",
                description: "",
            },
            es: {
                title: "Las luces del norte más hermosas en el parque Theodore Roosevelt",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "أجمل شفق قطبي في حديقة ثيودور روزفلت الوطنية",
                description: "",
            },
        },
    },
    {
        id: "the-owl-whispers-of-the-winter-night",
        slug: "the-owl-whispers-of-the-winter-night",
        categories: ["owl"],
        youtubeByLang: {
            en: "https://youtu.be/2ZSoFQYlFWc",
            es: "https://youtu.be/yNbZJiwtzc8",
            fr: "",
            ar: "https://youtu.be/0NQUZ0et7Tk",
        },
        translations: {
            en: {
                title: "The Owl Whispers of the Winter Night",
                description: "",
            },
            es: {
                title: "El búho susurra sobre la noche de invierno",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "البومة تهمس عن ليلة الشتاء",
                description: "",
            },
        },
    },
    {
        id: "the-fox-and-the-wolf-dug-for-treasure-and-found-pinecones",
        slug: "the-fox-and-the-wolf-dug-for-treasure-and-found-pinecones",
        categories: ["fox", "wolf", "squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/xWnfgoXg7pU",
            es: "https://youtu.be/Ke8xUjaI1mM",
            fr: "",
            ar: "https://youtu.be/9M5q-WqhLxY",
        },
        translations: {
            en: {
                title: "The Fox and the Wolf Dug for Treasure (and Found Pinecones)",
                description: "",
            },
            es: {
                title: "El zorro y el lobo buscaron tesoro (¡y hallaron piñas!)",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الثعلب والذئب بحثا عن كنز (ووجدوا مخزون السنجاب!)",
                description: "",
            },
        },
    },
    {
        id: "the-bear-prepares-for-winter-sleep",
        slug: "the-bear-prepares-for-winter-sleep",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/0Ov1AFRkbCU",
            es: "https://youtu.be/oSQ2u-Pxt3Q",
            fr: "",
            ar: "https://youtu.be/wFZr-vzUXMc",
        },
        translations: {
            en: {
                title: "The Bear Prepares for Winter Sleep",
                description: "",
            },
            es: {
                title: "El oso se prepara para dormir en invierno",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الدب يستعد لنوم الشتاء",
                description: "",
            },
        },
    },
    {
        id: "the-squirrel-hid-in-her-hollow-from-the-cold",
        slug: "the-squirrel-hid-in-her-hollow-from-the-cold",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/uCvx7O_a3uk",
            es: "https://youtu.be/-o8Cc3BWsZQ",
            fr: "",
            ar: "https://youtu.be/m7XkxgKzxTo",
        },
        translations: {
            en: {
                title: "The Squirrel Hid in Her Hollow from the Cold",
                description: "",
            },
            es: {
                title: "La ardilla se escondió del frío en su tronco",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "السنجبة اختبأت في جذعها من البرد",
                description: "",
            },
        },
    },
    {
        id: "the-clever-fox-and-the-silly-wolf",
        slug: "the-clever-fox-and-the-silly-wolf",
        categories: ["wolf", "fox"],
        youtubeByLang: {
            en: "https://youtu.be/yjvFXsELjdk",
            es: "https://youtu.be/l0_3QbaEKWo",
            fr: "",
            ar: "https://youtu.be/ER6tfiRoz-k",
        },
        translations: {
            en: {
                title: "The Clever Fox and the Silly Wolf",
                description: "",
            },
            es: {
                title: "La Zorra Lista y el Lobo Ingenuo",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الثعلبة الذكية والذئب الساذج",
                description: "",
            },
        },
    },
    {
        id: "true-friends-always-help",
        slug: "true-friends-always-help",
        categories: ["fox", "bear", "owl", "bunny"],
        youtubeByLang: {
            en: "https://youtu.be/xJh6uRXUFFI",
            es: "https://youtu.be/rWGVHBUE9qs",
            fr: "",
            ar: "https://youtu.be/fGKdc5MVTFI",
        },
        translations: {
            en: {
                title: "True Friends Always Help",
                description: "",
            },
            es: {
                title: "Los verdaderos amigos siempre ayudan",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الأصدقاء الحقيقيون يساعدون دائمًا",
                description: "",
            },
        },
    },
    {
        id: "the-singing-goat-in-the-snow",
        slug: "the-singing-goat-in-the-snow",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/DqpAQN_EHTE",
            es: "https://youtu.be/9pq_94x9odo",
            fr: "",
            ar: "https://youtu.be/nhxT-h6v6-4",
        },
        translations: {
            en: {
                title: "The Singing Goat in the Snow",
                description: "",
            },
            es: {
                title: "La Cabra Cantora en la Nieve",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "الماعز المغني في الثلج",
                description: "",
            },
        },
    },
    {
        id: "when-the-toys-begin-to-sing",
        slug: "when-the-toys-begin-to-sing",
        categories: ["nd"],
        youtubeByLang: {
            en: "https://youtu.be/FPPQmUnQ46U",
            es: "https://youtu.be/HSApxt5VwTU",
            fr: "",
            ar: "https://youtu.be/o_QZjQNVe2U",
        },
        translations: {
            en: {
                title: "When the Toys Begin to Sing",
                description: "",
            },
            es: {
                title: "Cuando los Juguetes Comienzan a Cantar",
                description: "",
            },
            fr: {
                title: "",
                description: "",
            },
            ar: {
                title: "عندما تبدأ الألعاب بالغناء",
                description: "",
            },
        },
    },
    {
        id: "when-the-snowflakes-dance-in-the-moonlight",
        slug: "when-the-snowflakes-dance-in-the-moonlight",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/DHyvNQmMbC4",
            es: "https://youtu.be/fvGZwOb2OGQ",
            fr: "https://youtu.be/UApb1hov_gA",
            ar: "https://youtu.be/hH1BOmE5DO4",
        },
        translations: {
            en: {
                title: "When the Snowflakes Dance in the Moonlight",
                description: "",
            },
            es: {
                title: "Cuando los Copos Bailan a la Luz de la Luna",
                description: "",
            },
            fr: {
                title: "Quand les Flocons Dansent au Clair de Lune",
                description: "",
            },
            ar: {
                title: "عندما ترقص ندف الثلج في ضوء القمر",
                description: "",
            },
        },
    },
    {
        id: "the-beaver-builds-his-snowy-dam-with-pride",
        slug: "the-beaver-builds-his-snowy-dam-with-pride",
        categories: ["beaver"],
        youtubeByLang: {
            en: "https://youtu.be/O24IQBaNqUU",
            es: "https://youtu.be/daZdJWnufiQ",
            fr: "https://youtu.be/mTIaJ2e0SbI",
            ar: "https://youtu.be/fYrKb9NQFnU",
        },
        translations: {
            en: {
                title: "The Beaver Builds His Snowy Dam with Pride",
                description: "",
            },
            es: {
                title: "El Castor Construye su Presa de Nieve con Orgullo",
                description: "",
            },
            fr: {
                title: "Le Castor Construit son Barrage de Neige avec Fierté",
                description: "",
            },
            ar: {
                title: "القندس يبني سده الثلجي بفخر",
                description: "",
            },
        },
    },
    {
        id: "the-little-mouses-snowy-recipe",
        slug: "the-little-mouses-snowy-recipe",
        categories: ["mouse"],
        youtubeByLang: {
            en: "https://youtu.be/j63204ZC6Y8",
            es: "https://youtu.be/SS3l1KOFiVc",
            fr: "https://youtu.be/jmlvfiYLFhE",
            ar: "https://youtu.be/c_ZXYdfwDl4",
        },
        translations: {
            en: {
                title: "The Little Mouse’s Snowy Recipe",
                description: "",
            },
            es: {
                title: "La Receta Nevada de la Ratoncita",
                description: "",
            },
            fr: {
                title: "La Recette Neigeuse de la Petite Souris",
                description: "",
            },
            ar: {
                title: "وصفة الفأرة الثلجية",
                description: "",
            },
        },
    },
    {
        id: "otter-and-beaver-race-on-the-winter-lake",
        slug: "otter-and-beaver-race-on-the-winter-lake",
        categories: ["beaver"],
        youtubeByLang: {
            en: "https://youtu.be/Gnn4800gx3g",
            es: "https://youtu.be/cOidkJszqgs",
            fr: "https://youtu.be/ymzux2EHDus",
            ar: "https://youtu.be/ctXepyhVgBQ",
        },
        translations: {
            en: {
                title: "Otter and Beaver Race on the Winter Lake",
                description: "",
            },
            es: {
                title: "La nutria y el castor corren en el lago de invierno",
                description: "",
            },
            fr: {
                title: "La loutre et le castor font la course sur le lac d’hiver",
                description: "",
            },
            ar: {
                title: "ثعلب الماء والقندس يتسابقان في بحيرة الشتاء",
                description: "",
            },
        },
    },
    {
        id: "the-cat-and-the-dog-became-friends",
        slug: "the-cat-and-the-dog-became-friends",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/B8Ymcnu-cA8",
            es: "https://youtu.be/EWy2eeCAQIw",
            fr: "https://youtu.be/SBSvqmVW3Jk",
            ar: "https://youtu.be/Gh-2RzFQLpM",
        },
        translations: {
            en: {
                title: "The Cat and the Dog Became Friends",
                description: "",
            },
            es: {
                title: "El gato y el perro se hicieron amigos",
                description: "",
            },
            fr: {
                title: "Le chat et le chien sont devenus amis",
                description: "",
            },
            ar: {
                title: "القطة والكلب أصبحا صديقين",
                description: "",
            },
        },
    },
    {
        id: "the-funny-dance-of-the-chick-on-the-winter-farm",
        slug: "the-funny-dance-of-the-chick-on-the-winter-farm",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/ByHDakO6k4U",
            es: "https://youtu.be/mtG4HgyQG60",
            fr: "https://youtu.be/zZtj2BZ7O80",
            ar: "https://youtu.be/8kcjwN1iFSA",
        },
        translations: {
            en: {
                title: "The Funny Dance of the Chick on the Winter Farm",
                description: "",
            },
            es: {
                title: "El divertido baile del pollito en la granja de invierno",
                description: "",
            },
            fr: {
                title: "La danse amusante du poussin à la ferme d’hiver",
                description: "",
            },
            ar: {
                title: "رقصة الكتكوت المضحكة في المزرعة الشتوية",
                description: "",
            },
        },
    },
    {
        id: "the-fox-and-the-hare-play-in-the-snow",
        slug: "the-fox-and-the-hare-play-in-the-snow",
        categories: ["fox", "hare"],
        youtubeByLang: {
            en: "https://youtu.be/9PIJP6V6F5Y",
            es: "https://youtu.be/fMDZ90Bq5So",
            fr: "https://youtu.be/BmFo-aEdYs0",
            ar: "https://youtu.be/rcBWLjfUfEw",
        },
        translations: {
            en: {
                title: "The Fox and the Hare Play in the Snow",
                description: "",
            },
            es: {
                title: "El Zorro y la Liebre Juegan con la Nieve",
                description: "",
            },
            fr: {
                title: "Le Renard et le Lièvre Jouent aux Boules de Neige",
                description: "",
            },
            ar: {
                title: "الثعلب والأرنب يلعبان بكرات الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-squirrels-warm-tail-debate",
        slug: "the-squirrels-warm-tail-debate",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/XapN2Vi_aWQ",
            es: "https://youtu.be/XJhlpjUbk-g",
            fr: "https://youtu.be/jde1LFutGZ8",
            ar: "https://youtu.be/VUUBW3h7Trk",
        },
        translations: {
            en: {
                title: "The Squirrel’s Warm Tail Debate",
                description: "",
            },
            es: {
                title: "La Cola Más Caliente de la Ardilla",
                description: "",
            },
            fr: {
                title: "La Queue La Plus Chaude de l’Écureuil",
                description: "",
            },
            ar: {
                title: "ذيل السنجاب الأكثر دفئًا",
                description: "",
            },
        },
    },
    {
        id: "the-wolf-built-a-snowman-friend",
        slug: "the-wolf-built-a-snowman-friend",
        categories: ["wolf", "nd"],
        youtubeByLang: {
            en: "https://youtu.be/-Y7vTde8Pi0",
            es: "https://youtu.be/SOaN40Csp-o",
            fr: "https://youtu.be/jmkkWWU_5MQ",
            ar: "https://youtu.be/1l6n_X8gDPc",
        },
        translations: {
            en: {
                title: "The Wolf Built a Snowman Friend",
                description: "",
            },
            es: {
                title: "El lobo hizo un muñeco de nieve y fue su amigo",
                description: "",
            },
            fr: {
                title: "Le loup a fait un bonhomme de neige et devint son ami",
                description: "",
            },
            ar: {
                title: "الذئب صنع رجلَ ثلج وصار صديقه",
                description: "",
            },
        },
    },
    {
        id: "the-bear-sings-a-lullaby-to-sleep-in-his-den",
        slug: "the-bear-sings-a-lullaby-to-sleep-in-his-den",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/PC4fDaErmHE",
            es: "https://youtu.be/x8KGOPJXirY",
            fr: "https://youtu.be/rvrQtUNIQzk",
            ar: "https://youtu.be/trA5mHHCUz8",
        },
        translations: {
            en: {
                title: "The Bear Sings a Lullaby to Sleep in His Den",
                description: "",
            },
            es: {
                title: "El oso canta una nana para dormir en su cueva",
                description: "",
            },
            fr: {
                title: "L’ours chante une berceuse pour dormir dans sa tanière",
                description: "",
            },
            ar: {
                title: "الدب يغني تهويدة لينام في عرينه",
                description: "",
            },
        },
    },
    {
        id: "the-rooster-complains-about-the-snowstorm",
        slug: "the-rooster-complains-about-the-snowstorm",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/-lsvcetk-Js",
            es: "https://youtu.be/1Epg47hfhpQ",
            fr: "https://youtu.be/nBHosqDfRLM",
            ar: "https://youtu.be/HZUj7KYa63E",
        },
        translations: {
            en: {
                title: "The Rooster Complains About the Snowstorm",
                description: "",
            },
            es: {
                title: "El Gallo se Queja de la Nevada",
                description: "",
            },
            fr: {
                title: "Le Coq se Plaint de la Tempête de Neige",
                description: "",
            },
            ar: {
                title: "الديك يشتكي من عاصفة الثلج",
                description: "",
            },
        },
    },
    {
        id: "wolf-pup-sings-about-the-beautiful-north-dakota-snow",
        slug: "wolf-pup-sings-about-the-beautiful-north-dakota-snow",
        categories: ["wolf"],
        youtubeByLang: {
            en: "https://youtu.be/BMZaQCWN3_w",
            es: "https://youtu.be/DTVXd21uX5s",
            fr: "https://youtu.be/CUmdF8RNYuE",
            ar: "https://youtu.be/C-ivBwQT8Bg",
        },
        translations: {
            en: {
                title: "Wolf Pup Sings About the Beautiful North Dakota Snow",
                description: "",
            },
            es: {
                title: "El Lobezno Canta a la Hermosa Nieve de Dakota del Norte",
                description: "",
            },
            fr: {
                title: "Le Loupceau Chante la Belle Neige du Dakota du Nord",
                description: "",
            },
            ar: {
                title: "الجرو الذئب يغني عن جمال ثلج داكوتا الشمالية",
                description: "",
            },
        },
    },
    {
        id: "little-wolf-sings-to-the-snowy-moon",
        slug: "little-wolf-sings-to-the-snowy-moon",
        categories: ["wolf"],
        youtubeByLang: {
            en: "https://youtu.be/u8nsp-IiI6Y",
            es: "https://youtu.be/hf-QtH7nyrw",
            fr: "https://youtu.be/gBHw7G9BTQc",
            ar: "https://youtu.be/NoEB0Lzp1m8",
        },
        translations: {
            en: {
                title: "Little Wolf Sings to the Snowy Moon",
                description: "",
            },
            es: {
                title: "El Lobito Canta a la Luna Nevada",
                description: "",
            },
            fr: {
                title: "Le petit loup chante à la lune enneigée",
                description: "",
            },
            ar: {
                title: "الذئب الصغير يغني للقمر الثلجي",
                description: "",
            },
        },
    },
    {
        id: "the-beavers-snowy-dam",
        slug: "the-beavers-snowy-dam",
        categories: ["beaver"],
        youtubeByLang: {
            en: "https://youtu.be/czJk2odf6SY",
            es: "https://youtu.be/MpjvaHHuJIs",
            fr: "https://youtu.be/NhKZRIGhIJY",
            ar: "https://youtu.be/CHh7CkXQpp0",
        },
        translations: {
            en: {
                title: "The Beaver’s Snowy Dam",
                description: "",
            },
            es: {
                title: "La Presa Nevada del Castor",
                description: "",
            },
            fr: {
                title: "Le barrage enneigé du castor",
                description: "",
            },
            ar: {
                title: "سدّ الثلج الخاص بالقندس",
                description: "",
            },
        },
    },
    {
        id: "the-squirrel-warms-her-tiny-paws",
        slug: "the-squirrel-warms-her-tiny-paws",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/7UKEEqHd2rg",
            es: "https://youtu.be/PXUCF4_JXOY",
            fr: "https://youtu.be/iT-ipumydgk",
            ar: "https://youtu.be/qS5MXc2QUYg",
        },
        translations: {
            en: {
                title: "The Squirrel Warms Her Tiny Paws",
                description: "",
            },
            es: {
                title: "La ardillita calienta sus patitas",
                description: "",
            },
            fr: {
                title: "L’écureuil réchauffe ses petites pattes",
                description: "",
            },
            ar: {
                title: "السنجاب تدفئ كفوفها الصغيرة",
                description: "",
            },
        },
    },
    {
        id: "building-a-snowy-house-together",
        slug: "building-a-snowy-house-together",
        categories: ["fox", "bear", "raccoon", "wolf", "owl"],
        youtubeByLang: {
            en: "https://youtu.be/kNGj_hktE80",
            es: "https://youtu.be/AIssNZkT5DM",
            fr: "https://youtu.be/5RkgCdLdePU",
            ar: "https://youtu.be/X15nvBkGjyM",
        },
        translations: {
            en: {
                title: "Building a Snowy House Together",
                description: "",
            },
            es: {
                title: "Construimos una casita en la nieve",
                description: "",
            },
            fr: {
                title: "Construisons notre maison de neige",
                description: "",
            },
            ar: {
                title: "نبني بيتًا معًا في الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-bear-checks-the-winter-forest",
        slug: "the-bear-checks-the-winter-forest",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/-oq-rWIbp5s",
            es: "https://youtu.be/9fsb_-Xw_p0",
            fr: "https://youtu.be/84Jv7kzSY_s",
            ar: "https://youtu.be/io1A1mpnNBI",
        },
        translations: {
            en: {
                title: "The Bear Checks the Winter Forest",
                description: "",
            },
            es: {
                title: "El oso revisa el bosque de invierno",
                description: "",
            },
            fr: {
                title: "L’ours vérifie la forêt d’hiver",
                description: "",
            },
            ar: {
                title: "الدب يتفقد غابة الشتاء",
                description: "",
            },
        },
    },
    {
        id: "coyote-and-the-northern-wind",
        slug: "coyote-and-the-northern-wind",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/ndbBG271v_8",
            es: "https://youtu.be/MxYp0UP_fug",
            fr: "https://youtu.be/0MmP0SzcVxg",
            ar: "https://youtu.be/wMOdPabaYeo",
        },
        translations: {
            en: {
                title: "Coyote and the Northern Wind",
                description: "",
            },
            es: {
                title: "El coyote y el viento del norte",
                description: "",
            },
            fr: {
                title: "Le coyote et le vent du nord",
                description: "",
            },
            ar: {
                title: "الذئب يغني للريح الشمالية",
                description: "",
            },
        },
    },
    {
        id: "winter-forest-sings-together",
        slug: "winter-forest-sings-together",
        categories: ["fox", "bear", "raccoon", "coyote", "deer"],
        youtubeByLang: {
            en: "https://youtu.be/Ja8J23f93B0",
            es: "https://youtu.be/Vm6ykgyf6bU",
            fr: "https://youtu.be/Ur_JATwb-4M",
            ar: "https://youtu.be/61ECftFWopE",
        },
        translations: {
            en: {
                title: "Winter Forest Sings Together",
                description: "",
            },
            es: {
                title: "Bosque de Invierno Canta",
                description: "",
            },
            fr: {
                title: "Forêt d’hiver chante",
                description: "",
            },
            ar: {
                title: "الغابة الشتوية تغني",
                description: "",
            },
        },
    },
    {
        id: "the-girl-and-the-little-fox",
        slug: "the-girl-and-the-little-fox",
        categories: ["fox", "nd"],
        youtubeByLang: {
            en: "https://youtu.be/fQtz3885PeI",
            es: "https://youtu.be/LGJkP4CSSiE",
            fr: "https://youtu.be/TKBGqVnzFH4",
            ar: "https://youtu.be/hUD9Juns2OY",
        },
        translations: {
            en: {
                title: "The Girl and the Little Fox",
                description: "",
            },
            es: {
                title: "La Niña y el Zorrito",
                description: "",
            },
            fr: {
                title: "La Fille et le Petit Renard",
                description: "",
            },
            ar: {
                title: "الفتاة والثعلب الصغير",
                description: "",
            },
        },
    },
    {
        id: "song-of-the-icicles",
        slug: "song-of-the-icicles",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/Naeko7NfE_A",
            es: "https://youtu.be/p2uOPwDZ1Bk",
            fr: "https://youtu.be/MgfuixG_E0g",
            ar: "https://youtu.be/3Ej5kHmYrtg",
        },
        translations: {
            en: {
                title: "Song of the Icicles",
                description: "",
            },
            es: {
                title: "Canción de los Carámbanos",
                description: "",
            },
            fr: {
                title: "Chanson des Glaçons",
                description: "",
            },
            ar: {
                title: "أغنية الشموع الجليدية",
                description: "",
            },
        },
    },
    {
        id: "the-pheasant-wants-to-sing",
        slug: "the-pheasant-wants-to-sing",
        categories: ["pheasant"],
        youtubeByLang: {
            en: "https://youtu.be/pTmF8A5eHD0",
            es: "https://youtu.be/o4gMcs2J59Y",
            fr: "https://youtu.be/9TCSIiGEo9E",
            ar: "https://youtu.be/WM8w_uffTbA",
        },
        translations: {
            en: {
                title: "The Pheasant Wants to Sing",
                description: "",
            },
            es: {
                title: "El Faisán Quiere Cantar",
                description: "",
            },
            fr: {
                title: "Le Faisan Veut Chanter",
                description: "",
            },
            ar: {
                title: "الفَزّان يريد أن يُغَنّي",
                description: "",
            },
        },
    },
    {
        id: "the-fox-and-the-dog-became-friends",
        slug: "the-fox-and-the-dog-became-friends",
        categories: ["fox", "farm"],
        youtubeByLang: {
            en: "https://youtu.be/9AMkFLNJGgg",
            es: "https://youtu.be/jn3FM-1bePc",
            fr: "https://youtu.be/VANJlrHjty8",
            ar: "https://youtu.be/3xjJHZO4kRg",
        },
        translations: {
            en: {
                title: "The Fox and the Dog Became Friends",
                description: "",
            },
            es: {
                title: "El Zorro y el Perro se hicieron amigos",
                description: "",
            },
            fr: {
                title: "Le Renard et le Chien sont devenus amis",
                description: "",
            },
            ar: {
                title: "الثعلب والكلب أصبحا أصدقاء",
                description: "",
            },
        },
    },
    {
        id: "the-rooster-and-the-fox-in-winter",
        slug: "the-rooster-and-the-fox-in-winter",
        categories: ["fox", "farm"],
        youtubeByLang: {
            en: "https://youtu.be/3pd_kvXk1mg",
            es: "https://youtu.be/8IrjPAkjcmQ",
            fr: "https://youtu.be/MwtQs0TUwKA",
            ar: "https://youtu.be/NFd2KzYOkP8",
        },
        translations: {
            en: {
                title: "The Rooster and the Fox in Winter",
                description: "",
            },
            es: {
                title: "El Gallo y la Zorra en Invierno",
                description: "",
            },
            fr: {
                title: "Le Coq et la Renarde en Hiver",
                description: "",
            },
            ar: {
                title: "الديك والثعلبة في الشتاء",
                description: "",
            },
        },
    },
    {
        id: "deer-sings-in-the-snow-lost-in-winter-path",
        slug: "deer-sings-in-the-snow-lost-in-winter-path",
        categories: ["deer"],
        youtubeByLang: {
            en: "https://youtu.be/eYEHZruWFmc",
            es: "https://youtu.be/9J_YlJgwsJ0",
            fr: "https://youtu.be/uOcUeKis4Rw",
            ar: "https://youtu.be/BzAkqrYUF7Q",
        },
        translations: {
            en: {
                title: "Deer Sings in the Snow – Lost in Winter Path",
                description: "",
            },
            es: {
                title: "El ciervo canta en la nieve – perdió su camino",
                description: "",
            },
            fr: {
                title: "Le cerf chante dans la neige – perdu sur le chemin d’hiver",
                description: "",
            },
            ar: {
                title: "أغنية الغزال في الثلج – ضاع الطريق الشتوي",
                description: "",
            },
        },
    },
    {
        id: "snowflake-friend-falls-on-my-hand",
        slug: "snowflake-friend-falls-on-my-hand",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/YQPyQATVnyU",
            es: "https://youtu.be/XYqF5JbIRgw",
            fr: "https://youtu.be/_fI-Kx3w0fc",
            ar: "https://youtu.be/4Div8c4AELE",
        },
        translations: {
            en: {
                title: "Snowflake Friend – Falls on My Hand",
                description: "",
            },
            es: {
                title: "Copo Amigo – Cae en Mi Mano",
                description: "",
            },
            fr: {
                title: "Flocon Ami – Se Pose sur Ma Main",
                description: "",
            },
            ar: {
                title: "صديقة الثلج – تنزل على يدي",
                description: "",
            },
        },
    },
    {
        id: "raccoons-snow-adventures",
        slug: "raccoons-snow-adventures",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/bMhPFcONHzI",
            es: "https://youtu.be/_domDvhb60c",
            fr: "https://youtu.be/whZf2TMXO9c",
            ar: "https://youtu.be/16lhvicOM8M",
        },
        translations: {
            en: {
                title: "Raccoon’s Snow Adventures",
                description: "",
            },
            es: {
                title: "Las Aventuras de Mapache en la Nieve",
                description: "",
            },
            fr: {
                title: "Les Aventures du Raton Laveur dans la Neige",
                description: "",
            },
            ar: {
                title: "مغامرات الراكون في الثلج",
                description: "",
            },
        },
    },
    {
        id: "foxs-warm-tail-song",
        slug: "foxs-warm-tail-song",
        categories: ["fox"],
        youtubeByLang: {
            en: "https://youtu.be/tf9MCvDoBWg",
            es: "https://youtu.be/Qb-9MxSUGhM",
            fr: "https://youtu.be/KeiapdT4KHA",
            ar: "https://youtu.be/T92LuwGTPrI",
        },
        translations: {
            en: {
                title: "Fox’s Warm Tail Song",
                description: "",
            },
            es: {
                title: "Canción de la Cola Caliente del Zorro",
                description: "",
            },
            fr: {
                title: "Chanson de la Queue Chaude du Renard",
                description: "",
            },
            ar: {
                title: "أغنية ذيل الثعلب الدافئ",
                description: "",
            },
        },
    },
    {
        id: "the-rabbits-carrot-lesson",
        slug: "the-rabbits-carrot-lesson",
        categories: ["bunny", "fox"],
        youtubeByLang: {
            en: "https://youtu.be/-ir1Fc6MfAg",
            es: "https://youtu.be/w6O06XTl31M",
            fr: "https://youtu.be/ZFMsxjyhKcQ",
            ar: "https://youtu.be/NU0LUNNe-Fo",
        },
        translations: {
            en: {
                title: "The Rabbit’s Carrot Lesson",
                description: "",
            },
            es: {
                title: "La Lección de la Zanahoria del Conejo",
                description: "",
            },
            fr: {
                title: "La Leçon de la Carotte du Lapin",
                description: "",
            },
            ar: {
                title: "درس الأرنب مع الجزر",
                description: "",
            },
        },
    },
    {
        id: "chipmunks-winter-nuts-song",
        slug: "chipmunks-winter-nuts-song",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/APCtLbyLgwQ",
            es: "https://youtu.be/QmkKwFzbCVY",
            fr: "https://youtu.be/Vupd6yaS6gk",
            ar: "https://youtu.be/rS1ydM0lzG0",
        },
        translations: {
            en: {
                title: "Chipmunk’s Winter Nuts Song",
                description: "",
            },
            es: {
                title: "La Canción de las Nueces de Invierno de la Ardilla Listada",
                description: "",
            },
            fr: {
                title: "La Chanson des Noisettes d’Hiver du Tamia",
                description: "",
            },
            ar: {
                title: "أغنية السنجاب الشتوية عن الجوز",
                description: "",
            },
        },
    },
    {
        id: "coyote-rides-a-sled-in-the-snow",
        slug: "coyote-rides-a-sled-in-the-snow",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/GX0IoNId4S4",
            es: "https://youtu.be/GTCinGS9WTg",
            fr: "https://youtu.be/KThy_6dqvfc",
            ar: "https://youtu.be/ZCegdkGsM-k",
        },
        translations: {
            en: {
                title: "Coyote Rides a Sled in the Snow",
                description: "",
            },
            es: {
                title: "El Coyote se Desliza en el Trineo",
                description: "",
            },
            fr: {
                title: "Le Coyote Glisse sur la Luge dans la Neige",
                description: "",
            },
            ar: {
                title: "ذئب البراري يتزلج على المزلجة في الثلج",
                description: "",
            },
        },
    },
    {
        id: "squirrel-searching-for-her-nuts-in-the-snow",
        slug: "squirrel-searching-for-her-nuts-in-the-snow",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/lL_M4GUL1sM",
            es: "https://youtu.be/9YVtafRFRlc",
            fr: "https://youtu.be/srv7V3GUO-M",
            ar: "https://youtu.be/CgO9newE0i4",
        },
        translations: {
            en: {
                title: "Squirrel Searching for Her Nuts in the Snow",
                description: "",
            },
            es: {
                title: "La Ardilla Busca sus Nueces en la Nieve",
                description: "",
            },
            fr: {
                title: "L’Écureuil Cherche ses Noisettes dans la Neige",
                description: "",
            },
            ar: {
                title: "السنجاب يبحث عن مكسراته تحت الثلج",
                description: "",
            },
        },
    },
    {
        id: "bunnys-haystack-jumps",
        slug: "bunnys-haystack-jumps",
        categories: ["bunny"],
        youtubeByLang: {
            en: "https://youtu.be/lmsMn_9nu7g",
            es: "https://youtu.be/EowEeNrili0",
            fr: "https://youtu.be/NrDjJTHZELo",
            ar: "https://youtu.be/jLqk1igoxhg",
        },
        translations: {
            en: {
                title: "Bunny’s Haystack Jumps",
                description: "",
            },
            es: {
                title: "Saltos del Conejito en la Paja",
                description: "",
            },
            fr: {
                title: "Les Sauts du Lapin dans la Paille",
                description: "",
            },
            ar: {
                title: "قفزات الأرنب في كومة التبن",
                description: "",
            },
        },
    },
    {
        id: "little-mouses-winter-grain-song",
        slug: "little-mouses-winter-grain-song",
        categories: ["mouse"],
        youtubeByLang: {
            en: "https://youtu.be/NJQdpN8ejh4",
            es: "https://youtu.be/ttulH6sK-Cw",
            fr: "https://youtu.be/2WmCIOlZF_E",
            ar: "https://youtu.be/9neng4yU4ew",
        },
        translations: {
            en: {
                title: "Little Mouse’s Winter Grain Song",
                description: "",
            },
            es: {
                title: "La Canción del Grano de la Ratita",
                description: "",
            },
            fr: {
                title: "La Chanson du Grain de la Petite Souris",
                description: "",
            },
            ar: {
                title: "أغنية حبوب الفأرة الصغيرة",
                description: "",
            },
        },
    },
    {
        id: "wild-and-tame-geese-meet",
        slug: "wild-and-tame-geese-meet",
        categories: ["canada_goose"],
        youtubeByLang: {
            en: "https://youtu.be/I-QWuCeW250",
            es: "https://youtu.be/30nBgpXQ1qI",
            fr: "https://youtu.be/-XC7u2GUIYo",
            ar: "https://youtu.be/17CFpVuYJCU",
        },
        translations: {
            en: {
                title: "Wild and Tame Geese Meet",
                description: "",
            },
            es: {
                title: "Gansos Salvajes y Domésticos",
                description: "",
            },
            fr: {
                title: "Les Oies Sauvages et Domestiques",
                description: "",
            },
            ar: {
                title: "لقاء الإوز البري والمنزلي",
                description: "",
            },
        },
    },
    {
        id: "what-does-snow-smell-like",
        slug: "what-does-snow-smell-like",
        categories: ["bunny", "holiday"],
        youtubeByLang: {
            en: "https://youtu.be/gQsmWasOKXE",
            es: "https://youtu.be/qMQDooY7HJQ",
            fr: "https://youtu.be/_zEd9pCkmSU",
            ar: "https://youtu.be/xvVU5hY5I48",
        },
        translations: {
            en: {
                title: "What Does Snow Smell Like?",
                description: "",
            },
            es: {
                title: "¿A Qué Huele la Nieve?",
                description: "",
            },
            fr: {
                title: "Quelle Odeur a la Neige ?",
                description: "",
            },
            ar: {
                title: "بماذا تفوح رائحة الثلج؟",
                description: "",
            },
        },
    },
    {
        id: "the-bears-frosty-nose-song",
        slug: "the-bears-frosty-nose-song",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/VgpeL3peEnY",
            es: "https://youtu.be/xGDowHcs9Jg",
            fr: "https://youtu.be/j-YTfR_yX-s",
            ar: "https://youtu.be/Rj-nKd2Sj5A",
        },
        translations: {
            en: {
                title: "The Bear’s Frosty Nose Song",
                description: "",
            },
            es: {
                title: "La Canción de la Nariz Congelada del Oso",
                description: "",
            },
            fr: {
                title: "La Chanson du Nez Gelé de l’Ours",
                description: "",
            },
            ar: {
                title: "أغنية أنف الدب المتجمد",
                description: "",
            },
        },
    },
    {
        id: "friends-in-the-snow",
        slug: "friends-in-the-snow",
        categories: ["nd", "fox", "bear"],
        youtubeByLang: {
            en: "https://youtu.be/74_6_pA0i_Q",
            es: "https://youtu.be/BUifbiNz-CE",
            fr: "https://youtu.be/ddONrNwbcdg",
            ar: "https://youtu.be/AVgDXsaKTUo",
        },
        translations: {
            en: {
                title: "Friends in the Snow",
                description: "",
            },
            es: {
                title: "Amigos en la Nieve",
                description: "",
            },
            fr: {
                title: "Amis dans la Neige",
                description: "",
            },
            ar: {
                title: "أصدقاء في الثلج",
                description: "",
            },
        },
    },
    {
        id: "snowy-nights-in-north-dakota",
        slug: "snowy-nights-in-north-dakota",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/Wrd2QlzOsGM",
            es: "https://youtu.be/sBExX-LJKus",
            fr: "https://youtu.be/s3i5TcyJ1Gc",
            ar: "https://youtu.be/q46FTkNFIqM",
        },
        translations: {
            en: {
                title: "Snowy Nights in North Dakota",
                description: "",
            },
            es: {
                title: "Noches Nevadas en Dakota del Norte",
                description: "",
            },
            fr: {
                title: "Nuits de Neige au Dakota du Nord",
                description: "",
            },
            ar: {
                title: "ليالي ثلجية في داكوتا الشمالية",
                description: "",
            },
        },
    },
    {
        id: "owl-watching-the-winter-forest-song",
        slug: "owl-watching-the-winter-forest-song",
        categories: ["owl"],
        youtubeByLang: {
            en: "https://youtu.be/0oB_2t95DzM",
            es: "https://youtu.be/4gv_eh50SNM",
            fr: "https://youtu.be/oqOOTj0ihZ8",
            ar: "https://youtu.be/35lmb-5CbA8",
        },
        translations: {
            en: {
                title: "Owl Watching the Winter Forest Song",
                description: "",
            },
            es: {
                title: "Canción del Búho que Observa el Bosque de Invierno",
                description: "",
            },
            fr: {
                title: "Chanson du Hibou qui Observe la Forêt d’Hiver",
                description: "",
            },
            ar: {
                title: "أغنية البومة التي تراقب الغابة الشتوية",
                description: "",
            },
        },
    },
    {
        id: "deers-snow-crunch-song",
        slug: "deers-snow-crunch-song",
        categories: ["deer"],
        youtubeByLang: {
            en: "https://youtu.be/96mWvmoBc0g",
            es: "https://youtu.be/DtOpdiOyPMQ",
            fr: "https://youtu.be/Vy1b5QESW_Y",
            ar: "https://youtu.be/7kNBO8dp3zM",
        },
        translations: {
            en: {
                title: "Deer’s Snow Crunch Song",
                description: "",
            },
            es: {
                title: "Canción del Venado y el Crujido de la Nieve",
                description: "",
            },
            fr: {
                title: "Chanson du Cerf et du Craquement de la Neige",
                description: "",
            },
            ar: {
                title: "أغنية الغزال وصوت الثلج",
                description: "",
            },
        },
    },
    {
        id: "little-hedgehogs-winter-hiding-song",
        slug: "little-hedgehogs-winter-hiding-song",
        categories: ["guests"],
        youtubeByLang: {
            en: "https://youtu.be/gT7V3OWRGro",
            es: "https://youtu.be/YoCvBp87Hgc",
            fr: "https://youtu.be/T3yU6X7-uE0",
            ar: "https://youtu.be/6r32OR-id30",
        },
        translations: {
            en: {
                title: "Little Hedgehog’s Winter Hiding Song",
                description: "",
            },
            es: {
                title: "Canción del Erizo y sus Escondites de Invierno",
                description: "",
            },
            fr: {
                title: "Chanson du Petit Hérisson et ses Cachettes d’Hiver",
                description: "",
            },
            ar: {
                title: "أغنية القنفذ الصغير ومخابئه الشتوية",
                description: "",
            },
        },
    },
    {
        id: "fox-shows-the-raccoon-the-way-home",
        slug: "fox-shows-the-raccoon-the-way-home",
        categories: ["fox", "raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/g4ZghWO4dxU",
            es: "https://youtu.be/VSuZWp42dBI",
            fr: "https://youtu.be/EA73ZFrEtRU",
            ar: "https://youtu.be/I6pDxxmr_dA",
        },
        translations: {
            en: {
                title: "Fox Shows the Raccoon the Way Home",
                description: "",
            },
            es: {
                title: "La Zorra Muestra al Mapache el Camino a Casa",
                description: "",
            },
            fr: {
                title: "Le Renard Montre au Raton le Chemin de la Maison",
                description: "",
            },
            ar: {
                title: "الثعلب يرشد الراكون إلى بيته",
                description: "",
            },
        },
    },
    {
        id: "roosters-shadow-under-the-snow",
        slug: "roosters-shadow-under-the-snow",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/S6jcY403BgU",
            es: "https://youtu.be/paJ_HHzToIg",
            fr: "https://youtu.be/5ZIsB9t7y8I",
            ar: "https://youtu.be/Xqbp6-RsqSw",
        },
        translations: {
            en: {
                title: "Rooster’s Shadow Under the Snow",
                description: "",
            },
            es: {
                title: "El gallo busca su sombra bajo la nieve",
                description: "",
            },
            fr: {
                title: "Le coq cherche son ombre sous la neige",
                description: "",
            },
            ar: {
                title: "الديك يبحث عن ظلّه تحت الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-raccoon-smiles-alone-in-his-snowy-little-home",
        slug: "the-raccoon-smiles-alone-in-his-snowy-little-home",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/Vjoemj1kpV8",
            es: "https://youtu.be/GxmGOxz7Y14",
            fr: "https://youtu.be/S3iCDJSXV5s",
            ar: "https://youtu.be/Wta9Ffz_O5o",
        },
        translations: {
            en: {
                title: "The raccoon smiles alone, in his snowy little home",
                description: "",
            },
            es: {
                title: "La casita de nieve del mapache",
                description: "",
            },
            fr: {
                title: "La maison de neige du raton laveur",
                description: "",
            },
            ar: {
                title: "بيت الراكون الثلجي",
                description: "",
            },
        },
    },
    {
        id: "the-bear-who-complained-about-the-snow",
        slug: "the-bear-who-complained-about-the-snow",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/zresjv7giC4",
            es: "https://youtu.be/OHTWVU4bcgU",
            fr: "https://youtu.be/aoqBBIP0PAw",
            ar: "https://youtu.be/iYBGM2A07ZE",
        },
        translations: {
            en: {
                title: "The Bear Who Complained About the Snow",
                description: "",
            },
            es: {
                title: "El oso que se quejaba de la nieve",
                description: "",
            },
            fr: {
                title: "Un ours endormi essaie de faire la sieste…",
                description: "",
            },
            ar: {
                title: "دب صغير يحاول النوم… لكن الثلج يواصل الغناء!",
                description: "",
            },
        },
    },
    {
        id: "coyote-whos-boss-in-the-snowy-forest",
        slug: "coyote-whos-boss-in-the-snowy-forest",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/YlJwmZn4klk",
            es: "https://youtu.be/Yrk87zaKQ_Y",
            fr: "https://youtu.be/2IngXeNNZMc",
            ar: "https://youtu.be/HJB6n8s8rDs",
        },
        translations: {
            en: {
                title: "Coyote: Who’s Boss in the Snowy Forest?",
                description: "",
            },
            es: {
                title: "El coyote que discutía quién manda en el bosque nevado",
                description: "",
            },
            fr: {
                title: "Le coyote qui discutait de qui est le chef dans la forêt enneigée",
                description: "",
            },
            ar: {
                title: "ذئب البراري الذي جادل من هو الزعيم في الغابة الثلجية",
                description: "",
            },
        },
    },
    {
        id: "the-squirrel-who-forgot-her-nuts",
        slug: "the-squirrel-who-forgot-her-nuts",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/IRafIegFNDM",
            es: "https://youtu.be/YugLmrU-CxQ",
            fr: "https://youtu.be/QpaS29NAD4Y",
            ar: "https://youtu.be/2EsEbJYZf7o",
        },
        translations: {
            en: {
                title: "The Squirrel Who Forgot Her Nuts",
                description: "",
            },
            es: {
                title: "La ardilla que olvidó sus nueces",
                description: "",
            },
            fr: {
                title: "L’écureuil qui oublia où il avait caché ses noisettes",
                description: "",
            },
            ar: {
                title: "السنجاب الذي نسي مكان جوزاته",
                description: "",
            },
        },
    },
    {
        id: "the-hare-who-learned-to-skate",
        slug: "the-hare-who-learned-to-skate",
        categories: ["hare"],
        youtubeByLang: {
            en: "https://youtu.be/5-hncPVA-2o",
            es: "https://youtu.be/jmqkGu_7ZF4",
            fr: "https://youtu.be/K5YCeUiv6Sk",
            ar: "https://youtu.be/lDK7odOcP1U",
        },
        translations: {
            en: {
                title: "The Hare Who Learned to Skate",
                description: "",
            },
            es: {
                title: "La liebre que aprendió a patinar",
                description: "",
            },
            fr: {
                title: "Le lièvre qui apprend à patiner",
                description: "",
            },
            ar: {
                title: "الأرنب الذي تعلّم التزلج على الجليد",
                description: "",
            },
        },
    },
    {
        id: "the-fox-builds-her-snow-castle",
        slug: "the-fox-builds-her-snow-castle",
        categories: ["fox"],
        youtubeByLang: {
            en: "https://youtu.be/gqM_zojwMOs",
            es: "https://youtu.be/2GWJEwo3laE",
            fr: "https://youtu.be/GoklrK6-3_o",
            ar: "https://youtu.be/Gk9Hz9EMEu8",
        },
        translations: {
            en: {
                title: "The Fox Builds Her Snow Castle",
                description: "",
            },
            es: {
                title: "La zorra construye su castillo de nieve",
                description: "",
            },
            fr: {
                title: "Le renard construit son château de neige",
                description: "",
            },
            ar: {
                title: "الثعلبة تبني قلعة ثلجية",
                description: "",
            },
        },
    },
    {
        id: "the-raccoons-snow-carnival",
        slug: "the-raccoons-snow-carnival",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/p5wsu7Jb-bA",
            es: "https://youtu.be/khd1-fwjKic",
            fr: "https://youtu.be/XiYlhVO-K04",
            ar: "https://youtu.be/OPpjBwLU2Hc",
        },
        translations: {
            en: {
                title: "The Raccoon’s Snow Carnival",
                description: "",
            },
            es: {
                title: "El Carnaval de Nieve del Mapache",
                description: "",
            },
            fr: {
                title: "Le Carnaval de Neige du Raton Laveur",
                description: "",
            },
            ar: {
                title: "كرنفال الثلج الخاص بالراكون",
                description: "",
            },
        },
    },
    {
        id: "a-hare-and-a-deer-are-playing-snowballs",
        slug: "a-hare-and-a-deer-are-playing-snowballs",
        categories: ["hare", "deer"],
        youtubeByLang: {
            en: "https://youtu.be/OXsEQ8gWqdc",
            es: "https://youtu.be/lA2UDjrsKzQ",
            fr: "https://youtu.be/gF67J7hXJlQ",
            ar: "https://youtu.be/beD-cq1CD9A",
        },
        translations: {
            en: {
                title: "A Hare And A Deer Are Playing Snowballs",
                description: "",
            },
            es: {
                title: "Un Conejo y un Ciervo Juegan a las Bolas de Nieve",
                description: "",
            },
            fr: {
                title: "Un Lièvre et un Cerf Jouent aux Boules de Neige",
                description: "",
            },
            ar: {
                title: "أرنب وغزال يلعبان بكرات الثلج",
                description: "",
            },
        },
    },
    {
        id: "coyote-and-the-wind-who-sings-louder",
        slug: "coyote-and-the-wind-who-sings-louder",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/5kBNC6JzBA4",
            es: "https://youtu.be/Ew2xCdL4ym4",
            fr: "https://youtu.be/Z6JGJ-x5NKw",
            ar: "https://youtu.be/ZTTTZLqCzlc",
        },
        translations: {
            en: {
                title: "Coyote and the Wind: Who Sings Louder?",
                description: "",
            },
            es: {
                title: "El coyote canta al viento — ¿quién es más fuerte?",
                description: "",
            },
            fr: {
                title: "Le coyote chante au vent — qui est le plus fort ?",
                description: "",
            },
            ar: {
                title: "الذئب يغني للريح — من الأقوى؟",
                description: "",
            },
        },
    },
    {
        id: "the-bear-searching-for-his-pillow",
        slug: "the-bear-searching-for-his-pillow",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/Y08E9Wv0ys0",
            es: "https://youtu.be/uyyaCAd3ZJs",
            fr: "https://youtu.be/ngK4qw7ZlGM",
            ar: "https://youtu.be/bOzSZz6gahQ",
        },
        translations: {
            en: {
                title: "The Bear Searching for His Pillow",
                description: "",
            },
            es: {
                title: "El oso que buscaba su almohada",
                description: "",
            },
            fr: {
                title: "L’ours à la recherche de son oreiller",
                description: "",
            },
            ar: {
                title: "الدب الذي يبحث عن وسادته",
                description: "",
            },
        },
    },
    {
        id: "the-raccoon-on-the-snowy-slide",
        slug: "the-raccoon-on-the-snowy-slide",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/lrLY7zhpfD8",
            es: "https://youtu.be/ZLOcw2SDZq8",
            fr: "https://youtu.be/cbjMa9Pkbi0",
            ar: "https://youtu.be/_zB-4fS3H6E",
        },
        translations: {
            en: {
                title: "The Raccoon on the Snowy Slide",
                description: "",
            },
            es: {
                title: "El mapache en el tobogán nevado",
                description: "",
            },
            fr: {
                title: "Le raton laveur sur le toboggan enneigé",
                description: "",
            },
            ar: {
                title: "الراكون على المنحدر الثلجي",
                description: "",
            },
        },
    },
    {
        id: "the-fox-and-her-snowy-glasses",
        slug: "the-fox-and-her-snowy-glasses",
        categories: ["fox"],
        youtubeByLang: {
            en: "https://youtu.be/duU4JtOHsKY",
            es: "https://youtu.be/omUJoQs-Egc",
            fr: "https://youtu.be/YapWFnQprkw",
            ar: "https://youtu.be/ew09WEDGuOo",
        },
        translations: {
            en: {
                title: "The Fox and Her Snowy Glasses",
                description: "",
            },
            es: {
                title: "La zorra y sus gafas nevadas",
                description: "",
            },
            fr: {
                title: "La renarde et ses lunettes enneigées",
                description: "",
            },
            ar: {
                title: "الثعلبة ونظّارتها الثلجية",
                description: "",
            },
        },
    },
    {
        id: "the-rooster-hiding-in-the-snow",
        slug: "the-rooster-hiding-in-the-snow",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/PFurgfHvCaE",
            es: "https://youtu.be/pCFVD_fJGBU",
            fr: "https://youtu.be/nNWDU_SsKeQ",
            ar: "https://youtu.be/TLruV5tksjY",
        },
        translations: {
            en: {
                title: "The Rooster Hiding in the Snow",
                description: "",
            },
            es: {
                title: "El gallo escondido en la nieve",
                description: "",
            },
            fr: {
                title: "Le coq caché dans la neige",
                description: "",
            },
            ar: {
                title: "الديك المختبئ في الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-hare-who-counts-the-snowflakes",
        slug: "the-hare-who-counts-the-snowflakes",
        categories: ["hare"],
        youtubeByLang: {
            en: "https://youtu.be/r_JwIYLwn5A",
            es: "https://youtu.be/wI7fhzrYsRc",
            fr: "https://youtu.be/5M_7uyUXEl8",
            ar: "https://youtu.be/s9xbVmox__M",
        },
        translations: {
            en: {
                title: "The Hare Who Counts the Snowflakes",
                description: "",
            },
            es: {
                title: "La liebre que cuenta copos de nieve",
                description: "",
            },
            fr: {
                title: "Le lièvre compte les flocons de neige",
                description: "",
            },
            ar: {
                title: "الأرنبُ الذي يعدُّ رقائقَ الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-squirrel-and-the-secret-winter-path",
        slug: "the-squirrel-and-the-secret-winter-path",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/JhbPI2RzY_M",
            es: "https://youtu.be/WkJ8pjpG4hw",
            fr: "https://youtu.be/4VGMPkTBpqA",
            ar: "https://youtu.be/eYzJsiDVDd4",
        },
        translations: {
            en: {
                title: "The Squirrel and the Secret Winter Path",
                description: "",
            },
            es: {
                title: "La ardilla y el sendero secreto de invierno",
                description: "",
            },
            fr: {
                title: "L’écureuil cherche un sentier secret sous la neige",
                description: "",
            },
            ar: {
                title: "السنجابُ والطريقُ السريُّ تحتَ الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-coyote-who-dreamed-of-being-the-snow-king",
        slug: "the-coyote-who-dreamed-of-being-the-snow-king",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/crdosUAlcdA",
            es: "https://youtu.be/X1qNwTzpIK8",
            fr: "https://youtu.be/IUbOPtO659o",
            ar: "https://youtu.be/PQed-0qEKFo",
        },
        translations: {
            en: {
                title: "The Coyote Who Dreamed of Being the Snow King",
                description: "",
            },
            es: {
                title: "El coyote sueña con ser el rey de la nieve",
                description: "",
            },
            fr: {
                title: "Le coyote rêve de devenir roi de la neige",
                description: "",
            },
            ar: {
                title: "ذئبُ البراري يحلمُ أن يكونَ ملكَ الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-hedgehog-and-the-last-leaves",
        slug: "the-hedgehog-and-the-last-leaves",
        categories: ["guests"],
        youtubeByLang: {
            en: "https://youtu.be/Jn9JQHFqqhw",
            es: "https://youtu.be/IVXfFlUFj50",
            fr: "https://youtu.be/6hpcHKb5-LM",
            ar: "https://youtu.be/gSBxcAX8gLc",
        },
        translations: {
            en: {
                title: "The Hedgehog and the Last Leaves",
                description: "",
            },
            es: {
                title: "El Erizo y las Últimas Hojas",
                description: "",
            },
            fr: {
                title: "Le Hérisson et les Dernières Feuilles",
                description: "",
            },
            ar: {
                title: "القنفذ وأوراق الخريف الأخيرة",
                description: "",
            },
        },
    },
    {
        id: "the-little-frogs-snow-dance",
        slug: "the-little-frogs-snow-dance",
        categories: ["frog"],
        youtubeByLang: {
            en: "https://youtu.be/KLzwQnW9oP0",
            es: "https://youtu.be/XbwIrF2yNok",
            fr: "https://youtu.be/ef0FtbCOUIM",
            ar: "https://youtu.be/kTzH6OTZa_4",
        },
        translations: {
            en: {
                title: "The Little Frog’s Snow Dance",
                description: "",
            },
            es: {
                title: "El Baile del Pequeño Sapo",
                description: "",
            },
            fr: {
                title: "La Danse du Petit Grenouille",
                description: "",
            },
            ar: {
                title: "رقصة الضفدع الصغير على الثلج",
                description: "",
            },
        },
    },
    {
        id: "winter-trick-of-the-coyote",
        slug: "winter-trick-of-the-coyote",
        categories: ["coyote", "fox"],
        youtubeByLang: {
            en: "https://youtu.be/r8C-PAwZO48",
            es: "https://youtu.be/A8zSxD3oBS0",
            fr: "https://youtu.be/2JcC460KmYo",
            ar: "https://youtu.be/D5qZ8Q0FvBE",
        },
        translations: {
            en: {
                title: "Winter Trick of the Coyote",
                description: "",
            },
            es: {
                title: "La Travesura Invernal del Coyote",
                description: "",
            },
            fr: {
                title: "Le Tour d’Hiver du Coyote",
                description: "",
            },
            ar: {
                title: "حيلة ذئب البراري الشتوية",
                description: "",
            },
        },
    },
    {
        id: "the-talking-ice-of-north-dakota-lake",
        slug: "the-talking-ice-of-north-dakota-lake",
        categories: ["nd"],
        youtubeByLang: {
            en: "https://youtu.be/KeA8zSvZrEE",
            es: "https://youtu.be/VaGPf9us22k",
            fr: "https://youtu.be/Eotvz_ozxRk",
            ar: "https://youtu.be/RY8SuST0UyA",
        },
        translations: {
            en: {
                title: "The Talking Ice of North Dakota Lake",
                description: "",
            },
            es: {
                title: "El Hielo Hablante del Lago de Dakota del Norte",
                description: "",
            },
            fr: {
                title: "La Glace Parlante du Lac du Dakota du Nord",
                description: "",
            },
            ar: {
                title: "جليد داكوتا الشمالية المتحدث",
                description: "",
            },
        },
    },
    {
        id: "how-the-buffalo-learned-to-laugh",
        slug: "how-the-buffalo-learned-to-laugh",
        categories: ["buffalo", "fox"],
        youtubeByLang: {
            en: "https://youtu.be/AGjFJbJkZBI",
            es: "https://youtu.be/_isdc_FEcig",
            fr: "https://youtu.be/m31qbSP4bWU",
            ar: "https://youtu.be/epYC3EEup0k",
        },
        translations: {
            en: {
                title: "How the Buffalo Learned to Laugh",
                description: "",
            },
            es: {
                title: "Cómo el Búfalo Aprendió a Reír",
                description: "",
            },
            fr: {
                title: "Comment le Bison a Appris à Rire",
                description: "",
            },
            ar: {
                title: "كيف تعلم الجاموس الضحك",
                description: "",
            },
        },
    },
    {
        id: "the-three-sisters-of-north-dakota",
        slug: "the-three-sisters-of-north-dakota",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/m-UpFWgCmrE",
            es: "https://youtu.be/GBkr1ybLzEQ",
            fr: "https://youtu.be/9FleHo9a3g4",
            ar: "https://youtu.be/EyXmUmJiESk",
        },
        translations: {
            en: {
                title: "The Three Sisters of North Dakota",
                description: "",
            },
            es: {
                title: "Las Tres Hermanas de Dakota del Norte",
                description: "",
            },
            fr: {
                title: "Les Trois Sœurs du Dakota du Nord",
                description: "",
            },
            ar: {
                title: "الأخوات الثلاث من داكوتا الشمالية",
                description: "",
            },
        },
    },
    {
        id: "the-snowy-nut",
        slug: "the-snowy-nut",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/yhHQE-SCo0o",
            es: "https://youtu.be/VP3P9qque40",
            fr: "https://youtu.be/rHK9AU70OoY",
            ar: "https://youtu.be/-5v8DQslWTQ",
        },
        translations: {
            en: {
                title: "The Snowy Nut",
                description: "",
            },
            es: {
                title: "La Nuez de Nieve",
                description: "",
            },
            fr: {
                title: "La Noisette de Neige",
                description: "",
            },
            ar: {
                title: "جوزة الثلج",
                description: "",
            },
        },
    },
    {
        id: "halloween-in-the-snowy-forest",
        slug: "halloween-in-the-snowy-forest",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/hM-Q04ge0WU",
            es: "https://youtu.be/aGt5LYfnHgo",
            fr: "https://youtu.be/3mwPn7erTvA",
            ar: "https://youtu.be/OfiI62TceHg",
        },
        translations: {
            en: {
                title: "Halloween in the Snowy Forest",
                description: "",
            },
            es: {
                title: "Halloween en el Bosque Nevado",
                description: "",
            },
            fr: {
                title: "Halloween dans la Forêt de Neige",
                description: "",
            },
            ar: {
                title: "هالوين في الغابة الثلجية",
                description: "",
            },
        },
    },
    {
        id: "the-bear-cant-sleep",
        slug: "the-bear-cant-sleep",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/H-zM_yu-koQ",
            es: "https://youtu.be/eYlM3_Tr5yM",
            fr: "https://youtu.be/HnRj1m0kAM4",
            ar: "https://youtu.be/c1VFfZKjZC8",
        },
        translations: {
            en: {
                title: "The Bear Can’t Sleep",
                description: "",
            },
            es: {
                title: "El Oso No Puede Dormir",
                description: "",
            },
            fr: {
                title: "L’Ours Ne Peut Pas Dormir",
                description: "",
            },
            ar: {
                title: "الدب لا يستطيع النوم",
                description: "",
            },
        },
    },
    {
        id: "frosty-cock-a-doodle-doo",
        slug: "frosty-cock-a-doodle-doo",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/cwltYp1UaNE",
            es: "https://youtu.be/9McttTeCrSA",
            fr: "https://youtu.be/1PNjo5JuWeo",
            ar: "https://youtu.be/Wubdf-HAQYg",
        },
        translations: {
            en: {
                title: "Frosty Cock-a-Doodle-Doo",
                description: "",
            },
            es: {
                title: "Cucurucú Helado",
                description: "",
            },
            fr: {
                title: "Cocorico Givré",
                description: "",
            },
            ar: {
                title: "صياح الديك المتجمد",
                description: "",
            },
        },
    },
    {
        id: "the-coyote-builds-a-snow-fortress",
        slug: "the-coyote-builds-a-snow-fortress",
        categories: ["coyote"],
        youtubeByLang: {
            en: "https://youtu.be/ECDPlTkwINg",
            es: "https://youtu.be/E1wO5dZ9fq8",
            fr: "https://youtu.be/y9WZufUCYi4",
            ar: "https://youtu.be/en2phN0Ke_U",
        },
        translations: {
            en: {
                title: "The Coyote Builds a Snow Fortress",
                description: "",
            },
            es: {
                title: "El Coyote Construye un Castillo de Nieve",
                description: "",
            },
            fr: {
                title: "Le Coyote Construit un Château de Neige",
                description: "",
            },
            ar: {
                title: "يبني الكايوتي قلعة الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-raccoon-dreams-of-summer-days",
        slug: "the-raccoon-dreams-of-summer-days",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/UjxncCqXGR0",
            es: "https://youtu.be/TDKQvBlQchQ",
            fr: "https://youtu.be/j5FdwpsbDpE",
            ar: "https://youtu.be/YTQtQ8vj20s",
        },
        translations: {
            en: {
                title: "The Raccoon Dreams of Summer Days",
                description: "",
            },
            es: {
                title: "El Mapache Sueña con los Días de Verano",
                description: "",
            },
            fr: {
                title: "Le Raton Rêve des Jours d’Été",
                description: "",
            },
            ar: {
                title: "الراكون يحلم بأيام الصيف",
                description: "",
            },
        },
    },
    {
        id: "the-hare-and-the-mouse-race-to-find-spring",
        slug: "the-hare-and-the-mouse-race-to-find-spring",
        categories: ["hare", "mouse"],
        youtubeByLang: {
            en: "https://youtu.be/ooQkdXM0Oqk",
            es: "https://youtu.be/_-EvCVQVl_Y",
            fr: "https://youtu.be/_138Z7IOhoY",
            ar: "https://youtu.be/HF26IIfsGdw",
        },
        translations: {
            en: {
                title: "The Hare and the Mouse Race to Find Spring",
                description: "",
            },
            es: {
                title: "El Conejo y la Ratita Buscan la Primavera",
                description: "",
            },
            fr: {
                title: "Le Lapin et la Souris Cherchent le Printemps",
                description: "",
            },
            ar: {
                title: "الأرنب والفأرة يبحثان عن الربيع",
                description: "",
            },
        },
    },
    {
        id: "grandma-melonys-morning-on-the-farm",
        slug: "grandma-melonys-morning-on-the-farm",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/olBRJMlpcqw",
            es: "https://youtu.be/58l7RWa6b68",
            fr: "https://youtu.be/TlUG3MAq0ys",
            ar: "https://youtu.be/upKb4vWvz20",
        },
        translations: {
            en: {
                title: "Grandma Melony’s Morning on the Farm",
                description: "",
            },
            es: {
                title: "La Abuela Melony en su Granja",
                description: "",
            },
            fr: {
                title: "Mamie Mélony et sa Ferme d’Hiver",
                description: "",
            },
            ar: {
                title: "جدّتي ميلوني في المزرعة",
                description: "",
            },
        },
    },
    {
        id: "drum-under-the-winter-sky",
        slug: "drum-under-the-winter-sky",
        categories: ["nd"],
        youtubeByLang: {
            en: "https://youtu.be/nazKrGoe6oo",
            es: "https://youtu.be/eZOi9kdMI4M",
            fr: "https://youtu.be/JasU5TNB1Fg",
            ar: "https://youtu.be/ADdHSW0eb_k",
        },
        translations: {
            en: {
                title: "Drum Under the Winter Sky",
                description: "",
            },
            es: {
                title: "Tambor Bajo el Cielo Invernal",
                description: "",
            },
            fr: {
                title: "Tambour Sous le Ciel d’Hiver",
                description: "",
            },
            ar: {
                title: "طبول تحت سماء الشتاء",
                description: "",
            },
        },
    },
    {
        id: "the-raccoon-dances-the-snowy-rocknroll",
        slug: "the-raccoon-dances-the-snowy-rocknroll",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/8ySWlE5MsPE",
            es: "https://youtu.be/dO2vHMn46EA",
            fr: "https://youtu.be/d3PMEx3bnIg",
            ar: "https://youtu.be/7Xs2PT5Mymo",
        },
        translations: {
            en: {
                title: "The Raccoon Dances the Snowy Rock’n’Roll",
                description: "",
            },
            es: {
                title: "El Mapache Baila Rock’n’Roll de Nieve",
                description: "",
            },
            fr: {
                title: "Le Raton Danse le Rock’n’Roll des Neiges",
                description: "",
            },
            ar: {
                title: "الراكون يرقص روك آند رول الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-bunny-brushes-in-the-snow",
        slug: "the-bunny-brushes-in-the-snow",
        categories: ["bunny"],
        youtubeByLang: {
            en: "https://youtu.be/COln9vDQ9kw",
            es: "https://youtu.be/lmUacQGWjDY",
            fr: "https://youtu.be/ZMTUDTG32No",
            ar: "https://youtu.be/09FJJso6cKA",
        },
        translations: {
            en: {
                title: "The Bunny Brushes in the Snow",
                description: "",
            },
            es: {
                title: "La Conejita Enseña a Cepillarse los Dientes",
                description: "",
            },
            fr: {
                title: "Le Lapin Apprend à Se Brosser les Dents",
                description: "",
            },
            ar: {
                title: "الأرنبة تُعلّم صغيرها تنظيف الأسنان",
                description: "",
            },
        },
    },
    {
        id: "fox-and-the-falling-star",
        slug: "fox-and-the-falling-star",
        categories: ["fox"],
        youtubeByLang: {
            en: "https://youtu.be/4bqR7dLFQBg",
            es: "https://youtu.be/Y5d-o5q95Xc",
            fr: "https://youtu.be/BLcWeO_-9BU",
            ar: "https://youtu.be/rdB9ZfK2bvE",
        },
        translations: {
            en: {
                title: "Fox and the Falling Star",
                description: "",
            },
            es: {
                title: "El Zorrito y la Estrella Caída",
                description: "",
            },
            fr: {
                title: "Le Petit Renard et l’Étoile Tombée",
                description: "",
            },
            ar: {
                title: "الثعلب الصغير والنجمة الساقطة",
                description: "",
            },
        },
    },
    {
        id: "snowy-little-beaver-builds-a-dam",
        slug: "snowy-little-beaver-builds-a-dam",
        categories: ["beaver"],
        youtubeByLang: {
            en: "https://youtu.be/MfTqwF-JKTY",
            es: "https://youtu.be/4MnICkZ_Eak",
            fr: "https://youtu.be/eTQWHdPOahE",
            ar: "https://youtu.be/Jke7_CwS23U",
        },
        translations: {
            en: {
                title: "Snowy Little Beaver Builds a Dam",
                description: "",
            },
            es: {
                title: "El Castorcito Nevado Construye su Presa",
                description: "",
            },
            fr: {
                title: "Le Petit Castor des Neiges Construit son Barrage",
                description: "",
            },
            ar: {
                title: "القندس الصغير يبني سدَّه في الثلج",
                description: "",
            },
        },
    },
    {
        id: "owls-winter-lullaby",
        slug: "owls-winter-lullaby",
        categories: ["owl"],
        youtubeByLang: {
            en: "https://youtu.be/poezYeIVpGI",
            es: "https://youtu.be/nc9BVAhHNuk",
            fr: "https://youtu.be/mWF7axci2po",
            ar: "https://youtu.be/xsGAJpg2bDo",
        },
        translations: {
            en: {
                title: "Owl’s Winter Lullaby",
                description: "",
            },
            es: {
                title: "La Nana Invernal del Búho",
                description: "",
            },
            fr: {
                title: "La Berceuse d’Hiver de la Chouette",
                description: "",
            },
            ar: {
                title: "ترنيمة البومة الشتوية",
                description: "",
            },
        },
    },
    {
        id: "raccoons-snowflake-quest",
        slug: "raccoons-snowflake-quest",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/y2jc7orh57Y",
            es: "https://youtu.be/W3J0mvJk354",
            fr: "https://youtu.be/yC0etAWroO8",
            ar: "https://youtu.be/HrTKcPvFliM",
        },
        translations: {
            en: {
                title: "Raccoon’s Snowflake Quest",
                description: "",
            },
            es: {
                title: "La Aventura del Copo de Nieve del Mapache",
                description: "",
            },
            fr: {
                title: "La Quête du Flocon de Neige du Raton",
                description: "",
            },
            ar: {
                title: "رحلة الراكون وراء ندفة الثلج",
                description: "",
            },
        },
    },
    {
        id: "the-ice-skating-moose",
        slug: "the-ice-skating-moose",
        categories: ["deer"],
        youtubeByLang: {
            en: "https://youtu.be/nsJIFje8XZc",
            es: "https://youtu.be/QcvznksY1_I",
            fr: "https://youtu.be/-38fgkYjGOQ",
            ar: "https://youtu.be/NzP_vhemy3M",
        },
        translations: {
            en: {
                title: "The Ice-Skating Moose",
                description: "",
            },
            es: {
                title: "El Alce Patinador",
                description: "",
            },
            fr: {
                title: "L’Orignal Patineur",
                description: "",
            },
            ar: {
                title: "الأيـل المتزلّج على الجليد",
                description: "",
            },
        },
    },
    {
        id: "penguin-from-the-north-dakota-blizzard",
        slug: "penguin-from-the-north-dakota-blizzard",
        categories: ["guests"],
        youtubeByLang: {
            en: "https://youtu.be/QH1AkDdJ5hY",
            es: "https://youtu.be/s89vanSp8oo",
            fr: "https://youtu.be/_17GjFuoiVk",
            ar: "https://youtu.be/cSIDdtdXXMg",
        },
        translations: {
            en: {
                title: "Penguin from the North Dakota Blizzard",
                description: "",
            },
            es: {
                title: "El Pingüino de la Tormenta de Dakota",
                description: "",
            },
            fr: {
                title: "Le Manchot de la Tempête du Dakota",
                description: "",
            },
            ar: {
                title: "بطريقٌ في عاصفةِ داكوتا الثلجية",
                description: "",
            },
        },
    },
    {
        id: "midnight-snowstorm-dance",
        slug: "midnight-snowstorm-dance",
        categories: ["fox", "raccoon", "deer", "owl", "nd"],
        youtubeByLang: {
            en: "https://youtu.be/5hdS5g2bPqM",
            es: "https://youtu.be/PAYwQXmsSDY",
            fr: "https://youtu.be/gP5QkHste80",
            ar: "https://youtu.be/Hz02AYYTsJY",
        },
        translations: {
            en: {
                title: "Midnight Snowstorm Dance",
                description: "",
            },
            es: {
                title: "El Baile de la Tormenta de Medianoche",
                description: "",
            },
            fr: {
                title: "La Danse de la Tempête de Minuit",
                description: "",
            },
            ar: {
                title: "رقصةُ عاصفةِ منتصفِ الليل",
                description: "",
            },
        },
    },
    {
        id: "grandpa-bears-winter-stories",
        slug: "grandpa-bears-winter-stories",
        categories: ["bear"],
        youtubeByLang: {
            en: "https://youtu.be/6kIXyeHTVuc",
            es: "https://youtu.be/eFThhO5Hpk0",
            fr: "https://youtu.be/jba7qwIRP_c",
            ar: "https://youtu.be/m3M8mneMieU",
        },
        translations: {
            en: {
                title: "Grandpa Bear’s Winter Stories",
                description: "",
            },
            es: {
                title: "Los Cuentos de Invierno del Abuelo Oso",
                description: "",
            },
            fr: {
                title: "Les Histoires d’Hiver de Grand-Papa Ours",
                description: "",
            },
            ar: {
                title: "حكاياتُ الدبِّ الجدّ في ليالي الشتاء",
                description: "",
            },
        },
    },
    {
        id: "winter-train-to-dakota-valley",
        slug: "winter-train-to-dakota-valley",
        categories: ["nd"],
        youtubeByLang: {
            en: "https://youtu.be/ejv0dDH5LPI",
            es: "https://youtu.be/XFrgnWmj4ms",
            fr: "https://youtu.be/U75CFeCk8Bc",
            ar: "https://youtu.be/RgBmAp30_-w",
        },
        translations: {
            en: {
                title: "Winter Train to Dakota Valley",
                description: "",
            },
            es: {
                title: "El Tren Invernal al Valle de Dakota",
                description: "",
            },
            fr: {
                title: "Le Train d’Hiver Vers la Vallée du Dakota",
                description: "",
            },
            ar: {
                title: "قطارُ الشتاءِ إلى وادي داكوتا",
                description: "",
            },
        },
    },
    {
        id: "squirrels-hot-cocoa-adventure",
        slug: "squirrels-hot-cocoa-adventure",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/Fclj-RNsH38",
            es: "https://youtu.be/aCFkUi4rBjk",
            fr: "https://youtu.be/n-i5Ttkcu00",
            ar: "https://youtu.be/UYWhUiPPOvo",
        },
        translations: {
            en: {
                title: "Squirrel’s Hot Cocoa Adventure",
                description: "",
            },
            es: {
                title: "La Aventura del Chocolate Caliente de la Ardillita",
                description: "",
            },
            fr: {
                title: "L’Aventure du Chocolat Chaud de l’Écureuil",
                description: "",
            },
            ar: {
                title: "مُغامرةُ الشوكولاتةِ الساخنةِ للسنجاب",
                description: "",
            },
        },
    },
    {
        id: "forest-christmas-lights",
        slug: "forest-christmas-lights",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/2ORSjkFg2uw",
            es: "https://youtu.be/XlGduLLjBm4",
            fr: "https://youtu.be/GPoZzJD9PEs",
            ar: "https://youtu.be/DNISSAyafGY",
        },
        translations: {
            en: {
                title: "Forest Christmas Lights",
                description: "",
            },
            es: {
                title: "Luces del Bosque Invernal",
                description: "",
            },
            fr: {
                title: "Les Lumières de la Forêt d’Hiver",
                description: "",
            },
            ar: {
                title: "أنوارُ الغابةِ الشتوية",
                description: "",
            },
        },
    },
    {
        id: "foxs-winter-gift-workshop",
        slug: "foxs-winter-gift-workshop",
        categories: ["fox", "holiday"],
        youtubeByLang: {
            en: "https://youtu.be/fykLH6eNq7M",
            es: "https://youtu.be/AG4k3jVIhdc",
            fr: "https://youtu.be/HXKb913G9sE",
            ar: "https://youtu.be/j61nL1PuJrE",
        },
        translations: {
            en: {
                title: "Fox’s Winter Gift Workshop",
                description: "",
            },
            es: {
                title: "El Taller Invernal de la Zorrita",
                description: "",
            },
            fr: {
                title: "L’Atelier des Cadeaux d’Hiver de la Renarde",
                description: "",
            },
            ar: {
                title: "ورشةُ الهدايا الشتوية للثعلبة",
                description: "",
            },
        },
    },
    {
        id: "squirrel-mouses-winter-feast",
        slug: "squirrel-mouses-winter-feast",
        categories: ["squirrel", "mouse", "holiday"],
        youtubeByLang: {
            en: "https://youtu.be/-HT8zP0RZkQ",
            es: "https://youtu.be/tfWWxQxQFNw",
            fr: "https://youtu.be/zBunur2e1H8",
            ar: "https://youtu.be/xZPYT6bRay0",
        },
        translations: {
            en: {
                title: "Squirrel & Mouse’s Winter Feast",
                description: "",
            },
            es: {
                title: "La Cena Invernal de la Ardilla y el Ratón",
                description: "",
            },
            fr: {
                title: "Le Festin d’Hiver de l’Écureuil et de la Souris",
                description: "",
            },
            ar: {
                title: "وليمةُ الشتاءِ للسنجابةِ والفأرة",
                description: "",
            },
        },
    },
    {
        id: "santa-in-the-sleeping-forest",
        slug: "santa-in-the-sleeping-forest",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/bdebrBAA05U",
            es: "https://youtu.be/N22i_rSiC7A",
            fr: "https://youtu.be/ozOgffr8768",
            ar: "https://youtu.be/x1peNktlWtU",
        },
        translations: {
            en: {
                title: "Santa in the Sleeping Forest",
                description: "",
            },
            es: {
                title: "Santa en el Bosque Dormido",
                description: "",
            },
            fr: {
                title: "Santa dans la Forêt Endormie",
                description: "",
            },
            ar: {
                title: "سانتا في الغابةِ النائمة",
                description: "",
            },
        },
    },
    {
        id: "six-days-to-the-winter-ball",
        slug: "six-days-to-the-winter-ball",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/MhYzFWFkqb4",
            es: "https://youtu.be/k4kyqiQuPqQ",
            fr: "https://youtu.be/I0fMLxaAFTs",
            ar: "https://youtu.be/6OAiMmXc_Mg",
        },
        translations: {
            en: {
                title: "Six Days to the Winter Ball",
                description: "",
            },
            es: {
                title: "Faltan Seis Días para el Baile Invernal",
                description: "",
            },
            fr: {
                title: "Six Jours Avant le Bal d’Hiver",
                description: "",
            },
            ar: {
                title: "ستةُ أيّامٍ قبلَ حفلِ الشتاءِ الكبير",
                description: "",
            },
        },
    },
    {
        id: "northern-lights-by-the-winter-tree",
        slug: "northern-lights-by-the-winter-tree",
        categories: ["northern_lights", "holiday"],
        youtubeByLang: {
            en: "https://youtu.be/KrYoe1-YGd0",
            es: "https://youtu.be/z9GUCfVwS7k",
            fr: "https://youtu.be/LXCaVPD59jA",
            ar: "https://youtu.be/-epORWc37SY",
        },
        translations: {
            en: {
                title: "Northern Lights by the Winter Tree",
                description: "",
            },
            es: {
                title: "Luces del Norte Junto al Árbol Invernal",
                description: "",
            },
            fr: {
                title: "Les Lumières du Nord sous l’Arbre d’Hiver",
                description: "",
            },
            ar: {
                title: "أضواءُ الشمالِ عندَ شجرةِ الشتاءِ",
                description: "",
            },
        },
    },
    {
        id: "new-year-2026-in-the-snowy-forest",
        slug: "new-year-2026-in-the-snowy-forest",
        categories: ["holiday"],
        youtubeByLang: {
            en: "https://youtu.be/zXoMfi_a3js",
            es: "https://youtu.be/H2xEt8lYwu8",
            fr: "https://youtu.be/qbiBrnSpkus",
            ar: "https://youtu.be/WF21YPWF0Xk",
        },
        translations: {
            en: {
                title: "New Year 2026 in the Snowy Forest",
                description: "",
            },
            es: {
                title: "Año Nuevo 2026 en el Bosque Nevado",
                description: "",
            },
            fr: {
                title: "Nouvel An 2026 dans la Forêt Enneigée",
                description: "",
            },
            ar: {
                title: "عام 2026 في الغابةِ الثلجية",
                description: "",
            },
        },
    },
    {
        id: "raccoons-snow-buried-house",
        slug: "raccoons-snow-buried-house",
        categories: ["raccoon"],
        youtubeByLang: {
            en: "https://youtu.be/dma0J4umSbk",
            es: "https://youtu.be/PB41tPSLnd4",
            fr: "https://youtu.be/onnaNtMXo1U",
            ar: "https://youtu.be/9NvxYsklzw8",
        },
        translations: {
            en: {
                title: "Raccoon’s Snow-Buried House",
                description: "",
            },
            es: {
                title: "La Casita del Mapache Bajo la Nieve",
                description: "",
            },
            fr: {
                title: "La Maison du Raton Laveur Sous la Neige",
                description: "",
            },
            ar: {
                title: "بيتُ الراكونِ المدفونُ في الثلج",
                description: "",
            },
        },
    },
    {
        id: "my-acorns-are-all-under-snow",
        slug: "my-acorns-are-all-under-snow",
        categories: ["squirrel"],
        youtubeByLang: {
            en: "https://youtu.be/8u_xE2wIoNY",
            es: "https://youtu.be/3-lfx3AcINc",
            fr: "https://youtu.be/fAPakLzqhY0",
            ar: "https://youtu.be/bGR7kJgKBNU",
        },
        translations: {
            en: {
                title: "My Acorns Are All Under Snow!",
                description: "",
            },
            es: {
                title: "Mis Nueces Están Bajo la Nieve",
                description: "",
            },
            fr: {
                title: "Mes Noisettes Sont Sous la Neige !",
                description: "",
            },
            ar: {
                title: "جميعُ بندقياتي تحتَ الثلج!",
                description: "",
            },
        },
    },
    {
        id: "worms-must-be-under-the-snow",
        slug: "worms-must-be-under-the-snow",
        categories: ["farm"],
        youtubeByLang: {
            en: "https://youtu.be/H4lr0u0KQS8",
            es: "https://youtu.be/jOy5Pjhj5xc",
            fr: "https://youtu.be/tlPzGSpoJtU",
            ar: "https://youtu.be/D8c_Wpiv-EA",
        },
        translations: {
            en: {
                title: "Worms Must Be Under the Snow!",
                description: "",
            },
            es: {
                title: "¡Seguro que hay gusanos bajo la nieve!",
                description: "",
            },
            fr: {
                title: "Il doit y avoir des vers sous la neige !",
                description: "",
            },
            ar: {
                title: "لابدّ أنَّ الديدان تحتَ الثلج!",
                description: "",
            },
        },
    },
];
