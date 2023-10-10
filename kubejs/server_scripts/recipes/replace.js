// priority 10

const itemTypes = ["ingots", "plates", "rods", "gears"]
let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")

  //Create
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceOutput({ id: "minecraft:dried_kelp" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
}
