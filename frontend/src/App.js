import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./custom.css";
/*The display Component will be called once the submit user 
Component is achieved in input. The state is set to null initially.
*/
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          editValue: '',
          editId: 0,
          editDescription:'' , 
          editURL: '',
          error:null,
          addID:null,
          addTitle: "",
          addDescription: "",
          addURL: ""
    }
// each editChange handled individualy
this.handleChange = this.handleChange.bind(this)
// Edit
this.handleEdit = this.handleEdit.bind(this)
this.handleEditChange = this.handleEditChange.bind(this)
this.handleEditId = this.handleEditId.bind(this)
this.handleEditDescription = this.handleEditDescription.bind(this)
this.handleEditURL = this.handleEditURL.bind(this)
this.handleEditSave = this.handleEditSave.bind(this)
// Delete
this.handleDelete = this.handleDelete.bind(this)
this.handleAddIDChange = this.handleAddIDChange.bind(this);
// Add
this.handleAddIDChange = this.handleAddIDChange.bind(this);
this.handleAddTitleChange =this.handleAddTitleChange.bind(this);
this.handleAddDescriptionChange = this.handleAddDescriptionChange.bind(this);
this.handleAddURLChange = this.handleAddURLChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
  const fetchData = async () => {
    const request = await fetch(`http://localhost:3000/api`)
    const results = await request.json()
    this.setState({ data: results })
  }
  fetchData()
}

handleChange(e) {
  this.setState({ value: e.target.value })
}

// ADD

   // After input is submitted the state will change of AddID.
   handleAddIDChange(event) {
    this.setState({addID:event.target.value})
}
// After input is submitted the state of AddTitle will change.
handleAddTitleChange(event) {
    this.setState({addTitle:event.target.value})
}
handleAddDescriptionChange(event) {
    this.setState({addDescription:event.target.value})
}
// After the input is submitted the state of AddURL will change.
handleAddURLChange(event) {
    this.setState({addURL:event.target.value})
}


// Submit ADD/POST
handleSubmit(event) {
    event.preventDefault();
    fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        addID: this.state.addID,
        addTitle: this.state.addTitle,
        addDescription: this.state.addDescription,
        addURL: this.state.addURL
    })
  })
    .then(res => {
        res.json()
        alert('Entry has been added to the database')
        window.location.reload()
    })
    .catch(error => console.log(error))
}

handleEdit(e, item) {
  e.preventDefault()
  this.setState({ editValue: item.title, editId: item.id, editDescription: item.description, editURL: item.URL, })
}

handleEditChange(e) {
  this.setState({ editValue: e.target.value, })
}

handleEditId(e) {
  this.setState({ editId: e.target.value })
}
handleEditDescription(e) {
  this.setState({ editDescription: e.target.value })
}
handleEditURL(e) {
  this.setState({ editURL: e.target.value })
}

handleEditSave(e) {
  e.preventDefault()
    fetch(`http://localhost:3000/api`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ 
        id: this.state.editId, 
        title: this.state.editValue, 
        description: this.state.editDescription, 
        URL: this.state.editURL 
      })

    }).then(res => {
      res.json()
      alert('Entry has been updated')
      window.location.reload()
    })
    .then(data => this.setState({ data }))
}

// Delete item from list
handleDelete(e, item) {
  e.preventDefault()
   fetch(`http://localhost:3000/api/${item.id}`, {
     method: 'DELETE'
    }).then(res => {
      res.json()
      alert('Entry has been deleted')
      window.location.reload()
    })
    .then(data => this.setState({ data }))
}

// JSX starts
render() {
  const { data, editValue, editDescription, editId, editURL } = this.state
    return(  
<Container>
  <Row>
   
    <Col>  
    
     <div>
            
            <div className="addProject">
        <form id="formId" onSubmit={this.handleSubmit}>
            <h3>Add Project</h3>
            <label>Add an unique ID for your new Project entry</label><br/>
            <input type="text" placeholder="Example ID: 7" onChange={this.handleAddIDChange} name="addID" id="adID"></input><br/>
            <label>Add an unique Title for your new Project entry</label><br/>
            <input type="text" placeholder="Example Title: Web Project One" onChange={this.handleAddTitleChange} name="addtitle" id="addID"></input><br/>
            <label>Add an unique Description for your new Project entry</label><br/>
            <input type="text" placeholder="Example Description: Project using javascript" onChange={this.handleAddDescriptionChange} name="addTitle" id="addTitle"></input><br/>
            <label>Add an unique URL for your new Project entry</label><br/>
            <input type="text" placeholder="Example URL: www.crudsystem.com" onChange={this.handleAddURLChange} name="addDescription" id="addDescription"></input><br/>
            <Button variant="dark" type="submit">Add Project</Button>
            </form>
        </div>
        </div>
        <div className="editProject">
            <h3>Edit Project</h3>
            <form>
            <label>Edit the ID for your the Project</label><br/>
            <input type="text" value={editId} onChange={this.handleEditId} name="editID" id="addID"></input><br/>
            <label>Edit Title for your Project</label><br/>
            <input type="text" value={editValue} onChange={this.handleEditChange} name="edittitle" id="addID"></input><br/>
            <label>Edit Description for the Project</label><br/>
            <input type="text"value={editDescription} onChange={this.handleEditDescription} name="editDesc" id="editDesc"></input><br/>
            <label>Edit URL for the Project</label><br/>
            <input type="text"  value={editURL} onChange={this.handleEditURL} name="editURL" id="editURL"></input><br/>
            <Button variant="dark" className="btn" onClick={this.handleEditSave}>Save</Button>
            </form>
            </div>
    </Col>
    <Col>
    <div className="projectList">
    <h3>View Projects</h3>
                {data && data.map(item => (
                  <div key={item.key}>
                  
                    <strong>Title:</strong> {item.title} <br/>

                        <strong>ID:</strong> {item.id} <br/>
                        <strong>Description:</strong> {item.description} <br/>
                        <strong>URL:</strong> {item.URL} <br/>
                        <Button variant="dark" className="btn" type="submit" onClick={(e) => this.handleEdit(e, item)}>Edit</Button>
                        <Button variant="dark" className="btn" type="submit" onClick={(e) => this.handleDelete(e, item)}>Delete</Button> <br/>
                        </div>
                ))}
            </div>
              

      
    </Col>
  </Row>
  </Container>
        
     
    )
}}

export default App;