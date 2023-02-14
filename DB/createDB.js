const SQL = require('./db');
const path = require('path');
const csv = require("csvtojson");

//  TRAINERS
const CreateTrainersTable = (req, res) => {
    const Q = 'CREATE TABLE IF NOT EXISTS trainers (email varchar(50) primary key, password varchar(70), studio_name varchar(50), studio_address varchar(50), studio_phone varchar(50))';
    SQL.query(Q, (err) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "Error in creating TRAINERS table"});
            return;
        }
        console.log('created TRAINERS table');
        res.send("TRAINERS table created!");
    })
}

const InsertTrainers = (req, res) => {
    const Q = "INSERT INTO trainers SET ?";
    const csvFIlePath = path.join(__dirname, 'trainers.csv');
    csv().fromFile(csvFIlePath).then((jsonObj) => {
        jsonObj.forEach(element => {
            SQL.query(Q, element, (err) => {
                if (err) {
                    console.log("Error in INSERTING data", err);
                    return
                }
                console.log("new TRAINER inserted successfully");
            });
        })
    })
    res.send('Data inserted to Trainers table');
}

    // const csvFilePath= path.join(__dirname, "data.csv");
    // csv()
    //     .fromFile(csvFilePath)
    //     .then((jsonObj)=>{
    //         console.log(jsonObj); // for learning perpose
    //         jsonObj.forEach(element => {
    //             var NewEntry = {
    //                 "name": element.name,
    //                 "email": element.email
    //             }
    //             SQL.query(Q2, NewEntry, (err,mysqlres)=>{
    //                 if (err) {
    //                     console.log("error in inserting data", err);
    //                 }
    //                 console.log("created row sucssefuly ");
    //             });
    //         });
    //     });



const ShowTrainersTable = (req, res) => {
    const Q = "SELECT * FROM Trainers";
    SQL.query(Q, (err, mySQLres) => {
        if (err) {
            console.log("error in showing TRAINERS table ", err);
            res.status(400).send({message: "Error in showing TRAINERS table"});
            return;
        }
        console.log("Showing TRAINERS table");
        res.send(mySQLres);
    })
}

const DropTrainersTable = (req, res) => {
    const Q = "DROP TABLE IF EXISTS Trainers";
    SQL.query(Q, (err)=>{
        if (err) {
            console.log("error in dropping users table ", err);
            res.status(400).send({message: "Error on dropping users table" + err});
            return;
        }
        console.log("users table dropped");
        res.send("Users table dropped");
    })
}

//TRAININGS
const CreateTrainingsTable = (req, res) => {
    const Q = 'CREATE TABLE IF NOT EXISTS Trainings (id int primary key, trainer varchar(70), date_time date, training_type int)';
    SQL.query(Q, (err) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "Error in creating TRAININGS table"});
            return;
        }
        console.log('created TRAININGS table');
        res.send("TRAININGS table created successfully!");
    })
}

const InsertTrainings = (req, res) => {
    const Q = "INSERT INTO Trainings SET ?";
    const csvFIlePath = path.join(__dirname, 'trainings.csv');
    csv().fromFile(csvFIlePath).then((jsonObj) => {
        jsonObj.forEach(element => {
            SQL.query(Q, element, (err) => {
                if (err) {
                    console.log("error in inserting TRAINING data", err);
                    return
                }
                console.log("inserting TRAINING row successfully");
            });
        })
        res.send('TRAININGS data inserted!');
    })
}

const ShowTrainingsTable = (req, res) => {
    const Q = "SELECT * FROM Trainings";
    SQL.query(Q, (err, mySQLres) => {
        if (err) {
            console.log("error in showing TRAININGS table ", err);
            res.status(400).send({message: "Error in showing TRAININGS table"});
            return;
        }

        console.log("Showing TRAININGS table");
        res.send(mySQLres);
    })
}

const DropTrainingsTable = (req, res) => {
    const Q = "DROP TABLE Trainings IF EXISTS";
    SQL.query(Q, (err) => {
        if (err) {
            console.log("error in dropping TRAININGS table ", err);
            res.status(400).send({message: "Error on dropping TRAININGS table" + err});
            return;
        }
        console.log("TRAININGS table dropped");
        res.send("TRAININGS table dropped");
    })
}

//TRAININGS TYPES
const CreatingTrainings_TypesTable = (req, res) => {
    const Q = 'CREATE TABLE IF NOT EXISTS Trainings_Types (id int, name varchar(50))';
    SQL.query(Q, (err) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "Error in creating TRAININGS_TYPES table"});
            return;
        }
        console.log('created TRAININGS_TYPES table');
        res.send("TRAININGS_TYPES table created!");
    });
}

