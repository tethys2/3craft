ServerEvents.recipes(e => {
    e.remove({ output: 'minecraft:blackstone', type: 'create:haunting' })
    e.remove({ output: 'minecraft:redstone', type: 'create:filling' })


    e.recipes.create.compacting('coal', '4x charcoal').heated()
    e.recipes.create.compacting('lapis_lazuli', ['quartz', 'blue_dye']).heated()

    e.recipes.create.compacting('cobbled_deepslate', '2x cobblestone').heated()
    e.recipes.create.compacting('tuff', '2x gravel').heated()
    e.recipes.create.splashing('calcite', 'create:limestone')
    e.recipes.create.compacting('create:limestone', '2x bone_block').heated()
    e.recipes.create.haunting('netherrack', 'cobblestone')
    e.recipes.create.haunting('blackstone', 'cobbled_deepslate')

    e.recipes.create.compacting('numismatics:sprocket', 'diamond').heated()
    e.recipes.create.filling('redstone', [Fluid.of('create:potion', 25, {Potion: 'minecraft:swiftness'}), 'create:cinder_flour'])

    e.recipes.create.compacting(Item.of('diamond').withChance(0.015625), 'coal').superheated()
    e.recipes.create.compacting(Item.of('netherite_scrap').withChance(0.015625), '8x blackstone').superheated()

    e.recipes.create.compacting(Fluid.of('kubejs:vorpal_fluid', 100), 'ender_pearl')
    e.recipes.create.compacting(Fluid.of('kubejs:vorpal_fluid', 10), 'chorus_fruit')

    e.recipes.create.haunting('phantom_membrane', 'leather')

    e.recipes.create.filling('kubejs:vorpal_ingot', [Fluid.of('kubejs:vorpal_fluid', 250), 'iron_ingot'])
    e.recipes.create.filling('end_stone', [Fluid.of('kubejs:vorpal_fluid', 10), 'cobblestone'])
    e.recipes.create.pressing('kubejs:vorpal_sheet', 'kubejs:vorpal_ingot')
    e.stonecutting('4x kubejs:knockback_stick_0', 'kubejs:vorpal_ingot')
    e.shaped('kubejs:vorpal_block', [
      'VVV', 
      'VVV', 
      'VVV'  
    ], {
      V: 'kubejs:vorpal_ingot', 
    }
  )
  e.shaped('9x kubejs:vorpal_ingot', [
    'V',  
  ], {
    V: 'kubejs:vorpal_block', 
  }
)

    e.shaped('kubejs:vorpal_upgrade_smithing_template', [
      'CEC', 
      'ENE', 
      'CEC'  
    ], {
      E: 'end_stone', 
      N: 'netherite_upgrade_smithing_template',
      C: 'chorus_fruit'
    }
  )
    e.shaped('2x kubejs:vorpal_upgrade_smithing_template', [
      'DVD', 
      'DED', 
      'DDD'  
    ], {
      E: 'end_stone', 
      D: 'diamond',
      V: 'kubejs:vorpal_upgrade_smithing_template'
    }
  )
    e.shaped('2x elytra', [
        ' E ', 
        'PNP', 
        'S S'  
      ], {
        E: 'elytra', 
        P: 'phantom_membrane',  
        N: 'netherite_ingot',
        S: 'kubejs:vorpal_sheet'
      }
    )
    e.smithing(
      'kubejs:vorpal_pickaxe',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_pickaxe',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_axe',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_axe',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_sword',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_sword',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_shovel',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_shovel',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_hoe',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_hoe',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_helmet',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_helmet',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_chestplate',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_chestplate',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_leggings',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_leggings',                          
      'kubejs:vorpal_ingot'                         
    )
    e.smithing(
      'kubejs:vorpal_boots',                     
      'kubejs:vorpal_upgrade_smithing_template', 
      'minecraft:diamond_boots',                          
      'kubejs:vorpal_ingot'                         
    )
})
