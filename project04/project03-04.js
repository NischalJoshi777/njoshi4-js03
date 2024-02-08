/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Nischal Joshi
      Date: 02/07/2024

      Filename: project03-04.js
*/

// 5. Create a for loop with the counter variable ranging from 0 up to less than the length of the reviewers array,
// increasing the counter by 1 with each iteration. In this for loop you will generate the HTML code for a table
// that contains the review from each customer.
// 6. For each iteration within the for loop, do the following:
// a. Declare a variable named reviewCode, setting its initial value to an empty text string.
// b. Insert an else if statement that adds one of three possible text strings to the value of reviewCode: if
// the value of the reviewType for the current element in the array is equal to "P" then add the text string
// "<table class = 'prime'>", else if the value of the reviewType for the current element is equal to
// "N" then add the text string,"<table class = 'new'>" else add the text string, "<table>".
// c. Add the following HTML code to the value of the reviewCode variable. (Hint: You may find it easier to
// break this code into several text strings that you add separately using the += assignment operator.)
// <caption>reviewTitles[i]</caption>
// <tr><th>By</th><td>reviewers[i]</td></tr>
// <tr><th>Review Date</th><td>reviewDates[i]</td></tr>
// <tr><td colspan='2'>reviews[i]</td></tr>
// </table>
// where reviewTitles[i], reviewers[i], reviewDates[i], and reviews[i] are the values from the
// reviewTitles, reviewers, reviewDates, and reviews arrays for the current element in the iteration.
// d. Use the insertAdjacentHTML() method to insert the value of the reviewCode variable into the
// first (and only) <article> tag in the document, placing it directly before the closing tag. (Hint: Use the
// getElementsByTagName() method to reference the collection of article elements in the document.)
// 7. Save your changes to the file and then load project03-04.html in your web browser, verify that all four reviews
// are shown as indicated in Figure 3-21.


let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
    "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
    "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
    "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
    "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

function starImages(rating) {
    let imageText = "";
    for (let i = 1; i <= rating; i++) {
        imageText += "<img src = 'star.png' alt = ''>";
    }
    return imageText;
}

for (let i = 0; i < reviewers.length; i++) {
    let reviewCode = "";
    if (reviewType[i] === "P") {
        reviewCode += "<table class = 'prime'>";
    } else if (reviewType[i] === "N") {
        reviewCode += "<table class = 'new'>";
    } else {
        reviewCode += "<table>";
    }


reviewCode += `<caption>${reviewTitles[i]}</caption>`;
reviewCode += `<tr><th>By</th><td>${reviewers[i]}</td></tr>`;
reviewCode += `<tr><th>Review Date</th><td>${reviewDates[i]}</td></tr>`;
reviewCode += `<tr><th>Rating</th><td>${starImages(stars[i])}</td></tr>`;
reviewCode += `<tr><td colspan='2'>${reviews[i]}</td></tr>`;
reviewCode += `</table>`;

document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeEnd", reviewCode);
}
