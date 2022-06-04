import React from "react";
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Function HTTP Post update any cars with same owner name
function UpdateManyForm(props) {
  return (
	<div className="updateManyFormDiv">
	  <h2>Update Many</h2>
	  <p>Update Model of all cars owned by same person</p>
	  <Form>
		<div className="form-group">
		  <Form.Label>
			Enter full name of car owner <b>(required)</b>:
		  </Form.Label>
		  <FormControl
			type="text"
			id="ownerOfMany"
			placeholder="enter the name"
			onChange={props.handleUpdateManyOwnerName}
		  />
		</div>
		<div className="form-group">
		  <Form.Label>Update Make:</Form.Label>
		  <FormControl
			type="text"
			id="MakeOfMany"
			placeholder="enter the Make"
			onChange={props.handleUpdateManyMake}
		  />
		</div>

		<Button className="btn btn-warning" onClick={props.handleUpdateMany}>
		  Update Cars
		</Button>
	  </Form>
	</div>
  );
}

// Export component 
export default UpdateManyForm;