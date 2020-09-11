const { request } = require("express");
const profDAO = require("./../dao/prof.dao");

/* proprties with same name writen once in object body */
// const profController = {
//     getproftWithFilters,
//     createNewprof
// }
exports.getprofWithFilters = (request) => {
    profDAO.getprofWithFilters();
};

exports.createNewprof = (request) => {
    profDAO.createNewprof();
};
