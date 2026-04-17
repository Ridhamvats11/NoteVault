import { useState, useEffect } from "react";

function NoteForm({ addNote, notes, editIndex }) {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#4facfe");

  useEffect(() => {
    if (editIndex !== null) {
      setInput(notes[editIndex].text);
      setColor(notes[editIndex].color);
    }
  }, [editIndex, notes]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    addNote({ text: input, color });
    setInput("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your note..."
        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          width: "250px",
        }}
      />

      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

      <button
        onClick={handleAdd}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          background: "#111",
          color: "#fff",
          border: "none",
          marginLeft: "10px",
        }}
      >
        {editIndex !== null ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default NoteForm;