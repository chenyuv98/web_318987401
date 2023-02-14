const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const CreateDB = require('./DB/createDB')
const Queries = require('./DB/crud')

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views/PUG'));
app.set('view engine', 'pug');

app.get('/trainers/create/', CreateDB.CreateTrainersTable)
app.get('/trainers/insert/', CreateDB.InsertTrainers)
app.get('/trainers/show/', CreateDB.ShowTrainersTable)
app.get('/trainers/drop/', CreateDB.DropTrainersTable)

app.get('/training/create/', CreateDB.CreateTrainingsTable)
app.get('/training/insert/', CreateDB.InsertTrainings)
app.get('/training/show/', CreateDB.ShowTrainingsTable)
app.get('/training/drop/', CreateDB.DropTrainingsTable)

app.get('/Training_Type/create/', CreateDB.CreatingTrainings_TypesTable)
app.get('/Training_Type/insert/', CreateDB.InsertTraining_Type)
app.get('/Training_Type/show/', CreateDB.ShowTrainings_TypesTable)
app.get('/Training_Type/drop/', CreateDB.DropTrainings_TypesTable)

app.get('/trainee/create/', CreateDB.CreateTraineesTable)
app.get('/trainee/insert/', CreateDB.InsertTrainees)
app.get('/trainee/show/', CreateDB.ShowTraineesTable)
app.get('/trainee/drop/', CreateDB.DropTraineesTable)

app.get('/tables/dropAll', CreateDB.DropAllTables)

app.get('/home', (req, res) => {
    res.render('homePage', {})
})

app.post('/login', Queries.TrainerLogIn);
app.get('/login', (req, res) => {
    res.render('logIn', {})
})

app.get('/logout', (req, res) => {
    res.clearCookie('logged_user')
    res.redirect('welcome')
})

app.post('/signup', Queries.TrainerSIgnUp)
app.get('/signup', (req, res) => {
    res.render('signUp', {})
})

app.get('/trainees', Queries.GetAllTrainees)
app.post('/trainees/:trainee', Queries.DeleteTrainee)

app.get('/schedule', (req, res) => {
    res.render('schedulePage', {})
})

app.get('/welcome', (req, res) => {
    if (req.cookies.logged_user !== undefined) {
        res.redirect('home')
    } else {
        res.render('firstWindow', {})
    }
})

app.get('/', (req, res) => {
    res.redirect('/welcome');
})

app.listen(port, () => {
    console.log(`The website is running at http://localhost:${port}`)
})
