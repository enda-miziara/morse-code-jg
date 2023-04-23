def on_button_pressed_a():
    global step
    step += 1
    basic.show_string("" + str(step))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_number(step)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_string("Hello!")
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global StepText
    StepText = convert_to_text(step)
    basic.show_string("" + str(listindex))
input.on_button_pressed(Button.B, on_button_pressed_b)

StepText = ""
listindex = 0
step = 0
listnumber = ["1", "2", "3", "4", "5"]
radio.send_number(0)
listtext = ["a", "b", "c", "d", "e"]
step = 0
listindex = 0