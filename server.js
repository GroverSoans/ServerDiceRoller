const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: true
}));



app.use(express.static(path.join(__dirname, 'public')));


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