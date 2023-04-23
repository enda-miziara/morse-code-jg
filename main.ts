input.onButtonPressed(Button.A, function () {
    step += 1
    basic.showNumber(step)
})
input.onButtonPressed(Button.AB, function () {
    StepText = convertToText(step)
    radio.sendString(StepText)
})
radio.onReceivedString(function (receivedString) {
    listindex = listnumber.indexOf(receivedString)
    basic.showString("" + (listtext[listindex]))
})
input.onButtonPressed(Button.B, function () {
	
})
let StepText = ""
let listindex = 0
let step = 0
let listtext: string[] = []
let listnumber: string[] = []
listnumber = [
"5",
"7",
"2",
"8",
"1"
]
radio.sendNumber(0)
listtext = [
"a",
"b",
"c",
"d",
"e"
]
step = 0
listindex = 0
