/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Nischal Joshi
     Date:  02/05/2024 

     Filename: js03.js

 */

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//
window.addEventListener("load", addWeekDays);

window.addEventListener("load", showGames);

// Writes the weekday names into the calendar.
function addWeekDays() {
    //Initial counter
    let i = 0;

    //Provides the collection of heading cells.
    let headingCells = document.getElementsByTagName("th");

    // Writes each of the seven days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        i++; // Post increment counter
    }
}

// Function to display game informations in the calendar
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";
        
        // Using switch case to respective class attribute to <p> tag.
        switch (gameResults[i]) {
            case "W": 
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }


        // Displays game location.
        // Shows "vs. " if its a home game.
        // Shows "@" if the game is away.
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        // Includes the opponent.
        gameInfo += gameOpponents[i] + "<br>";

        // Includes the result and score.
        gameInfo += gameResults[i] + ": (" + runsScored[i] +
            " - " + runsAllowed[i] + ")";

        // Displays innings played for suspended, shortened, or extrainning games.
        // For game ininings less than 5 its display result as [ result ]***.
        // For game ininings less than 9 its display result as [ result ]*.
        // For game ininings greater than 9 its display result as [ result ].
        if (gameInnings[i] < 5) {
            gameInfo += " [" + gameInnings[i] + "]***";
        } else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i] + "]*";
        } else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i] + "]";
        }

        // Closes the paragraph.
        gameInfo += "</p>";

        // Writes the information into a table cell that matches the game date.
        let tableCell = document.getElementById(gameDates[i]);

        // Inserts the content before closing element's closing tag
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}