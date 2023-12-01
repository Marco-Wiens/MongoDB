const mongoose = require("mongoose");

const teachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
});

const subjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [teachersSchema]
});

const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject : subjectsSchema
});

const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mark: [marksSchema]
});

module.exports = mongoose.model("Students", studentsSchema, "Students");