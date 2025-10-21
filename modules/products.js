const express = require('express')
const router = express.Router();
const {query}  = require('../utils/database')

// GET all products
router.get('/', (req,res) => {
    query('SELECT * FROM termek',[], (error, results) => {
          if (error) return res.status(500).json({error: error.message})
          res.status(200).json(results)
          }, req);
      })
  // GET one product by id
  router.get('/:id', (req,res) =>{
      let id = req.params.id
      query(`SELECT * FROM termek WHERE termekID = ?`,[id], (error, results) => {
        if (error) return res.status(500).json({error: error.message})
        res.status(200).json(results)
      }, req);
  })
  // DELETE product by id
  router.delete('/:id', (req,res) =>{
      let id = req.params.id
      query(`DELETE FROM termek WHERE termekID = ?`,[id], (error, results) => {
        if (error) return res.status(500).json({error: error.message})
        res.status(200).json(results)
      }, req);
  })
  // UPDATE product by id
  router.patch('/:id', (req,res) =>{
      let id = req.params.id
      let {termek,katergoriaNev,egyseg,nettoAr} = req.body
      query(
        `UPDATE termek SET termek = ?, katergoriaNev = ?, egyseg = ?, nettoAr = ? WHERE termekID = ?`,
        [termek,katergoriaNev,egyseg,nettoAr,id],
        (error,results) => {
          if (error) return res.status(500).json({error: error.message})
          res.status(200).json(results)
        },req);
  })
  // POST new product
  router.post('/', (req,res) =>{
      let {termek,katergoriaNev,egyseg,nettoAr} = req.body
      query(`INSERT INTO termek (termek,katergoriaNev,egyseg,nettoAr) VALUES (?,?,?,?)`,[termek,katergoriaNev,egyseg,nettoAr], (error,results) => {
        if (error) return res.status(500).json({error: error.message})
        res.status(200).json(results)
      }, req);
  })
   

module.exports = router;