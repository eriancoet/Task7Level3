import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Function to display older cars
function ListCarsForm(props) {
  return (
	<div className="listCarsButtonsDiv">
	  <h2>List</h2>
	  <p>
		Click button to list model, make, registration and current owner for all
		cars older than 5 years{" "}
	  </p>
	  <div className="form-group">
		<Button
		  className="Button"
		  variant="warning"
		  type="button"
		  onClick={props.handleListOlderCars}
		>
		  List Older Cars
		</Button>
	
		<Button
		  variant="warning"
		  type="button"
		  onClick={props.handleListAllCars}
		>
		  List All Cars
		</Button>
	  </div>
	</div>
  );
}

// Export component so it can be used by App.js
export default ListCarsForm;