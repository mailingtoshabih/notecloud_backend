const express = require('express');
const NoteModel = require('../models/Notemodel');


const router = express.Router();



// all notes route

router.get('/all', async (req, res) => {
    try{
        const allnotes = await NoteModel.find({});
        res.send(allnotes);
    }
    catch(e){
        console.log(e.message)
    }
})



// Save new note route
router.post('/save', async (req, res) => {
    const { heading, note } = req.body;

    if (heading && note) {
        try {
            const newNote = new NoteModel({ heading, note });
            await newNote.save();
            res.status(201).send('Note saved successfully');
        }
        catch (e) {
            res.send(e.message)
        }
    }
    else res.send("Incomplete note");
});


// delete note
router.post("/delete", async (req, res) => {
    const {heading} = req.body;
    try{
        const isDeleted = await NoteModel.deleteOne({heading : heading});
        isDeleted && res.send(isDeleted);
    }
    catch(e){
        res.send(e.message);
    }
})







// heading route
// total notes route
// delete note
// edit note



module.exports = router;