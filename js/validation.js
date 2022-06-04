'use strict';
console.log("validation.js loaded");

window.onload = init;

// DOM ELEMENTS
const elements = {
    // we don't want to get the values immediately, so wrap them all in a function that can be executed on init
    collectDOM: function(){
        this.formElement = document.getElementById("contact-form");
        // this.formMessageElement = document.getElementById("form-error");
        this.name = document.getElementById("nme");
        this.message = document.getElementById("msg");
        this.email = document.getElementById("email");
    }
};

function init(){
    // initialize dom elements
    elements.collectDOM();
    // attach listener to the form submit button
    elements.formElement.addEventListener("submit", validateForm);
    
    
}



function validateForm(event){
    event.preventDefault();
    console.log("Form submission button clicked");
    // console.log(event.currentTarget);
    // get form data from <input> tags using .value
    const nameText = elements.name.value;
    const messageText = elements.message.value;
    const emailText = elements.email.value;
    if(emailText === ""){
        alert("Please input a email.")
        console.log(emailText);

    } else if (nameText === ""){
        alert("Please input a name.")
        console.log(nameText);
        // update the DOM with an error message
        // elements.formMessageElement.innerText = "Name must not be blank.";

    } else if(messageText === ""){
        alert("Please input a message.")
        console.log(messageText);
        
    }

    alert("Your message has been sent.")
}


