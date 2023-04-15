import { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
import noteService from "./services/noteService"



const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNotes] = useState("")
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    console.log('render', notes.length, 'notes')

    // get all the notes
    useEffect(()=>{
        noteService
        .getAll()
        .then(initialNotes => {
            setNotes(initialNotes)
        })
    }, [])

    // when submit button pressed this trigger this function which create new note object and
    //add it to the notes array
    const addNote = (event) => {
        console.log("the event is ", event)
        event.preventDefault()
        console.log("button clicked",event.target)
       // create new object to be written to setNotes
        const noteObject = {
            //the value of the newNotes that was set by handleNoteChange, then passed as content
            content: newNote,
            important: Math.random() < 0.5,
            
        }
        noteService
        .create(noteObject)
        .then(returnedNote =>{
            setNotes(notes.concat(returnedNote))
            setNewNotes(" ")
        })
        // axios
        // .post('http://localhost:3001/notes', noteObject)
        // .then(response => {
        //     setNotes(notes.concat(response.data))
        //     setNewNotes(" ")
        // })
        //add the new note object to the notes array by concat
        // setNotes(notes.concat(noteObject))
        //emptying the new notes field
        // setNewNotes(" ")
    }
    //this function handles the change of the input
    const handleNoteChange = (event)=> {
        console.log(event.target.value)
        //and set new notes with the value of the input
        setNewNotes(event.target.value)
    }

    //this is toggle button whether to show all notes or filter it based on the note importance
    //showAll is state that is set to true or false. To begin we set the showAll as true.
    //if showAll state value is true then after the ? mark the notes (all notes) is showing
    //the true false state is handled when button is clicked
    const notesToShow = showAll
     ? notes
     : notes.filter(note => note.important === true)

     const toggleImportance = (id)=>{
        const note = notes.find(n => n.id===id)
        const changedNote = {...note, important:!note.important}
        noteService
        .update(id, changedNote)
        .then(returnedNote => {
            //this one check if the each item in notes does it have the same id 
            //with the one we update ? if not same id , return it as it is, if
            //it same id return the updated one
            setNotes(notes.map(n => n.id !==id ? n : returnedNote))
        })
        .catch(error=>{
            setErrorMessage(`the note '${note.content} ' was already deleted from server`)
            setTimeout(()=>{
                setErrorMessage(null)
            }, 5000)
            setNotes(notes.filter(n=> n.id !== id))
        })

     }

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage}/>
            <button onClick={()=> setShowAll(!showAll)}>show {showAll ? "important" : "all"}</button>
            <ul>
                {notesToShow.map(note =><Note key={note.id} note={note} toggleImportance={()=>toggleImportance(note.id)}/>
                )                   
                }
            </ul>
            <form  onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )}

export default App;