const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://delightful-ocean-0e31ab010.5.azurestaticapps.net'  // Replace with your static web app's URL
}));


// Serve index.html on the root route
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/api/rollDice', (req, res) => {
    const result = Math.floor(Math.random() * 6) + 1;
    res.json({ diceValue: result });
});

app.get('/api/ping', (req, res) => {
    res.send('Ping successful, server is running!');
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});