let x = 0
sensors.DDMmotor(
AnalogPin.P15,
0,
AnalogPin.P16,
0
)
basic.forever(function () {
    x = pins.digitalReadPin(DigitalPin.P1)
    if (x == 0) {
        for (let index = 0; index < 11; index++) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            music.playTone(587, music.beat(BeatFraction.Half))
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            music.playTone(587, music.beat(BeatFraction.Half))
            basic.pause(300)
        }
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    99
    )
    basic.pause(500)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
})
basic.forever(function () {
    x = pins.digitalReadPin(DigitalPin.P1)
    if (x == 0) {
        basic.pause(1000)
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        54
        )
        basic.pause(400)
        sensors.DDMmotor(
        AnalogPin.P0,
        0,
        AnalogPin.P0,
        0
        )
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . . .
                # . . . .
                # # # # .
                # . . . .
                . # . . .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                # # # . #
                . . . . .
                # . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                # # . # #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # # #
                . . . # .
                . . . . #
                `)
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # #
                . . # . .
                . . . # .
                `)
            basic.showArrow(ArrowNames.West)
        }
    } else {
        basic.clearScreen()
    }
})
