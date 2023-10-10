// priority 0

ServerEvents.recipes((event) => {
  recipeRemoval(event)
  replaceRecipes(event)
  recipeAdd(event)
  replaceTFCHeatingAndCasting(event)
})

LootJS.modifiers((event) => {
  //event.enableLogging()
  modifyAndRemoveChestLoot(event)
  modifyAndRemoveBlockLoot(event)
  modifyAndRemoveEntityLoot(event)
})

ServerEvents.tags("worldgen/biome", (event) => {
  addTFCBiomesToVanilla(event)
  addStargateBiomes(event)
})

ServerEvents.tags("item", (event) => {
  addItemTags(event)
})

ServerEvents.tags("block", (event) => {
  addBlockTags(event)
})

MoreJSEvents.structureLoad((event) => {
  replaceVanillaBlocks(event)
})

NetworkEvents.dataReceived("customTask", (event) => {
  serverObserveGtTask(event) // TODO: needs rework
})
