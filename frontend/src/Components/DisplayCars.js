// Import custom stylesheet
import "../App.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Function to display contents of database (list of cars) on page
export default function DisplayCars(props) {
  let data = props.carList;
  console.log(data);
  //console.log(console.log(data.map(data)))
let cars = data.map(item => (
	<Col className="displayCarsDiv" >   
		   <strong>Model:</strong> {item.model} <br/>
		   <strong>Make:</strong> {item.make} <br/>
		   <strong>Color:</strong> {item.color} <br/>
		   <strong>RegNum:</strong> {item.registration} <br/>
		   <strong>OwnerName:</strong> {item.owner} <br/>
		   <strong>Address:</strong> {item.address} <br/>
	  </Col>
	)
 )	  

  return (
	  <Container>
		  <h1 className="header2">Results</h1>
	<Row>{cars}</Row> 
	</Container>
		)
  }
