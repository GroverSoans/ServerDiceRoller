const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=> {
    res.send('Hello, World!');
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