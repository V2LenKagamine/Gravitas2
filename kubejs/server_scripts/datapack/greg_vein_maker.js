const addGregVeinData = (/** @type {Internal.DataPackEventJS} */ event) => {
  /**
   *
   * @param {string} toReplace - Block to replace
   * @param {Map} blockToWeightMap - {string} Block : {number} Chance
   * @param {number} chancePerChunk - spawns 1/x chunks
   * @param {number} minY - Lowest Y
   * @param {number} maxY - Highest Y
   * @param {number} sizeIB - Radius
   * @param {number} densityIB - default 0.2
   * @param {string} biomeWL - Takes a biome tag
   * @param {number} veinHeight -  how tall the vein is
   * @param {string} veinName - Name.
   */
  let makeTFCDiskVein = (
    toReplace,
    blockToWeightMap,
    chancePerChunk,
    minY,
    maxY,
    sizeIB,
    densityIB,
    biomeWL,
    veinHeight,
    veinName
  ) => {
    let blockmap = JsonIO.toArray(blockToWeightMap)
    let json = JsonIO.toObject({
      type: "tfc:disc_vein",
      config: {
        rarity: chancePerChunk,
        min_y: {
          absolute: minY
        },
        max_y: {
          absolute: maxY
        },
        size: sizeIB,
        density: densityIB,
        blocks: {
          replace: toReplace,
          with: blockmap
        },
        biomes: biomeWL,
        height: veinHeight,
        random_name: veinName
      }
    })
    event.addJson(`gregitas:gregveins/${veinName}.json`, json)
  }
  tfcStone.forEach((stone) => {
    makeTFCDiskVein(
      `tfc:rock/raw/${stone}`,
      { "gtceu:deepslate_diamond_ore": 1 },
      1,
      -63,
      256,
      10,
      1,
      "#tfc:is_river",
      4,
      `test_${stone}`
    )
  })
}
