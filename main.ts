input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
    if (x < 0) {
        y += -1
        x += 5
    }
    if (y > 5) {
        y += 5
        x += 0
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
    if (x > 4) {
        y += 1
        x += -5
    }
    if (y > 4) {
        y += -5
        x += 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
    while (y > 0) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
    while (y < 4) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
})
