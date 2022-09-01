const express = require('express');

const { getAllStudents, createStudent, updateOneStudent, getOneStudent } = require('../controllers/student');

const api = express.Router();

api.route("/").get(getAllStudents).post(createStudent);
api.route("/:id").put(updateOneStudent).get(getOneStudent)

module.exports = api;


