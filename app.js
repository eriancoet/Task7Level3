const express = require( 'express' );
const cors = require ( 'cors' );
const morgan = require ('morgan' );
const fs = require( 'fs' );
const dataPath = './data.json'

//init express
const app = express();

// Dynamically change port
const PORT = process.env.PORT || 3000;

// Import the file system module
const fileHandler = require('fs');

const bodyParser = require('body-parser');
      app.use(bodyParser.urlencoded({ extended: true }))
      app.use(bodyParser.json())

//App middelwear
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(cors());

app.use(morgan( 'tiny' ));



// post build

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*',(req,res)=> {res.sendFile(path.resolve(__dirname, 'frontend', 'build','index.html'));
});
}


//Get
app.get('/api/', (req, res) => {
    
    // read contents of file and send to frontend if no error, else send error message
    fs.readFile( dataPath, (err, data) => {
        if (err) {
            // If error, send error message
           throw err;
        } 
            // Else send data
            res.send(JSON.parse(data));
        })
    })

//Post
app.post('/add', (req, res) => {
    const { addID, addTitle, addDescription, addURL } = req.body;
    const obj = { id: addID, title: addTitle, description: addDescription, URL: addURL }
    console.log(req.body);
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const dataArray = JSON.parse(data)
        const newItem = {
           id : addID,
           title: addTitle,
           description: addDescription,
           URL: addURL
        }
        dataArray.push(newItem)

        fs.writeFile(dataPath, JSON.stringify(dataArray), 'utf8', (err, data) => {
            if (err) {
                throw err
            }
            res.send(dataArray)
        })
    });

});

// PUT  
// let's try and use a map or array for the put method
    app.put('/api', (req, res) => {
        // Reading id from the URL
        const { id, title, description, URL } = req.body;
       console.log('Hello World')
     // readfile  
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
        
            let dataArray = JSON.parse(data)

            let updateDataArray =  []   
            const newItem = {
                id : id, 
                title: title, 
                description: description,
                URL: URL
             }
            
        // Remove item from the Project array, W3school filter array, mdn, 
        dataArray.forEach(oldItem => {
            if(oldItem.id == id) {
                updateDataArray.push(newItem);

            } else {
                updateDataArray.push(oldItem);
            }
        })
           dataArray = updateDataArray
           
           fs.writeFile(dataPath, JSON.stringify(dataArray), 'utf8', (err, data ) => {
               if (err) {
                   throw err
               }
               res.send(dataArray)
           })
        })
    })


// DELETE 
    app.delete('/api/:id',(req, res) => {
        console.log(req.params.id)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let dataArray = JSON.parse(data)

        dataArray = dataArray.filter(({ id }) => id !== req.params.id);
        fs.writeFile(dataPath, JSON.stringify(dataArray), 'utf8', (err, data ) => {
            if (err) {
                throw err
            }
            res.send(dataArray)
            console.log(dataArray)
            
          })
        })
     })

 
  
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
   
 })

