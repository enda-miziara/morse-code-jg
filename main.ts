input.onButtonPressed(Button.A, function () {
    step += 1
    basic.showString("" + (step))
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    StepText = convertToText(step)
    listindex = listnumber.indexOf(StepText)
    basic.showString("" + (listindex))
})
let StepText = ""
let listindex = 0
let step = 0
let listnumber: string[] = []
listnumber = [
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
