const express = require('express')
const router = express.Router();
const pool  = require('../utils/database')

router.get('/',(req,res)=>{
    pool.query('SELECT * FROM forgalom', (error, results) =>{
        if (error) throw res.status(500).json({errno:error.errno});
        res.status(200).json(results)
    });
})

// Select one trafic by id
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    pool.query(`SELECT * FROM forgalom WHERE id=?`, [id],(error, results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    });
})

// Post new trafic
router.post('',(req,res)=>{
    const { Termek, Vevo, KategoriaId, Egyseg, Nettoar, Mennyiseg, Kiadva} = req.body;
    pool.query(`INSERT INTO forgalom (termek,vevo,kategoriaId,egyseg,nettoar,mennyiseg,kiadva) VALUES (?,?,?,?,?,?,?)`, [Termek,Vevo,KategoriaId,Egyseg,Nettoar,Mennyiseg,Kiadva],(error,results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    })
})

// Update trafic
router.patch('/:id',(req,res)=>{
    let id = req.params.id
    const { Termek }  = req.body;
    pool.query(`UPDATE forgalom SET termek = ? WHERE id=?`, [Termek, id], (error,results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    })

})

// Delete trafic
router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    pool.query(`DELETE FROM forgalom WHERE id=?`, [id],(error, results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    });
    
})

module.exports = router;