const student = {
    name:'',
    studentID:'',
    totalGPA:'',
    limit:10,
    skip:0
}
Student = (req) => {

    //required
    student.name = req.body.name || '' ;
    student.studentID = req.body.studentID || '';
    student.totalGPA = req.body.totalGPA || '';
    return student

}

module.exports = Student