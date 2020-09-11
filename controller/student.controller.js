const { request } = require("express");
const studentDao = require("./../dao/student.dao");

/* proprties with same name writen once in object body */
// const profController = {
//     getprofWithFilters,
//     createNewprof
// }
exports.getstudentWithFilters = async (data) => {
  
  const studentList = await studentDao.getstudentWithFilters(data);
  return studentList
};

exports.createNewstudent = (request) => {
  studentDao.createNewstudent();
};
