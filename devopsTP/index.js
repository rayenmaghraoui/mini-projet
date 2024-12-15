const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(' API statique avec Express.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${PORT}`);
});
