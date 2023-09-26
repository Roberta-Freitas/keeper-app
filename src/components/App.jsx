import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote){
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }
  function handleDelete(id) {
    // Filter method to remove the note with the given id
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
        {notes.map((note, index) => (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={handleDelete}
       />
      ))}
      <Footer />
    </div>
  );
}

export default App;
