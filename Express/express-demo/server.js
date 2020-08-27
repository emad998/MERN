const express = require ("express");

const app = express();

const students = [
    'Emad Hanna',
    'Neil Yuen',
    'Dathan wong'
]




app.get('/', (req, res) => {
    console.log(req);
    res.json(students)
})

app.get('/:studentId', (req, res) => {
    
    res.json({
        student: students[req.params.studentId]
    })
})


app.delete("/:studentId", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    students.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});


app.listen(8000, () => console.log('listening on 8000'));