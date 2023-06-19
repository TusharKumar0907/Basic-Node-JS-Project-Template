//services use repositories to interact with database
//here we write business logic

const  { AirplaneRepository } = require('../repositories');

//accessing the constructor of AirplaneRepositry

const airplaneRepository = new AirplaneRepository();

async function CreateAirplane(data) {
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        throw error;
    }
}


module.exports = {
    CreateAirplane
}