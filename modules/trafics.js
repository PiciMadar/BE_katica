const express = require('express')
const router = express.Router();
const { query }  = require('../utils/database')

router.get('/',(req,res)=>{
    query('SELECT * FROM forgalom',[], (error, results) =>{
        if (error) throw res.status(500).json({errno:error.errno});
        res.status(200).json(results)
    }, req);
})

// Select one trafic by id
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    query(`SELECT * FROM forgalom WHERE id=?`, [id],(error, results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    }, req);
})

// Post new trafic
router.post('',(req,res)=>{
    console.log(req.body)
    const { termek, vevo, kategoriaId, egyseg, nettoar, mennyiseg, kiadva} = req.body;
    query(`INSERT INTO forgalom (termek,vevo,kategoriaId,egyseg,nettoar,mennyiseg,kiadva) VALUES (?,?,?,?,?,?,?)`, [termek,vevo,kategoriaId,egyseg,nettoar,mennyiseg,kiadva],(error,results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    }, req)
})

// Update trafic
router.patch('/:id',(req,res)=>{
    let id = req.params.id
    const { Termek }  = req.body;
    query(`UPDATE forgalom SET termek = ? WHERE id=?`, [Termek, id], (error,results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    }, req)

})

// Delete trafic
router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    query(`DELETE FROM forgalom WHERE id=?`, [id],(error, results) =>{
        if (error) return res.status(500).json({error:error.message});
        res.status(200).json(results)
    }, req);
    
})

module.exports = router;