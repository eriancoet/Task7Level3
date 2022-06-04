import React from "react";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import React Bootstrap components
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Import custom stylesheet
import "../App.css";

// Function to display HTTP Post form for adding car to database
function AddCar(props) {
  return (
	<div className="addCarFormDiv">
	  <h2>Add</h2>
	  <Form>
		<div className="form-group">
		  <Form.Label>Enter car make:</Form.Label>
		  <FormControl
			type="text"
			id="make"
			placeholder="enter the make"
			onChange={props.handleChangeMake}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Enter car model:</Form.Label>
		  <FormControl
			type="text"
			id="model"
			placeholder="enter the model"
			onChange={props.handleChangeModel}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Enter color:</Form.Label>
		  <FormControl
			type="text"
			id="color"
			placeholder="enter the color"
			onChange={props.handleChangeColor}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Enter registration number:</Form.Label>
		  <FormControl
			type="text"
			id="regNum"
			placeholder="enter the number"
			onChange={props.handleChangeRegNum}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Enter full name of current owner:</Form.Label>
		  <FormControl
			type="text"
			id="owner"
			placeholder="enter the name"
			onChange={props.handleChangeOwnerName}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Enter address of current owner:</Form.Label>
		  <FormControl
			type="text"
			id="Address"
			placeholder="enter the address"
			onChange={props.handleChangeAddress}
		  />
		</div>

		<Button className="btn btn-warning" onClick={props.handleAddCar}>
		  Add Car
		</Button>
	  </Form>

	  {/* End of AddCarFormDiv*/}
	</div>
  );
}

// Export component so it can be used by App.js
export default AddCar;