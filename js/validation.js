'use strict';
console.log("validation.js loaded");

window.onload = init;

// DOM ELEMENTS
const elements = {
   
    initializeVariables: function(){
        this.formElement = document.getElementById("contact-form");
        this.name = document.getElementById("nme");
        this.message = document.getElementById("msg");
        this.email = document.getElementById("email");
    }
};

function init(){
    // initialize dom elements
    elements.initializeVariables();
    // attach listener to the form submit button
    document.getElementById("contact-form").addEventListener("submit", validateForm);   
       
    
}


function validateForm(event){
     event.preventDefault();
    console.log("Form submission button clicked");
    const nameText = elements.name.value;
    const messageText = elements.message.value;
    const emailText = elements.email.value;
    if(emailText === ""){
        alert("Please input a email.")
        console.log(emailText);

    } else if (nameText === ""){
        alert("Please input a name.")
        console.log(nameText);

    } else if(messageText === ""){
        alert("Please input a message.")
        console.log(messageText);
        
    }

    alert("Your message has been sent.")
}




