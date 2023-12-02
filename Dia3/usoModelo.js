let mongoose = require("mongoose");
let {teachers, marks} = require("./esquema");

mongoose.connect('mongodb+srv://marcowiens:pedrito%40@cluster0.xdzzvsy.mongodb.net/');


const mark1 = new marks(
    {
        date: new Date("2023-01-01"),
        mark: 8,
        student_first_name: 'Juan',
        student_last_name: 'Pérez',
        group_name: 'A',
        subject_name: 'Math',
        teachers: [
          {
            teacher_first_name: 'Maria',
            teacher_last_name: 'Gomez'
          },
          {
            teacher_first_name: 'Carlos',
            teacher_last_name: 'Martínez'
          }
        ]
      }
);


let mark2 = new marks(
    {
        date: new Date("2020-10-15"),
        mark: 2,
        student_first_name: 'Ana',
        student_last_name: 'Rodríguez',
        group_name: 'B',
        subject_name: 'English',
        teachers: [
          {
            teacher_first_name: 'Daniel',
            teacher_last_name: 'Lopez'
          },
          {
            teacher_first_name: 'Elena',
            teacher_last_name: 'Sánchez'
          }
        ]
      }
);

let mark3 = new marks(
    {
        date: new Date("2022-03-11"),
        mark: 7,
        student_first_name: 'Pablo',
        student_last_name: 'González',
        group_name: 'A',
        subject_name: 'English',
        teachers: [
          {
            teacher_first_name: 'Laura',
            teacher_last_name: 'Fernández'
          },
          {
            teacher_first_name: 'Juan',
            teacher_last_name: 'Hernández'
          }
        ]
      }
      
);

let mark4 = new marks(
    {
        date: new Date("2021-09-26"),
        mark: 9,
        student_first_name: 'Elena',
        student_last_name: 'Martínez',
        group_name: 'C',
        subject_name: 'Science',
        teachers: [
          {
            teacher_first_name: 'Carlos',
            teacher_last_name: 'González'
          },
          {
            teacher_first_name: 'Ana',
            teacher_last_name: 'Ramírez'
          }
        ]
      }
);

let mark5 = new marks(
    {
        date: new Date("2022-01-29"),
        mark: 8,
        student_first_name: 'Luis',
        student_last_name: 'Fernández',
        group_name: 'B',
        subject_name: 'Spanish',
        teachers: [
          {
            teacher_first_name: 'Elena',
            teacher_last_name: 'García'
          },
          {
            teacher_first_name: 'Pedro',
            teacher_last_name: 'Sánchez'
          }
        ]
      }
);

let mark6 = new marks(
    {
        date: new Date("2023-06-12"),
        mark: 7,
        student_first_name: 'Isabel',
        student_last_name: 'Hernández',
        group_name: 'A',
        subject_name: 'Art',
        teachers: [
          {
            teacher_first_name: 'Javier',
            teacher_last_name: 'Fernández'
          },
          {
            teacher_first_name: 'Sara',
            teacher_last_name: 'Gómez'
          }
        ]
      }
      
);

let mark7 = new marks(
    {
        date: new Date("2020-10-08"),
        mark: 9,
        student_first_name: 'Miguel',
        student_last_name: 'López',
        group_name: 'C',
        subject_name: 'Physical Education',
        teachers: [
          {
            teacher_first_name: 'David',
            teacher_last_name: 'Martínez'
          },
          {
            teacher_first_name: 'Laura',
            teacher_last_name: 'Fernández'
          }
        ]
      }
);

let mark8 = new marks(
    {
        date: new Date("2019-02-10"),
        mark: 4,
        student_first_name: 'Sofía',
        student_last_name: 'Ramírez',
        group_name: 'B',
        subject_name: 'English',
        teachers: [
          {
            teacher_first_name: 'Alberto',
            teacher_last_name: 'Sánchez'
          },
          {
            teacher_first_name: 'Carmen',
            teacher_last_name: 'Gómez'
          }
        ]
      }
);

let mark9 = new marks(
    {
        date: new Date("2023-06-12"),
        mark: 2,
        student_first_name: 'Ricardo',
        student_last_name: 'Gómez',
        group_name: 'A',
        subject_name: 'Geography',
        teachers: [
          {
            teacher_first_name: 'Luis',
            teacher_last_name: 'Martínez'
          },
          {
            teacher_first_name: 'María',
            teacher_last_name: 'González'
          }
        ]
      }
);

let mark10 = new marks(
    {
        date: new Date("2023-05-14"),
        mark: 9,
        student_first_name: 'Carmen',
        student_last_name: 'Gutiérrez',
        group_name: 'C',
        subject_name: 'Computer Science',
        teachers: [
          {
            teacher_first_name: 'Jorge',
            teacher_last_name: 'Ramírez'
          },
          {
            teacher_first_name: 'Eva',
            teacher_last_name: 'García'
          }
        ]
      }
);

// marks.insertMany([mark1, mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9, mark10])
// .then(() => {
//     console.log("Notas insertadas");
//     mongoose.disconnect();
// }).catch((err) => {
//     console.log(err);
// });


marks.aggregate([{
  $group:{
    _id: "$subject_name",
    avgMark: { $avg: "$mark"},
  }
}])
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

marks.aggregate([{$count: "Total de Alumnos"}])
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


marks.aggregate([{$project: {_id: 0, student_first_name: 1, student_last_name: 1}}])
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


marks.aggregate([{$project: {_id: 0, teachers: 1}}])
.then((data) => {
  for(let nom of data){
      console.log(nom.teachers);
  }
}).catch((err) => {
    console.log(err);
});


marks.aggregate([{
        $group: {_id: "$group_name", "Numero alumnos": {$sum: 1}}
    },
    {
        $sort: {_id: -1}
    }
]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


marks.aggregate([{
        $group: {_id:  "$subject_name", "Media": {$avg: "$mark"}}
    },
    {
        $match: {"Media": {$gt: 5}}
    },
    {
        $limit: 5
    }
]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});



marks.aggregate([
  {$unwind: "$teachers"},
      {
          $project: {_id: "$subject_name", "Profesor": "$teachers.teacher_first_name"}
      },
      {
          $group: {_id:  "$_id", "Total Profesores": {$sum: 1}}
      }
]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


marks.aggregate([{
      $match: {$or: [{mark: {$gt: 8}}, {$and: [ {date: {$gt: new Date("2020-12-31")}},{date: {$lt: new Date("2022-12-31")}} ]}]}
},
{
    $project: {_id: {$concat: ["$student_first_name", " ", "$student_last_name"]}, mark: "$mark", date: "$date"}
}])
.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});


marks.aggregate([{
    $match: {date: {$gt: new Date("2022-12-31")}}
},
{
    $group: {_id: "$subject_name", "Media": {$avg: "$mark"}}
}
]).then((data) => {
    console.log(data);
}).catch((err) => {
  console.log(err);
});

marks.aggregate([{
  $match: {date: {$gt: new Date("2022-12-31")}}
},
{
  $group: {_id: "$student_first_name", "Media": {$avg: "$mark"}}
}
]).then((data) => {
  console.log(data);
}).catch((err) => {
console.log(err);
});



marks.aggregate([{
    $unwind: "$teachers"
},
{
    $match: {$and: [{"teachers.teacher_first_name": "Maria"}, {"teachers.teacher_last_name": "Gomez"}]}
},
{
    $group: {_id: "$student_first_name", "Subjects": {$sum: 1}}
}
]).then((data) => {
    console.log("Alumnos y cantidad total de asignaturas");
    console.log(data);
}).catch((err) => {
  console.log(err);
});
