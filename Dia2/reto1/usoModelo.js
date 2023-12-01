let mongoose = require("mongoose");
let photosSchema = require("./esquema");

mongoose.connect('mongodb+srv://marcowiens:pedrito%40@cluster0.xdzzvsy.mongodb.net/');


let photo = new photosSchema.photoSchema({
    nombreUsuario: "Marco",
    url: "https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-2_d7d2206b_221212153725_310x310.jpg",
    titulo: "Aguila",
    descripcion: "Es un ave rapaz"
});

photo.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});



photosSchema.photoSchema.find({nombreUsuario: "Marco"})
.then((items) => {
    console.log(items);
    
}).catch((err) =>{
    console.log(err);
    mongoose.disconnect();
});


photosSchema.photoSchema.updateOne({titulo: "Aguila"}, {descripcion: "Aguila de artilleria"})
.then((data) => {
    console.log("Foto Modificada");
    console.log(data);
}).catch((err) =>{
    console.log(err);
    mongoose.disconnect();
});


photosSchema.photoSchema.deleteOne({nombreUsuario: "Marco", titulo: "Aguila"})
.then((data) => {
    console.log("Foto Eliminada");
    console.log(data);
}).catch((err) => {
    console.log(err);
    mongoose.disconnect();
});


photosSchema.photoSchema.deleteMany({nombreUsuario: "Marco"})
.then((data) => {
    console.log("Todas las fotos han sido eliminadas");
    console.log(data);
}).catch((err) => {
    console.log(err);
});
