const mongoose = require('mongoose');

// a schema describes what data is in a database and how it is organised and structured.
let CarsSchema = mongoose.Schema({
  model: {
	type: Number,
	required: true,
  },
  make: {
	type: String,
	required: true,
  },
  color: {
	type: String,
	required: true,
  },
  registration: {
	type: String,
	required: true,
  },
  owner: {
	type: String,
	required: true,
  },
  address: {
	  type: Object,
	  required: true,
  }
});

// module.exports makes the model available outside of your module
module.exports = mongoose.model("cars", CarsSchema);