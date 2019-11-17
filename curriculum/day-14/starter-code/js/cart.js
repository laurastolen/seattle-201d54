/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // Laura - maybe we can use the .removechild method?
  var tr = document.getElementsByTagName('tr');
  tr.parentNode.removeChild(tr);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  var tableBody = document.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    var cartItemTr = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    var cartItemDeleteTd = document.createElement('td');
    cartItemDeleteTd.textContent = 'X';
    var cartItemQuantity = document.createElement('td');
    cartItemQuantity.textContent = cart.items[i].product.name;
    var cartItemItself = document.createElement('td');
    cartItemItself.textContent = //
      // TODO: Add the TR to the TBODY and each of the TD's to the TR
      tableBody.append(cartItemTr);
    cartItemTr.append(cartItemDeleteTd);
    cartItemTr.append(cartItemQuantity);
    cartItemTr.append(cartItemItself);
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
