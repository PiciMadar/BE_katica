const express = require('express')
const router = express.Router();
const pool  = require('../utils/database')

//Get all users
router.get('/',(req,res) =>{

    pool.query('SELECT(SELECT COUNT(DISTINCT termek) FROM forgalom) AS termekCount, (SELECT COUNT(DISTINCT vevo) FROM forgalom)  AS vevoCount, (SELECT SUM(mennyiseg) FROM forgalom) AS saleSum,(SELECT SUM(mennyiseg * nettoar) FROM forgalom) AS priceSUM', (error, results) =>{
        if (error) throw res.status(500).json({error:error.message});
        res.status(200).json(results)
    })
    
    pool.query('SELECT DISTINCT termek FROM `forgalom`;', (error, results) =>{
        if (error) throw res.status(500).json({error:error.message});
        res.status(200).json(results)
    })
})



/*
"userCount:"


*/
module.exports = router;