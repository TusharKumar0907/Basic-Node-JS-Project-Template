// it connects with service

const { response } = require("express");
const { AirplaneService } = require("../services");
const { StatusCodes } = require('http-status-codes');




//  POST : /airplanes 
//  req-body {modelNumber: 'airbus320', capacity: 200}
 
async function CreateAirplane(req, res) {

try{
    // console.log(req.body);
    const airplane = await AirplaneService.CreateAirplane({
        modelNumber: req.body.modelNumber,
        capacity: req.body.capacity
    });
    return res
    .status(StatusCodes.CREATED)
    .json({
        success:true,
        message: "done done",
        data:airplane
    });
} catch(error) {
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
        success:false,
        message: "not done",
    });
}


}


module.exports = {
    CreateAirplane
}


