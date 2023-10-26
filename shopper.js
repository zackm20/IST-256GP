//Zackary Moyer//
userData = {};
var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);



const setError = (element,message) => {
    element.classList.add('border-danger');
    element.setCustomValidity(message)
    element.reportValidity()
    console.log(element)

};
function  setSuccess(element){
    element.classList.remove('border-danger');
};
function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}



const validateInputs = () => {
    form = document.querySelector('#form')

    email = document.querySelector('#email') //Jordan Runyon. added missing hash to select elements by ID//

    nameV = document.querySelector('#name')

    phone = document.querySelector('#phone')

    age = document.querySelector('#age')

    address = document.querySelector('#address')

    emailValue = email.value.trim();

    nameValue = nameV.value.trim();

    phoneValue = phone.value.trim();

    ageValue = age.value.trim();

    addressValue = address.value.trim();


    console.log(emailValue, nameValue, phoneValue, ageValue, addressValue)

    //Zackary Moyer//
    //Claire Pfluger//

    //Validation Statement Zackary Moyer//


    if (nameValue === '') {
        setError(nameV, 'Please enter your name')
    } else {
        setSuccess(nameV);
    }
    if (!validateEmail(emailValue)) {
        setError(email, 'Please enter a valid email address')
    } else {
        setSuccess(email);
    }
    if (phoneValue === '') {
        setError(phone, 'Please enter a password')
    } else if (phoneValue.length < 10 || phoneValue.length >= 11) {
        setError(phone, 'Please enter valid phone number')
    } else {
        setSuccess(phone)
    }
    if (ageValue === '') {
        setError(age, 'Please enter your age')
    } else {
        setSuccess(age);
    }
    if (addressValue === '') {
        setError('Please enter your address')
    } else {
        setSuccess(address)
    }
    userData = {

        email: emailValue,

        name: nameValue,

        phone: phoneValue,

        age: ageValue,

        address: addressValue,


    }
    userDataOnForm = document.querySelector('#user-data')
    userDataOnForm.innerHTML = JSON.stringify(userData, null, 2);
    console.log(userData)

    const jsonUserData = JSON.stringify(userData);

    console.log(jsonUserData);




};

