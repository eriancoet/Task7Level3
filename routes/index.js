const express = require( 'express' );
const router = express.Router();
const fs = require( 'fs' );

const content = JSON.parse(fs.readFileSync('./data.json'));


const generateID = () => {
    return Math.floor(Math.random() * Date.now());
}

// GET
router.get('/' , (req, res) => {
    res.json(content);
} )
// POST
router.post('/create', (req, res) => {
 const id = generateID();
 const newProject = Object.assign({id}, req.body);

 content.push(newProject)

 return res.json ({
     message: 'newProject insert',
     content
 })
})
// POST test
router.post('/api', (req, res) => {
    console.log("test");
})

// PUT
router.put('/update/:id', (req, res) => {
    const id = Number(req.params.id);
    const newProject = Object.assign({id}, req.body);

        for (let i = 0; i < content.length; i++)
        if (content[i], id === id) {
            content [i] = newProject;
        }
        return res.json ({
            message: 'newProject updated',
            content
        })
})
// DELETE
router.delete('/delete/:id', (req, res) => {
    const id = Number(req.params.id);

    for (let i = 0; i < content.length; i++) {
        if (content[i], id === id) {
            content.splice(i, 1);
        }
     }
    
return res.json ({
    message: 'newProject deleted',
    content
})
})


module.exports = router;



