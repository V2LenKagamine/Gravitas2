const addGregVeinsToTags = (/** @type {TagEvent.PlacedFeature}*/ event) => {
  event.removeAll("tfc:in_biome/veins")
  event.add("tfc:in_biome/veins", "tfc:vein/testvein")
  tfcStone.forEach((stone) => {
    event.add("tfc:in_biome/veins", `tfc:vein/test_${stone}`)
    console.log(`tfc:vein/test_${stone}` + " to tfc:in_biome/veins")
  })
}
