import { FaEdit, FaTrash } from "react-icons/fa";

function NoteList({ notes, deleteNote, editNote, darkMode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {notes.map((note, index) => (
        <div
          key={index}
          style={{
            padding: "20px",
            borderRadius: "15px",
            background: `linear-gradient(135deg, ${note.color}, ${
              darkMode ? "#1e293b" : "#ffffff"
            })`,
            color: darkMode ? "#fff" : "#111",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <p style={{ marginBottom: "15px" }}>{note.text}</p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => editNote(index)}
              style={{
                border: "none",
                background: "rgba(0,0,0,0.1)",
                padding: "8px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <FaEdit />
            </button>

            <button
              onClick={() => deleteNote(index)}
              style={{
                border: "none",
                background: "#ff4d4d",
                color: "#fff",
                padding: "8px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;