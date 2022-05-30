// Copyright (c) 2022 Emmanuel.Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-06-HTML/sw.js", {
    scope: "/ICS20-Unit5-06-HTML/",
  })
}

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  var firstInteger = document.getElementById("integer-one").value
  var secondInteger = document.getElementById("integer-two").value

  // process and output
  let counter = 0
  var answer = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  while (counter < secondInteger) {
    console.log("Once through loop:" + counter)
    answer = answer + firstIntegerAsInt
    counter++
  }
  document.getElementById("loop").innerHTML = "The number is " + answer
}
