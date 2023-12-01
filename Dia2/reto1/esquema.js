const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    nombreUsuario: String,
    url: String,
    titulo: String,
    descripcion: String
});

let photoSchema = mongoose.model("Photos", PhotosSchema, 'photos');

module.exports = {photoSchema};