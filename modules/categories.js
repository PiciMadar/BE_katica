const express = require('express')
const router = express.Router();
const pool  = require('../utils/database')

// Select all categories
router.get('/',(req,res)=>{
    pool.query('SELECT * FROM kategoria', (error, results) =>{
        if (error) throw res.status(500).json({error:error.message});
        res.status(200).json(results)
    });
})
// Select one category by id
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    pool.query(`SELECT * FROM kategoria WHERE id=?`, [id],(error, results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    });
})
// Post new category
router.post('',(req,res)=>{
    const { Nev }  = req.body;
    pool.query(`INSERT INTO kategoria (kategoriaNev) VALUES (?)`, [Nev],(error,results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    })
})

// Update category
router.patch('/:id',(req,res)=>{
    let id = req.params.id
    const { Nev }  = req.body;
    pool.query(`UPDATE kategoria SET kategoriaNev = ? WHERE id=?`, [Nev, id], (error,results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    })

})

// Delete category
router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    pool.query(`DELETE FROM kategoria WHERE id=?`, [id],(error, results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    });
    
})

module.exports = router;