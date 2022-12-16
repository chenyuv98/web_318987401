function validateSignUpForm() {
    const inputName = document.signup.name.value
    const inputEmail = document.signup.email.value
    const inputPassword = document.signup.password.value
    const inputPhoneNumber = document.signup.phone.value
    const inputAddress = document.signup.address.value
    const lengthName = 2
    const min = 8
    const max = 12

    if (validName(inputName)) {
        if (validMail(inputEmail)) {
            if (validPassword(inputPassword, min, max)) {
                if (validPhone(inputPhoneNumber)) {
                    if (validAddress(inputAddress)) {
                    }
                }
            }
        }
        return false
    }

    function validName(inputName) {
        if (inputName.length < lengthName) {
            alert(`STUDIO'S NAME can't be less than ${lengthName} characters`)
            inputName.focus()
            return false
        }
        return true
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
            alert(`Your PASSWORD is too short. Please choose again -  MIN ${min} characters`)
            inputPassword.focus()
            return false
        }
        if (inputPassword.length > max) {
            alert(`Your PASSWORD is too long. Please choose again - MAX ${max} characters`)
            inputPassword.focus()
            return false
        }
        return true
    }

    function validPhone(inputPhoneNumber) {
        const ValidPhoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        if (inputPhoneNumber.match(ValidPhoneNumber)) {
            return true
        } else {
            alert(`Your PHONE wasn't enter right. Please check & choose again`)
            inputName.focus()
            return false
        }
    }

    function validAddress(inputAddress) {
        const validAddress = /^[0-9a-zA-Z' ''א-ת']+$/
        if (inputAddress.match(validAddress)) {
            alert(`Your details Successfully Submitted`);
            window.open("homePage.html")
            return true;
        } else {
            alert(`Your ADDRESS must have only alphanumeric characters`);
            inputAddress.focus();
            return false;
        }
    }
}
