const profRouter = require('express').Router();
const profController = require('./../controller/prof.controller')
getprofWithFilters = (req, res)=> {
    /* 
    :- PARAMS
    name,
    profID,
    GPA,
    limit 10 as default
    skip 0 as default
    */
   profController.getprofWithFilters();
   //TODO :- logger , interface   
    res.send('getprofWithFilters')
}

createNewprof = (req,res) => {
    profController.createNewprof();
    //TODO :- logger , interface   
    res.send('createNewprof')
}


profRouter.get('/get-prof-with-filters',getprofWithFilters);
profRouter.post('/create-new-prof',createNewprof);

//export prof router
module.exports = profRouter;