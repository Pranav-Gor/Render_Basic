const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('YO YOUR API IS WORKING');
});



app.get('/location', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});