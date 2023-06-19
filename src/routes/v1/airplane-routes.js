const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const router = express.Router();


//  /api/v1/airplanes

// router.post('/', AirplaneController.CreateAirplane);

//include the middlewares as well in order to check whether the request is valid or not
router.post('/', AirplaneMiddleware.validateCreateRequest , AirplaneController.CreateAirplane);




module.exports = router;
