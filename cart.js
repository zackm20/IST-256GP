//Zackary Moyer//
// Shopping cart array to store selected items
var products = [
    { "id": "1", "desc": "Men's Shirt", "price": "25.00" },
    { "id": "2", "desc": "Woman's Shirt", "price": "25.00" },

];
for (var i = 0; i < products.length; i++) {
    const select = document.getElementById("productSelector");
    const option = document.createElement("option");
    option.text = products[i].desc;
    option.value = products[i].id;
    select.add(option);
}

// Shopping cart array to store selected items
let shoppingCart = [];

// Used to update the total cost of products in shopping cart
function updateTotal() {
    let total = 0;
    shoppingCart.forEach((item) => {
        const product = products.find(p => p.id == item.productId);
        if (product) {
            total += product.price * item.quantity;
        }
    });

    // Update the HTML to display total
    $("#cart-total-price").text('$' + total.toFixed(2));
}

$(document).ready(function () {
    $("body").on("click", ".removeCartItem", function (event) {
        // product id to remove is contained in the first data cell in the same row as 'remove' button, save to update shopping cart
        const productIdToRemove = $(event.target).closest("tr").find("td:first").text();
        //const productIdToRemove = $(this).siblings(":first").text();
        
        // update shopping cart by finding index of product with aforementioned productId
        shoppingCart.splice(shoppingCart.findIndex(product => product.id == productIdToRemove) - 1, 1); // ?????
        displayCart();
        updateTotal();
    });
});

function handleAjax() {
    $.ajax({
        url: "/echo/json/",
        type: "POST",
        data: shoppingCart,
        success: function (response) {
            console.log(response);
            $("#cartContent").html(JSON.stringify(response));
        },
        error: function () {
            console.log('there was an error!');
        }
    });
}

//Zackary Moyer



//--Jordan Joe Runyon--------------------------------------------------------------

// Function to display the shopping cart

function displayCart() {

    $('#cart').find("tr:gt(0)").remove();  // Empty table except header.

    shoppingCart.forEach((item) => {
        var product = products.find(p => p.id == item.productId);
        if (product) {
            var productHtml = '<tr>';
            productHtml += '<td>' + product.id + '</td>';
            productHtml += '<td>' + product.desc + '</td>';
            productHtml += '<td>$' + product.price + '</td>';
            productHtml += '<td>' + item.quantity + '</td>';
            productHtml += '<td>$' + (item.quantity * product.price) + '</td>';
            productHtml += '<td>' + '<button class="btn btn-danger removeCartItem" type="button">Remove</button>' + '</td>';
            productHtml += '</tr>';

            $('#cart tbody').append(productHtml);
        }
    });
}


//---------------------------------------------------------------------------------------------


// Event handler for adding items to the cart
$("#add-to-cart").on("click", function () {
    const productId = $("#productSelector").prop('selectedIndex');
    const cartItem = shoppingCart.find(item => item.productId == productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        shoppingCart.push({ productId, quantity: 1 });
    }

    displayCart();
    updateTotal();

});


