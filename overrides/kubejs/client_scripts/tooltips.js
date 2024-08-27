ItemEvents.tooltip(e => {
    e.addAdvanced(['kubejs:vorpal_upgrade_smithing_template'], (item, advanced, text) => {
        text.add(1, [
            Text.of('Vorpal Upgrade').gray()
        ])
        text.add(2, [
            Text.of(' ').gray()
        ])
        text.add(3, [
            Text.of('Applies to:').gray()
        ])
        text.add(4, [
            Text.of(' Diamond Equipment').blue()
        ])
        text.add(5, [
            Text.of('Ingredients:').gray()
        ])
        text.add(6, [
            Text.of(' Vorpal Ingot').blue()
        ])
    })
    e.addAdvanced(['kubejs:vorpal_sword'], (item, advanced, text) => {
        text.add(1, [
            Text.of('Great for killing Jabberwockies').green()
        ])
    })
})

