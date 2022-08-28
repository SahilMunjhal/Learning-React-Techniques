const QUERY = {
    SELECT_Department_Informations : 'SELECT * FROM department_information',
    SELECT_Department_Information : 'SELECT * FROM  department_information WHERE DepartMent_ID = ?',
    CREATE_Department_Information : 'INSERT INTO department_information(DepartMent_ID,DepartMent_Name,DepartMent_Zone) VALUES(?,?,?)',
    UPDATE_Department_Information : 'UPDATE department_information SET DepartMent_ID = ?, DepartMent_Name = ?, DepartMent_Zone = ? WHERE DepartMent_ID = ?',
    DELETE_Department_Information : 'DELETE FROM department_information WHERE DepartMent_ID = ?'
};

module.exports = QUERY ;