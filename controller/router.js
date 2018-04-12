const express = require('express');
const file = require("../models/file");
const router = express.Router();

router.get('/favicon.ico',(req,res,next)=>{
    res.send('no favicon');
});

router.get('/', (req, res, next) => {
    file.getAllAlbums((allAlbum) => {
        res.render("index", {
            "albums": allAlbum
        });
    });
});

router.get('/:albumName', (req, res, next) => {
    var albumName = req.params.albumName;   
     file.getCurrentAlbum(albumName,(err,images)=>{
         if(err){
             res.send(err);
         }
         res.render("album.ejs",{
             "albumName":albumName,
             "images": images
         });
     });
});

module.exports = router;