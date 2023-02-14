const sql = require('./db');

const TrainerLogIn = (req, res) => {
    if (!req.body) {
        res.render('logIn', {})
    }
    const logInData = {
        "email": req.body.email,
        "password": req.body.password
    }
    const Q = 'SELECT * FROM trainers WHERE email = ?'
    sql.query(Q, logInData.email, (err, sqlRes) => {
        if (err) {
            res.render('logIn', {})
            return;
        }
        if (sqlRes.length !== 0) {
            const user = sqlRes[0]
            if (user.password === logInData.password) {
                res.cookie('logged_user', user)
                res.redirect('home')
            } else {
                res.render('logIn', {})
            }
        } else {
            res.render('logIn', {})
        }
    })
}

const TrainerSIgnUp = (req, res) => {
    if (!req.body) {
        res.render('logIn', {})
    }
    const signUpData = {
        "email": req.body.email,
        "password": req.body.password,
        "studio_name": req.body.name,
        "studio_address": req.body.address,
        "studio_phone": req.body.phone
    }
    const Q = 'SELECT * FROM trainers WHERE email = ?'
    sql.query(Q, signUpData.email, (err, sqlRes) => {
        if (err) {
            res.render('signup', {})
            return;
        }
        if (sqlRes.length !== 0) {
            res.render('signup', {})
        } else {
            const Q2 = 'INSERT INTO trainers SET ?'
            sql.query(Q2, signUpData, (err) => {
                if (err) {
                    res.render('signup', {})
                    return
                }
                res.cookie('logged_user', signUpData)
                res.redirect('home')
            })
        }
    })
}

const GetAllTrainees = (req, res) => {
    const trainer = req.cookies.logged_user
    if (!trainer) {
        res.redirect('welcome')
    }
    const Q = 'SELECT * FROM TRAINEES WHERE email = ?'
    sql.query(Q, trainer.email, (err, sqlRes) => {
        if (err) {
            console.log("error ", err);
        }
        res.render('trainees', {
            trainees: sqlRes
        })
    });
}

const DeleteTrainee = (req, res) => {
    if (!req.params) {
        res.redirect('trainees')
    }
    const Q = 'DELETE FROM TRAINEES WHERE id = ?'
    sql.query(Q, req.params.trainee, (err, sqlRes) => {
        if (err) {
            console.log("error ", err);
        }
        res.redirect('../trainees')
    });
}

module.exports = {TrainerLogIn, TrainerSIgnUp, GetAllTrainees, DeleteTrainee};