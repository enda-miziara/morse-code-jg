input.onButtonPressed(Button.A, function () {
    step += 1
    basic.showString("" + step)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(step)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    StepText = convertToText(step)
    basic.showString("" + listindex)
})
let StepText = ""
let listindex = 0
let step = 0
let listnumber = [
"1",
"2",
"3",
"4",
"5"
]
radio.sendNumber(0)
let listtext = [
"a",
"b",
"c",
"d",
"e"
]
step = 0
listindex = 0
