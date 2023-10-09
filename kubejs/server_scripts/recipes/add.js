// priority 10

let recipeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.custom({
    type: "tfc:anvil",
    input: { tag: "forge:ingots/wrought_iron" },
    result: {
      item: "gtceu:wrought_iron_rod",
      count: 2,
    },
    tier: 3,
    rules: ["bend_last", "draw_second_last", "draw_third_last"],
  })

  event.custom({
    type: "tfc:welding",
    first_input: { item: "gtceu:wrought_iron_rod" },
    second_input: { item: "gtceu:wrought_iron_rod" },
    tier: 3,
    result: { item: "kubejs:cutter_head" },
  })

  event.custom({
    type: "tfc:welding",
    first_input: { item: "gtceu:wrought_iron_bolt" },
    second_input: { item: "gtceu:wrought_iron_bolt" },
    tier: 3,
    result: { item: "gtceu:wrought_iron_screw" },
  })

  event.shaped("gtceu:wrought_iron_wire_cutter", [" F ", "HCD", "RSR"], {
    F: "#forge:tools/files",
    H: "#forge:tools/hammers",
    C: "kubejs:cutter_head",
    D: "#forge:tools/screwdrivers",
    R: "gtceu:wrought_iron_rod",
    S: "gtceu:wrought_iron_screw",
  })

  event.custom({
    type: "tfc:glassworking",
    operations: ["blow", "blow", "roll", "pinch", "saw"],
    batch: {
      item: "tfc:silica_glass_batch",
    },
    result: {
      item: "gtceu:glass_tube",
    },
  })

  //Create Start
  event.shaped("create:andesite_alloy", ["SZ ", "ZS ", "   "], {
    S: "#tfc:igneous_extrusive_rock",
    Z: "#forge:nuggets/zinc",
  })

  event.custom({
    type: "create:mixing",
    ingredients: [{ tag: "tfc:igneous_extrusive_rock" }, { tag: "forge:nuggets/zinc" }],
    results: [{ item: "create:andesite_alloy" }],
  })
  //Create End
}
