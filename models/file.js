const fs = require('fs');

const getAllAlbums = (callback) => {
    fs.readdir("./uploads/", (err, files) => {
        var allAlbums = [];
        for (let i = 0; i < files.length; i++) {
            if (fs.statSync("./uploads/" + files[i]).isDirectory())
                allAlbums.push(files[i]);
        }
        callback(allAlbums);
    });
};

const getCurrentAlbum = (albumName, callback) => {
    fs.readdir("./uploads/" + albumName, (err, files) => {
        if(err){
            callback(err,undefined);
        }
        var images = [];
        
        for (let i = 0; i < files.length; i++) {
            if (fs.statSync("./uploads/" + albumName + "/" + files[i]).isFile())
                images.push(files[i]);
        }
        console.log(files);
        callback(undefined,images);
    });
};
module.exports = { getAllAlbums, getCurrentAlbum };