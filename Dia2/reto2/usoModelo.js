let mongoose = require("mongoose");
let schemas = require("./esquema");

mongoose.connect('mongodb+srv://marcowiens:pedrito%40@cluster0.xdzzvsy.mongodb.net/');




const student1 = new schemas(
    {
      firstName: "Juan",
      lastName: "Perez",
      mark: [
        {
          date: new Date("2023-01-01"),
          mark: 8,
          subject: {
            title: "Math",
            teachers: [
              { firstName: "Maria", lastName: "Gomez", groups: ["A", "B"] },
              { firstName: "Carlos", lastName: "Rodriguez", groups: ["C", "D"] }
            ]
          }
        },
        {
          date: new Date("2023-02-01"),
          mark: 5,
          subject: {
            title: "Science",
            teachers: [
              { firstName: "Laura", lastName: "Martinez", groups: ["A", "C"] },
              { firstName: "Pedro", lastName: "Gonzalez", groups: ["B", "D"] }
            ]
          }
        }
      ]
});

let student2 = new schemas(
    {
      firstName: "Ana",
      lastName: "Gomez",
      mark: [
        {
          date: new Date("2023-01-15"),
          mark: 9,
          subject: {
            title: "History",
            teachers: [
              { firstName: "Roberto", lastName: "Lopez", groups: ["A", "B"] },
              { firstName: "Sofia", lastName: "Diaz", groups: ["C", "D"] }
            ]
          }
        },
        {
          date: new Date("2023-02-15"),
          mark: 8,
          subject: {
            title: "English",
            teachers: [
              { firstName: "Javier", lastName: "Sanchez", groups: ["A", "C"] },
              { firstName: "Elena", lastName: "Fernandez", groups: ["B", "D"] }
            ]
          }
        }
      ]
});

let student3 = new schemas(
    {
        firstName: "Pedro",
        lastName: "Lopez",
        mark: [
          {
            date: new Date("2020-10-25"),
            mark: 2,
            subject: {
              title: "History",
              teachers: [
                { firstName: "Roberto", lastName: "Lopez", groups: ["A", "B"] },
                { firstName: "Sofia", lastName: "Diaz", groups: ["C", "D"] }
              ]
            }
          },
          {
            date: new Date("2021-01-05"),
            mark: 8,
            subject: {
              title: "English",
              teachers: [
                { firstName: "Javier", lastName: "Sanchez", groups: ["A", "C"] },
                { firstName: "Elena", lastName: "Fernandez", groups: ["B", "D"] }
              ]
            }
          }
        ]
});

const student4 = new schemas(
    {
      firstName: "Luis",
      lastName: "Cadiz",
      mark: [
        {
          date: new Date("2023-01-01"),
          mark: 3,
          subject: {
            title: "Math",
            teachers: [
              { firstName: "Maria", lastName: "Gomez", groups: ["A", "B"] },
              { firstName: "Carlos", lastName: "Rodriguez", groups: ["C", "D"] }
            ]
          }
        },
        {
          date: new Date("2023-02-01"),
          mark: 10,
          subject: {
            title: "Science",
            teachers: [
              { firstName: "Laura", lastName: "Martinez", groups: ["A", "C"] },
              { firstName: "Pedro", lastName: "Gonzalez", groups: ["B", "D"] }
            ]
          }
        }
      ]
});

// schemas.insertMany([student1, student2, student3, student4])
// .then(() => {
//     console.log("Alumnos insertados");
//     mongoose.disconnect();
// }).catch((err) => {
//     console.log(err);
// });


schemas.findOne({firstName: "Luis"})
.then((data) => {
    for(let nota of data.mark){
        console.log(nota.mark);
    }
})
.catch((err) => {
  console.log(err);
  mongoose.disconnect();
});



schemas.findOne({firstName: "Luis"})
.then((data) => {
    for(let nota of data.mark){
        console.log(nota.subject.title);
    }
})
.catch((err) => {
  console.log(err);
  mongoose.disconnect();
});


schemas.findOne({firstName: "Luis"})
.then((data) => {
    for(let nota of data.mark){
      for(let prof of nota.subject.teachers){
        console.log(prof.firstName + " " + prof.lastName);

      }

    }
})
.catch((err) => {
  console.log(err);
  mongoose.disconnect();
});

