const photos = require("../model/photo");

const getPhotos = (request, response) => {
    try{
        photos.photoSchema.find({nombreUsuario: request.query.nombreUsuario})
        .then((data) => {
            let respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Las fotos de " + request.query.nombreUsuario,
                data: data
            };

            response.send(respuesta);
            console.log(data);

        }).catch((err) => {
            console.log(err);
        });

    }catch(err){
        console.log(err);
    }
}

const postPhoto = (request, response) => {
    try{
        let photo = new photos.photoSchema({
            nombreUsuario: request.body.nombreUsuario,
            url: request.body.url,
            titulo: request.body.titulo,
            descripcion: request.body.descripcion
        });

        photo.save()
        .then((data) => {
            let respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Foto Guardada",
                data: data
            };

            response.send(respuesta);
            console.log(data);

        }).catch((err) => {
            console.log(err);
            res.send(err);
        });

    }catch(err){
        console.log(err);
    }
}

const putPhoto = (request, response) => {
    try{
        photos.photoSchema.updateOne({titulo: request.query.titulo, descripcion: request.query.descripcion}, {descripcion: request.body.descripcion})
        .then((data) => {
            let respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Foto Modificada",
                data: data
            }
            response.send(respuesta);
            console.log(data);
        }).catch((err) => {
            response.send(err);
            console.log(err);
        });
    }catch(err){
        console.log(err);
    }
}

const deletePhoto = (request, response) => {
    try{
        if(!request.query.titulo){

            photos.photoSchema.deleteMany({nombreUsuario: request.query.nombreUsuario})
            .then((data) => {
                let respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: "Todas las fotos del usuario " + request.query.nombreUsuario + " eliminadas",
                    data: data
                }
                response.send(respuesta);
                console.log(data);
            }).catch((err) => {
                response.send(data);
                console.log(err);
            })
        }else{
            photos.photoSchema.deleteOne({nombreUsuario: request.query.nombreUsuario, titulo: request.body.titulo})
            .then((data) => {
                let respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: "Imagen eliminada",
                    data: data
                };

                response.send(respuesta);
                console.log(data);
            }).catch((err) => {
                response.send(err);
                console.log(err);
            });
        }
    }catch(err){
        console.log(err);
    }
}



module.exports = {getPhotos, postPhoto, putPhoto, deletePhoto};
