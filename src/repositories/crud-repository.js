const { Logger } = require('../config');

//CRUD stands for create, read, update, delete something from table of database

//anything related to query will be in this only

class CrudRepository {
    
    constructor(model) {
        this.model = model;
    }

    //if we want to insert something in the table , all this thing is also available in the sequelise documentation of model(table) query
    async create(data) {
        console.log(data);
        try{
            const response = await this.model.create(data);
            return response;
        } catch(error) {
            Logger.error('Something went wrong in crud repo in create function');
            throw error;
        }
    }

}

module.exports = CrudRepository;