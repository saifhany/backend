const studentModel = require('./../model/student.model')
const { find } = require('./../model/student.model')


exports.getstudentWithFilters = async (filter) => {
    const studentList = await studentModel.find(filter)
    return studentList
}

exports.createNewstudent = (studentData) => {

}
