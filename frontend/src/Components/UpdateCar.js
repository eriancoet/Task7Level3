import React from "react";

// Import React Bootstrap components
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Function to display HTTP Post form to update details of a particular car in database
function UpdateCarForm(props) {
  return (
	<div className="updateCarFormDiv">
	  <h2>Update</h2>
	  <Form>
		<div className="form-group">
		  <Form.Label>
			Enter full name of car owner <b>(required)</b>:
		  </Form.Label>
		  <FormControl
			type="text"
			id="owner"
			placeholder="enter the name"
			onChange={props.handleUpdateOwnerName}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Update car make:</Form.Label>
		  <FormControl
			type="text"
			id="make"
			placeholder="enter the make"
			onChange={props.handleUpdateMake}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Update car model:</Form.Label>
		  <FormControl
			type="text"
			id="model"
			placeholder="enter the model"
			onChange={props.handleUpdateModel}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Update color:</Form.Label>
		  <FormControl
			type="text"
			id="color"
			placeholder="enter the color"
			onChange={props.handleUpdatecolor}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Update registration number:</Form.Label>
		  <FormControl
			type="text"
			id="regNum"
			placeholder="enter the number"
			onChange={props.handleUpdateRegNum}
		  />
		</div>

		<Button className="btn btn-warning" onClick={props.handleUpdateCar}>
		  Update Car
		</Button>
	  </Form>

	  {/* End of updateCarFormDiv*/}
	</div>
  );
}

// Export component so it can be used by App.js
export default UpdateCarForm;