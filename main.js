
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

let callsignInput = document.getElementById("callsign")
let callsignStatus = document.getElementById("callsign-status")

let emailInput = document.getElementById("email")
let emailStatus = document.getElementById("email-status")

let passwordStatus = document.getElementById("password-status")

let passwordConfirmStatus = document.getElementById("password-confirm-status")

let termsStatus = document.getElementById("terms-status")

let readyCounter = document.getElementById("ready-counter")
let counterDisplay = document.getElementById("confirm-counter")
let validCount = 0



let hintTextWrapper = document.querySelectorAll(".hintTextWrapper")
let callsignHintText = document.getElementById("callsign-hint")
let emailHintText = document.getElementById("email-hint")
let passwordHintText = document.getElementById("password-hint")
let passworConfHintText = document.getElementById("passwordConfirmation-hint")
let termsPrivacyHintText = document.getElementById("termsandprivacy-hint")
let checkbox = document.getElementById("checkbox")


function ValidateForm() {
    validCount = 0
    if ((document.forms["loginForm"]["nickname"].value).length < 3) {
        callsignInput.classList.add('wrongInput')
        callsignStatus.classList.add('wrongStatus')

        callsignStatus.classList.remove('rightStatus')
        callsignStatus.textContent = "too short"
        
        hintTextWrapper[0].classList.add('alerted')
        callsignHintText.textContent = "Use at least 3 characters"
    }   
    else {
        callsignHintText.textContent = "3–20 characters: letters, numbers, _ or -"
        hintTextWrapper[0].classList.remove('alerted')
        callsignInput.classList.remove('wrongInput')
        callsignStatus.classList.remove('wrongStatus')

        callsignStatus.classList.add('rightStatus')
        callsignStatus.textContent = "ok"
        validCount++
    }


    if (document.forms["loginForm"]["email"].value == "") {
        emailInput.classList.add('wrongInput')
        emailStatus.classList.add('wrongStatus')
        emailStatus.classList.remove('rightStatus')

        emailStatus.textContent = "malformed"

        hintTextWrapper[1].classList.add('alerted')
        emailHintText.textContent = "Enter a valid email, like 'you@example.com'"

    }
    else {
        emailStatus.classList.remove('wrongStatus')
        emailInput.classList.remove('wrongInput')

        emailStatus.classList.add('rightStatus')
        emailStatus.textContent = "ok"

        hintTextWrapper[1].classList.remove('alerted')
        emailHintText.textContent = ""

        validCount++
    }

    if ((document.forms["loginForm"]["password-1"].value).length < 8) {
        passwordInput_1.classList.remove('rightInput')
        passwordStatus.classList.remove('rightStatus')

        passwordInput_1.classList.add('wrongInput')
        passwordStatus.classList.add('wrongStatus')
        passwordStatus.textContent = "too short"

        hintTextWrapper[2].classList.add("alerted")
        passwordHintText.textContent = "Use at least 8 characters"
    }
    else {
        passwordHintText.textContent = "At least 8 characters"
        hintTextWrapper[2].classList.remove("alerted")
        passwordInput_1.classList.remove('wrongInput')
        passwordStatus.classList.remove('wrongStatus')

        passwordInput_1.classList.add('rightInput')
        passwordStatus.classList.add('rightStatus')
        passwordStatus.textContent = "ok"
        validCount++
    }

    if (document.forms["loginForm"]["password-2"].value !== document.forms["loginForm"]["password-1"].value 
        || document.forms["loginForm"]["password-2"].value === "" ) {
        passwordInput_2.classList.remove('rightInput')
        passwordConfirmStatus.classList.remove('rightStatus')

        hintTextWrapper[3].classList.add("alerted")
        passworConfHintText.textContent = "Passwords don't match"

        passwordInput_2.classList.add('wrongInput')
        passwordConfirmStatus.classList.add('wrongStatus')
        passwordConfirmStatus.textContent = "mismatch"

    }
    else {


        passwordInput_2.classList.add('rightInput')
        passwordConfirmStatus.classList.add('rightStatus')

        passworConfHintText.textContent = ""
        hintTextWrapper[3].classList.remove("alerted")
        passwordInput_2.classList.remove('wrongInput')
        passwordConfirmStatus.classList.remove('wrongStatus')
        passwordConfirmStatus.textContent = "ok"
        validCount++
    }
  



    if (document.forms["loginForm"]["terms"].checked !== true) {
        termsStatus.classList.remove('rightStatus')

        termsStatus.classList.add('wrongStatus')
        termsStatus.textContent = "required"

        hintTextWrapper[4].classList.add("alerted")
        termsPrivacyHintText.textContent = "Accept the terms to continue"
        checkbox.classList.add("alerted")
    }
    else {
        termsPrivacyHintText.textContent = ""
        termsStatus.classList.remove('wrongStatus')
        checkbox.classList.remove("alerted")

        hintTextWrapper[4].classList.remove("alerted")
        
        termsStatus.classList.add('rightStatus')
        termsStatus.textContent = "ok"
        validCount++
    }
    counterDisplay.textContent = validCount

    if (counterDisplay.textContent === "5") {
        readyCounter.classList.add("isready")
    }
    else {
        readyCounter.classList.remove("isready")
    }
}
