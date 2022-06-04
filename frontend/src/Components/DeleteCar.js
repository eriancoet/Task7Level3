import React from "react";

// Import React Bootstrap components
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Function to display HTTP Post form to delete cars from database
function DeleteCarForm(props) {
  return (
	<div className="deleteCarFormDiv">
	  <h2>Delete</h2>
	  <Form>
		<div className="form-group">
		  <Form.Label>Enter car owner name:</Form.Label>
		  <FormControl
			type="text"
			id="ownerToDelete"
			placeholder="enter the name"
			onChange={props.handleOwnerToDelete}
		  />
		</div>
		<div className="form-group">
		  <Button
			variant="warning"
			type="button"
			onClick={props.handleDeleteCar}
		  >
			Delete Car
		  </Button>
		</div>
	  </Form>

	  {/* End of deleteCarFormDiv*/}
	</div>
  );
}

// Export component so it can be used by App.js
export default DeleteCarForm;