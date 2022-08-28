const express = require('express');
const {getDepartMentInformations,PostDepartment_Information,getDepartMentInformation,updateDepartMentInformation
    ,deleteDepartMentInformation} = require('../controller/department_information.controller');

const departmentRoutes = express.Router();

departmentRoutes.route('/') 
 .get(getDepartMentInformations)
 .post(PostDepartment_Information);

 departmentRoutes.route('/:id') 
 .get(getDepartMentInformation)
 .put(updateDepartMentInformation)
 .delete(deleteDepartMentInformation);

 module.exports = departmentRoutes;
