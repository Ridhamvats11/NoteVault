import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = (newNote) => {
    if (editIndex !== null) {
      const updated = [...notes];
      updated[editIndex] = newNote;
      setNotes(updated);
      setEditIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index) => {
    setEditIndex(index);
  };

  const deleteAll = () => {
    setNotes([]);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        minHeight: "100vh",
        color: darkMode ? "#fff" : "#111",
      }}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        search={search}
        setSearch={setSearch}
        deleteAll={deleteAll}
      />

      <NoteForm
        addNote={addNote}
        notes={notes}
        editIndex={editIndex}
      />

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;