StartupEvents.registry("block", (event) => {
    event.create("vorpal_block")
    .soundType('metal') // Set a material (affects the sounds and some properties)
    .mapColor('COLOR_GRAY')

    .hardness(5.0) // Set hardness (affects mining time)
    .resistance(6.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
})