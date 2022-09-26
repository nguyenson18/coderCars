const mongoose = require('mongoose');
const Car = require('../models/Car');
const carController = {};

carController.createCar = async (req, res, next) => {
	
	try {
		// YOUR CODE HERE
		
	} catch (err) {
		// YOUR CODE HERE
		next(err)
	}
};

carController.getCars = async (req, res, next) => {
	try {
		// YOUR CODE HERE
		// const listOfFound= await Car.find(carController)
        // console.log(listOfFound)
	} catch (err) {
		// YOUR CODE HERE
	}
};

carController.editCar = async (req, res, next) => {
	try {
		// YOUR CODE HERE
	} catch (err) {
		// YOUR CODE HERE
	}
};

carController.deleteCar = async (req, res, next) => {
	try {
		// YOUR CODE HERE
	} catch (err) {
		// YOUR CODE HERE
	}
};

module.exports = carController;
