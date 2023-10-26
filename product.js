//Zackary Moyer//
userData = {};
var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function displayOnProductForm(item){
    id = $('#id')
    desc = $('#desc')
    category = $('#category')
    measure = $('#measure')
    price = $('#price')
    weight = $('#weight')
    
    id.val(item.id)
    desc.val(item.desc)
    category.val(item.category).trigger('change')
    measure.val(item.measure).trigger('change')
    price.val(item.price)
    weight.val(item.weight)



}

const setError = (element,message) => {
    element.classList.add('border-danger');
    element.setCustomValidity(message)
    element.reportValidity()
    console.log(element)

};
function  setSuccess(element){
    element.classList.remove('border-danger');
};

    const validateInputs = () => {
        form = document.querySelector('#form')
        id = document.querySelector('#id')
        desc = document.querySelector('#desc')
        category = document.querySelector('#category')
        measure = document.querySelector('#measure')
        price = document.querySelector('#price')
        weight = document.querySelector('#weight')

        idValue = id.value.trim();
        descValue = desc.value.trim();
        categoryValue = category.value.trim();
        measureValue = measure.value.trim();
        priceValue = price.value.trim();
        weightValue = weight.value.trim();

        console.log(idValue, descValue, categoryValue, measureValue, priceValue, weightValue)

//Zackary Moyer//

        if (idValue === '') {
            setError(id, 'Please enter an ID number')
        } else {
            setSuccess(id);
        }
        if (descValue === '') {
            setError(desc, 'Please enter an item description')
        } else {
            setSuccess(desc);
        }
        if (categoryValue === '') {
            setError(category, 'Please enter a category')
        } else {
            setSuccess(category);
            if (measureValue === '') {
                setError(measure, 'Please enter measurement')
            } else {
                setSuccess(measure);
            }
            if (priceValue === '') {
                setError(price, 'Please enter product price')
            } else {
                setSuccess(price)
            }
            if (weightValue === '') {
                setError(weight, 'Please enter a weight')
            } else {
                setSuccess(price)
            }
//Zackary Moyer
            userData = {

                id: idValue,

                desc: descValue,

                category: categoryValue,

                measure: measureValue,

                price: priceValue,

                weight: weightValue

            }
            userDataOnForm = document.querySelector('#user-data')
            userDataOnForm.innerHTML = JSON.stringify(userData, null, 2);
            console.log(userData)


            const jsonUserData = JSON.stringify(userData);

            console.log(jsonUserData);
            updateRecord(userData)
        }
        //Zackary Moyer
    }
//Jordan Runyon
// Define JSON product document
productData = {
    "products": [
        {
            "id": "1",
            "desc": "Product A",
            "category": "Men's Clothing",
            "measure": "Piece",
            "price": 19.99,
            "weight": 1.2
        },
        {
            "id": "2",
            "desc": "Product B",
            "category": "Girl's Clothing",
            "measure": "Feet",
            "price": 24.99,
            "weight": 2.5
        }
    ]
};
// Search and update function
$("#searchAndUpdate").click(function() {
    var idToSearch = $("#id").val().trim();
    var foundProduct = productData.products.find(product => product.id === idToSearch);

    if (foundProduct) {

        console.log('Product found:', foundProduct);
    } else {
        console.log('Product not found');
    }
});

$("#searchButton").click(function() {
    var idToSearch = $("#query").val().trim();
    var foundProduct = productData.products.find(product => product.id === idToSearch);

    if (foundProduct) {
        displayOnProductForm(foundProduct)

        console.log('Product found:', foundProduct);
    } else {
        console.log('Product not found');
    }
});
//Jordan Runyon

function updateRecord(item){
    console.log('got update')
    products = productData.products
    notFound = false
    
    var founditem = products.findIndex(x => x.id == item.id);
    console.log(founditem)
    if(founditem < 0){
        products.push(item)
    }
    else{
        products[founditem] = item;
    }
    productData.products = products
    
    

    
}












