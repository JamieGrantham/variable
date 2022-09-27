// Created by: Jamie G
// Created on: 2022/09/27
// This program shows the counter number when a is pressed
input.onButtonPressed(Button.A, function () {
    counter += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
// Created by: Jamie G
// Created on: 2022/09/27
// This program shows the counter number when B is pressed
input.onButtonPressed(Button.B, function () {
    counter += -1
})
let counter = 0
counter = 0
