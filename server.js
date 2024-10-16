//import express
import express from 'express';

//initialize the express app
const app = express();

//set the port
const PORT = 3000;

//set up a basic route
app.get('/', (req,res) => {
    res.send('Welcome to our API!');
});

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
});

//create routes for the API 
//new route users
app.get('/users', (req,res) => {
    const users = [
        {id: 1, name: 'Megumi Ohara'},
        {id: 2, name: 'Anna Banana'}
    ];
    res.json(users);
});

app.get('/greet', (req, res) => {
    res.send('Greetings visitor!');
});
//Middleware to parse JSON data first
app.use(express.json());

//create POST route
app.post('/users', (req,res) => {
    const newUser = req.body;
    console.log(newUser); //Log the data
    res.json({message: 'User added successfully', user: newUser });
});
