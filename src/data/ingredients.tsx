let ingredients = {
    'PIE CRUST': 1,
    APPLES: 1,
    SUGAR: 7,
    FLOUR: 3,
    'LEMON JUICE': 3,
    'GROUND CINNAMON': 2,
    NUTMEG: 1,
    SALT: 15,
    BUTTER: 6,
    'EGG WASH': 1,
    'PUFF PASTRY': 1,
    TANGERINES: 1,
    EGG: 2,
    'POWDERED SUGAR': 1,
    'RAW SALMON': 1,
    AVOCADO: 2,
    CUCUMBER: 1,
    'RED ONION': 3,
    JALAPENO: 2,
    'SOY SAUCE': 4,
    'RICE VINEGAR': 1,
    'SESAME OIL': 3,
    HONEY: 1,
    'GRATED GINGER': 1,
    'GARLIC POWDER': 1,
    'BLACK PEPPER': 10,
    'SUSHI RICE': 1,
    'SESAME SEEDS': 2,
    'GREEN ONIONS': 1,
    'FRESH FISH FILLETS': 1,
    'LIME JUICE': 2,
    'ORANGE JUICE': 1,
    CILANTRO: 4,
    CORN: 1,
    'CHICKEN OR SHRIMP': 1,
    LEMONGRASS: 1,
    GALANGAL: 1,
    'KAFFIR LIME LEAVES': 1,
    MUSHROOMS: 2,
    'FISH SAUCE': 1,
    'PALM SUGAR': 1,
    'CHILI FLAKES OR FRESH CHILI': 1,
    'RIPE TOMATOES': 1,
    ONION: 7,
    GARLIC: 9,
    'OLIVE OIL': 2,
    'CHICKEN OR VEGETABLE BROTH': 2,
    BASIL: 2,
    'CHICKEN BREAST': 1,
    CORNSTARCH: 1,
    'VEGETABLE OIL': 2,
    GINGER: 4,
    'RED BELL PEPPER': 1,
    'GREEN BELL PEPPER': 1,
    PINEAPPLE: 1,
    'BROWN SUGAR': 1,
    'APPLE CIDER VINEGAR': 1,
    WATER: 4,
    SCALLIONS: 3,
    LEMONS: 1,
    ICE: 1,
    'MINT LEAVES': 2,
    CUCUMBERS: 1,
    TOMATOES: 2,
    'FETA CHEESE': 1,
    'FRESH DILL': 1,
    MAYONNAISE: 1,
    'SOUR CREAM': 2,
    'RICE PAPER WRAPPERS': 1,
    SHRIMP: 1,
    'VERMICELLI NOODLES': 1,
    LETTUCE: 1,
    'BASIL LEAVES': 2,
    CARROTS: 3,
    'PEANUT SAUCE': 1,
    'SWEET CHILI SAUCE': 1,
    'LOAF OF FRENCH BREAD': 1,
    'GARLIC CLOVES': 1,
    'EXTRA-VIRGIN OLIVE OIL': 2,
    'BALSAMIC GLAZE': 1,
    SPAGHETTI: 1,
    'GROUND BEEF': 1,
    CELERY: 2,
    'TOMATO SAUCE': 1,
    'CRUSHED TOMATOES': 1,
    'RED WINE': 1,
    OREGANO: 1,
    'PARMESAN CHEESE': 1,
    'BEEF BROTH': 1,
    'BEEF CHUCK ROAST': 1,
    BEETS: 1,
    POTATOES: 2,
    CABBAGE: 2,
    'TOMATO PASTE': 1,
    DILL: 1,
    'RAMEN NOODLES': 1,
    'PORK BELLY': 1,
    MIRIN: 1,
    'CHICKEN BROTH': 1,
    'DASHI POWDER': 1,
    'HARD-BOILED EGGS': 1,
    'BOK CHOY': 1,
    'BEAN SPROUTS': 1,
    SEAWEED: 1,
    'WHITE PEPPER': 1,
    'NORI SHEETS': 1,
    'CHILI OIL': 1,
    'CHICKEN LEGS AND THIGHS': 1,
    ROSEMARY: 1,
    THYME: 1,
    LEMON: 1,
    'GYOZA WRAPPERS': 1,
    'GROUND PORK': 1,
    SAKE: 1,
    PEPPER: 4,
    SHRIMPS: 1,
    'WHITE RICE': 1,
    'COCONUT MILK': 1,
    'CURRY POWDER': 1,
    TOMATO: 1,
    'LIME WEDGES': 1,
    'GROUND MEAT': 1,
    'BREAD CRUMBS': 2,
    MILK: 2,
    PARSLEY: 2,
    OIL: 1,
    RICE: 1,
    'HEAVY CREAM': 1,
    'THYME LEAVES': 1,
    MACARONI: 1,
    'ALL-PURPOSE FLOUR': 1,
    'CHEDDAR CHEESE': 1
}

