StartupEvents.registry('fluid', event => {
    // Basic "thick" (looks like lava) fluid with red tint
      // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
    event.create('vorpal_fluid')
    .thinTexture(0x144468)
    .bucketColor(0x144468)
    .displayName('Vorpal Fluid')
    //.noBucket() 
    //.noBlock() 
})