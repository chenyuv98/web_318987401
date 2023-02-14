function validateNewTrainee() {
    const traineeFName = document.createTrainee.firstName.value
    const traineeLName = document.createTrainee.lastName.value
    const traineePhone = document.createTrainee.phoneNumber.value
    const traineeBD = document.createTrainee.birthDate.value
    const traineeJoin = document.createTrainee.joinDate.value
    const traineeHeath = document.createTrainee.healthIssues.value
    const validNameTrainee = /^[A-Za-z'א-ת']+$/
    const lengthName = 2

    if (validTraineeFName(traineeFName)) {
        if (validTraineeLName(traineeLName)) {
            if (validTraineePhone(traineePhone)) {
                if (validTraineeBD(traineeBD)) {
                    if (validTraineeJoin(traineeJoin, traineeBD)) {
                        if (validTraineeHeath(traineeHeath)) {
                        }
                    }
                }
            }
        }
        return false
    }

    function validTraineeFName(traineeFName) {
        if (traineeFName.length < lengthName) {
            alert(`TRAINEE'S FIRST NAME can't be less than ${lengthName} characters`)
            traineeFName.focus()
            return false
        }
        if (traineeFName.match(validNameTrainee)){
            return true
        }
        else{
            alert(`TRAINEE'S FIRST NAME can't contain non-alphabetic characters`)
            traineeFName.focus()
            return false
        }
    }

    function validTraineeLName(traineeLName) {
        if (traineeFName.match(validNameTrainee)){
            if (traineeLName.length < lengthName) {
                alert(`TRAINEE'S LAST NAME can't be less than ${lengthName} characters`)
                traineeLName.focus()
                return false
            }
            return true
        }
        alert(`TRAINEE'S LAST NAME can't contain non-alphabetic characters`)
        traineeLName.focus()
        return false
    }

    function validTraineePhone(traineePhone) {
        const ValidPhoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        if (traineePhone.match(ValidPhoneNumber)) {
            return true
        }
        else {
            alert(`TRAINEE'S PHONE wasn't enter right. Please check & choose again`)
            traineePhone.focus()
            return false
        }
    }

    function validTraineeBD(traineeBD) {
        if (traineeBD) {
            return true
        }
        else {
            alert(`TRAINEE'S YEAR BIRTH DATE can't be empty. Please attention that`)
            traineeBD.focus()
            return false
        }
    }




    function validTraineeJoin(joinDate, traineeBD) {
        if (joinDate < traineeBD) {
            alert(`TRAINEE'S JOIN DATE can't be larger then TRAINEE'S BIRTH DATE. Please attention that`)
            joinDate.focus()
            return false
        }
        return true
    }

    function validTraineeHeath(healthIssues) {
        const validIssues = /^[0-9a-zA-Z' ''א-ת']+$/
        if (healthIssues.match(validIssues)) {
            alert(`Trainee's details Successfully Submitted`);
            window.open("trainees.html")
            return true;
        } else {
            alert(`TRAINEE'S ISSUES must have only alphanumeric characters`);
            healthIssues.focus();
            return false;
        }
    }


    // const studio1 = {
    //     studioName: 'At Malka',
    //     email: 'atmalka@gmail.com',
    //     password: 'At12345678',
    //     phone: '0501234567',
    //     address: 'Beer Sheba 1'
    // }
    //
    // const studio2 = {
    //     studioName: 'ShezUp',
    //     email: 'shezup@gmail.com',
    //     password: 'Su12345678',
    //     phone: '0511234567',
    //     address: 'Beer Sheba 2'
    // }
    //
    // const trainee1 = {
    //     firstName: 'Yoav',
    //     lastName: 'Ayalon',
    //     idNum: '123456789',
    //     phoneNum: '0581234567',
    //     birthDate: '16/12/97',
    //     joinDate: '01/01/2022',
    //     healthIssues: 'migraines',
    //     seniority: '102'
    // }
    //
    // const trainee2 = {
    //     firstName: 'Yuval',
    //     lastName: 'Chen',
    //     idNum: '123123123',
    //     phoneNum: '0541234567',
    //     birthDate: '27/04/98',
    //     joinDate: '15/03/2021',
    //     healthIssues: 'none',
    //     seniority: '831'
    // }
}