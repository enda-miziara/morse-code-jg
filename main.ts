input.onButtonPressed(Button.A, function () {
    step += 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    listindex = listnumber.indexOf(step)
    basic.showNumber(listindex)
})
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
