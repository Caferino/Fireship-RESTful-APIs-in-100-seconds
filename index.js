const express = require('express');
const app = express();
const HOST = '127.0.0.1'   // https://www.youtube.com/watch?v=Pfy4Q-uDV6I
const PORT = 8080;

// Middleware
app.use( express.json() )

app.listen(
    PORT,
    HOST,
    () => console.log(`It's alive on http://${HOST}:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }
    
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});