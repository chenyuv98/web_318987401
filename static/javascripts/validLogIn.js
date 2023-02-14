function validateLogInForm() {
    const inputEmail = document.login.email.value
    const inputPassword = document.login.password.value
    const min = 8
    const max = 12

    if (validMail(inputEmail)) {
        if (validPassword(inputPassword, min, max)) {             }
    }
    return false
}

function validMail(inputEmail) {
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (inputEmail.match(emailValid)) {
        return true
    } else {
        alert(`Your EMAIL is invalid. Please enter again`)
        inputEmail.focus()
        return false
    }
}

function validPassword(inputPassword, min, max) {
    if (inputPassword.length < min) {
        alert(`Your PASSWORD is too short. Please enter again -  min ${min} characters`)
        inputPassword.focus()
        return false
    }
    if (inputPassword.length > max) {
        alert(`Your PASSWORD is too long. Please enter again - max ${max} characters`)
        inputPassword.focus()
        return false
    }
    alert(`Your details Successfully Submitted`);
    window.open("homePage.html")
    return true;
}