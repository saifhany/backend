const studentRouter = require('express').Router();
const statusCode = require('./../enums/status-code.enum')
const studentController = require('./../controller/student.controller')
const student = require('./../interface/requests.interfaces/student.interface/get-student.interface')
const logger = require('./../helper/logger')
getstudentWithFilters = async (req, res)=> {
    /* 
    :- PARAMS
    name,
    profID,
    GPA,
    limit 10 as default
    skip 0 as default
    */
   
    // check if data from body is correct 
    let validStudent = studentInterface(req)
    //send valid studnet data to the controller
   const studentList = await studentController.getstudentWithFilters(studentInterface);
   //TODO :- logger    
    res.send(studentList)
}

createNewstudent = (req,res) => {
    /*
    name
    studentID
    img
    totalGPA
    */
   logger('info',['createNewstudent \n',req.url,'\n',new Date,'\n'])
    studentController.createNewstudent();

    res.send('createNewstudent')
}


studentRouter.post('/get-student-with-filters',getstudentWithFilters);
studentRouter.post('/create-new-student',createNewstudent);

//export prof router
module.exports = studentRouter;