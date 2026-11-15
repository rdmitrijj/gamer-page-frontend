
let passwordEye_1 = document.querySelector(".password-eye-1")
let passwordEye_2 = document.querySelector(".password-eye-2")
let passwordInput_1 = document.getElementById("password-1")
let passwordInput_2 = document.getElementById("password-2")
let submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", ValidateForm)
// submitButton.addEventListener("submit", ValidateForm)



passwordEye_1.addEventListener("click", () => {
    passwordEye_1.classList.toggle('passcheck')
    passCheck(passwordInput_1)
})

passwordEye_2.addEventListener("click", () => {
    passwordEye_2.classList.toggle('passcheck')
    passCheck(passwordInput_2)
})

function passCheck(element) {
    if (element.type === "password") {
        element.type = "text"
    }
    else {
        element.type = "password"
    }
}




let counter = 0

function ValidateForm() {
    if (document.forms["loginForm"]["nickname"].value == "") {
        document.getElementById("callsign").classList.add('wrongInput')
        document.getElementById("callsign-status").classList.add('wrongStatus')
        document.getElementById("callsign-status").classList.remove('rightStatus')
        document.getElementById("callsign-status").textContent = "too short"
        
    }   
    else {
        document.getElementById("callsign").classList.remove('wrongInput')
        document.getElementById("callsign-status").classList.remove('wrongStatus')
        document.getElementById("callsign-status").classList.add('rightStatus')
        document.getElementById("callsign-status").textContent = "ok"
        counter++
    }


    if (document.forms["loginForm"]["email"].value == "") {
        document.getElementById("email").classList.add('wrongInput')
        document.getElementById("email-status").classList.add('wrongStatus')
        document.getElementById("email-status").textContent = "malformed"
    }
    if (document.forms["loginForm"]["terms"].checked !== true) {
        document.getElementById("terms-status").classList.remove('rightStatus')
        document.getElementById("terms-status").classList.add('wrongStatus')
        document.getElementById("terms-status").textContent = "required"
    }
    else {
        document.getElementById("terms-status").classList.remove('wrongStatus')
        document.getElementById("terms-status").classList.add('rightStatus')
        document.getElementById("terms-status").textContent = "ok"
    }
}

console.log(document.forms["loginForm"]["terms"].checked)