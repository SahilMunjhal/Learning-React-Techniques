const express = require ('express');
const ip = require('ip');
const app = express();
const logger = require('./src/util/logger');
const {HttpStatus} = require('./src/controller/department_information.controller');
const departmentRoutes = require('./src/routes/department.route');

app.use(express.json());
app.use('/departments',departmentRoutes);

const PORT = 3308;

app.listen(PORT,()=>{
    logger.info(`Server Running on : ${ip.address()} : Port : ${PORT}`);
});