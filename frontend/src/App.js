import React from "react";
import Header from "./Components/Header";
import DisplayCars from "./Components/DisplayCars";
import ListCars from "./Components/ListCars";
import AddCar from "./Components/AddCar";
import DeleteCar from "./Components/DeleteCar";
import UpdateCar from "./Components/UpdateCar";
import UpdateMany from "./Components/UpdateMany";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cars: []
    };

    // Binding for functions to make "this" work
    this.handleListAllCars = this.handleListAllCars.bind(this);
    this.handleListOlderCars = this.handleListOlderCars.bind(this);
    this.handleAddCar = this.handleAddCar.bind(this);
    this.handleDeleteCar = this.handleDeleteCar.bind(this);
    this.handleUpdateCar = this.handleUpdateCar.bind(this);
    this.handleUpdateMany = this.handleUpdateMany.bind(this);

    this.handleUpdateManyMake = this.handleUpdateManyMake.bind(this);
    this.handleUpdateManyOwnerName = this.handleUpdateManyOwnerName.bind(this);

    this.handleChangeMake = this.handleChangeMake.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeRegNum = this.handleChangeRegNum.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);

    this.handleChangeOwnerName = this.handleChangeOwnerName.bind(this);


    this.handleUpdateMake = this.handleUpdateMake.bind(this);
    this.handleUpdateModel = this.handleUpdateModel.bind(this);
    this.handleUpdateColor = this.handleUpdateColor.bind(this);
    this.handleUpdateRegNum = this.handleUpdateRegNum.bind(this);
    this.handleUpdateOwnerName = this.handleUpdateOwnerName.bind(this);
    this.handleUpdateAddress = this.handleUpdateAddress.bind(this);
    this.handleOwnerToDelete = this.handleOwnerToDelete.bind(this);

    this.reloadResults = this.reloadResults.bind(this);
  }

  // Functions for updating many cars
  handleUpdateManyMake(event) {
    this.setState(
      {
        make: event.target.value,
      },
      () => console.log("model to update: " + this.state.model)
    );
  }

  handleUpdateManyOwnerName(event) {
    this.setState(
      {
        ownerName: event.target.value,
      },
      () => console.log("Name of owner: " + this.state.ownerName)
    );
  }

  handleUpdateMany(event) {
    fetch("/updateMany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make: this.state.make,
        ownerName: this.state.ownerName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: false,
            },
            () => {
              console.log("Update many request sent. " + result.message);
              this.reloadResults();
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }


  // function to handle when user clicks button to list all cars
  handleListAllCars(event) {
    this.setState({ isLoaded: false }, () => this.reloadResults());
  }

  // Function to handle when user clicks button to list cars older than 5 years
  handleListOlderCars(event) {
    fetch("/listOlder")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: true,
              cars: result.message,
            },
            () => {
              console.log("List older cars request sent. " + result.message);
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  // Functions to handle saving car details 
  handleUpdateMake(event) {
    this.setState({
      make: event.target.value,
    });
  }

  handleUpdateModel(event) {
    this.setState({
      model: event.target.value,
    });
  }

  handleUpdateColor(event) {
    this.setState({
      color: event.target.value,
    });
  }

  handleUpdateRegNum(event) {
    this.setState({
      regNum: event.target.value,
    });
  }

  handleUpdateOwnerName(event) {
    this.setState({
      ownerName: event.target.value,
    });
  }
  handleUpdateAddress(event) {
    this.setState({
      address: event.target.value,
    });
  }

  // Function to update a specific car's details
  handleUpdateCar(event) {
    fetch("/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    
        make: this.state.make,
        model: this.state.model,
        color: this.state.color,
        regNum: this.state.regNum,
        address: this.state.address,
        ownerName: this.state.ownerName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: false,
            },
            () => {
              console.log("Update request sent. " + result.message);
              this.reloadResults();
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  
  }
  // Functions for add form
  handleChangeAddress(event) {
    this.setState({
      address: event.target.value,
    });
  }

  handleChangeMake(event) {
    this.setState({
      make: event.target.value,
    });
  }

  handleChangeModel(event) {
    this.setState({
      model: event.target.value,
    });
  }

  handleChangeColor(event) {
    this.setState({
      color: event.target.value,
    });
  }

  handleChangeRegNum(event) {
    this.setState({
      regNum: event.target.value,
    });
  }

  handleChangeOwnerName(event) {
    this.setState({
      ownerName: event.target.value,
    });
  }

  // function to add car after user has filled in add car form
  handleAddCar(event) {
    fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make: this.state.make,
        model: this.state.model,
        color: this.state.color,
        regNum: this.state.regNum,
        ownerName: this.state.ownerName,
        address: this.state.address,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: false,
            },
            () => {
              console.log("Request to add car sent. " + result.message);
              this.reloadResults();
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  // Reload List
  reloadResults() {
    if (this.state.isLoaded === false) {
      console.log("Reload results has run.");

      fetch("/carList")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              cars: result.message,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  }

  // Function to add name of owner 
  handleOwnerToDelete(event) {
   this.setState(
      {
        ownerToDelete: event.target.value,
      },
      () => console.log("Owner to delete: " + this.state.ownerToDelete)
    );
  }

  // Function to use post request to delete car 
  handleDeleteCar(event) {
    fetch("/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerToDelete: this.state.ownerToDelete,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: false,
            },
            () => {
              console.log("Delete request sent. " + result.message);
              this.reloadResults();
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  // Function to load list of cars in database
  componentDidMount() {
    if (this.state.isLoaded === false) {
      fetch("/carList")
        .then((res) => res.json())
        .then(
        (result) => {
              this.setState({
              isLoaded: true,
              cars: result.message,
              
            });
            console.log(this.state.cars);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );

      // End of if statement to check if list of cars has been loaded yet.
    }
  }

  render() {
    const { error, isLoaded, cars } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <Header />
          
          <DisplayCars carList={cars}/>
          <ListCars
            handleListAllCars={this.handleListAllCars}
            handleListOlderCars={this.handleListOlderCars}
          />
          <DeleteCar
            handleDeleteCar={this.handleDeleteCar}
            handleOwnerToDelete={this.handleOwnerToDelete}
          />
          <div className="formsRow">
            <AddCar
              handleChangeMake={this.handleChangeMake}
              handleChangeModel={this.handleChangeModel}
              handleChangeColor={this.handleChangeColor}
              handleChangeRegNum={this.handleChangeRegNum}
              handleChangeOwnerName={this.handleChangeOwnerName}
              handleChangeAddress={this.handleChangeAddress}

              handleAddCar={this.handleAddCar}
            />

            <UpdateCar
              handleUpdateMake={this.handleUpdateMake}
              handleUpdateModel={this.handleUpdateModel}
              handleUpdateColor={this.handleUpdateColor}
              handleUpdateRegNum={this.handleUpdateRegNum}
              handleUpdateOwnerName={this.handleUpdateOwnerName}
              handleUpdateAddress={this.handleUpdateAddress}

              handleUpdateCar={this.handleUpdateCar}
            />

            <UpdateMany
              handleUpdateMany={this.handleUpdateMany}
              handleUpdateManyOwnerName={this.handleUpdateManyOwnerName}
              handleUpdateManyMake={this.handleUpdateManyMake}
            />

          
              </div>

              
           
          </div>
     
      );
    }
  }
}

export default App;