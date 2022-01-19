radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == choix) {
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    } else {
        images.createImage(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `).showImage(0)
    }
})
let choix = 0
radio.setGroup(1)
choix = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        choix = 1
        radio.sendString("debut")
    }
    if (input.buttonIsPressed(Button.A)) {
        choix += 1
    }
    if (choix == 4) {
        choix = 1
    }
    if (choix == 1) {
        images.createImage(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `).showImage(0)
    }
    if (choix == 2) {
        images.createImage(`
            . . # . .
            . # . # .
            # # . # #
            . # # # .
            . . # . .
            `).showImage(0)
    }
    if (choix == 3) {
        images.createImage(`
            . . . . #
            . # . # .
            # . # . .
            . # . # .
            . . . . #
            `).showImage(0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(choix)
        while (input.buttonIsPressed(Button.B)) {
        	
        }
    }
})
