let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://marcowiens:pedrito%40@cluster0.xdzzvsy.mongodb.net/')
.then((db) => {
    console.log("Database connected on " + db.connection.host);
}).catch((err) => {
    console.log(err);
});
