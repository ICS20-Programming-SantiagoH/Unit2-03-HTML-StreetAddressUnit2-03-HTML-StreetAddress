// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get street name from text field
  let streetName = document.getElementById("street-name").value
	// get age from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("street-number").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "You live at " + streetNumber + " " + streetName + "."
}