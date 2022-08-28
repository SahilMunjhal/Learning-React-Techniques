const database = require('../config/mysql.config');
const Response = require('../domain/response');
const logger = require('../util/logger');
const QUERY = require('../query/department_information.query');

const HttpStatus = {
    OK  :        {code:200 , status: 'OK'},
    CREATED :    {code:201 , status: 'CREATED'},
    NO_CONTENT : {code:204 , status: 'NO-CONTENT'},
    BAD_REQUEST: {code:200 , status: 'BAD_REQUEST'},
    NOT_FOUND:   {code:404 , status: 'NOT_FOUND'},
    INTERNAL_SERVER_ERROR:   {code:500 , status: 'INTERNAL_SERVER_ERROR'},
};

const getDepartMentInformations = (req,res)=> {
   logger.info(`${req.method} ${req.originalUrl}, fetching DepartMent Information`);
   database.query(QUERY.SELECT_Department_Informations, (error,results)=>{
    console.log(results);
      if(!results){
         res.status(HttpStatus.NO_CONTENT.code)
         .send(new Response(HttpStatus.NO_CONTENT.code,HttpStatus.NO_CONTENT.status,'No-DepartMent Information found'));
      }else{
         res.status(HttpStatus.OK.code)
         .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status,'Department_Information Reterived Sucessfully',{Department_Information:results}));
      }
   });
};

const PostDepartment_Information = (req,res)=>{
   logger.info(`${req.method} ${req.originalUrl}, Creating DepartMent Information`);
   database.query(QUERY.CREATE_Department_Information,Object.values(req.body),(error,results)=>{
       if(!results){
         logger.error(error.message);
         res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
         .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code,HttpStatus.INTERNAL_SERVER_ERROR.status,'INTERNAL_SERVER_ERROR'));
       }else{
           const DepartMent_Infomation = { id : results.id,...req.body,created_at:new Date()};
           res.status(HttpStatus.CREATED.code)
           .send(new Response(HttpStatus.CREATED.code,HttpStatus.CREATED.status,'DepartMent_Infomation',{DepartMent_Infomation}));
       }
   })
}

const getDepartMentInformation = (req,res)=> {
    logger.info(`${req.method} ${req.originalUrl}, fetching DepartMent Information`);
    database.query(QUERY.SELECT_Department_Information,[req.params.id], (error,results)=>{
        console.log(results);
       if(!results){
          res.status(HttpStatus.NOT_FOUND.code)
          .send(new Response(HttpStatus.NOT_FOUND.code,HttpStatus.NOT_FOUND.status,'No-DepartMent Information found'));
       }else{
          res.status(HttpStatus.OK.code)
          .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status,'Department_Information Reterived Sucessfully',{Department_Information:results}));
       }
    });
 };

 const updateDepartMentInformation = (req,res)=> {
    logger.info(`${req.method} ${req.originalUrl}, Fetching DepartMent Information`);
    database.query(QUERY.SELECT_Department_Information,[req.params.id], (error,results)=>{
       if(!results[0]){
          res.status(HttpStatus.NOT_FOUND.code)
          .send(new Response(HttpStatus.NOT_FOUND.code,HttpStatus.NOT_FOUND.status,'No-DepartMent Information found'));
       }else{
        logger.info(`${req.method} ${req.originalUrl}, Updating DepartMent Information`);
        database.query(QUERY.UPDATE_Department_Information,[...Object.values(req.body),req.params.id], (error,results)=>{
            console.log(error,req.body);
            if(!error){
                res.status(HttpStatus.OK.code)
                  .send(new Response(HttpStatus.OK.code,HttpStatus.OK.status,`DepartMent_Information Updated`,{id:req.params.id}));
            }else{
                logger.info(error.message);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                  .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code,HttpStatus.INTERNAL_SERVER_ERROR.status,`Error Ocurred`))
            }
         });
        }
    });
 };

 const deleteDepartMentInformation = (req,res)=> {
    logger.info(`${req.method} ${req.originalUrl}, deleting DepartMent Information`);
    database.query(QUERY.DELETE_Department_Information,[req.params.id], (error,results)=>{
       if(results.affectedRows > 0){
          res.status(HttpStatus.OK.code)
          .send(new Response(HttpStatus.OK.code,HttpStatus.OK.status,'Patient Deleted',results[0]));
       }else{
          res.status(HttpStatus.NOT_FOUND.code)
          .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status,'Department_Information Not Found'));
       }
    });
 };


module.exports = {HttpStatus,getDepartMentInformations,PostDepartment_Information,getDepartMentInformation,updateDepartMentInformation
    ,deleteDepartMentInformation};