const InsertTraining_Type = (req, res) => {
    const Q = "INSERT INTO Trainings_Types SET ?";
    const csvFIlePath = path.join(__dirname, 'training_types.csv');
    csv().fromFile(csvFIlePath).then((jsonObj) => {
        jsonObj.forEach(element => {
            SQL.query(Q, element, (err) => {
                if (err) {
                    console.log("error in inserting TRAINING TYPE data", err);
                    return
                }
                console.log("created TRAINING TYPE row successfully");
            });
        })
        res.send('TRAININGS TYPES Data inserted!');
    })
};

const ShowTrainings_TypesTable = (req, res) => {
    const Q = "SELECT * FROM Trainings_Types";
    SQL.query(Q, (err, mySQLres) => {
        if (err) {
            console.log("error in showing TRAININGS TYPES table ", err);
            res.status(400).send({message: "Error in showing TRAININGS TYPES table"});
            return;
        }
        console.log("Showing TRAININGS TYPES table");
        res.send(mySQLres);
    })
};

const DropTrainings_TypesTable = (req, res) => {
    const Q = "DROP TABLE IF EXISTS Trainings_Types";
    SQL.query(Q, (err) => {
        if (err) {
            console.log("error in dropping TRAININGS TYPES table ", err);
            res.status(400).send({message: "Error on dropping TRAININGS TYPES table" + err});
            return;
        }
        console.log("TRAININGS TYPES table dropped");
        res.send("TRAININGS TYPES table dropped");
    })
}

//TRAINEES
const CreateTraineesTable = (req, res) => {
    const Q = 'CREATE TABLE IF NOT EXISTS Trainees (id int primary key, email varchar(50), name varchar(50), phone varchar(50), birth_date date, join_date date)';
    SQL.query(Q, (err) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "Error in creating TRAINEES table"});
            return;
        }
        console.log('created TRAINEES table');
        res.send("TRAINEES table created!");
    })
}


const InsertTrainees = (req, res) => {
    const Q = "INSERT INTO Trainees SET ?";
    const csvFIlePath = path.join(__dirname, 'trainees.csv');
    csv().fromFile(csvFIlePath).then((jsonObj) => {
        jsonObj.forEach(element => {
            const trainee = {
                "id": element.id,
                "email": element.email,
                "name": element.name,
                "phone": element.phone,
                "birth_date": new Date(element.birth_date),
                "join_date": new Date(element.join_date)
            }
            SQL.query(Q, trainee, (err) => {
                if (err) {
                    console.log("error in inserting TRAINEE data", err);
                    return
                }
                console.log("created TRAINEE row successfully");
            });
        })
        res.send('TRAINEE data inserted successfully!');
    })
}

const ShowTraineesTable = (req, res) => {
    const Q = "SELECT * FROM Trainees";
    SQL.query(Q, (err, mySQLres) => {
        if (err) {
            console.log("error in showing TRAINEES table ", err);
            res.status(400).send({message: "Error in showing TRAINEES table"});
            return;
        }
        console.log("Showing TRAINEES table");
        res.send(mySQLres);
    })
}

const DropTraineesTable = (req, res) => {
    const Q = "DROP TABLE IF EXIST Trainees";
    SQL.query(Q, (err)=>{
        if (err) {
            console.log("error in dropping TRAINEES table ", err);
            res.status(400).send({message: "Error on dropping TRAINEES table" + err});
            return;
        }
        console.log("TRAINEES table dropped");
        res.send("TRAINEES table dropped");
    })
}

// ALL TABLES
const DropAllTables = (req, res) => {
    const Q = 'DROP TABLE IF EXIST Trainees, Trainings_Types, Trainings, Trainers';
    SQL.query(Q, (err, sqlTrainers) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "Error in dropping ALL tables!"});
            return;
        }
        console.log('dropped ALL tables');
        res.send("ALL tables dropped!");
    })
}

module.exports = {CreateTrainersTable, InsertTrainers, ShowTrainersTable, DropTrainersTable,
    CreateTrainingsTable, InsertTrainings, ShowTrainingsTable, DropTrainingsTable,
    CreatingTrainings_TypesTable,InsertTraining_Type, ShowTrainings_TypesTable, DropTrainings_TypesTable,
    CreateTraineesTable, InsertTrainees, ShowTraineesTable, DropTraineesTable, DropAllTables};