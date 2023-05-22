radio.onReceivedNumber(function (receivedNumber) {
    let receivednumber = 0
    if (receivednumber >= dici) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    dici = randint(1, 6)
    basic.showNumber(dici)
    radio.sendNumber(dici)
})
let dici = 0
radio.setGroup(1)
basic.forever(function () {
	
})
