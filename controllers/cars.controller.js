const Car = require("../models/cars.model.js");
exports.create = function (req, res) {
  let carsModel = new Car({
	model: req.body.model,
	make: req.body.make,
	color: req.body.color,
	registration: req.body.regNum,
	owner: req.body.ownerName,
	address: req.body.address,
  });

  // Save new car to collection
  carsModel.save(function (err, data) {
	if (err) {
	  console.log(err);
	  res
		.status(500)
		.send({ message: "Some error occurred while adding the car." });
	} else {
	  console.log(data);
	  res.send({ message: "The car has been added" });
	}
  });
};

// Find all cars in collection
exports.findAll = function (req, res) {
	console.log("Hello")
  Car.find({}, "-_id -__v", function (err, cars) {
	if (err) {
	  console.log(err);
	  res
		.status(500)
		.send({ message: "Some error occurred while retrieving cars." });
	} else {
	  let carArray = [];

	  cars.forEach(function (result) {
		carArray.push(result);
		console.log(carArray);
	  });

	  res.json({ message: carArray });
	}
  });
};

// Find all cars older than 5 years...
exports.findOlder = function (req, res) {
  Car.find({ model: { $lt: 2015 } }, "-_id -__v", function (err, cars) {
	if (err) {
	  console.log(err);
	  res
		.status(500)
		.send({ message: "Some error occurred while retrieving cars." });
	} else {
	  res.json({ message: cars });
	}
  });
};

// Update an existing car document chosen by owner name
exports.updateByOwner = function (req, res) {
  // Name of owner who's car we want to update
  let query = { owner: req.body.ownerName };

  // Update car with new info
  Car.findOneAndUpdate(
	query,
	// Fields to update from form input
	{
	 
	  make: req.body.make,
	  model: req.body.model,
	  color: req.body.color,
	  registration: req.body.regNum,
	  address: req.body.address,
	},
	{ new: true },
	function (err, doc) {
	  if (err) {
		console.log("Something wrong when updating data!");
		res.send({ message: "ERROR: Not Updated. " + err });
	  }
	  res.send({ message: "Updated!" });
	}
  );
};

// Update more than one car's info.
exports.updateMany = function (req, res) {
  let query = { owner: req.body.ownerName };
  console.log(req.body.make)
  Car.updateMany(query, { make: req.body.make }, function (err, doc) {
	if (err) {
	  console.log("Something wrong when updating data!");
	  res.send({ message: "ERROR: Not Updated. " + err });
	}
	res.send({ message: "Updated!" });
  });
};

// Delete car identified by owner name
exports.deleteCarsByOwner = function (req, res) {
  Car.findOneAndRemove({ owner: req.body.ownerToDelete }, function (err) {
	if (err) {
	  console.log("ERROR: Car NOT removed. " + err);
	  res.send({ message: "ERROR: Car NOT removed. " + err });
	}
	res.send({ message: "Car removed." });
  });
};