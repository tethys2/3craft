ItemEvents.rightClicked('kubejs:knockback_stick_5', event => {
    event.item.count--
    event.player.giveInHand('kubejs:knockback_stick_4')
})
ItemEvents.rightClicked('kubejs:knockback_stick_4', event => {
    event.item.count--
    event.player.giveInHand('kubejs:knockback_stick_3')
})
ItemEvents.rightClicked('kubejs:knockback_stick_3', event => {
    event.item.count--
    event.player.giveInHand('kubejs:knockback_stick_2')
})
ItemEvents.rightClicked('kubejs:knockback_stick_2', event => {
    event.item.count--
    event.player.giveInHand('kubejs:knockback_stick_1')
})
ItemEvents.rightClicked('kubejs:knockback_stick_1', event => {
    event.item.count--
    event.player.giveInHand('kubejs:knockback_stick_0-5')
})
ItemEvents.rightClicked('kubejs:knockback_stick_0-5', event => {
    event.item.count--
    event.player.giveInHand('kubejs:knockback_stick_0')
})
ItemEvents.rightClicked('kubejs:knockback_stick_0', event => {
    event.item.count--
    event.player.giveInHand('kubejs:knockback_stick_5')
})