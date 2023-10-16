let addGregVeinsToTags = (/** @type {TagEvent.PlacedFeature}*/ event) => {
  tfcStone.forEach((stone) => {
    event.add("tfc:in_biome/veins", `gregitas:gregveins/test_${stone}`)
  })
}
