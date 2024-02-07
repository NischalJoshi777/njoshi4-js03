/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Nischal Joshi
      Date:  02/06/2024

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName('menuItem');

// For loop to add eventlistener for click event on each menuitem
for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', calcTotal);
}

// Function to calculate total cost

function calcTotal() {
      let orderTotal = 0;
      for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].checked) {
                  orderTotal += Number(menuItems[i].value);
            }
      }
      document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);

      //Alternative approach by using for-of
      // for (const menuItem of menuItems) {
      //       if (menuItem.checked)
      //             orderTotal += Number(menuItem.value);
      // }
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
      return "$" + value.toFixed(2);
}
