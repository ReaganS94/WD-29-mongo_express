const Student = require('../schemas/Student')

const createStudent = async (req, res) => {
    try {

        const { name, firstName, email } = req.body;
        const student = await Student.create({
            name,
            firstName,
            email
        });

        res.status(200).json({
            msg: "User has been created!",
            success: true,
            data: student
        })

    } catch(err) {
        res.status(500).json({
            success: false,
            data: err
        })
    }
}

const getAllStudents =async (req, res) => {
    try {
        const students = await Student.find()
        if(!students.length) {
            res.json({
                msg: "No students found"
            })
        } else {
            res.status(200).json({
                students
            })
        }
    } catch(err) {
        res.status(500).json({
            success: false,
            data: err
        })
    }
}

const updateOneStudent = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, firstName, email } = req.body;

        const student = await Student.findOneAndUpdate(
            _id, 
            {
                name, firstName, email
            },
            { new: true }
        )

        res.status(200).json({
            msg: "User has been updated!",
            success: true,
            data: student
        })
        
    } catch(err) {
        res.status(500).json({
            success: false,
            data: err
        })
    }
}

const getOneStudent = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const student = await Student.findById(id)

    try {

        res.status(200).json({
            success: true,
            data: student
        })
        
    } catch(err) {

        res.status(500).json({
            success: false,
            data: err
        })

    }
    
}

module.exports = {
    createStudent,
    getAllStudents,
    updateOneStudent,
    getOneStudent
}