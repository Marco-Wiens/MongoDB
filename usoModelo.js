let mongoose = require("mongoose");
let schemas = require("./esquema");

mongoose.connect('mongodb+srv://marcowiens:pedrito%40@cluster0.xdzzvsy.mongodb.net/');


let user = new schemas.userSchema({
    login: "Marco",
    password: "Wiens"
});

const profile = new schemas.profileSchema({
    name: "Pedro",
    surname: "Gutierrez",
    dateOfBirth: "1975/03/11",
    comments: "Soy muy majo",
    rol: "Admin"
});

let credentials = new schemas.credentialsSchema({
    address: "Calle Azurita, 23",
    phone: 698745231,
    email: "pedrito@gmail.com"
});

user.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});

profile.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});

credentials.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});




