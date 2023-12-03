// priority 10
const toolsToRemove = [
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "iron",
  "steel",
  "invar",
  "black_steel",
  "blue_steel",
  "red_steel"
]
let recipeRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.remove({ id: "tfc:crafting/bloomery" })
  //GT
  event.remove({ id: "gtceu:shaped/stick_wrought_iron" })
  event.remove({ id: "gtceu:shaped/stick_long_wrought_iron" })
  event.remove({ id: "gtceu:shaped/screw_wrought_iron" })
  event.remove({ id: "gtceu:shaped/wire_cutter_wrought_iron" })
  event.remove({ id: "gtceu:shaped/iron_bucket" })

  event.remove({ id: "gtceu:shaped/bronze_primitive_blast_furnace" })

  event.remove({ id: "gtceu:shapeless/rubber_wood_planks" })
  event.remove([{ id: "gtceu:shaped/steam_extractor_bronze" }, { id: "gtceu:shaped/steam_extractor_steel" }])

  //GT / Railcraft Tool Specific
  toolsToRemove.forEach((tool) => {
    event.remove({ output: `gtceu:${tool}_shovel`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_pickaxe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_axe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_hoe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_scythe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_sword`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_helmet`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_chestplate`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_leggings`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_boots`, mod: "gtceu" })

    event.remove({ output: `railcraft:${tool}_shovel`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_pickaxe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_axe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_hoe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_sword`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_helmet`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_chestplate`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_leggings`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_boots`, mod: "railcraft" })

    //GT General

    event.remove({ id: "gtceu:smelting/coke_over_brick", mod: "gtceu" })
  })

  //Railcraft
  event.remove({ id: /^railcraft:.*_gear/, mod: "railcraft" })
  event.remove({ id: /^railcraft:.*_shears/, mod: "railcraft" })
  event.remove({ id: /^railcraft:rolling.*_plate/, mod: "railcraft" })
  event.remove({ id: /^railcraft:blast_furnace.*/, mod: "railcraft" })
  event.remove({ id: "railcraft:blast_furnace_bricks" })
  event.remove({ id: /^railcraft:coke_oven.*/, mod: "railcraft" })
  event.remove({ id: "railcraft:coke_oven_bricks" })
  event.remove({ id: "railcraft:solid_fueled_firebox" })
  event.remove({ id: "railcraft:brass_ingot_crafted_with_ingots" })

  //ATO
  event.remove({ id: /^alltheores:.*/, mod: "alltheores" })

  //Apotheosis
  event.remove({ id: /^apotheosis:salvaging.*_horse_armor/ })

  //Apotheosis
  event.remove({ id: /^apotheosis:salvaging.*_horse_armor/ })

  //Create
  event.remove({ id: "create:crafting/materials/andesite_alloy" })
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_block" })
  event.remove({ id: "create:crafting/kinetics/millstone" })
  event.remove({ id: "create:mixing/andesite_alloy" })
  event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
  event.remove({ id: "create:deploying/cogwheel" })
  event.remove({ id: "create:deploying/large_cogwheel" })
  event.remove({ input: "minecraft:saddle", mod: "create" })
  event.remove({ input: "minecraft:leather_horse_armor", mod: "create" })
  event.remove({ id: /^create:crushing\/.*_ore/, mod: "create" })
  event.remove({ id: /^create:crushing\/.*_block/, mod: "create" })

  //Cast iron plate jank
  event.remove({ id: "gtceu:shaped/plate_iron" })
  event.remove({ id: "ad_astra:compressing/iron_plate_from_compressing_iron_ingot" })
  event.remove({ id: "create:pressing/iron_ingot" })
  event.remove({ id: "railcraft:rolling/iron_plate" })

  //FramedBlocks
  event.remove({ id: "framedblocks:framed_torch" })
  event.remove({ id: "framedblocks:framed_soul_torch" })
  event.remove({ id: "framedblocks:framed_chest" })
  event.remove({ id: "framedblocks:framed_secret_storage" })

  //Storage Drawers / Framed Drawers
  event.remove({ id: /^storagedrawers:oak_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:spruce_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:birch_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:jungle_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:acacia_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:dark_oak_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:crimson_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:warped_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:mangrove_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:cherry_.*/, mod: "storagedrawers" })

  event.remove({ id: /^framedcompactdrawers:.*/, mod: "framedcompactdrawers" })

  //Integrated Dynamics
  event.remove({ mod: "integrateddynamics", output: "minecraft:leather" })

  // Railcraft
  event.remove({ id: "railcraft:bronze_ingot_crafted_with_ingots" })

  //Woodencog
  event.remove({ id: /^woodencog:cutting\/.*_rod/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_alloy/, mod: "woodencog" })
  event.remove({ id: /^woodencog:rock_knapping\/.*_alloy/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_bloom/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*door/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_sheet/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_steel_ingot/, mod: "woodencog" })
  event.remove({ id: /^woodencog:deploying\/.*/, mod: "woodencog" })

  // TreeTap
  event.remove({ mod: "treetap", output: "treetap:tap" })

  // Immersive Engineering

  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:cokebrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_cokebrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastbrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastbrick_reinforced" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastfurnace_preheater" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_blastbrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_blastbrick_reinforced" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:fertilizer" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:cloche" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:waterwheel_segment" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:windmill_base" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:watermill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:windmill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:sample_drill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:dynamo" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:wooden_barrel" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:crafting_table" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:crate" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:reinforced_crate" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:coal_coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:dust_coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_coke" })
}
