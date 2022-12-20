const express = require('express');
const app = express();

app.get('/index.html', (req, res) => {
res.send('Hello World!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server running on port ${port}'));