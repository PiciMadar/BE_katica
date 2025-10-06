const express = require('express')
var cors = require('cors')





const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const categories = require('./modules/categories')
const trafics = require('./modules/trafics')
const statistics = require('./modules/statistics')

/*app.get('/', (_req, res) => {
    res.send('Backend API by Bajai SZC Türr István Technikum - 13.A Szoftverfejlesztő')
})

app.get('/kategories', (req,res) =>{
  pool.query('SELECT * FROM kategoria', (error, results) =>{
    if (error) throw error;
    res.send(results)
  });
})

app.get('/trafic',(req,res) =>{
    pool.query('SELECT * FROM forgalom', (error,results) =>{
        if (error) throw error;
        res.send(results)
    })
})
*/
app.use('/categories',categories)
app.use('/trafics',trafics)
app.use('/statistics', statistics)



app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
});