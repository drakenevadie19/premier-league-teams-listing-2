import express from 'express';
const app = express();

import teamsRouter from './routes/teams.js';


app.use('/public', express.static('./public'));

app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Premier League Teams</h1>')
});

app.use('/teams', teamsRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
console.log(`🚀 Server listening on http://localhost:${PORT}`)
})