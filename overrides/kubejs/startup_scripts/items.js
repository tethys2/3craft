ItemEvents.toolTierRegistry(e => {
    e.add('vorpal', tier => {
      tier.uses = 800
      tier.speed = 8.0
      tier.attackDamageBonus = 3.0
      tier.level = 3
      tier.enchantmentValue = 14
      tier.repairIngredient = 'kubejs:vorpal_ingot'
    })
})
ItemEvents.armorTierRegistry(event => {
    event.add('vorpal', tier => {
      tier.durabilityMultiplier = 25 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [2, 5, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 9
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:vorpal_ingot'
      tier.toughness = 1.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
})
StartupEvents.registry('item', e => {
    e.create('vorpal_upgrade_smithing_template').displayName('Smithing Template')
    e.create('vorpal_ingot')
    e.create('vorpal_sheet')
    e.create('vorpal_sword', 'sword').tier('vorpal').modifyAttribute('forge:block_reach', ' 112342340987', 1, 'multiply_base').modifyAttribute('forge:entity_reach', ' 98670124335', 0.5, 'addition')
    e.create('vorpal_pickaxe', 'pickaxe').tier('vorpal').modifyAttribute('forge:block_reach', ' 785394234', 1, 'multiply_base').modifyAttribute('forge:entity_reach', ' 57238502342734', 0.5, 'addition')
    e.create('vorpal_axe', 'axe').tier('vorpal').modifyAttribute('forge:block_reach', ' 9012417242', 1, 'multiply_base').modifyAttribute('forge:entity_reach', ' 120323818234575', 0.5, 'addition')
    e.create('vorpal_shovel', 'shovel').tier('vorpal').modifyAttribute('forge:block_reach', ' 23094832456', 1, 'multiply_base').modifyAttribute('forge:entity_reach', ' 023748923743', 0.5, 'addition')
    e.create('vorpal_hoe', 'hoe').tier('vorpal').modifyAttribute('forge:block_reach', ' 36457435045', 1, 'multiply_base').modifyAttribute('forge:entity_reach', ' 12354645631', 0.5, 'addition')
    e.create('vorpal_helmet', 'helmet').tier('vorpal')
    e.create('vorpal_chestplate', 'chestplate').tier('vorpal')
    e.create('vorpal_leggings', 'leggings').tier('vorpal')
    e.create('vorpal_boots', 'boots').tier('vorpal')

    e.create('knockback_stick_0').modifyAttribute('generic.attack_damage', ' 4589203984234', -0.999984741211, 'addition').texture('kubejs:item/knockback_stick')
    e.create('knockback_stick_0-5').modifyAttribute('generic.attack_knockback', ' 7834052034985', 0.5, 'addition').modifyAttribute('generic.attack_damage', ' 96758457345534', -0.999984741211, 'addition').texture('kubejs:item/knockback_stick').displayName('Knockback Stick 0.5')
    e.create('knockback_stick_1').modifyAttribute('generic.attack_knockback', ' 86873452347457', 1, 'addition').modifyAttribute('generic.attack_damage', ' 23423423646', -0.999984741211, 'addition').texture('kubejs:item/knockback_stick')
    e.create('knockback_stick_2').modifyAttribute('generic.attack_knockback', ' 6238428738048023', 2, 'addition').modifyAttribute('generic.attack_damage', ' 235236524675', -0.999984741211, 'addition').texture('kubejs:item/knockback_stick')
    e.create('knockback_stick_3').modifyAttribute('generic.attack_knockback', ' 93745734851934134', 3, 'addition').modifyAttribute('generic.attack_damage', ' 34656243623452342', -0.999984741211, 'addition').texture('kubejs:item/knockback_stick')
    e.create('knockback_stick_4').modifyAttribute('generic.attack_knockback', ' 2457425745742345', 4, 'addition').modifyAttribute('generic.attack_damage', ' 823074598743857484', -0.999984741211, 'addition').texture('kubejs:item/knockback_stick')
    e.create('knockback_stick_5').modifyAttribute('generic.attack_knockback', ' 10298374208937473', 5, 'addition').modifyAttribute('generic.attack_damage', ' 09687957356345345', -0.999984741211, 'addition').texture('kubejs:item/knockback_stick')

})
