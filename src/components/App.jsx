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
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
        {notes.map((notes, index) => (
      <Note key={index} title={notes.title} content={notes.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
