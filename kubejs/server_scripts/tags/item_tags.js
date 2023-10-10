// priority 10

const gtceuIngots = [
  "aluminium",
  "americium",
  "annealed_copper",
  "antimony",
  "battery_alloy",
  "beryllium",
  "blue_alloy",
  "chromium",
  "cobalt",
  "cobalt_brass",
  "cupronickel",
  "damascus_steel",
  "darmstadtium",
  "duranium",
  "electrum",
  "enriched_naquadah",
  "enriched_naquadah_trinium_europium_duranide",
  "europium",
  "gallium",
  "gallium_arsenide",
  //"graphene", no fluid
  "hsse",
  "hssg",
  "hsss",
  "indium",
  "indium_gallium_phosphide",
  "indium_tin_barium_titanium_cuprate",
  "invar",
  "iridium",
  "kanthal",
  "lead",
  "magnalium",
  "magnesium_diboride",
  "manganese",
  "manganese_phosphide",
  "mercury_barium_calcium_cuprate",
  "molybdenum",
  "naquadah",
  "naquadah_alloy",
  "naquadria",
  "neodymium",
  "neutronium",
  "nichrome",
  "nickel_zinc_ferrite",
  "niobium",
  "niobium_nitride",
  "niobium_titanium",
  "osmiridium",
  "osmium",
  "palladium",
  "platinum",
  "plutonium",
  "plutonium_241",
  "potin",
  "red_alloy",
  "rhodium",
  "rhodium_plated_palladium",
  //"ruridit", no fluid
  "ruthenium",
  "ruthenium_trinium_americium_neutronate",
  "samarium",
  "samarium_iron_arsenic_oxide",
  "silicon",
  "soldering_alloy",
  "stainless_steel",
  "tantalum",
  "thorium",
  "tin_alloy",
  "titanium",
  "trinium",
  "tritanium",
  "tungsten",
  "tungsten_carbide",
  "tungsten_steel",
  "ultimet",
  "uranium",
  "uranium_235",
  "uranium_rhodium_dinaquadide",
  "uranium_triplatinum",
  "vanadium",
  "vanadium_gallium",
  "vanadium_steel",
  "yttrium",
  "yttrium_barium_cuprate",
]

const tfcStone = [
  'granite',
  'diorite',
  'gabbro',
  'shale',
  'claystone',
  'limestone',
  'conglomerate',
  'dolomite',
  'chert',
  'chalk',
  'rhyolite',
  'basalt',
  'andesite',
  'dacite',
  'quartzite',
  'slate',
  'phyllite',
  'schist',
  'gneiss',
  'marble'
]

const tfcSaplings = [
  'acacia',
  'ash',
  'aspen',
  'birch',
  'blackwood',
  'chestnut',
  'douglas_fir',
  'hickory',
  'kapok',
  'mangrove',
  'maple',
  'oak',
  'palm',
  'pine',
  'rosewood',
  'sequoia',
  'spruce',
  'sycamore',
  'white_cedar',
  'willow'
]

let addItemTags = (/** @type {TagEvent.Item} */ event) => {
  event.add("forge:ingots/iron", "tfc:metal/ingot/cast_iron")
  event.add("forge:rods/iron", "tfc:metal/rod/cast_iron")
  event.add("forge:plates/iron", "tfc:metal/sheet/cast_iron")
  event.add('forge:dusts/diamond', 'tfc:powder/diamond')

  gtceuIngots.forEach((ingot) => {
    event.add("tfc:pileable_ingots", `gtceu:${ingot}_ingot`)
  })

  tfcStone.forEach((stone) => {
    event.add('forge:slabs/cobblestone', `tfc:rock/cobble/${stone}_slab`)
  })

  tfcSaplings.forEach((sapling) => {
    event.add('forge:saplings', `tfc:wood/sapling/${sapling}`)
  })
}