export let getSortedIngredients = () => {
    let sortable = [];
    for (let id in ingredients) {
        sortable.push([id, ingredients[id]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    let final = []
    for (let j in sortable) {
        final.push({id: j, name: sortable[j][0], count: sortable[j][1], type: ''})
    }

    console.log(final)

    return final
}

export let ingredientsObjects = [
    {
        "id": "19",
        "name": "AVOCADO",
        "count": 2,
        "type": "🥑",
    },
    {
        "id": "0",
        "name": "SALT",
        "count": 15,
        "type": ""
    },
    {
        "id": "1",
        "name": "BLACK PEPPER",
        "count": 10,
        "type": ""
    },
    {
        "id": "2",
        "name": "GARLIC",
        "count": 9,
        "type": "🧄"
    },
    {
        "id": "3",
        "name": "SUGAR",
        "count": 7,
        "type": ""
    },
    {
        "id": "4",
        "name": "ONION",
        "count": 7,
        "type": "🧅"
    },
    {
        "id": "5",
        "name": "BUTTER",
        "count": 6,
        "type": ""
    },
    {
        "id": "6",
        "name": "SOY SAUCE",
        "count": 4,
        "type": ""
    },
    {
        "id": "7",
        "name": "CILANTRO",
        "count": 4,
        "type": ""
    },
    {
        "id": "8",
        "name": "GINGER",
        "count": 4,
        "type": ""
    },
    {
        "id": "9",
        "name": "WATER",
        "count": 4,
        "type": ""
    },
    {
        "id": "10",
        "name": "PEPPER",
        "count": 4,
        "type": ""
    },
    {
        "id": "11",
        "name": "FLOUR",
        "count": 3,
        "type": ""
    },
    {
        "id": "12",
        "name": "LEMON JUICE",
        "count": 3,
        "type": ""
    },
    {
        "id": "13",
        "name": "RED ONION",
        "count": 3,
        "type": ""
    },
    {
        "id": "14",
        "name": "SESAME OIL",
        "count": 3,
        "type": ""
    },
    {
        "id": "15",
        "name": "SCALLIONS",
        "count": 3,
        "type": ""
    },
    {
        "id": "16",
        "name": "CARROTS",
        "count": 3,
        "type": ""
    },
    {
        "id": "17",
        "name": "GROUND CINNAMON",
        "count": 2,
        "type": ""
    },
    {
        "id": "18",
        "name": "EGG",
        "count": 2,
        "type": ""
    },
    {
        "id": "20",
        "name": "JALAPENO",
        "count": 2,
        "type": ""
    },
    {
        "id": "21",
        "name": "SESAME SEEDS",
        "count": 2,
        "type": ""
    },
    {
        "id": "22",
        "name": "LIME JUICE",
        "count": 2,
        "type": ""
    },
    {
        "id": "23",
        "name": "MUSHROOMS",
        "count": 2,
        "type": ""
    },
    {
        "id": "24",
        "name": "OLIVE OIL",
        "count": 2,
        "type": ""
    },
    {
        "id": "25",
        "name": "CHICKEN OR VEGETABLE BROTH",
        "count": 2,
        "type": ""
    },
    {
        "id": "26",
        "name": "BASIL",
        "count": 2,
        "type": ""
    },
    {
        "id": "27",
        "name": "VEGETABLE OIL",
        "count": 2,
        "type": ""
    },
    {
        "id": "28",
        "name": "MINT LEAVES",
        "count": 2,
        "type": ""
    },
    {
        "id": "29",
        "name": "TOMATOES",
        "count": 2,
        "type": ""
    },
    {
        "id": "30",
        "name": "SOUR CREAM",
        "count": 2,
        "type": ""
    },
    {
        "id": "31",
        "name": "BASIL LEAVES",
        "count": 2,
        "type": ""
    },
    {
        "id": "32",
        "name": "EXTRA-VIRGIN OLIVE OIL",
        "count": 2,
        "type": ""
    },
    {
        "id": "33",
        "name": "CELERY",
        "count": 2,
        "type": ""
    },
    {
        "id": "34",
        "name": "POTATOES",
        "count": 2,
        "type": ""
    },
    {
        "id": "35",
        "name": "CABBAGE",
        "count": 2,
        "type": ""
    },
    {
        "id": "36",
        "name": "BREAD CRUMBS",
        "count": 2,
        "type": ""
    },
    {
        "id": "37",
        "name": "MILK",
        "count": 2,
        "type": ""
    },
    {
        "id": "38",
        "name": "PARSLEY",
        "count": 2,
        "type": ""
    },
    {
        "id": "39",
        "name": "PIE CRUST",
        "count": 1,
        "type": ""
    },
    {
        "id": "40",
        "name": "APPLES",
        "count": 1,
        "type": ""
    },
    {
        "id": "41",
        "name": "NUTMEG",
        "count": 1,
        "type": ""
    },
    {
        "id": "42",
        "name": "EGG WASH",
        "count": 1,
        "type": ""
    },
    {
        "id": "43",
        "name": "PUFF PASTRY",
        "count": 1,
        "type": ""
    },
    {
        "id": "44",
        "name": "TANGERINES",
        "count": 1,
        "type": ""
    },
    {
        "id": "45",
        "name": "POWDERED SUGAR",
        "count": 1,
        "type": ""
    },
    {
        "id": "46",
        "name": "RAW SALMON",
        "count": 1,
        "type": ""
    },
    {
        "id": "47",
        "name": "CUCUMBER",
        "count": 1,
        "type": ""
    },
    {
        "id": "48",
        "name": "RICE VINEGAR",
        "count": 1,
        "type": ""
    },
    {
        "id": "49",
        "name": "HONEY",
        "count": 1,
        "type": ""
    },
    {
        "id": "50",
        "name": "GRATED GINGER",
        "count": 1,
        "type": ""
    },
    {
        "id": "51",
        "name": "GARLIC POWDER",
        "count": 1,
        "type": ""
    },
    {
        "id": "52",
        "name": "SUSHI RICE",
        "count": 1,
        "type": ""
    },
    {
        "id": "53",
        "name": "GREEN ONIONS",
        "count": 1,
        "type": ""
    },
    {
        "id": "54",
        "name": "FRESH FISH FILLETS",
        "count": 1,
        "type": ""
    },
    {
        "id": "55",
        "name": "ORANGE JUICE",
        "count": 1,
        "type": ""
    },
    {
        "id": "56",
        "name": "CORN",
        "count": 1,
        "type": ""
    },
    {
        "id": "57",
        "name": "CHICKEN OR SHRIMP",
        "count": 1,
        "type": ""
    },
    {
        "id": "58",
        "name": "LEMONGRASS",
        "count": 1,
        "type": ""
    },
    {
        "id": "59",
        "name": "GALANGAL",
        "count": 1,
        "type": ""
    },
    {
        "id": "60",
        "name": "KAFFIR LIME LEAVES",
        "count": 1,
        "type": ""
    },
    {
        "id": "61",
        "name": "FISH SAUCE",
        "count": 1,
        "type": ""
    },
    {
        "id": "62",
        "name": "PALM SUGAR",
        "count": 1,
        "type": ""
    },
    {
        "id": "63",
        "name": "CHILI FLAKES OR FRESH CHILI",
        "count": 1,
        "type": ""
    },
    {
        "id": "64",
        "name": "RIPE TOMATOES",
        "count": 1,
        "type": ""
    },
    {
        "id": "65",
        "name": "CHICKEN BREAST",
        "count": 1,
        "type": ""
    },
    {
        "id": "66",
        "name": "CORNSTARCH",
        "count": 1,
        "type": ""
    },
    {
        "id": "67",
        "name": "RED BELL PEPPER",
        "count": 1,
        "type": ""
    },
    {
        "id": "68",
        "name": "GREEN BELL PEPPER",
        "count": 1,
        "type": ""
    },
    {
        "id": "69",
        "name": "PINEAPPLE",
        "count": 1,
        "type": ""
    },
    {
        "id": "70",
        "name": "BROWN SUGAR",
        "count": 1,
        "type": ""
    },
    {
        "id": "71",
        "name": "APPLE CIDER VINEGAR",
        "count": 1,
        "type": ""
    },
    {
        "id": "72",
        "name": "LEMONS",
        "count": 1,
        "type": ""
    },
    {
        "id": "73",
        "name": "ICE",
        "count": 1,
        "type": ""
    },
    {
        "id": "74",
        "name": "CUCUMBERS",
        "count": 1,
        "type": ""
    },
    {
        "id": "75",
        "name": "FETA CHEESE",
        "count": 1,
        "type": ""
    },
    {
        "id": "76",
        "name": "FRESH DILL",
        "count": 1,
        "type": ""
    },
    {
        "id": "77",
        "name": "MAYONNAISE",
        "count": 1,
        "type": ""
    },
    {
        "id": "78",
        "name": "RICE PAPER WRAPPERS",
        "count": 1,
        "type": ""
    },
    {
        "id": "79",
        "name": "SHRIMP",
        "count": 1,
        "type": ""
    },
    {
        "id": "80",
        "name": "VERMICELLI NOODLES",
        "count": 1,
        "type": ""
    },
    {
        "id": "81",
        "name": "LETTUCE",
        "count": 1,
        "type": ""
    },
    {
        "id": "82",
        "name": "PEANUT SAUCE",
        "count": 1,
        "type": ""
    },
    {
        "id": "83",
        "name": "SWEET CHILI SAUCE",
        "count": 1,
        "type": ""
    },
    {
        "id": "84",
        "name": "LOAF OF FRENCH BREAD",
        "count": 1,
        "type": ""
    },
    {
        "id": "85",
        "name": "GARLIC CLOVES",
        "count": 1,
        "type": ""
    },
    {
        "id": "86",
        "name": "BALSAMIC GLAZE",
        "count": 1,
        "type": ""
    },
    {
        "id": "87",
        "name": "SPAGHETTI",
        "count": 1,
        "type": ""
    },
    {
        "id": "88",
        "name": "GROUND BEEF",
        "count": 1,
        "type": ""
    },
    {
        "id": "89",
        "name": "TOMATO SAUCE",
        "count": 1,
        "type": ""
    },
    {
        "id": "90",
        "name": "CRUSHED TOMATOES",
        "count": 1,
        "type": ""
    },
    {
        "id": "91",
        "name": "RED WINE",
        "count": 1,
        "type": ""
    },
    {
        "id": "92",
        "name": "OREGANO",
        "count": 1,
        "type": ""
    },
    {
        "id": "93",
        "name": "PARMESAN CHEESE",
        "count": 1,
        "type": ""
    },
    {
        "id": "94",
        "name": "BEEF BROTH",
        "count": 1,
        "type": ""
    },
    {
        "id": "95",
        "name": "BEEF CHUCK ROAST",
        "count": 1,
        "type": ""
    },
    {
        "id": "96",
        "name": "BEETS",
        "count": 1,
        "type": ""
    },
    {
        "id": "97",
        "name": "TOMATO PASTE",
        "count": 1,
        "type": ""
    },
    {
        "id": "98",
        "name": "DILL",
        "count": 1,
        "type": ""
    },
    {
        "id": "99",
        "name": "RAMEN NOODLES",
        "count": 1,
        "type": ""
    },
    {
        "id": "100",
        "name": "PORK BELLY",
        "count": 1,
        "type": ""
    },
    {
        "id": "101",
        "name": "MIRIN",
        "count": 1,
        "type": ""
    },
    {
        "id": "102",
        "name": "CHICKEN BROTH",
        "count": 1,
        "type": ""
    },
    {
        "id": "103",
        "name": "DASHI POWDER",
        "count": 1,
        "type": ""
    },
    {
        "id": "104",
        "name": "HARD-BOILED EGGS",
        "count": 1,
        "type": ""
    },
    {
        "id": "105",
        "name": "BOK CHOY",
        "count": 1,
        "type": ""
    },
    {
        "id": "106",
        "name": "BEAN SPROUTS",
        "count": 1,
        "type": ""
    },
    {
        "id": "107",
        "name": "SEAWEED",
        "count": 1,
        "type": ""
    },
    {
        "id": "108",
        "name": "WHITE PEPPER",
        "count": 1,
        "type": ""
    },
    {
        "id": "109",
        "name": "NORI SHEETS",
        "count": 1,
        "type": ""
    },
    {
        "id": "110",
        "name": "CHILI OIL",
        "count": 1,
        "type": ""
    },
    {
        "id": "111",
        "name": "CHICKEN LEGS AND THIGHS",
        "count": 1,
        "type": ""
    },
    {
        "id": "112",
        "name": "ROSEMARY",
        "count": 1,
        "type": ""
    },
    {
        "id": "113",
        "name": "THYME",
        "count": 1,
        "type": ""
    },
    {
        "id": "114",
        "name": "LEMON",
        "count": 1,
        "type": ""
    },
    {
        "id": "115",
        "name": "GYOZA WRAPPERS",
        "count": 1,
        "type": ""
    },
    {
        "id": "116",
        "name": "GROUND PORK",
        "count": 1,
        "type": ""
    },
    {
        "id": "117",
        "name": "SAKE",
        "count": 1,
        "type": ""
    },
    {
        "id": "118",
        "name": "SHRIMPS",
        "count": 1,
        "type": ""
    },
    {
        "id": "119",
        "name": "WHITE RICE",
        "count": 1,
        "type": ""
    },
    {
        "id": "120",
        "name": "COCONUT MILK",
        "count": 1,
        "type": ""
    },
    {
        "id": "121",
        "name": "CURRY POWDER",
        "count": 1,
        "type": ""
    },
    {
        "id": "122",
        "name": "TOMATO",
        "count": 1,
        "type": ""
    },
    {
        "id": "123",
        "name": "LIME WEDGES",
        "count": 1,
        "type": ""
    },
    {
        "id": "124",
        "name": "GROUND MEAT",
        "count": 1,
        "type": ""
    },
    {
        "id": "125",
        "name": "OIL",
        "count": 1,
        "type": ""
    },
    {
        "id": "126",
        "name": "RICE",
        "count": 1,
        "type": ""
    },
    {
        "id": "127",
        "name": "HEAVY CREAM",
        "count": 1,
        "type": ""
    },
    {
        "id": "128",
        "name": "THYME LEAVES",
        "count": 1,
        "type": ""
    },
    {
        "id": "129",
        "name": "MACARONI",
        "count": 1,
        "type": ""
    },
    {
        "id": "130",
        "name": "ALL-PURPOSE FLOUR",
        "count": 1,
        "type": ""
    },
    {
        "id": "131",
        "name": "CHEDDAR CHEESE",
        "count": 1,
        "type": ""
    }
]

// console.log(getSortedIngredients())